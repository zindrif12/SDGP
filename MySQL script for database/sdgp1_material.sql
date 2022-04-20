-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: sdgp1
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `material`
--

DROP TABLE IF EXISTS `material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `material` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `mtr_bin` varchar(255) DEFAULT NULL,
  `mtr_duration` int DEFAULT NULL,
  `mtr_max_stock` int DEFAULT NULL,
  `mtr_min_stock` int DEFAULT NULL,
  `mtr_name` varchar(255) DEFAULT NULL,
  `mtr_no` varchar(255) DEFAULT NULL,
  `mtr_status` int DEFAULT NULL,
  `mtr_vendor` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `material`
--

LOCK TABLES `material` WRITE;
/*!40000 ALTER TABLE `material` DISABLE KEYS */;
INSERT INTO `material` VALUES (1,'23B',10,200,40,'Maggie Cocunut Milk Powder 300g','MCMP',1,'Nestley'),(2,'24C',10,500,20,'Nestea 25g','N',1,'Nestley'),(3,'24C',10,200,50,'Nespray Every Day 23g','NE',1,'Nestley'),(4,'24D',10,400,100,'Milo 400g','400M',1,'Nestley'),(5,'24D',10,400,100,'Milo 200g','200M',1,'Nestley'),(6,'25A',10,300,150,'Maggie Chicken Cube','MCC',1,'Nestley'),(7,'25B',10,500,200,'Maggie Daiya','MD',1,'Nestley'),(8,'26A',10,150,50,'Cerelac Mixed Fruits','CMF',1,'Nestley'),(9,'26B',10,400,200,'Milkmaid','MM',1,'Nestley'),(10,'27A',15,400,110,'Samaposha','SP',1,'CBL'),(11,'28A',15,500,100,'Cream Cracker Small','CCS',1,'CBL'),(12,'28B',20,500,100,'Cream Cracker Small maliban','CCSM',1,'Maliban'),(13,'28A',20,500,200,'Highland Milk Powder','HMP',1,'Highland'),(14,'28B',20,600,200,'Mari Biscuit','MB',1,'Maliban'),(15,'30C',20,250,50,'Elephant House Ice Cream','EHCI',1,'PLC'),(16,'31A',5,200,60,'Kothmale Milk packet','KMP',1,'PLC'),(17,'32A',21,500,200,'Anchor Milk Powder','AMP',1,'Fonterra');
/*!40000 ALTER TABLE `material` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-22 12:00:05
