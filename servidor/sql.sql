-- phpMyAdmin SQL Dump
-- version 4.2.10
-- http://www.phpmyadmin.net
--
-- Servidor: localhost:8889
-- Tiempo de generación: 22-06-2015 a las 01:52:20
-- Versión del servidor: 5.5.38
-- Versión de PHP: 5.6.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de datos: `lolextension`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `champions`
--

CREATE TABLE `champions` (
  `championId` int(11) NOT NULL,
  `championName` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `champions`
--

INSERT INTO `champions` (`championId`, `championName`) VALUES
(1, 'Annie'),
(2, 'Olaf'),
(3, 'Galio'),
(4, 'TwistedFate'),
(5, 'XinZhao'),
(6, 'Urgot'),
(7, 'Leblanc'),
(8, 'Vladimir'),
(9, 'FiddleSticks'),
(10, 'Kayle'),
(11, 'MasterYi'),
(12, 'Alistar'),
(13, 'Ryze'),
(14, 'Sion'),
(15, 'Sivir'),
(16, 'Soraka'),
(17, 'Teemo'),
(18, 'Tristana'),
(19, 'Warwick'),
(20, 'Nunu'),
(21, 'MissFortune'),
(22, 'Ashe'),
(23, 'Tryndamere'),
(24, 'Jax'),
(25, 'Morgana'),
(26, 'Zilean'),
(27, 'Singed'),
(28, 'Evelynn'),
(29, 'Twitch'),
(30, 'Karthus'),
(31, 'Chogath'),
(32, 'Amumu'),
(33, 'Rammus'),
(34, 'Anivia'),
(35, 'Shaco'),
(36, 'DrMundo'),
(37, 'Sona'),
(38, 'Kassadin'),
(39, 'Irelia'),
(40, 'Janna'),
(41, 'Gangplank'),
(42, 'Corki'),
(43, 'Karma'),
(44, 'Taric'),
(45, 'Veigar'),
(48, 'Trundle'),
(50, 'Swain'),
(51, 'Caitlyn'),
(53, 'Blitzcrank'),
(54, 'Malphite'),
(55, 'Katarina'),
(56, 'Nocturne'),
(57, 'Maokai'),
(58, 'Renekton'),
(59, 'JarvanIV'),
(60, 'Elise'),
(61, 'Orianna'),
(62, 'MonkeyKing'),
(63, 'Brand'),
(64, 'LeeSin'),
(67, 'Vayne'),
(68, 'Rumble'),
(69, 'Cassiopeia'),
(72, 'Skarner'),
(74, 'Heimerdinger'),
(75, 'Nasus'),
(76, 'Nidalee'),
(77, 'Udyr'),
(78, 'Poppy'),
(79, 'Gragas'),
(80, 'Pantheon'),
(81, 'Ezreal'),
(82, 'Mordekaiser'),
(83, 'Yorick'),
(84, 'Akali'),
(85, 'Kennen'),
(86, 'Garen'),
(89, 'Leona'),
(90, 'Malzahar'),
(91, 'Talon'),
(92, 'Riven'),
(96, 'KogMaw'),
(98, 'Shen'),
(99, 'Lux'),
(101, 'Xerath'),
(102, 'Shyvana'),
(103, 'Ahri'),
(104, 'Graves'),
(105, 'Fizz'),
(106, 'Volibear'),
(107, 'Rengar'),
(110, 'Varus'),
(111, 'Nautilus'),
(112, 'Viktor'),
(113, 'Sejuani'),
(114, 'Fiora'),
(115, 'Ziggs'),
(117, 'Lulu'),
(119, 'Draven'),
(120, 'Hecarim'),
(121, 'Khazix'),
(122, 'Darius'),
(126, 'Jayce'),
(127, 'Lissandra'),
(131, 'Diana'),
(133, 'Quinn'),
(134, 'Syndra'),
(143, 'Zyra'),
(150, 'Gnar'),
(154, 'Zac'),
(157, 'Yasuo'),
(161, 'Velkoz'),
(201, 'Braum'),
(222, 'Jinx'),
(236, 'Lucian'),
(238, 'Zed'),
(245, 'Ekko'),
(254, 'Vi'),
(266, 'Aatrox'),
(267, 'Nami'),
(268, 'Azir'),
(412, 'Thresh'),
(421, 'RekSai'),
(429, 'Kalista'),
(432, 'Bard');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `summoner_spells`
--

CREATE TABLE `summoner_spells` (
  `summonerSpellId` int(11) NOT NULL,
  `summonerSpellName` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `summoner_spells`
--

INSERT INTO `summoner_spells` (`summonerSpellId`, `summonerSpellName`) VALUES
(1, 'SummonerBoost'),
(2, 'SummonerClairvoyance'),
(3, 'SummonerExhaust'),
(4, 'SummonerFlash'),
(6, 'SummonerHaste'),
(7, 'SummonerHeal'),
(11, 'SummonerSmite'),
(12, 'SummonerTeleport'),
(13, 'SummonerMana'),
(14, 'SummonerDot'),
(17, 'SummonerOdinGarrison'),
(21, 'SummonerBarrier'),
(30, 'SummonerPoroRecall'),
(31, 'SummonerPoroThrow'),
(32, 'SummonerSnowball');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `champions`
--
ALTER TABLE `champions`
 ADD PRIMARY KEY (`championId`);

--
-- Indices de la tabla `summoner_spells`
--
ALTER TABLE `summoner_spells`
 ADD PRIMARY KEY (`summonerSpellId`);
