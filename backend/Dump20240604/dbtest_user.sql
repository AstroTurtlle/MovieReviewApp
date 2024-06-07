CREATE DATABASE  IF NOT EXISTS `dbtest` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `dbtest`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: dbtest
-- ------------------------------------------------------
-- Server version	8.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` char(50) NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('Mirel Andrei','cartof@yahoo.com','cuie22',1),('sfsefsdf Andrei','sdfsd@yahoo.com','33333333',2),('sfsefsdf Andrei','sdfsd@yahoo.com','33333333',3),('sfsefsdf Andrei','sdfsd@yahoo.com','33333333',4),('sfsefsdf Andrei','sdfsd@yahoo.com','33333333',5),('sfsefsdfwadwadawdawdawdaaaaaaaaaaaaaa Andrei','sdfsd@yahoo.com','33333333',6),('i','efwfwfoo.com','33r3r3r3r333',7),('i','efwfwfoo.com','33r3r3r3r333',8),('i','efwfwfoo.com','33r3r3r3r333',9),('i','efwfwfoo.com','33r3r3r3r333',10),('qqqqqqqqqqqi','efwfwfoo.com','33r3r3r3r333',11),('ina','efwfwfoo.com','33r3r3r3r333',12),('\"+name+\"','\"+email+\"','\"+password+\"',13),('\"+name+\"','\"+email+\"','\"+password+\"',14),('\"+name+\"','\"+email+\"','\"+password+\"',15),('\"+name+\"','\"+email+\"','\"+password+\"',16),('\"+name+\"','\"+email+\"','\"+password+\"',17),('\"+name+\"','\"+email+\"','\"+password+\"',18),('\"+name+\"','\"+email+\"','\"+password+\"',19),('\"+name+\"','\"+email+\"','\"+password+\"',20),(NULL,'','',21),(NULL,'','',22),(NULL,'','',23),(NULL,'','',24),(NULL,'razvanpodariu12@gmail.com','123',25),('','','',26),('Pod22ariu Razvan','razvanpod2ariu12@gmail.com','123',27),('','','',28),('1','1','',29),('1','1','',30),('','','',31),('Podariu Razvan','razvanpodariu12@gmail.com','',32),('Podariu Razvan','','',33),('Podariu Razvan','','',34),('','wdadaw','',35),('','wdadaw22222222222222222','',36),('123','123','123',37),('123','123','123',38),('Podariu Razvan','razvanpodariu12@gmail.com','123',39),('123','123','123',40),('123','123333','123',41);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-04  1:29:42
