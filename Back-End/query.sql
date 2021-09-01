create database dbQueerfy;
use dbQueerfy;

create table tbusers (
	id int primary key auto_increment,
    name varchar(50),
    birth_date date,
    rg varchar(20),
    cpf varchar(20),
    email varchar(100),
    password varchar(200),
    perfil_img varchar(100),
    desc_user text,
    genre varchar(20),
    likes text,
    admin boolean,
    typeuser varchar(80)
)auto_increment=1;

drop table tbusers;

select * from tbusers;