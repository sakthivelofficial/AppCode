﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using AcademyManagementSystem.Manager.Interface;
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
        public IStudentManager studentmanger;
        public StudentsController(IStudentManager student) {
            studentmanger = student;
        }
        [Route("StudentAdmission")]
        [HttpPost]
        [SwaggerResponse(typeof(int))]
        public async Task<IActionResult> InsertStudentAdmission(InsertStudent student)
        {
           int stat = await studentmanger.InsertStudentAdmission(student);
            return Ok(stat);
        }
    }
}
