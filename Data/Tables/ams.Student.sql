create table ams.Student(
StudentID int identity(1,1) Primary Key,
FirstName varchar(200) null,
LastName varchar(200) null,
ParentName varchar(500) null,
ContactNumber bigint not null,
EmailId varchar(500) null,
Address varchar(1000) null,
City varchar(200) null,
[State] varchar(200) null,
Country varchar(300) null,
isDeleted bit default 0
)