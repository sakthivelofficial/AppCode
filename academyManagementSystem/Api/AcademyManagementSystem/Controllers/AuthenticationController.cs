using AcademyManagementSystem.Models;
using AcademyManagementSystem.Repository.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AcademyManagementSystem.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class AuthenticationController : ControllerBase
  {
    private readonly IAuthentication _login;

    public AuthenticationController(IAuthentication login)
    {
      this._login = login;
    }
    [Route("PostUserDetails")]
    [HttpPost]
    public IActionResult UserDetailsRegister([FromBody] RegisterUserDetails usd)
    {

      int Status = this._login.Registeruserdetails(usd);
      if (Status == 1)
      {
        Console.WriteLine("Success");
      }

      return Ok();
    }
    [Route("ValidateUserProfile")]
    [HttpPost]
    public IActionResult ValidateUserProfile([FromBody] UserDetails usd)
    {

      int Status = this._login.Validateuserdetails(usd);
      if (Status == 1)
      {
        return Ok();
      }
      else
      {
        return StatusCode(404);
      }
    }
  }
}
