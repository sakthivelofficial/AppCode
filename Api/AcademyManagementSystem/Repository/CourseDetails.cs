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
    public class CourseDetails : ICourseDetails
    {
        private readonly IConfiguration configuration;

        public CourseDetails(IConfiguration config)
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
        public async Task<coursedetailsmodel> GetCourseDetails()
        {
            coursedetailsmodel coursedetails = new coursedetailsmodel();
            using (IDbConnection conn = Connection)
            {
                try
                {
                    var sqlparam = new DynamicParameters();
                    var result = conn.QueryMultiple(sql: "ams.getCourseDetails", param: sqlparam, commandType: CommandType.StoredProcedure);
                    coursedetails.courses = result.Read<coursenames>().AsList();
                    coursedetails.grades = result.Read<CourseGrades>().AsList();
                    coursedetails.levels = result.Read<CourseLevels>().AsList();
                    return (coursedetails);
                }
                catch (Exception e)
                {
                    Console.WriteLine("Error", e);
                    throw;
                }
            }
        }

        public async Task<decimal> GetFeesbyCourseID(int CourseId, int GradeId, int LevelId, int ClassCount, bool isAbroad)
        {
            using (IDbConnection conn = Connection)
            {

                try
                {
                    var sqlparam = new DynamicParameters();
                    sqlparam.Add("@CourseID", CourseId);
                    sqlparam.Add("@GradeId", GradeId);
                    sqlparam.Add("@LevelId", LevelId);
                    sqlparam.Add("@isAbroad", isAbroad);
                    sqlparam.Add("@ClassCount", ClassCount);
                    var result =  await conn.QueryMultipleAsync(sql: "ams.GetFeeByCourse", param: sqlparam, commandType: CommandType.StoredProcedure);
                    decimal res = result.Read<decimal>().FirstOrDefault();
                    return (res);
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
