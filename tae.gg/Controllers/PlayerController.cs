using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using taegg.DAL;
using taegg.Models;

namespace taegg.Controllers
{
    [Route("/api/orders/")]
    public class PlayerController : ControllerBase
    {

        private readonly IPlayerRepository _db;

        public PlayerController(IPlayerRepository db)
        {
            _db = db;
        }

        public async Task<ActionResult> GetOrders()
        {
            Player orders = await _db.GetPlayers();
            return Ok(orders);
        }
    }
}