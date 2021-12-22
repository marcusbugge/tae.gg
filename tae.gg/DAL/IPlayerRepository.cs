using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using taegg.Models;

namespace taegg.DAL
{
    public interface IPlayerRepository
    {
        Task<Player> GetPlayers();
    }
}
