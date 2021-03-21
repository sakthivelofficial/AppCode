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
    public class CourseDetailsController : ControllerBase
    {
        private readonly ICourseDetails _courses;
        public CourseDetailsController(ICourseDetails courses)
        {
            this._courses = courses;
        }
        [Route("GetCourseDetails")]
        [HttpGet]
        public async Task<IActionResult> GetCourseDetails()
        {

            coursedetailsmodel coursedetails = await this._courses.GetCourseDetails();
            return Ok();
        }
    }
}
