using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AcademyManagementSystem.Models
{
    public class Student
    {
        public int? StudentID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ParentName { get; set; }
        public double ContactNumber { get; set; }
        public string EmailId { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public bool? AbroadStudent { get; set; }
    }

    public class StudentCourse {
        public int? MappingId { get; set; }
        public int? StudentID { get; set; }
        public int? CourseId { get; set; }
        public int? LevelId { get; set; }
        public int? GradeId { get; set; }
        public bool? isCompleted { get; set; } 
    }

    public class InsertStudent {
        public Student student { get; set; }
        public List<StudentCourse> courses {get; set;}
    }
}
