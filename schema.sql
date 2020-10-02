create database newsletter;
use newsletter;

create table users (email varchar(100) primary key not null, fname varchar(100) not null,
lname varchar(100) default ' ', joindate timestamp default now()); 

insert into users(email, fname) values ('katie35@yahoo.com', 'Katie'); 
insert into users(email, fname,lname) values ('enolah@gmail.com', 'Enola', 'Holmes'); 
insert into users(email, fname) values ('reshma@yahoo.com', 'Resh'); 