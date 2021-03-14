CREATE OR ALTER PROCEDURE ams.ValidateUserDetails (@userName   VARCHAR(30),  
                                          @Password    VARCHAR(30),  
                                          @Returnstatus     bit output )
AS  
  BEGIN  
     IF EXISTS (SELECT 1 From ams.UserDetails where @userName = UserName AND @Password = Password)  
		BEGIN	
			SET @Returnstatus = 1
		END
	 ELSE
		BEGIN
			SET @Returnstatus = 0
		END
	RETURN @Returnstatus
  END 