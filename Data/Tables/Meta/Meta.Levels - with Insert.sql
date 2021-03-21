create table Meta.Levels(
LevelId int identity(1,1) primary key,
LevelName varchar(400)
)

insert into Meta.Levels values
('Foundation and Beginner'),('Intermediate'),('Advanced')