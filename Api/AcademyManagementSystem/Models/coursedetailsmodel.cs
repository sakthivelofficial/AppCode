using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AcademyManagementSystem.Models
{
    public class coursedetailsmodel
    {
        public List<coursenames> courses { get; set; }
        public List<CourseGrades> grades { get; set; }
        public List<CourseLevels> levels { get; set; }
    }
}
