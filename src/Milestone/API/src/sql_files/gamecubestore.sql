-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 26, 2024 at 04:33 AM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gamecubestore`
--

-- --------------------------------------------------------

--
-- Table structure for table `gamecubes`
--

CREATE TABLE `gamecubes` (
  `Description` varchar(1000) NOT NULL,
  `ID` int(1) NOT NULL,
  `Color` varchar(10) NOT NULL,
  `Price` decimal(65,0) NOT NULL,
  `Quantity` int(100) NOT NULL,
  `ModelNumber` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `gamecubes`
--

INSERT INTO `gamecubes` (`Description`, `ID`, `Color`, `Price`, `Quantity`, `ModelNumber`) VALUES
('Updated description here', 4, 'Blue', '210', 8, 'D101\r\n'),
('A GameCube with custom modifications.', 5, 'Black', '200', 5, 'D001\r\n'),
('A GameCube with custom modifications.', 6, 'Black', '200', 5, 'D101'),
('A GameCube with custom modifications.', 7, 'Black', '200', 5, 'D001\r\n'),
('A GameCube with custom modifications.', 8, 'Black', '200', 5, 'D001\r\n'),
('A GameCube with custom modifications.', 10, 'Black', '200', 5, 'D001'),
('A GameCube with custom modifications.', 11, 'Orange', '301', 5, 'D001');

-- --------------------------------------------------------

--
-- Table structure for table `gamecubes_has_shopping cart`
--

CREATE TABLE `gamecubes_has_shopping cart` (
  `gamecubes_ID` int(1) NOT NULL,
  `shopping cart_Product-ID` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `Description` varchar(1000) NOT NULL,
  `ID` int(1) NOT NULL,
  `ModName` varchar(1000) NOT NULL,
  `Price` decimal(65,0) NOT NULL,
  `Availabilty` text NOT NULL,
  `TurnAround` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `services_has_shopping cart`
--

CREATE TABLE `services_has_shopping cart` (
  `services_ID` int(1) NOT NULL,
  `shopping cart_Product-ID` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `shopping cart`
--

CREATE TABLE `shopping cart` (
  `Items` int(11) NOT NULL,
  `Price` decimal(10,0) NOT NULL,
  `Product-ID` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `gamecubes`
--
ALTER TABLE `gamecubes`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `gamecubes_has_shopping cart`
--
ALTER TABLE `gamecubes_has_shopping cart`
  ADD PRIMARY KEY (`gamecubes_ID`,`shopping cart_Product-ID`),
  ADD KEY `fk_gamecubes_has_shopping cart_shopping cart1_idx` (`shopping cart_Product-ID`),
  ADD KEY `fk_gamecubes_has_shopping cart_gamecubes1_idx` (`gamecubes_ID`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `services_has_shopping cart`
--
ALTER TABLE `services_has_shopping cart`
  ADD PRIMARY KEY (`services_ID`,`shopping cart_Product-ID`),
  ADD KEY `fk_services_has_shopping cart_shopping cart1_idx` (`shopping cart_Product-ID`),
  ADD KEY `fk_services_has_shopping cart_services_idx` (`services_ID`);

--
-- Indexes for table `shopping cart`
--
ALTER TABLE `shopping cart`
  ADD PRIMARY KEY (`Product-ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `gamecubes`
--
ALTER TABLE `gamecubes`
  MODIFY `ID` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `ID` int(1) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `shopping cart`
--
ALTER TABLE `shopping cart`
  MODIFY `Product-ID` int(1) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `gamecubes_has_shopping cart`
--
ALTER TABLE `gamecubes_has_shopping cart`
  ADD CONSTRAINT `fk_gamecubes_has_shopping cart_gamecubes1` FOREIGN KEY (`gamecubes_ID`) REFERENCES `gamecubes` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_gamecubes_has_shopping cart_shopping cart1` FOREIGN KEY (`shopping cart_Product-ID`) REFERENCES `shopping cart` (`Product-ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `services_has_shopping cart`
--
ALTER TABLE `services_has_shopping cart`
  ADD CONSTRAINT `fk_services_has_shopping cart_services` FOREIGN KEY (`services_ID`) REFERENCES `services` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_services_has_shopping cart_shopping cart1` FOREIGN KEY (`shopping cart_Product-ID`) REFERENCES `shopping cart` (`Product-ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
