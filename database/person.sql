USE learnDb;
CREATE TABLE person ( id int(11) not null auto_increment, 
                      first_name varchar(50) not null DEFAULT '0',
                      last_name varchar(50) not null DEFAULT '0', 
                      primary key (id) 
);