using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using tae.gg.Controllers;
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

        [HttpPut("{id}")]
        public async Task<ActionResult> Change(int id, [FromBody] Player player)
        {
            bool returOK = await _db.Change(id, player);


            if (!returOK)
            {
                return NotFound("Endringen av kunden kunne ikke utføres");
            }
            return Ok("Kunde endret");
        }
            
        
        
    }
}