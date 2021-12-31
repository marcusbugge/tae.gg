using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using taegg.Models;

namespace taegg.DAL
{
    public interface IPlayerRepository
    {
        Task<Player> GetPlayer(int id);
        Task<List<Player>> GetAllPlayers();
        Task<List<Player>> GetPlayersByGame(string game);
        Task<bool> Delete(int id);
        Task<bool> Change(Player newPlayer);
    }
}
