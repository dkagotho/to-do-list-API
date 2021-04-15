CREATE DATABASE to_do_list;
USE to_do_list;
CREATE TABLE to_dos
(
    id int not null
    auto_increment,
completed varchar
    (150) NOT NULL,
uncompleted boolean,
primary key
    (id)
);