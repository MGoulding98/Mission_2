using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission_2.Models
{
    // Class that stores variables from the Grade Calculator as well as creates getters and setters for each one. It also has data validation so the user knows
    // each field is required and must contain a grade between 0 and 100
    public class GradeCalculatorModel
    {
        [Required]
        [Range(0,100)]
        public int assignments { get; set; }

        [Required]
        [Range(0, 100)]
        public int groupProjects { get; set; }

        [Required]
        [Range(0, 100)]
        public int quizzes { get; set; }

        [Required]
        [Range(0, 100)]
        public int exams { get; set; }

        [Required]
        [Range(0, 100)]
        public int intex { get; set; }
    }
}
