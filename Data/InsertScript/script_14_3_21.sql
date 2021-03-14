create database AMS_v1

create schema ams
create Table ams.UserDetails 
(
id int identity(1,1) primary key,
UserName varchar(30),
Password varchar(30)
)

select * from ams.UserDetails

insert into ams.UserDetails
values('sakthi@carnaticgurukulam.com','Sakthi@9994')

ALTER TABLE ams.UserDetails
ADD FirstName varchar(30),
 LastName varchar(30),
 Phonenumber varchar(20),
 Email varchar(30),
 SelectedCourse varchar(30)

 update ams.UserDetails
 SET UserName = 'SakthiMusic'
 where id =1
