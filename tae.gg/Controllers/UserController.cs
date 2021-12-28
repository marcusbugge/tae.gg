using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using tae.gg.DAL;
using tae.gg.Models;

namespace tae.gg.Controllers
{
    [Route("api/[controller]/[action]")]
    public class UserController : ControllerBase {
        private IUserRepository _db;
        private const string _loggedIn = "LoggedIn";

        public UserController(IUserRepository db)
        {
            _db = db;
           
        }

        [HttpPost]
        public async Task<ActionResult> LoggInn([FromBody] User user)
        {

            Console.WriteLine("user:" + user.Username);
            if (ModelState.IsValid)
            {
                bool returnOK = await _db.Login(user);
                if (!returnOK)
                {

                    HttpContext.Session.SetString(_loggedIn, "");
                    return Ok("hhahaha");
                }
                HttpContext.Session.SetString(_loggedIn, "LoggedIn");
                return Ok(true);
            }
            return BadRequest("Feil i inputvalidering på server");
        }
    }
}
