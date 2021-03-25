using AcademyManagementSystem.Manager.Interface;
using AcademyManagementSystem.Models;
using AcademyManagementSystem.Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AcademyManagementSystem.Manager
{
    public class CourseManager : ICourseManager
    {
        private ICourseDetails repository;
        public CourseManager(ICourseDetails repository)
        {
            this.repository = repository;
        }
        public async  Task<coursedetailsmodel> GetCourseDetails()
        {
            return await repository.GetCourseDetails();
        }

        public async Task<decimal> GetFeesbyCourseID(int CourseId, int GradeId, int LevelId, int ClassCount, bool isAbroad)
        {
            return await repository.GetFeesbyCourseID( CourseId,  GradeId,  LevelId,  ClassCount,  isAbroad);
        }
    }
}
