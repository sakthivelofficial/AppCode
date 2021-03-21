using AcademyManagementSystem.Manager.Interface;
using AcademyManagementSystem.Models;
using AcademyManagementSystem.Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AcademyManagementSystem.Manager
{
    public class StudentManager : IStudentManager
    {
        private IStudentRepository repository;
        public StudentManager(IStudentRepository repository)
        {
            this.repository = repository;
        }
        public async Task<int> InsertStudentAdmission(InsertStudent student)
        {
            return await repository.InsertStudentAdmission(student);
        }
    }
}
