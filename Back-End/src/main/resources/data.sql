INSERT INTO users (name, birth_date, rg, cpf, email, password) values ('Rafa', '1999-10-15', '378959955', '49966407073', 'rafael@email.com', 'senha');
INSERT INTO users (name, birth_date, rg, cpf, email, password) values ('Igor', '1999-10-15', '324520086', '38840290028', 'igor@email.com', 'senha');
INSERT INTO users (name, birth_date, rg, cpf, email, password) values ('Lemos', '1999-10-15', '450795494', '37045316003', 'lemos@email.com', 'senha');

insert into property(active, address_complement, bathroom_quantity, beds_quantity, cep, city, daily_price, description, filter_date, guests_quantity, have_animals, have_garage, have_kitchen, have_suite, have_wifi, house_number, latitude, likes, longitude, name, property_type, reference_point, room_quantity, space_type, state, street, uf, fk_user)
values (true, 'Bloco 22', 8, 5, '098553', 'rio-de-janeiro', 399.99, 'Ao lado do metro sao paulo morumbi', 'weekend', 5, false, true, false, true, false, 666, '-23.50897290916333', 991, '-46.43766093183661', 'Casa inteiro', 'casa', 'Ao lado do metro sao paulo morumbi', 5, 'inteiro', 'SaoPaulo', 'Morumbi', 'sp', 3);

insert into property(active, address_complement, bathroom_quantity, beds_quantity, cep, city, daily_price, description, filter_date, guests_quantity, have_animals, have_garage, have_kitchen, have_suite, have_wifi, house_number, latitude, likes, longitude, name, property_type, reference_point, room_quantity, space_type, state, street, uf, fk_user)
values (false, 'Bloco 08', 2, 3, '4505600', 'sao-paulo', 125.99, 'Perto do mercado extra', 'weekend', 1, false, true, false, true, true, 201, '-23.502240750017478', 250, '-46.43518521851996', 'Apartamento', 'apartamento', 'Perto do mercado extra', 2, 'inteiro', 'SaoPaulo', 'Rua dos amores', 'sp', 2);

insert into property(active, address_complement, bathroom_quantity, beds_quantity, cep, city, daily_price, description, filter_date, guests_quantity, have_animals, have_garage, have_kitchen, have_suite, have_wifi, house_number, latitude, likes, longitude, name, property_type, reference_point, room_quantity, space_type, state, street, uf, fk_user)
values (true, 'Bloco 03', 2, 3, '054656', 'sao-paulo', 85.99, 'Ao lado do metro tucuruvi', 'weekend', 2, true, true, true, true, false, 201, '-23.556769658543093', 100, '-46.66188132575123', 'Quarto separado', 'apartamento', 'Ao lado do metro tucuruvi', 5, 'suite', 'SaoPaulo', 'Tucuruvi', 'sp', 2);

insert into property(active, address_complement, bathroom_quantity, beds_quantity, cep, city, daily_price, description, filter_date, guests_quantity, have_animals, have_garage, have_kitchen, have_suite, have_wifi, house_number, latitude, likes, longitude, name, property_type, reference_point, room_quantity, space_type, state, street, uf, fk_user)
values (false, 'Casa 12', 4, 6, '09901826', 'sao-paulo', 55.55, 'Ao lado do condominio conde', 'week', 2, true, true, false, true, false, 31, '-23.557222055958274', 66, '-46.658619759607284', 'Casa de três andares', 'casa', 'casa', 3, 'inteiro', 'SaoPaulo', 'Rua maracutaia jr', 'sp', 1);

insert into property(active, address_complement, bathroom_quantity, beds_quantity, cep, city, daily_price, description, filter_date, guests_quantity, have_animals, have_garage, have_kitchen, have_suite, have_wifi, house_number, latitude, likes, longitude, name, property_type, reference_point, room_quantity, space_type, state, street, uf, fk_user)
values (true, 'Casa', 4, 8, '02134021', 'sao-paulo', 999.99, 'Ao lado do shopping morumbi town', 'week', 5, true, false, true, false, true, 116, '-23.50972061917951', 66, '-46.434624671231205', 'Casa terea', 'casa', 'casa', 3, 'inteiro', 'SaoPaulo', 'Rua maracutaia jr', 'sp', 1);

