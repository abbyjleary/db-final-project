.headers on
.mode table

-- create table ARTIST(
--     artID integer primary key autoincrement,
--     artName varchar(45) not null,
--     artImgPath varchar(255) not null
-- );

-- create table ALBUM(
    -- albumID integer primary key autoincrement,
--     albumName varchar(45) not null,
--     artID integer not null,
--     albumImgPath varchar(255) not null,
--     owned boolean not null default false,
--     onTheWay boolean not null default false,
--     priority integer default NULL,
--     value double default NULL,
--     percentComplete double default NULL,
--     foreign key (artID) references ARTIST(artID)
-- );

-- create table PHOTOCARD(
--     pcID integer primary key autoincrement,
--     albumID integer not null,
--     pcDesc varchar(255) DEFAULT NULL,
--     pcImgPath varchar(255) not null,
--     pcOwned boolean not null default false,
--     pcOnTheWay boolean not null default false,
--     pcPriority integer default NULL,
--     pcValue double default NULL,
--     foreign key (albumID) references ALBUM(albumID)
-- );

-- create table ALBUMVERSION(
--     versionID integer primary key autoincrement,
--     albumID integer not null,
--     version varchar(45) not null,
--     foreign key (albumID) references ALBUM(albumID)
-- );

-- insert into ARTIST(artName, artImgPath) values('TWICE', 'TWICE.jpg');
-- insert into ARTIST(artName, artImgPath) values('Stray Kids', 'SKZ.jpg');
-- insert into ARTIST(artName, artImgPath) values('ITZY', 'ITZY.jpg');
-- insert into ARTIST(artName, artImgPath) values('GIDLE', 'GIDLE.jpg');
-- insert into ARTIST(artName, artImgPath) values('BIBI', 'BIBI.jpg');
-- insert into ARTIST(artName, artImgPath) values('NMIXX', 'NMIXX.jpg');
-- insert into ARTIST(artName, artImgPath) values('LE SSERAFIM', 'LESSERAFIM.jpg');

-- alter table album drop column owned;
-- alter table album drop column onTheWay;
-- alter table album drop column priority;
-- alter table album drop column value;
-- alter table album drop column albumImgPath;

-- alter table ALBUMVERSION add column owned boolean not null default false;
-- alter table ALBUMVERSION add column onTheWay boolean not null default false;
-- alter table ALBUMVERSION add column priority integer default NULL;
-- alter table ALBUMVERSION add column value double default NULL;
-- alter table ALBUMVERSION add column versionImgPath varchar(255) not null;

-- insert into Album(albumName, artID) values('Eyes Wide Open', 1);
-- insert into Album(albumName, artID) values('Page Two', 1);
-- insert into Album(albumName, artID) values('The Story Begins', 1);
-- insert into album(albumName, artID) values('TWICEcoaster: Lane 1', 1);
-- insert into album(albumName, artID) values('TWICEcoaster: Lane 2', 1);
-- INSERT into album(albumName, artID) values('ODDINARY', 2);
-- INSERT into album(albumName, artID) values('5-Star', 2);
-- insert into album(albumName, artID) values('ROCK-STAR', 2);
-- insert into album(albumName, artID) values('I Love', 4);
-- insert into album(albumName, artID) values('I Feel', 4);
-- insert into album(albumName, artID) values('Lowlife Princess: Noir', 5);
-- insert into album(albumName, artID) values('Entwurf', 6);
-- insert into album(albumName, artID) values('Ad Mare', 6);
-- insert into album(albumName, artID) values('Unforgiven', 7);

-- insert into ALBUMVERSION(albumID, version, versionImgPath) values(1, 'Story', 'EyesWideOpen-Story.jpg');
-- insert into ALBUMVERSION(albumID, version, versionImgPath) values(1, 'Style', 'EyesWideOpen-Style.jpg');
-- insert into ALBUMVERSION(albumID, version, versionImgPath) values(1, 'Retro', 'EyesWideOpen-Retro.jpg');
-- insert into ALBUMVERSION(albumID, version, versionImgPath) values(2, 'Mint', 'PageTwo-Mint.jpg');
-- insert into ALBUMVERSION(albumID, version, versionImgPath) values(2, 'Pink', 'PageTwo-Pink.jpg');
-- insert into ALBUMVERSION(albumID, version, versionImgPath) values(3, 'The Story Begins', 'THESTORYBEGINS.jpg');
-- insert into ALBUMVERSION(albumID, version, versionImgPath) values(4, 'Apricot', 'TWICEcoasterLane1-Apricot.jpg');
-- insert into ALBUMVERSION(albumID, version, versionImgPath) values(4, 'Neon Magenta', 'TWICEcoasterLane1-NeonMagenta.jpg');
-- insert into ALBUMVERSION(albumID, version, versionImgPath) values(4, 'Christmas', 'TWICEcoasterLane1-Christmas.jpeg');
-- insert into ALBUMVERSION(albumID, version, versionImgPath) values(6, 'Scanning', 'ODDINARY-Scanning.jpg');
-- insert into ALBUMVERSION(albumID, version, versionImgPath) values(6, 'Mask Off', 'ODDINARY-MaskOff.jpg');
-- insert into ALBUMVERSION(albumID, version, versionImgPath) values(6, 'Frankenstein', 'ODDINARY-Frankenstein.jpeg');
-- insert into ALBUMVERSION(albumID, version, versionImgPath) values(7, 'A', '5STAR-A.jpeg');
-- insert into ALBUMVERSION(albumID, version, versionImgPath) values(7, 'B', '5STAR-B.jpg');
-- insert into ALBUMVERSION(albumID, version, versionImgPath) values(7, 'C', '5STAR-C.jpg');
-- insert into ALBUMVERSION(albumID, version, versionImgPath) values(7, 'Limited', '5STAR-Limited.jpg');
-- insert into ALBUMVERSION(albumID, version, versionImgPath) values(8, 'ROCK', 'ROCKSTAR-ROCK.jpeg');
-- insert into ALBUMVERSION(albumID, version, versionImgPath) values(8, 'ROLL', 'ROCKSTAR-ROLL.jpeg');
-- insert into ALBUMVERSION(albumID, version, versionImgPath) values(8, 'Limited', 'ROCKSTAR-LIMITED.jpg');
-- insert into ALBUMVERSION(albumID, version, versionImgPath) values(9, 'Act', 'ILOVE-Act.jpeg');
-- insert into ALBUMVERSION(albumID, version, versionImgPath) values(9, 'X-file', 'ILOVE-X-file.jpeg');
-- insert into ALBUMVERSION(albumID, version, versionImgPath) values(10, 'Queen', 'IFEEL-Queen.jpg');
-- insert into ALBUMVERSION(albumID, version, versionImgPath) values(11, 'Child', 'LowlifePrincess-Child.jpg');
-- insert into ALBUMVERSION(albumID, version, versionImgPath) values(11, 'Bad Bitch', 'LowlifePrincess-BadBitch.jpg');
-- insert into ALBUMVERSION(albumID, version, versionImgPath) values(12, 'Limited', 'Entwurf.jpg');
-- insert into ALBUMVERSION(albumID, version, versionImgPath) values(13, 'Light', 'AdMare.jpg');

-- update ALBUMVERSION set owned = true;

-- select * from album, albumversion where albumName='Eyes Wide Open' and album.albumID=ALBUMVERSION.albumID;

-- create table MEMBER(
--     memberID integer primary key AUTOINCREMENT,
--     memberName varchar(24),
--     artID integer not NULL,
--     foreign key (artID) references ARTIST(artID)
-- );

-- insert into member(memberName, artID) values('Nayeon', 1);
-- insert into member(memberName, artID) values('Jeongyeon', 1);
-- insert into member(memberName, artID) values('Momo', 1);
-- insert into member(memberName, artID) values('Sana', 1);
-- insert into member(memberName, artID) values('Jihyo', 1);
-- insert into member(memberName, artID) values('Mina', 1);
-- insert into member(memberName, artID) values('Dahyun', 1);
-- insert into member(memberName, artID) values('Chaeyoung', 1);
-- insert into member(memberName, artID) values('Tzuyu', 1);
-- insert into member(memberName, artID) values('Bang Chan', 2);
-- insert into member(memberName, artID) values('Lee Know', 2);
-- insert into member(memberName, artID) values('Changbin', 2);
-- insert into member(memberName, artID) values('Hyunjin', 2);
-- insert into member(memberName, artID) values('Han', 2);
-- insert into member(memberName, artID) values('Felix', 2);
-- insert into member(memberName, artID) values('Seungmin', 2);
-- insert into member(memberName, artID) values('I.N', 2);
-- insert into member(memberName, artID) values('Yeji', 3);
-- insert into member(memberName, artID) values('Lia', 3);
-- insert into member(memberName, artID) values('Ryujin', 3);
-- insert into member(memberName, artID) values('Chaeryeong', 3);
-- insert into member(memberName, artID) values('Yuna', 3);
-- insert into member(memberName, artID) values('Soojin', 4);
-- insert into member(memberName, artID) values('Miyeon', 4);
-- insert into member(memberName, artID) values('Minnie', 4);
-- insert into member(memberName, artID) values('Soyeon', 4);
-- insert into member(memberName, artID) values('Yuqi', 4);
-- insert into member(memberName, artID) values('Shuhua', 4);
-- insert into member(memberName, artID) values('BIBI', 5);
-- insert into member(memberName, artID) values('Lily', 6);
-- insert into member(memberName, artID) values('Kyujin', 6);
-- insert into member(memberName, artID) values('Bae', 6);
-- insert into member(memberName, artID) values('Sullyoon', 6);
-- insert into member(memberName, artID) values('Haewon', 6);
-- insert into member(memberName, artID) values('Jiwoo', 6);
-- insert into member(memberName, artID) values('Yunjin', 7);
-- insert into member(memberName, artID) values('Chaewon', 7);
-- insert into member(memberName, artID) values('Sakura', 7);
-- insert into member(memberName, artID) values('Kazuha', 7);
-- insert into member(memberName, artID) values('Eunchae', 7);

-- alter table photocard add column memberID integer not null;
-- ALTER TABLE photocard
-- ADD FOREIGN KEY (memberID) REFERENCES MEMBER(memberID);

-- CREATE TABLE PHOTOCARD (
--     pcID INTEGER PRIMARY KEY AUTOINCREMENT,
--     albumID INTEGER NOT NULL,
--     pcDesc VARCHAR(255) DEFAULT NULL,
--     pcImgPath VARCHAR(255) NOT NULL,
--     pcOwned BOOLEAN NOT NULL DEFAULT FALSE,
--     pcOnTheWay BOOLEAN NOT NULL DEFAULT FALSE,
--     pcPriority INTEGER DEFAULT NULL,
--     pcValue DOUBLE DEFAULT NULL,
--     memberID INTEGER NOT NULL,
--     FOREIGN KEY (albumID) REFERENCES ALBUM(albumID),
--     FOREIGN KEY (memberID) REFERENCES MEMBER(memberID)
-- );

-- update albumversion 
-- set versionImgPath = 'EyesWideOpen-Story.jpeg'
-- where versionID = 1;

-- update albumversion
-- set versionImgPath = 'EyesWideOpen-Retro.jpeg'
-- where versionID = 3;

-- update albumversion
-- set versionImgPath = 'TWICEcoasterLANE1-Apricot.jpg'
-- where versionID = 7;

-- update albumversion
-- set versionImgPath = 'TWICEcoasterLANE1-NeonMagenta.jpg'
-- where versionID = 8;

-- update albumversion
-- set versionImgPath = 'TWICEcoasterLANE1-Christmas.jpeg'
-- where versionID = 9;

-- insert into photocard (albumID, pcImgPath, memberID) values(1, 'NY1.jpg', 1);
-- insert into photocard (albumID, pcImgPath, memberID) values(4, 'NY2.jpg', 1);