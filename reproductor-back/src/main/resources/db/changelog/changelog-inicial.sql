-- liquibase formatted sql

-- changeset script:1
-- comment: Creation table canciones
create table canciones (
    id integer generated by default as identity,
    album varchar(255),
    anno date,
    artista varchar(255),
    genero varchar(255),
    titulo varchar(255),
    primary key (id)
);

-- changeset script:2
-- comment: Creation table lista_reproducciones
create table lista_reproducciones (
    id integer generated by default as identity,
    descripcion varchar(255),
    nombre varchar(255),
    primary key (id)
);

-- changeset script:3
-- comment: Creation table lista_reproduccion_cancion
create table lista_reproduccion_cancion (
    id_lista_reproduccion_fk integer not null,
    id_cancion_fk integer not null);

-- changeset script:4
-- comment: Creation table usuarios
create table usuarios (
    id integer generated by default as identity,
    password varchar(255) not null,
    username varchar(255) not null,
    primary key (id)
);

-- changeset script:11
-- comment: Creation canciones
insert into canciones (album, anno, artista, genero, titulo) values
    ('Albun 5', '2024-01-23', 'Jhonny Deck', 'Regueton', 'Long live rock'),
    ('Albun 3', '2023-01-23', 'Jhonny Deck', 'Regueton', 'In the mountain');

-- changeset script:12
-- comment: Creation lista_reproducciones
insert into lista_reproducciones (descripcion,nombre) values
    ('Musica Urbana','Lista de reproduccion Urbana');

-- changeset script:13
-- comment: Creation usuarios
insert into usuarios (password, username) values
    ( '$2a$10$P7GVulAKtvA.AB96yTZeJe51r.eHVvk2nFNdX9Kmv/6Z6MZyy96.e', 'user' );

-- changeset script:14
-- comment: Creation lista_reproduccion_cancion
insert into lista_reproduccion_cancion (id_lista_reproduccion_fk,id_cancion_fk) values
    (1,1),
    (1,2);

