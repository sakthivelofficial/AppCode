using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AcademyManagementSystem.Models
{
  public class RegisterUserDetails
  {
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Phonenumber { get; set; }
    public string Email { get; set; }
    public string SelectedCourse { get; set; }
  }
}
