using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace mission5_mcurzon1.Models
{
    public class GradeCalculatorModel
    {
        // make models required and inside the range of 0-100
        [Required]
        [Range(0,100)]
        public float Assignment { get; set; }
        [Required]
        [Range(0, 100)]
        public float Project { get; set; }
        [Required]
        [Range(0, 100)]
        public float Intex { get; set; }
        [Required]
        [Range(0, 100)]
        public float Final { get; set; }
        [Required]
        [Range(0, 100)]
        public float Quiz { get; set; }
        [Required]
        [Range(0, 100)]
        public float Midterm { get; set; }

    }
}
