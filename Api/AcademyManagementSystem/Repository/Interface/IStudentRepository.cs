using AcademyManagementSystem.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AcademyManagementSystem.Repository.Interface
{
    public interface IStudentRepository
    {
        public Task<int> InsertStudentAdmission(InsertStudent student);
    }
}
