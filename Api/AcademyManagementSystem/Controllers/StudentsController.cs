using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AcademyManagementSystem.Models;
using Microsoft.AspNetCore.Mvc;
using NSwag.Annotations;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AcademyManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        [Route("StudentAdmission")]
        [HttpPost]
        [SwaggerResponse(typeof(int))]
        public async Task<int> InsertStudentAdmission(InsertStudent student)
        {
            return 0;
        }
    }
}
