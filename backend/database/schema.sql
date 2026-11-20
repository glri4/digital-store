CREATE DATABASE IF NOT EXISTS digital_store;

USE digital_store;

CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    image VARCHAR(255),
    brand VARCHAR(100),
    category VARCHAR(100),
    gender VARCHAR(50),
    condition_status VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);