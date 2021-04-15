CREATE DATABASE to_do_list;
USE to_do_list;
CREATE TABLE to_dos
(
    id int not null
    auto_increment,
completed varchar
    (70) NULL,
uncompleted varchar
    (50) NULL,
all_items varchar
    (80) NULL,
primary key
    (id)
);