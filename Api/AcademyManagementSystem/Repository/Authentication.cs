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
  public class Authentication : IAuthentication
  {
    private readonly IConfiguration configuration;

    public Authentication(IConfiguration config)
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

    public int Registeruserdetails(RegisterUserDetails usd)
    {
      using (IDbConnection conn = Connection)
      {
        try
        {
          var sqlparam = new DynamicParameters();
          sqlparam.Add("@FirstName", usd.FirstName);
          sqlparam.Add("@LastName", usd.LastName);
          sqlparam.Add("@PhoneNumber", usd.Phonenumber);
          sqlparam.Add("@Email", usd.Email);
          sqlparam.Add("@SelectedCourse", usd.SelectedCourse);
          sqlparam.Add("@Returnstatus", dbType: DbType.Int32, direction: ParameterDirection.Output);
          var result = conn.QueryMultiple(sql: "ams.RegisterUserDetails", param: sqlparam, commandType: CommandType.StoredProcedure);
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
    public int Validateuserdetails(UserDetails usd)
    {
      using (IDbConnection conn = Connection)
      {
        try
        {
          var sqlparam = new DynamicParameters();
          sqlparam.Add("@userName", usd.UserName);
          sqlparam.Add("@Password", usd.Password);
          sqlparam.Add("@Returnstatus", dbType: DbType.Int32, direction: ParameterDirection.Output);
          var result = conn.QueryMultiple(sql: "ams.ValidateUserDetails", param: sqlparam, commandType: CommandType.StoredProcedure);
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
