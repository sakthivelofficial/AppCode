create schema Meta

create table Meta.Courses(
CourseId int identity(1,1) primary key,
CourseName varchar(200),
isDeleted bit default 0
)

insert into Meta.Courses (CourseName) values
('Carnatic Vocal'),('Carnatic Violin'),('Carnatic Veena'),('Carnatic Flute'),('Carnatic Keyboard'),
('Mridangam'),('Western Keyboard'),('Western Guitar')

-- select * from Meta.Courses