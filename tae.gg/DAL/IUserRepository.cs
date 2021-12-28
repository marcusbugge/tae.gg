using System;
using System.Threading.Tasks;
using tae.gg.Models;

namespace tae.gg.DAL
{
    public interface IUserRepository
    {
        Task<bool> Login(User user);
    }
}
