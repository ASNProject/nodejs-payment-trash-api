-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 28, 2023 at 04:06 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_payment_trash_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `credit`
--

CREATE TABLE `credit` (
  `id` int(11) NOT NULL,
  `id_user` varchar(255) NOT NULL,
  `id_type` int(11) NOT NULL,
  `weight` double NOT NULL,
  `credit` double NOT NULL,
  `date_credit` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `credit`
--

INSERT INTO `credit` (`id`, `id_user`, `id_type`, `weight`, `credit`, `date_credit`) VALUES
(1, '123', 3, 20, 20000, '2023-09-28 14:03:43'),
(2, '234', 1, 10, 100000, '2023-09-28 14:01:14');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `id_user` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` text NOT NULL,
  `id_number` varchar(255) NOT NULL,
  `registration` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `id_user`, `name`, `password`, `address`, `id_number`, `registration`, `id_status`) VALUES
(4, '321', 'Sinta', '123456', 'Yogyakarta', '33012438234394', '2023-09-28 07:10:19', 1),
(6, '123', 'Sinta Jojo', '232323', 'Bantul', '345345345345', '2023-09-28 13:12:00', 2),
(7, '234', 'Huam', '123456', 'Yogyakarta', '345345345345', '2023-09-28 07:25:47', 2),
(8, '123', 'Sinta Jojo', '232323', 'Bantul', '345345345345', '2023-09-28 13:14:10', 2);

-- --------------------------------------------------------

--
-- Table structure for table `debit`
--

CREATE TABLE `debit` (
  `id` int(11) NOT NULL,
  `id_user` varchar(255) NOT NULL,
  `debit` double NOT NULL,
  `status_withdrawal` varchar(255) NOT NULL,
  `date_withdrawal` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `debit`
--

INSERT INTO `debit` (`id`, `id_user`, `debit`, `status_withdrawal`, `date_withdrawal`) VALUES
(3, '234', 20000, 'Tukar Minyak', '2023-09-28 13:47:56');

-- --------------------------------------------------------

--
-- Table structure for table `load`
--

CREATE TABLE `load` (
  `id` int(11) NOT NULL,
  `code` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `value` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `load`
--

INSERT INTO `load` (`id`, `code`, `password`, `value`) VALUES
(1, 'T1', '123456', 100),
(3, 'T2', '123456', 120);

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `id_status` int(11) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`id_status`, `status`) VALUES
(1, 'admin'),
(2, 'customer');

-- --------------------------------------------------------

--
-- Table structure for table `type_waste`
--

CREATE TABLE `type_waste` (
  `id_type` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `price` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `type_waste`
--

INSERT INTO `type_waste` (`id_type`, `type`, `price`) VALUES
(1, 'Botol', 1000),
(2, 'Kertas', 2000),
(3, 'Besi', 3000),
(4, 'Plastik', 1000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `credit`
--
ALTER TABLE `credit`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `debit`
--
ALTER TABLE `debit`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `load`
--
ALTER TABLE `load`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id_status`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `credit`
--
ALTER TABLE `credit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `debit`
--
ALTER TABLE `debit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `load`
--
ALTER TABLE `load`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `id_status` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
