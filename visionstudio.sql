-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Εξυπηρετητής: db:3306:3306
-- Χρόνος δημιουργίας: 01 Νοε 2023 στις 17:11:32
-- Έκδοση διακομιστή: 8.0.34
-- Έκδοση PHP: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Βάση δεδομένων: `visionstudio`
--

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `carts`
--

CREATE TABLE `carts` (
  `cid` int NOT NULL,
  `uid` int NOT NULL,
  `pid` int NOT NULL,
  `insertionDate` datetime NOT NULL,
  `amount` int NOT NULL,
  `price` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `orders`
--

CREATE TABLE `orders` (
  `oid` int NOT NULL,
  `uid` int NOT NULL,
  `pid` int NOT NULL,
  `totalOrderId` varchar(200) NOT NULL,
  `orderDate` datetime NOT NULL,
  `orderAmount` int NOT NULL,
  `orderCost` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Άδειασμα δεδομένων του πίνακα `orders`
--

INSERT INTO `orders` (`oid`, `uid`, `pid`, `totalOrderId`, `orderDate`, `orderAmount`, `orderCost`) VALUES
(17, 1, 1, '1', '2023-10-26 14:42:02', 1, 1509.75),
(18, 1, 2, '1', '2023-10-26 14:42:02', 1, 129.00),
(21, 1, 2, 'ORDER-20231030-172802-1', '2023-10-30 17:28:02', 1, 100.75),
(22, 1, 2, 'ORDER-20231030-173014-1', '2023-10-30 17:30:14', 1, 100.75),
(23, 1, 2, 'ORDER-20231030-173559-1', '2023-10-30 17:35:59', 1, 100.75),
(24, 1, 1, 'ORDER-20231030-173559-1', '2023-10-30 17:59:18', 2, 1509.75),
(34, 9, 1, 'ORDER-20231030-181932-9', '2023-10-30 18:19:32', 1, 1509.75),
(36, 9, 2, 'ORDER-20231030-181932-9', '2023-10-30 18:20:18', 1, 100.75),
(37, 1, 1, 'ORDER-20231030-182103-1', '2023-10-30 18:21:03', 1, 1509.75),
(38, 1, 2, 'ORDER-20231030-182103-1', '2023-10-30 18:21:24', 1, 100.75),
(39, 9, 1, 'ORDER-20231030-182224-9', '2023-10-30 18:22:24', 1, 1509.75),
(40, 9, 2, 'ORDER-20231030-182224-9', '2023-10-30 18:22:38', 1, 100.75);

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `products`
--

CREATE TABLE `products` (
  `pid` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `product_code` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `image` varchar(512) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Άδειασμα δεδομένων του πίνακα `products`
--

INSERT INTO `products` (`pid`, `name`, `product_code`, `category`, `brand`, `stock`, `image`, `price`) VALUES
(1, 'Dell Vostro 3000', 'GFGFD54543', 'laptops', 'Dell', 10, 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/vostro-notebooks/15-3510/media-gallery/archive/dv3510nt_cnb_05000ff090_bk.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=606&qlt=100,1&resMode=sharp2&size=606,402&chrss=full', 1509.75),
(2, 'LG 24MP60G-B IPS Gaming Monitor', 'LG45656', 'monitors', 'LG', 26, 'https://a.scdn.gr/images/sku_main_images/030067/30067365/20210719094314_lg_24mp60g_b_monitor_23_8_fhd.jpeg', 129.00),
(3, 'Dell 300455445', 'fddfsfds', 'laptops', 'DEL', 11, 'httpdsfgfdgd', 1500.00);

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `users`
--

CREATE TABLE `users` (
  `uid` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Άδειασμα δεδομένων του πίνακα `users`
--

INSERT INTO `users` (`uid`, `name`, `surname`, `username`, `password`, `email`, `city`, `address`) VALUES
(1, 'Αιμίλιος', 'Τζαβάρας', 'atzavaras', '1234', 'atzavaras94@gmail.com', 'Chania', 'Kounoupidiana'),
(9, 'Μάνος', 'Ιερωνυμάκης', 'm.ier', '1234', 'm.ier@hotmail.com', 'Rethymno', 'Address'),
(10, 'Απόστολος', 'Λαζίδης', 'apo.laz', '12345', 'alazidis@tuc.gr ', 'Chania', 'SODY'),
(12, 'Αλέξης', 'Σταυρουλάκης', 'alex.stavr', '1234', 'astavroulakis@tuc.gr', 'Chania', 'Xalepa'),
(23, 'Inesa', 'Sar', 'ines7', '12345', 'inesa.saratsi@gmail.com', 'Chania', 'Kounoupidiana');

--
-- Ευρετήρια για άχρηστους πίνακες
--

--
-- Ευρετήρια για πίνακα `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`cid`),
  ADD KEY `uid` (`uid`),
  ADD KEY `pid` (`pid`);

--
-- Ευρετήρια για πίνακα `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`oid`),
  ADD KEY `uid` (`uid`),
  ADD KEY `pid` (`pid`);

--
-- Ευρετήρια για πίνακα `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`pid`);

--
-- Ευρετήρια για πίνακα `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`uid`,`username`);

--
-- AUTO_INCREMENT για άχρηστους πίνακες
--

--
-- AUTO_INCREMENT για πίνακα `carts`
--
ALTER TABLE `carts`
  MODIFY `cid` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT για πίνακα `orders`
--
ALTER TABLE `orders`
  MODIFY `oid` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT για πίνακα `products`
--
ALTER TABLE `products`
  MODIFY `pid` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT για πίνακα `users`
--
ALTER TABLE `users`
  MODIFY `uid` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Περιορισμοί για άχρηστους πίνακες
--

--
-- Περιορισμοί για πίνακα `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `carts_ibfk_2` FOREIGN KEY (`pid`) REFERENCES `products` (`pid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`pid`) REFERENCES `products` (`pid`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
