create table ams.StudentCourseMapping(
MappingId int not null identity(1,1) primary Key,
StudentId int not null,
CourseId int not null,
isCompleted bit default 0,
isDeleted bit default 0
)

