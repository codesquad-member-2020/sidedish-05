DROP TABLE IF EXISTS user, bestCategory_sidedish, bestCategory, detail_image, thumb_image, sidedish_badge,
sidedish_delivery_type, delivery_type, sidedish, badge, category;

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
    delivery_info varchar (255),
    category varchar (64) REFERENCES category(id) ON UPDATE CASCADE
);

CREATE TABLE sidedish_badge (
    badge int REFERENCES badge(id) ON UPDATE CASCADE,
    sidedish varchar (64) REFERENCES sidedish(id) ON UPDATE CASCADE,
    PRIMARY KEY (badge, sidedish)
);

CREATE TABLE thumb_image (
    id int auto_increment primary key,
    sidedish varchar (64) REFERENCES sidedish(id) ON UPDATE CASCADE,
    sidedish_key int,
    image_url varchar (255)
);

CREATE TABLE detail_image (
    id int auto_increment primary key,
    sidedish varchar (64) REFERENCES sidedish(id) ON UPDATE CASCADE,
    sidedish_key int,
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

CREATE TABLE delivery_type (
    id int auto_increment primary key,
    delivery_type varchar (64)
);

CREATE TABLE sidedish_delivery_type (
    delivery_type int REFERENCES delivery_type(id) ON UPDATE CASCADE,
    sidedish varchar (64) REFERENCES sidedish(id) ON UPDATE CASCADE,
    PRIMARY KEY (delivery_type, sidedish)
);

CREATE TABLE user (
    id int auto_increment primary key,
    email varchar (64),
    password varchar (64),
    access_token varchar (255),
    refresh_token varchar (255)
);
