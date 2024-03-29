drop type if exists ams.Studentcourse
CREATE TYPE [ams].[StudentCourse] as TABLE(
	MappingId [int]  NULL,
	[StudentID] [int]  NULL,
	CourseId [int]  NULL,
	LevelId [int]  NULL,
	GradeId [int]  NULL,
	ClassCount int null,
	isCompleted [int]  NULL
	)