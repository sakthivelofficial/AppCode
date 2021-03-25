DROP type


IF EXISTS ams.Studentcourse
	CREATE TYPE [ams].[StudentCourse] AS TABLE (
		MappingId [int] NULL,
		[StudentID] [int] NULL,
		CourseId [int] NULL,
		LevelId [int] NULL,
		GradeId [int] NULL,
		ClassCount INT NULL,
		AdditionalCharge DECIMAL(10, 10) NULL,
		isCompleted [int] NULL
		)
