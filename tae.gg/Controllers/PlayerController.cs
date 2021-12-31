using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using taegg.DAL;
using taegg.Models;

namespace taegg.Controllers
{
    [Route("api/[controller]/[action]")]
    public class PlayerController : ControllerBase
    {

        private readonly IPlayerRepository _db;

        public PlayerController(IPlayerRepository db)
        {
            _db = db;
        }

        public async Task<Player> GetOne(int id)
        {
            return await _db.GetPlayer(id);
        }

        public async Task<List<Player>> GetAll()
        {
            return await _db.GetAllPlayers();
        }

       
        public async Task<List<Player>> GetPlayersByGame(string game)
        {
            return await _db.GetPlayersByGame(game);
        }

        public async Task<bool> Delete(int id)
        {
            return await _db.Delete(id);
        }

        public async Task<bool> Change(Player newPlayer)
        {
            return await _db.Change(newPlayer);
        }

        
    }
}