﻿using AcademyManagementSystem.Manager.Interface;
using AcademyManagementSystem.Models;
using AcademyManagementSystem.Repository.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NSwag.Annotations;
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
        private readonly ICourseManager _courses;
        public CourseDetailsController(ICourseManager courses)
        {
            this._courses = courses;
        }
        [Route("GetCourseDetails")]
        [HttpGet]
        [SwaggerResponse(typeof(coursedetailsmodel))]
        public async Task<IActionResult> GetCourseDetails()
        {
            coursedetailsmodel coursedetails = await this._courses.GetCourseDetails();
            return Ok(coursedetails);
        }

        [Route("GetFeesbyCourseID")]
        [HttpGet]
        [SwaggerResponse(typeof(decimal))]
        public async Task<IActionResult> GetFeesbyCourseID(int CourseId, int GradeId, int LevelId, int ClassCount, bool isAbroad)
        {
            decimal amt = await this._courses.GetFeesbyCourseID(CourseId, GradeId, LevelId, ClassCount, isAbroad);
            return Ok(amt);
        }
    }
}
