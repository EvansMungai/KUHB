-- MySQL dump 10.13  Distrib 8.2.0, for Win64 (x86_64)
--
-- Host: localhost    Database: uhb
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `applications`
--

DROP TABLE IF EXISTS `applications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `applications` (
  `ApplicationNo` int NOT NULL AUTO_INCREMENT,
  `ApplicationPeriod` varchar(30) DEFAULT NULL,
  `RegistrationNo` varchar(30) DEFAULT NULL,
  `PreferredHostel` varchar(30) DEFAULT NULL,
  `Status` varchar(30) DEFAULT 'Pending',
  `RoomNo` varchar(30) DEFAULT NULL,
  `Disability` varchar(30) DEFAULT NULL,
  `DisabilityDetails` varchar(30) DEFAULT NULL,
  `AccommodatedBefore` varchar(4) DEFAULT NULL,
  `AccommodationPeriod` varchar(30) DEFAULT NULL,
  `IsSponsored` varchar(4) DEFAULT NULL,
  `Sponsor` varchar(30) DEFAULT NULL,
  `ReceivesHelb` varchar(4) DEFAULT NULL,
  `HelbAmount` varchar(15) DEFAULT NULL,
  `ReceivedBursary` varchar(4) DEFAULT NULL,
  `BursaryAmount` varchar(15) DEFAULT NULL,
  `WorkStudyBenefitsBefore` varchar(4) DEFAULT NULL,
  `WorkStudyPeriod` varchar(10) DEFAULT NULL,
  `SpecialExamsOnFinancialGrounds` varchar(4) DEFAULT NULL,
  `SpecialExamPeriod` varchar(10) DEFAULT NULL,
  `ReasonsForConsideration` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`ApplicationNo`),
  KEY `RegistrationNo` (`RegistrationNo`),
  KEY `RoomNo` (`RoomNo`),
  CONSTRAINT `applications_ibfk_1` FOREIGN KEY (`RegistrationNo`) REFERENCES `students` (`RegNO`),
  CONSTRAINT `applications_ibfk_2` FOREIGN KEY (`RoomNo`) REFERENCES `rooms` (`RoomNo`),
  CONSTRAINT `applications_ibfk_3` FOREIGN KEY (`RoomNo`) REFERENCES `rooms` (`RoomNo`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `applications`
--

LOCK TABLES `applications` WRITE;
/*!40000 ALTER TABLE `applications` DISABLE KEYS */;
/*!40000 ALTER TABLE `applications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hostels`
--

DROP TABLE IF EXISTS `hostels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hostels` (
  `HostelNo` varchar(30) NOT NULL,
  `HostelName` varchar(30) DEFAULT NULL,
  `Capacity` varchar(10) DEFAULT NULL,
  `Type` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`HostelNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hostels`
--

LOCK TABLES `hostels` WRITE;
/*!40000 ALTER TABLE `hostels` DISABLE KEYS */;
INSERT INTO `hostels` VALUES ('1','Batian','50','Male'),('2','Serengeti','50','Female'),('3','Mt Kenya','50','Male'),('4','Lenana','50','Female');
/*!40000 ALTER TABLE `hostels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rooms`
--

DROP TABLE IF EXISTS `rooms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rooms` (
  `RoomNo` varchar(30) NOT NULL,
  `HostelNo` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`RoomNo`),
  KEY `HostelNo` (`HostelNo`),
  CONSTRAINT `rooms_ibfk_1` FOREIGN KEY (`HostelNo`) REFERENCES `hostels` (`HostelNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rooms`
--

LOCK TABLES `rooms` WRITE;
/*!40000 ALTER TABLE `rooms` DISABLE KEYS */;
INSERT INTO `rooms` VALUES ('B1','1'),('S1','2'),('M1','3');
/*!40000 ALTER TABLE `rooms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `RegNO` varchar(30) NOT NULL,
  `Surname` varchar(30) DEFAULT NULL,
  `FirstName` varchar(30) DEFAULT NULL,
  `SecondName` varchar(30) DEFAULT NULL,
  `Gender` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`RegNO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `Username` varchar(30) NOT NULL,
  `Password` varchar(200) DEFAULT NULL,
  `Role` varchar(30) DEFAULT 'Student',
  `RegNO` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`Username`),
  KEY `RegNO` (`RegNO`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`RegNO`) REFERENCES `students` (`RegNO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('Admin','$2b$10$b9UnANX4t6NzzcZBO9rbzOM8Cjqg/vk/4XNynGX5YLLXpcmF6F3Lq','Admin',NULL),('Housekeeper','$2b$10$p5mXPbC2bmOOb7MapDDknuYCwwtLFbqJY62OIbzLDbFiGKbMKw3lu','Housekeeper',NULL),('Matron','$2b$10$I0oCOeszbMcdQo9rzn5FXOr1O1qfPn6JH7NYjyZ7eqxpKPYyux00S','Matron',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-29 13:25:44
