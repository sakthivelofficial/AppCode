/****** Object:  StoredProcedure [ams].[InsertStudentAdmission]    Script Date: 21-03-2021 21:01:35 ******/
SET ANSI_NULLS ON
GO


SET QUOTED_IDENTIFIER ON
GO


CREATE
	OR


ALTER PROCEDURE [ams].[InsertStudentAdmission] @Student [ams].[Student] READONLY,
	@coursemap [ams].[StudentCourse] READONLY,
	@Returnstatus INT OUTPUT
AS
BEGIN
	DECLARE @success INT = 0
	DECLARE @fail INT = - 1
	DECLARE @studentId INT


	IF NOT EXISTS (
			SELECT 1
			FROM ams.Student
			WHERE ContactNumber = (
					SELECT ContactNumber
					FROM @Student
					)
			)
	BEGIN
		INSERT INTO ams.Student (
			FirstName,
			LastName,
			ParentName,
			ContactNumber,
			EmailId,
			Address,
			City,
			STATE,
			Country,
			AbroadStudent
			)
		SELECT FirstName,
			LastName,
			ParentName,
			ContactNumber,
			EmailId,
			Address,
			City,
			STATE,
			Country,
			AbroadStudent
		FROM @Student


		SET @studentId = SCOPE_IDENTITY();


		INSERT INTO ams.StudentCourseMapping (
			StudentId,
			CourseId,
			LevelId,
			GradeId,
			ClassCount,
			AdditionalCharge
			)
		SELECT @studentId,
			C.CourseId,
			C.LevelId,
			C.GradeId,
			C.ClassCount,
			C.AdditionalCharge
		FROM @coursemap C
		LEFT JOIN ams.StudentCourseMapping M
			ON C.CourseId = m.CourseId
				AND C.GradeId = M.GradeId
				AND M.StudentId = @studentId
				AND C.LevelId = M.LevelId
		WHERE M.StudentId IS NULL
			AND M.CourseId IS NULL
			AND M.LevelId IS NULL
			AND M.MappingId IS NULL


		SET @Returnstatus = @success
	END
	ELSE
	BEGIN
		SET @Returnstatus = @fail
	END


	RETURN @Returnstatus
END
