
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		sakthivel
-- Create date: 21-03-2021
-- Description:	To get Course Details 
-- =============================================
CREATE OR ALTER PROCEDURE  ams.getCourseDetails
	-- Add the parameters for the stored procedure here
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
		select * from Meta.courses

		select * from Meta.grades

		select * from Meta.levels
END
GO
