DROP TABLE IF EXISTS user, bestCategory_sidedish, bestCategory, detailImage, thumbImage, sidedish_badge, sidedish, badge, category;

CREATE TABLE category (
    id int auto_increment primary key,
    name varchar (64)
);

CREATE TABLE badge (
    id int auto_increment primary key,
    name varchar (64)
);

CREATE TABLE sidedish (
    id varchar(64) primary key,
    title varchar (64),
    main_image varchar (255),
    description varchar (255),
    point int,
    n_price int,
    s_price int,
    delivery_type varchar (64),
    delivery_info varchar (64),
    category varchar (64) REFERENCES category(id) ON UPDATE CASCADE
);

CREATE TABLE sidedish_badge (
    badge int REFERENCES badge(id) ON UPDATE CASCADE,
    sidedish varchar (64) REFERENCES sidedish(id) ON UPDATE CASCADE,
    PRIMARY KEY (badge, sidedish)
);

CREATE TABLE thumbImage (
    id int auto_increment primary key,
    sidedish varchar (64) REFERENCES sidedish(id) ON UPDATE CASCADE,
    image_url varchar (255)
);

CREATE TABLE detailImage (
    id int auto_increment primary key,
    sidedish varchar (64) REFERENCES sidedish(id) ON UPDATE CASCADE,
    image_url varchar (255)
);

CREATE TABLE bestCategory (
    id int auto_increment primary key,
    name varchar (64)
);
CREATE TABLE bestCategory_sidedish (
    best_category int REFERENCES bestCategory(id) ON UPDATE CASCADE,
    sidedish varchar (64) REFERENCES sidedish(id) ON UPDATE CASCADE,
    PRIMARY KEY (best_category, sidedish)
);
CREATE TABLE user (
    id int auto_increment primary key,
    email varchar (64),
    password varchar (64),
    accessToken varchar (255),
    refreshToken varchar (255)
);
