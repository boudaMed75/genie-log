-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 15 oct. 2023 à 22:11
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `genielog`
--

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE `client` (
  `id_client` char(5) NOT NULL,
  `nom_client` varchar(200) DEFAULT NULL,
  `prenom_client` varchar(200) DEFAULT NULL,
  `tele` varchar(12) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `pass_word` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`id_client`, `nom_client`, `prenom_client`, `tele`, `email`, `pass_word`) VALUES
('CL001', 'mohamed', 'bouda', '0651425847', 'boudamohamed060@gmail.com', 'BoudaMed47'),
('CL002', 'hicham', 'dama', '06746376', 'hichamdama@vs.bouda', 'hichamdam'),
('CL003', 'hossam', 'El Alami', '089484757', 'hasan01@gmail.com', 'hasanhasan'),
('CL004', 'Test', 'Infinix Hot 6', '06772763', 'testinfenix@gmail.com', 'Infinix Hot 6'),
('CL005', 'Test', 'Sumsung Galaxy S21', '0679828373', 'testgalaxys21@gmail.com', 'Sumsung Galaxy S21'),
('CL006', 'Entreprise', 'Genie log Informatique', '061716262', 'GenieEntreprise@gmail.com', 'GenieEntreprise'),
('CL007', 'SOURIS DELL', 'bouda', '0651425847', 'souris@vs.bouda', '00000000');

-- --------------------------------------------------------

--
-- Structure de la table `demande`
--

CREATE TABLE `demande` (
  `id_demande` char(5) NOT NULL,
  `date_demande` datetime DEFAULT NULL,
  `demande_content` varchar(400) DEFAULT NULL,
  `id_client` char(5) NOT NULL,
  `demande_status` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `demande`
--

INSERT INTO `demande` (`id_demande`, `date_demande`, `demande_content`, `id_client`, `demande_status`) VALUES
('DM001', '2023-07-21 11:15:49', 'Bonjour Je suis Hicham dama , j\'ai besoin d\'un logiciel pour comptabilité  ', 'CL002', 'null'),
('DM002', '2023-07-22 11:15:49', 'Bonjour Je suis Mohamed Bouda , Je fait cette demande pour vous informer que j\'ai besoin d\'un deuxième logiciel pour la gestion de la paie', 'CL001', 'null'),
('DM003', '2023-09-21 10:59:12', 'Bonjour ', 'CL007', 'visite'),
('DM004', '2023-09-21 14:37:32', 'bonjour', 'CL007', 'null');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id_client`);

--
-- Index pour la table `demande`
--
ALTER TABLE `demande`
  ADD PRIMARY KEY (`id_demande`),
  ADD KEY `id_client` (`id_client`);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `demande`
--
ALTER TABLE `demande`
  ADD CONSTRAINT `demande_ibfk_1` FOREIGN KEY (`id_client`) REFERENCES `client` (`id_client`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
