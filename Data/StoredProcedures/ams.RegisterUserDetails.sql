CREATE  OR ALTER PROCEDURE ams.RegisterUserDetails
(@FirstName    VARCHAR(30),  
 @LastName    VARCHAR(30), 
 @PhoneNumber VARCHAR(20), 
 @Email    VARCHAR(30), 
 @SelectedCourse    VARCHAR(30),
 @Returnstatus     bit output
 )
AS  
  BEGIN  
 
     INSERT INTO ams.UserDetails (FirstName,LastName, Phonenumber,Email,SelectedCourse)  
       VALUES     ( @FirstName,  
                         @LastName,  
                         @PhoneNumber,  
                         @Email,  
                         @SelectedCourse)  
      SET @Returnstatus = 1

	  RETURN @Returnstatus
  END 