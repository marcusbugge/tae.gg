using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using taegg.DB;
using taegg.Models;
namespace taegg.DAL
{
    public class PlayerRepository : IPlayerRepository
    {
        private readonly PlayerContext _db;

        public PlayerRepository(PlayerContext db)
        {
            _db = db;
        }

        //Function to fetch all orders
        public async Task<Player> GetPlayers()
        {
            return await _db.players.FindAsync(1);
        }

    }
}

