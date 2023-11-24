-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-11-2023 a las 01:13:17
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `testing`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chapters`
--

CREATE TABLE `chapters` (
  `ID` int(11) NOT NULL,
  `mangaId` int(11) NOT NULL,
  `name` varchar(55) DEFAULT NULL,
  `imageURL` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `city`
--

CREATE TABLE `city` (
  `ID` int(11) NOT NULL,
  `countryID` int(11) DEFAULT NULL,
  `name` varchar(55) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `country`
--

CREATE TABLE `country` (
  `ID` int(11) NOT NULL,
  `name` varchar(55) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado`
--

CREATE TABLE `estado` (
  `ID` int(11) NOT NULL,
  `name` varchar(55) NOT NULL,
  `descripcion` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mangas`
--

CREATE TABLE `mangas` (
  `ID` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `currentChapter` int(11) DEFAULT NULL,
  `lastChapter` int(11) DEFAULT NULL,
  `autor` varchar(55) DEFAULT NULL,
  `onEmision` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `relationreading`
--

CREATE TABLE `relationreading` (
  `ID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `mangaID` int(11) DEFAULT NULL,
  `chapterId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `userrol`
--

CREATE TABLE `userrol` (
  `ID` int(11) NOT NULL,
  `role` int(11) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `username` varchar(55) NOT NULL,
  `firstName` varchar(55) DEFAULT NULL,
  `lastName` varchar(55) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `reading` int(11) DEFAULT NULL,
  `city` int(11) DEFAULT NULL,
  `country` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `chapters`
--
ALTER TABLE `chapters`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `mangaId` (`mangaId`);

--
-- Indices de la tabla `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `countryID` (`countryID`);

--
-- Indices de la tabla `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `mangas`
--
ALTER TABLE `mangas`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `relationreading`
--
ALTER TABLE `relationreading`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `userID` (`userID`),
  ADD KEY `mangaID` (`mangaID`),
  ADD KEY `chapterId` (`chapterId`);

--
-- Indices de la tabla `userrol`
--
ALTER TABLE `userrol`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `role` (`role`),
  ADD KEY `city` (`city`),
  ADD KEY `country` (`country`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `estado`
--
ALTER TABLE `estado`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `chapters`
--
ALTER TABLE `chapters`
  ADD CONSTRAINT `chapters_ibfk_1` FOREIGN KEY (`mangaId`) REFERENCES `mangas` (`ID`);

--
-- Filtros para la tabla `city`
--
ALTER TABLE `city`
  ADD CONSTRAINT `city_ibfk_1` FOREIGN KEY (`countryID`) REFERENCES `country` (`ID`);

--
-- Filtros para la tabla `relationreading`
--
ALTER TABLE `relationreading`
  ADD CONSTRAINT `relationreading_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`ID`),
  ADD CONSTRAINT `relationreading_ibfk_2` FOREIGN KEY (`mangaID`) REFERENCES `mangas` (`ID`),
  ADD CONSTRAINT `relationreading_ibfk_3` FOREIGN KEY (`chapterId`) REFERENCES `chapters` (`ID`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role`) REFERENCES `userrol` (`ID`),
  ADD CONSTRAINT `users_ibfk_2` FOREIGN KEY (`city`) REFERENCES `city` (`ID`),
  ADD CONSTRAINT `users_ibfk_3` FOREIGN KEY (`country`) REFERENCES `country` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
