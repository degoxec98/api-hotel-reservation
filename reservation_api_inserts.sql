-- Seleccionar la base de datos
USE hotelreservation;


INSERT INTO room (name, type, description, price_per_night)
VALUES
  ('Room 101', 'Standard', 'A cozy room with a queen-size bed', 75.00),
  ('Room 102', 'Standard', 'A spacious room with two double beds', 85.00),
  ('Room 103', 'Standard', 'A room with a view of the city skyline', 95.00),
  ('Room 201', 'Deluxe', 'A luxurious room with a king-size bed and a balcony', 125.00),
  ('Room 202', 'Deluxe', 'A deluxe room with a king-size bed and a whirlpool tub', 135.00),
  ('Room 203', 'Deluxe', 'A deluxe room with a king-size bed and a fireplace', 145.00),
  ('Room 301', 'Suite', 'A spacious suite with a king-size bed and a living room', 175.00),
  ('Room 302', 'Suite', 'A luxurious suite with a king-size bed, a living room, and a balcony', 195.00),
  ('Room 303', 'Suite', 'A presidential suite with a king-size bed, a living room, a dining room, and a private terrace', 295.00),
  ('Room 304', 'Suite', 'A penthouse suite with two bedrooms, a living room, a dining room, and a rooftop terrace', 495.00);


INSERT INTO customer (name, email, address, phone_number)
VALUES
  ('John Smith', 'john.smith@example.com', '123 Main St, Anytown USA', '555-1234'),
  ('Jane Doe', 'jane.doe@example.com', '456 Maple Ave, Anytown USA', '555-5678'),
  ('Bob Johnson', 'bob.johnson@example.com', '789 Oak St, Anytown USA', '555-9012'),
  ('Alice Williams', 'alice.williams@example.com', '321 Elm St, Anytown USA', '555-3456'),
  ('Michael Brown', 'michael.brown@example.com', '654 Pine St, Anytown USA', '555-7890'),
  ('Emily Davis', 'emily.davis@example.com', '987 Cedar Ave, Anytown USA', '555-2345'),
  ('David Miller', 'david.miller@example.com', '246 Birch Ln, Anytown USA', '555-6789'),
  ('Sarah Wilson', 'sarah.wilson@example.com', '135 Spruce Dr, Anytown USA', '555-0123'),
  ('Kevin Lee', 'kevin.lee@example.com', '864 Walnut Rd, Anytown USA', '555-4567'),
  ('Laura Thompson', 'laura.thompson@example.com', '975 Cherry Blvd, Anytown USA', '555-8901');


INSERT INTO reservation (room_id, customer_id, status, amount_paid, checkin_date, checkout_date, payment_method, created_at, updated_at) VALUES
(1, 1, 'Pendiente', 500.00, '2023-05-01', '2023-05-05', 'Tarjeta de crédito', NOW(), NOW()),
(2, 2, 'Pagado', 750.00, '2023-06-10', '2023-06-15', 'Efectivo', NOW(), NOW()),
(3, 3, 'Pagado', 850.00, '2023-07-20', '2023-07-24', 'Tarjeta de crédito', NOW(), NOW()),
(4, 4, 'Eliminado', 0.00, '2023-08-05', '2023-08-07', 'Tarjeta de crédito', NOW(), NOW()),
(5, 5, 'Pendiente', 300.00, '2023-09-01', '2023-09-04', 'Efectivo', NOW(), NOW()),
(6, 6, 'Pendiente', 450.00, '2023-10-12', '2023-10-15', 'Tarjeta de crédito', NOW(), NOW()),
(7, 7, 'Pendiente', 700.00, '2023-11-05', '2023-11-10', 'Efectivo', NOW(), NOW()),
(8, 8, 'Pagado', 1200.00, '2023-12-20', '2023-12-26', 'Tarjeta de crédito', NOW(), NOW()),
(9, 9, 'Pagado', 1000.00, '2024-01-07', '2024-01-10', 'Efectivo', NOW(), NOW()),
(10, 10, 'Pendiente', 400.00, '2024-02-03', '2024-02-05', 'Tarjeta de crédito', NOW(), NOW());
