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
        public const string _loggedIn = "LoggedIn";

    

        public UserController(IUserRepository db)
        {
            _db = db;
           
        }

        [HttpPost]
        public async Task<ActionResult> Login([FromBody] User user)
        {

            Console.WriteLine("user:" + user.Username);
            if (ModelState.IsValid)
            {
                bool returnOK = await _db.Login(user);
                if (!returnOK)
                {

                    HttpContext.Session.SetString(_loggedIn, "");
                    return Ok(false);
                }
                HttpContext.Session.SetString(_loggedIn, "LoggedIn");
                return Ok(true);
            }
            return BadRequest("Feil i inputvalidering på server");
        }

        [HttpPost]
        public void Logout()
        {
            HttpContext.Session.SetString(_loggedIn, "");
        }

        [HttpGet]
        public bool UserStatus()
        {
            if (string.IsNullOrEmpty(HttpContext.Session.GetString(_loggedIn)))
            {
                return false;
            }
            else
            {
                return true;

            }
        }
    }
}
