-- Creación de la base de datos
DROP DATABASE hotelreservation;
CREATE DATABASE hotelreservation;

-- Seleccionar la base de datos
USE hotelreservation;

-- Creación de la tabla "room"
CREATE TABLE room (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL, 
  type VARCHAR(50) NOT NULL,
  description VARCHAR(500),
  price_per_night FLOAT NOT NULL
);

-- Creación de la tabla "customer"
CREATE TABLE customer (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  address VARCHAR(50) NOT NULL,
  phone_number VARCHAR(20) NOT NULL
);

-- Creación de la tabla "reservation"
CREATE TABLE reservation (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  room_id INT NOT NULL,
  customer_id INT NOT NULL,
  status VARCHAR(50) NOT NULL,
  amount_paid FLOAT NOT NULL,
  checkin_date DATE NOT NULL,
  checkout_date DATE NOT NULL,
  payment_method VARCHAR(50) NOT NULL,
  created_at DATE NOT NULL,
  updated_at DATE NOT NULL,
  FOREIGN KEY (room_id) REFERENCES room(id),
  FOREIGN KEY (customer_id) REFERENCES customer(id)
);



