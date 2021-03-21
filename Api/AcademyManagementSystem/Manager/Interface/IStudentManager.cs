using AcademyManagementSystem.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AcademyManagementSystem.Manager.Interface
{
    public interface IStudentManager
    {
        public Task<int> InsertStudentAdmission(InsertStudent student);
    }
}
