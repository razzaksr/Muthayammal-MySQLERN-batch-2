-- DDL
-- create database setaf;

use setaf;

-- create table loans(loan_id int not null primary key, loan_name varchar(255) not null, loan_since date not null, loan_limit bigint not null, loan_eligible varchar(255) not null);

-- ALTER TABLE `setaf`.`loans` 
-- CHANGE COLUMN `loan_id` `loan_id` INT NOT NULL AUTO_INCREMENT ;

-- insert into loans values(1201,'education loan','2000-01-01',2000000,'student');

-- insert into loans(loan_name,loan_since,loan_limit,loan_eligible) values('home loan','2010-01-12',60000000,null);

-- delimiter //
-- create trigger eligible_check
-- before insert on loans
-- for each row
-- if new.loan_eligible is null then set new.loan_eligible = '';
-- end if;//
-- delimiter ;

-- drop trigger if exists eligible_check;

-- delimiter //
-- create trigger change_eligible
-- after insert on loans
-- for each row
-- begin
-- if new.loan_eligible = 'student' then
-- insert into loans value(new.loan_id,new.loan_name,new.loan_since,new.loan_limit,'candidate');
-- end if;
-- end//
-- delimiter ;
-- insert into loans(loan_name,loan_since,loan_limit,loan_eligible) values('shiksh yojana','2015-11-12',60000000,'student');
-- select * from loans;


use muthayammal;

-- select * from placement;

-- delimiter //
-- create procedure common()
-- begin
-- 	select * from placement;
-- end//
-- delimiter ;

-- drop procedure if exists common;

-- call common();

-- in , out, inout

-- select * from placement where student_dept='cse';

-- delimiter //
-- create procedure find_info_by_dept(
-- 	in department varchar(255)
-- )
-- begin
-- 	select * from placement where student_dept=department;
-- end//
-- delimiter ;

-- drop procedure if exists find_info_by_dept;

-- call find_info_by_dept('ai&ds');

-- session variable @variable_name

-- select count(acc_number) from customers;
-- delimiter //
-- create procedure find_min_balance(
-- 	out got int
-- )
-- begin
-- 	select count(acc_number) into got from customers;
-- end//
-- delimiter ;

-- call find_min_balance(@alpha);
-- select @alpha;

-- delimiter //
-- create procedure find_customer(
-- 	in phrase varchar(255),
--     out gathered int
-- )
-- begin
-- 	select count(acc_number) into gathered from customers where acc_holder like concat(phrase,'%');
-- end//
-- delimiter ;

-- drop procedure if exists find_customer;

-- call find_customer('I',@taken);
-- select @taken;

use muthayammal;
-- delimiter //
-- create procedure check_status(
-- in skill varchar(255)
-- )
-- begin
-- 	if skill = 'c' or skill = 'Embedded' then
-- 		select student_name, student_dept from placement;
-- 	else
-- 		select student_name, student_cgpa from placement;
-- 	end if;
-- end//
-- delimiter ;

-- drop procedure if exists change_status;

call check_status('c');
call check_status('Java')

-- update placement set student_placed='Placed' where student_skill='python';