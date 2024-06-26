﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using taegg.DB;
using taegg.Models;
namespace taegg.DAL
{
    public class PlayerRepository : IPlayerRepository
    {
        private readonly Context _db;

        public PlayerRepository(Context db)
        {
            _db = db;
        }

        //Function to fetch all orders
        public async Task<Player> GetPlayer(int id)
        {
            return await _db.players.FindAsync(id);
        }

        //Function to fetch all orders
        public async Task<List<Player>> GetAllPlayers()
        {
            try
            {
                List<Player> allPlayers = await _db.players.Select(p => new Player
                {
                    Id = p.Id,
                    Gamertag = p.Gamertag,
                    Game = p.Game,
                    Role = p.Role
                }).ToListAsync();
                return allPlayers;
            }
            catch
            {
                return null;
            }
        }

        public async Task<List<Player>> GetPlayersByGame(string game)
        {

            Console.WriteLine(game);
            try
            {
                List<Player> allPlayers = await _db.players.Select(p => new Player
                {
                    Id = p.Id,
                    Gamertag = p.Gamertag,
                    Game = p.Game,
                    Role = p.Role
                }).ToListAsync();

                List<Player> allPlayersByGame = new List<Player>();

                allPlayers.ForEach(Console.WriteLine);

                foreach (Player p in allPlayers)
                {
                    if (p.Game.Equals(game))
                    {
                        allPlayersByGame.Add(p);
                    }
                }

                allPlayersByGame.ForEach(Console.WriteLine);

                return allPlayersByGame;
            }
            catch
            {
                return null;
            }

            return null;
        }


        public async Task<bool> Change(int id, [FromBody] Player newPlayer)
        {

            try
            {
                var playerToChange = await _db.players.FindAsync(id);

                playerToChange.Gamertag = newPlayer.Gamertag;
                playerToChange.Game = newPlayer.Game;
                playerToChange.Role = newPlayer.Role;
                await _db.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<bool> Delete(int id)
        {
            try
            {
                Player aDBplayer = await _db.players.FindAsync(id);
                _db.players.Remove(aDBplayer);
                await _db.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }

    }
}

