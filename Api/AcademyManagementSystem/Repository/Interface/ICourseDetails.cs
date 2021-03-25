using AcademyManagementSystem.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AcademyManagementSystem.Repository.Interface
{
    public interface ICourseDetails
    {
        Task<coursedetailsmodel> GetCourseDetails();
        public Task<decimal> GetFeesbyCourseID(int CourseId, int GradeId, int LevelId, int ClassCount, bool isAbroad);

    }
}
