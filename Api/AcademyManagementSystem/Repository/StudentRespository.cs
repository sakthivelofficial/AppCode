using AcademyManagementSystem.Models;
using AcademyManagementSystem.Repository.Interface;
using Dapper;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace AcademyManagementSystem.Repository
{
    public class StudentRespository : IStudentRepository
    {
        private IConfiguration configuration;
        private Common service = new Common();
        public StudentRespository(IConfiguration config)
        {
            configuration = config;
        }
        public IDbConnection Connection
        {
            get
            {
                return new SqlConnection(configuration.GetConnectionString("DatabaseConnection"));
            }
        }
        public async Task<int> InsertStudentAdmission(InsertStudent student)
        {
            using (IDbConnection conn = Connection)
            {
                var list = new List<Student>();
                list.Add(student.student);
                try
                {

                    var sqlparam = new DynamicParameters();
                    sqlparam.Add("@Student", this.service.ToDataTable(list).AsTableValuedParameter("[ams].[Student]"));
                    sqlparam.Add("@coursemap", this.service.ToDataTable(student.courses).AsTableValuedParameter("[ams].[StudentCourse]"));
                    sqlparam.Add("@Returnstatus", dbType: DbType.Int32, direction: ParameterDirection.Output);
                    var result = await conn.QueryMultipleAsync(sql: "ams.InsertStudentAdmission", param: sqlparam, commandType: CommandType.StoredProcedure);
                    int status = sqlparam.Get<int>("@Returnstatus");
                    return status;
                }
                catch (Exception e)
                {
                    Console.WriteLine("Error", e);
                    throw;
                }
            }
        }
    }
}
