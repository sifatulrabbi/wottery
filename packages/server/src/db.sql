create table lotteries (
    id varchar(64) UNIQUE not null,
    name varchar(100) not null,
    price int not null,
    description varchar(250) not null,
    start_date date not null,
    end_date date not null,
    first_prize varchar(100) not null,
    second_prize varchar(100) not null,
    last_prize varchar(100) not null
);

grant all on lotteries to wottery_admin;