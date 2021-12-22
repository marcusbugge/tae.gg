using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace taegg.Models
{
    public class Player
    {
        [Key]
        public int Id { get; set; }

        public string Gamertag { get; set; }

        public string Game { get; set; }

        public string Role { get; set; }

       
    }
}
