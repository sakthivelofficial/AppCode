create table Meta.Grades
(
GradeId int identity(1,1) primary key,
GradeName varchar(100),
isDeleted bit default 0
)

insert into Meta.Grades
(GradeName) values 
('PRE-GRADE'),('G1'),('G2'),('G3'),('G4'),('G5'),('G6'),('G7'),('G8')