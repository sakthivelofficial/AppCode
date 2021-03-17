using AcademyManagementSystem.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AcademyManagementSystem.Repository.Interface
{
  public interface IAuthentication
  {
    int Registeruserdetails(RegisterUserDetails usd);
    int Validateuserdetails(UserDetails usd);
  }
}
