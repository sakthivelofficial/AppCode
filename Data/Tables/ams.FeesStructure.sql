create table ams.FeesStructure(
StructureId int identity(1,1) primary key,
FeesAmount_IND decimal(10,10) null,
FeesAmount_NRI decimal(10,10) null,
CourseID int,
LevelId int,
GradeId int,
ClassCount int,
isDeleted bit default 0
)