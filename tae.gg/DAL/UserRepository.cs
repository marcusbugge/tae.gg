using System;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using tae.gg.Models;
using taegg.DB;
using static taegg.DB.Context;

namespace tae.gg.DAL
{
    public class UserRepository : IUserRepository
    {
        private Context _db;


        public UserRepository(Context db)
        {
            _db = db;
            
        }

        public async Task<bool> Login(User user)
        {
            try
            {
                Users funnetBruker = await _db.users.FirstOrDefaultAsync(b => b.Username == user.Username);

                Console.WriteLine("user: " + user.Username + " " + user.Password);
                Console.WriteLine("Found user: "+funnetBruker);
                
                // sjekk passordet
                byte[] hash = LagHash(user.Password, funnetBruker.Salt);
                bool ok = hash.SequenceEqual(funnetBruker.Password);
                if (ok)
                {
                    return true;
                }
                return false;
            }
            catch (Exception e)
            {
                return false;
            }
        }


        public static byte[] LagHash(string passord, byte[] salt)
        {
            return KeyDerivation.Pbkdf2(
                                password: passord,
                                salt: salt,
                                prf: KeyDerivationPrf.HMACSHA512,
                                iterationCount: 1000,
                                numBytesRequested: 32);
        }

        public static byte[] LagSalt()
        {
            var csp = new RNGCryptoServiceProvider();
            var salt = new byte[24];
            csp.GetBytes(salt);
            return salt;
        }
    }
}
