-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: tecnomundo
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.27-MariaDB

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
-- Table structure for table `discount`
--

DROP TABLE IF EXISTS `discount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `discount` (
  `id` int(11) NOT NULL,
  `discountCode` varchar(100) NOT NULL,
  `porcentage` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discount`
--

LOCK TABLES `discount` WRITE;
/*!40000 ALTER TABLE `discount` DISABLE KEYS */;
INSERT INTO `discount` VALUES (1,'MEGAOFERTA',10),(2,'MESSI10',20),(3,'TECNO50',50),(4,'IPHONE13',30);
/*!40000 ALTER TABLE `discount` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) unsigned NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `paymentMethod` varchar(25) NOT NULL,
  `shippingMethod` varchar(25) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (13,3,433998.00,'creditCard','correo','2022-09-07 08:28:13','2022-09-07 08:28:13',NULL),(14,3,61999.00,'creditCard','correo','2022-09-07 08:30:11','2022-09-07 08:30:11',NULL),(15,3,61999.00,'Débito','Cadete','2022-09-07 08:56:20','2022-09-07 08:56:20',NULL),(16,3,187361.00,'Crédito','Correo','2022-09-07 08:57:13','2022-09-07 08:57:13',NULL),(17,14,110500.00,'Efectivo','Cadete','2022-09-07 09:00:36','2022-09-07 09:00:36',NULL),(18,12,602926.00,'Efectivo','Correo','2022-09-07 09:25:58','2022-09-07 09:25:58',NULL),(19,12,61999.00,'Efectivo','Cadete','2022-09-07 09:31:06','2022-09-07 09:31:06',NULL),(20,12,173400.00,'Débito','Correo','2022-09-08 03:50:47','2022-09-08 03:50:47',NULL),(21,12,59500.00,'Efectivo','Correo','2022-09-08 03:52:26','2022-09-08 03:52:26',NULL),(22,12,61999.00,'Débito','Andreani','2022-09-08 03:57:00','2022-09-08 03:57:00',NULL),(23,12,246499.00,'Débito','Correo','2022-09-08 04:04:42','2022-09-08 04:04:42',NULL),(24,12,61999.00,'Débito','Correo','2022-09-08 04:05:34','2022-09-08 04:05:34',NULL),(25,12,61999.00,'Débito','DHL','2022-09-08 22:46:47','2022-09-08 22:46:47',NULL),(26,12,61999.00,'Efectivo','Andreani','2022-09-08 22:49:15','2022-09-08 22:49:15',NULL),(27,12,52699.15,'Débito','Correo','2022-09-09 11:20:04','2022-09-09 11:20:04',NULL),(28,12,61999.00,'Débito','Cadete','2022-09-09 11:33:16','2022-09-09 11:33:16',NULL),(29,12,113900.00,'Efectivo','Cadete','2022-09-09 11:33:56','2022-09-09 11:33:56',NULL),(30,12,50575.00,'Efectivo','Cadete','2022-09-09 11:34:28','2022-09-09 11:34:28',NULL),(31,12,50575.00,'Débito','Andreani','2022-09-09 11:35:42','2022-09-09 11:35:42',NULL),(32,12,202213.30,'Débito','Correo','2022-09-09 12:00:27','2022-09-09 12:00:27',NULL),(33,12,539664.15,'Débito','Andreani','2022-09-09 12:05:16','2022-09-09 12:05:16',NULL),(34,12,1298099.60,'Débito','Correo','2022-09-11 00:37:23','2022-09-11 00:37:23',NULL),(35,12,0.00,'Efectivo','Cadete','2022-09-11 01:03:10','2022-09-11 01:03:10',NULL),(36,16,425247.30,'Débito','Correo','2023-01-21 15:31:51','2023-01-21 15:31:51',NULL),(37,16,298350.00,'Crédito','Correo','2023-01-21 15:33:41','2023-01-21 15:33:41',NULL);
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderitem`
--

DROP TABLE IF EXISTS `orderitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderitem` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orderId` int(11) NOT NULL,
  `productId` int(11) unsigned DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `orderId` (`orderId`),
  KEY `productId` (`productId`),
  CONSTRAINT `orderitems_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `order` (`id`),
  CONSTRAINT `orderitems_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderitem`
--

LOCK TABLES `orderitem` WRITE;
/*!40000 ALTER TABLE `orderitem` DISABLE KEYS */;
INSERT INTO `orderitem` VALUES (7,13,2,'Samsung Galaxy A22 ',59500.00,2,'2022-09-07 08:28:13','2022-09-07 08:28:13',NULL),(8,13,16,'Notebook Dell Inspiron',157499.10,2,'2022-09-07 08:28:13','2022-09-07 08:28:13',NULL),(9,14,10,'Samsung Galaxy Tab A8',61999.00,1,'2022-09-07 08:30:11','2022-09-07 08:30:11',NULL),(10,15,10,'Samsung Galaxy Tab A8',61999.00,1,'2022-09-07 08:56:20','2022-09-07 08:56:20',NULL),(11,16,3,'Samsung Galaxy A03',41363.10,1,'2022-09-07 08:57:13','2022-09-07 08:57:13',NULL),(12,16,4,'Xiaomi Redmi Note 11',83999.00,1,'2022-09-07 08:57:13','2022-09-07 08:57:13',NULL),(13,16,10,'Samsung Galaxy Tab A8',61999.00,1,'2022-09-07 08:57:13','2022-09-07 08:57:13',NULL),(14,17,15,'Notebook Lenovo IdeaPad',110500.00,1,'2022-09-07 09:00:36','2022-09-07 09:00:36',NULL),(15,18,1,'Samsung Galaxy M23',113900.00,3,'2022-09-07 09:25:58','2022-09-07 09:25:58',NULL),(16,18,2,'Samsung Galaxy A22 ',59500.00,3,'2022-09-07 09:25:58','2022-09-07 09:25:58',NULL),(17,18,3,'Samsung Galaxy A03',41363.10,2,'2022-09-07 09:25:58','2022-09-07 09:25:58',NULL),(18,19,10,'Samsung Galaxy Tab A8',61999.00,1,'2022-09-07 09:31:06','2022-09-07 09:31:06',NULL),(19,20,1,'Samsung Galaxy M23',113900.00,1,'2022-09-08 03:50:47','2022-09-08 03:50:47',NULL),(20,20,2,'Samsung Galaxy A22 ',59500.00,1,'2022-09-08 03:50:47','2022-09-08 03:50:47',NULL),(21,21,2,'Samsung Galaxy A22 ',59500.00,1,'2022-09-08 03:52:26','2022-09-08 03:52:26',NULL),(22,22,10,'Samsung Galaxy Tab A8',61999.00,1,'2022-09-08 03:57:00','2022-09-08 03:57:00',NULL),(23,23,11,'Samsung Galaxy Tab S8',246499.15,1,'2022-09-08 04:04:42','2022-09-08 04:04:42',NULL),(24,24,10,'Samsung Galaxy Tab A8',61999.00,1,'2022-09-08 04:05:34','2022-09-08 04:05:34',NULL),(25,25,10,'Samsung Galaxy Tab A8',61999.00,1,'2022-09-08 22:46:47','2022-09-08 22:46:47',NULL),(26,26,10,'Samsung Galaxy Tab A8',61999.00,1,'2022-09-08 22:49:15','2022-09-08 22:49:15',NULL),(27,27,10,'Samsung Galaxy Tab A8',61999.00,1,'2022-09-09 11:20:04','2022-09-09 11:20:04',NULL),(28,28,10,'Samsung Galaxy Tab A8',61999.00,1,'2022-09-09 11:33:16','2022-09-09 11:33:16',NULL),(29,29,1,'Samsung Galaxy M23',113900.00,1,'2022-09-09 11:33:56','2022-09-09 11:33:56',NULL),(30,30,2,'Samsung Galaxy A22 ',59500.00,1,'2022-09-09 11:34:28','2022-09-09 11:34:28',NULL),(31,31,2,'Samsung Galaxy A22 ',59500.00,1,'2022-09-09 11:35:42','2022-09-09 11:35:42',NULL),(32,32,1,'Samsung Galaxy M23',113900.00,1,'2022-09-09 12:00:27','2022-09-09 12:00:27',NULL),(33,32,10,'Samsung Galaxy Tab A8',61999.00,2,'2022-09-09 12:00:27','2022-09-09 12:00:27',NULL),(34,33,1,'Samsung Galaxy M23',113900.00,1,'2022-09-09 12:05:16','2022-09-09 12:05:16',NULL),(35,33,19,'Apple MacBook Pro ',520999.00,1,'2022-09-09 12:05:16','2022-09-09 12:05:16',NULL),(36,34,15,'Notebook Lenovo IdeaPad',110500.00,1,'2022-09-11 00:37:23','2022-09-11 00:37:23',NULL),(37,34,17,'Notebook Lenovo IP',131999.00,1,'2022-09-11 00:37:23','2022-09-11 00:37:23',NULL),(38,34,16,'Notebook Dell Inspiron',157499.10,1,'2022-09-11 00:37:23','2022-09-11 00:37:23',NULL),(39,34,21,'Dell Vostro 5620',167500.00,1,'2022-09-11 00:37:23','2022-09-11 00:37:23',NULL),(40,34,19,'Apple MacBook Pro ',520999.00,1,'2022-09-11 00:37:23','2022-09-11 00:37:23',NULL),(41,34,18,'Apple MacBook Air ',158099.15,1,'2022-09-11 00:37:23','2022-09-11 00:37:23',NULL),(42,34,22,'Lenovo Yoga Slim 7i',122580.00,1,'2022-09-11 00:37:23','2022-09-11 00:37:23',NULL),(43,34,20,'Lenovo IdeaPad Slim 5',158000.00,1,'2022-09-11 00:37:23','2022-09-11 00:37:23',NULL),(44,36,16,'Notebook Dell Inspiron',157499.10,3,'2023-01-21 15:31:51','2023-01-21 15:31:51',NULL),(45,37,15,'Notebook Lenovo IdeaPad',110500.00,3,'2023-01-21 15:33:41','2023-01-21 15:33:41',NULL);
/*!40000 ALTER TABLE `orderitem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` mediumtext NOT NULL,
  `price_product` float unsigned NOT NULL,
  `discount` decimal(5,0) unsigned NOT NULL,
  `category` varchar(50) NOT NULL,
  `image_product` varchar(200) NOT NULL,
  `section` varchar(50) NOT NULL,
  `brand` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Samsung Galaxy M23','Pantalla: 6.6 , 1080 x 2408 pixels, Procesador: Octa-core 2.2GHz, RAM: 4GB, Almacenamiento: 128GB, Expansión: microSD, Cámara: Triple, 50MP+8MP+2MP, Batería: 5000 mAh, OS: Android 1',134000,15,'phones','samsung-Galaxy-m23.png','celulares','Samsung'),(2,'Samsung Galaxy A22 ','Pantalla: 6.4, 720 x 1600 pixels, Procesador: Mediatek Helio G80 2GHz, RAM: 4GB/6GB, Almacenamiento: 64GB/128GB, xpansión: microSD, Cámara: Cuádruple, 48MP+8MP +2MP+2MP, Batería: 5000 mAh, OS: Android 11',59500,0,'phones','samsung-galaxy-A22.png','celulares','Samsung'),(3,'Samsung Galaxy A03','Pantalla PLS IPS de 6,5 pulgadas con resolución HD+ (1.600 x 720 píxeles) en formato 20:9. GPU sin concretar. Si utiliza un SoC MediaTek, veremos una PowerVR o una Mali. 3 GB-4 GB de RAM. 32 GB-64 GB-128 GB de capacidad de almacenamiento ampliable. ',45959,10,'phones','Samsung-Galaxy-A03.png','celulares','Samsung'),(4,'Xiaomi Redmi Note 11','Pantalla: 6.5, 1080 x 2400 pixels, Procesador: Mediatek Dimensity 700 2.2GHz, RAM: 4GB/8GB,Almacenamiento: 128GB, Expansión: sin microSD, Cámara: Dual, 48MP+2MP, Batería: 5000 mAh, OS: Android 11',83999,0,'phones','xiaomi-note11.png','lo mas buscado','Xiaomi'),(5,'Xiaomi Poco M3 ','Sistema operativo: Android 10 + MIUI 12 for POCO Almacenamiento: 128GB Interna 4GB Ram Procesador: Qualcomm Snapdragon 662 GPU Adreno 610 Pantalla: - 6,53 Pulgadas FullHD+Contraste 1.500:1',89995,15,'phones','xiaomi-poco.png','celulares','Xiamoi'),(6,'Xiaomi Poco F3','Pantalla: 6.67, 1080 x 2400 pixels, Procesador: Snapdragon 870 5G 3.2GHz, RAM: 6GB/8GB, Almacenamiento: 128GB/256GB, Expansión: sin microSD, Cámara: Triple, 48MP+8MP+5MP, Batería: 4520 mAh, OS: Android 11',148000,0,'phones','xiaomi-poco-F3.png','celulares','Xiaomi'),(7,'Huawei Mate 30 Pro','Pantalla: 6.53, 1176 x 2400 pixels, Procesador: Kirin 990E 5G 2.86GHz, RAM: 8GB, Almacenamiento: 128GB/256GB, Expansión: NM, Cámara: Cuádruple, 40MP+8MP +40MP+TOF 3D, Batería: 4500 mAh, OS: Android 10',499000,15,'phones','huawei-mate30.png','lo mas buscado','Huawei'),(8,'Huawei 30E Pro','Pantalla: 6.53, 1176 x 2400 pixels, Procesador: Kirin 990E 5G 2.86GHz, RAM: 8GB, Almacenamiento: 128GB/256GB, Expansión: NM, Cámara: Cuádruple, 40MP+8MP +40MP+TOF 3D, Batería: 4500 mAh, OS: Android 10',449500,10,'phones','huawei-p30.png','celulares','Huawei'),(9,'Huawei P50 Pro ','Pantalla: 6.6, 1228 x 2700 pixels, Procesador: Snapdragon 888 2.84GHz / Kirin 9000 3.13GHz, RAM: 8GB/12GB, Almacenamiento: 128GB/256GB/512GB, Expansión: NM, Cámara: Cuádruple, 50MP+64MP +13MP+40MP, Batería: 4360 mAh, OS: HarmonyOS 2.0',370000,0,'phones','huawei-P50.png','celulares','Huawei'),(10,'Samsung Galaxy Tab A8','Pantalla: 10.5, 1200 x 1920 pixels, Procesador: Unisoc T618 2GHz,RAM: 3GB/4GB, Almacenamiento: 32GB/64GB/128GB, Expansión: microSD, Cámara: 8 MP, Batería: 7040 mAh, OS: Android 11',61999,0,'tablets','galaxy-tab8.png','lo mas buscado','Samsung'),(11,'Samsung Galaxy Tab S8','Pantalla: 14.6, 1848 x 2960 pixels, Procesador: Snapdragon 8 Gen 1 3GHz, RAM: 8GB/12GB/16GB, Almacenamiento: 128GB/256GB/512GB, Expansión: microSD, Cámara: Dual, 13MP+6MP, Batería: 11200 mAh, OS: Android 12',289999,15,'tablets','galaxy-tabS8.png','tablets','Samsung'),(12,' Samsung Galaxy Tab S7','Pantalla: 11, 1668 x 2560 pixels, Procesador: Snapdragon 865+ 3.09GHz, RAM: 6GB/8GB, Almacenamiento: 128GB/256GB, Expansión: microSD, Cámara: Dual, 13MP+5MP, Batería: 8000 mAh, OS: Android 10',155000,10,'tablets','galaxy-tabS7.png','tablets','Samsung'),(13,'Tablet Lenovo Tab P11','Pantalla: 11, 2.000 x 1.200 pixels, Procesador: Snapdragon 662, RAM: 4GB/6GB, Almacenamiento: 68GB/128GB, Expansión: microSD, Cámara: Dual, 13MP+5MP, Batería: 7.500 mAh, OS: Android 10',78000,0,'tablets','lenovo-P11.png','tablets','Lenovo'),(14,'Tablet Xiaomi Pad 5','Pantalla: 11, 2560 x 1600 pixels, Procesador: Qualcomm Adreno 640, RAM: 6GB, Almacenamiento: 1256GB, Expansión: microSD, Cámara: Dual, 13MP+8MP, Batería: 8720 mAh, OS: Android 11',100000,10,'tablets','xiaomi-pad5.png','tablets','Xiaomi'),(15,'Notebook Lenovo IdeaPad','Pantalla: 14, 1366 x 768 pixels, Procesador: Intel Core i5, RAM: 4GB/12GB, Almacenamiento: 256GB, Expansión: SSD,Cámara:0.3 Mpx, Conectividad: HDMI y USB  , Batería: 7.7 h , OS: Windows 11',110500,0,'laptops','lenovo-ideaPad.png','lo mas buscado','Lenovo'),(16,'Notebook Dell Inspiron','Pantalla: 15.6, 1366 x 768 pixels, Procesador: AMD Radeon RX Vega 8 (Ryzen 2000/3000), RAM: 16GB, Almacenamiento: 256GB, Expansión: SSD, Cámara: 0.92 Mpx, Conectividad: HDMI y USB  , Tipo de Batería: Polímero de litio , OS: Windows 10',174999,10,'laptops','dell-inspiron3505.png','laptops','Dell'),(17,'Notebook Lenovo IP','Pantalla: 15.6, 1366 x 768 pixels, Procesador: Intel Core i3, RAM: 8GB/16GB, Almacenamiento: 256GB, Expansión: SSD, Cámara:0.3 Mpx, Conectividad: HDMI y USB  , Batería: 7h , OS: Windows 10',131999,0,'laptops','lenovo-ideaPad.png','tablets','Lenovo'),(18,'Apple MacBook Air ','Pantalla: 13.3, 2560 x 1600 pixels, Procesador: Apple M1 8-Core GPU, RAM: 8GB/16GB, Almacenamiento: 256GB, Expansión: SSD, Cámara:0.3 Mpx, Conectividad: USB  , Batería: 18h , OS: macOS',185999,15,'laptops','apple-macbookAir.png','laptops','Apple'),(19,'Apple MacBook Pro ','Pantalla: 16.2, 3456 x 2234 pixels, Procesador: Apple M1 Pro, RAM: 8GB/16GB, Almacenamiento: 512GB, Expansión: SSD, Cámara:0.3 Mpx, Conectividad: HDMI y USB  , Batería: 21h , OS: macOS',520999,0,'laptops','apple-macbookPro.png','laptops','Apple'),(20,'Lenovo IdeaPad Slim 5','Pantalla: 14-inch 1920 x 1080 px IPS 60 Hz, 16:9, non-touch, matte, AU Optronics B140HAN04. Procesador: AMD Renoir Ryzen 5 4500U, 6C/6T. Video: AMD Radeon Vega 6, 6 CUs, 1.5 GHz. Memory: 16 GB DDR4 3200 MHz (soldered).Storage: 1x 512 GB SSD (Samsung PM991 MZALQ512HALU-000L2 M.2 2230), one extra M.2 2280 free slot',158000,0,'laptops','Lenovo-Ipad-Slim-5.png','laptops','Lenovo'),(21,'Dell Vostro 5620','Procesador: 12th Gen Intel® Core™ i5-1240P (12 MB cache, 12 cores, 16 threads, up to 4.40 GHz Turbo). Sistema Operativo: Windows 11 Pro, English. Tarjeta de Video: Intel® Iris® Xe Graphics. Display: 16.0-inch 16:10 FHD+ (1920 x 1200) Anti-Glare Non-Touch 250nits WVA Display with ComfortView Suppor. Memoria: 16GB, 2x8GB, DDR4, 3200MHz',167500,0,'laptops','Dell-Vostro-5620.png','laptops','Dell'),(22,'Lenovo Yoga Slim 7i','Procesador: 12th Generation Intel® Core™ i7-1260P Processor (E-cores up to 3.40 GHz P-cores up to 4.70 GHz). Sistema Operativo: Windows 11 Home 64. Tarjeta Gráfica Integrada. Memoria: 16 GB LPDDR5-5200MHz ',136200,10,'laptops','Lenovo-Yoga-Slim-7i.png','laptops','Lenovo'),(23,'Tablet Lenovo Tab M8','Pequeña pero llamativa con su diseño metálico. Espectacular pantalla HD y altavoz con tecnología Dolby Audio™. Procesador de cuatro núcleos y batería de larga duración. Colores sujetos a disponibilidad',110000,0,'tablets','Tab-M8.png','tablets','Lenovo'),(24,'Tablet Xiaomi Pad 4 Plus','LTE Tablet 4+64GB/4+128GB 10.1 Inch Portable Millet Tablet 1920x1200 FHD Tablets 13MP + 5MP Camera - Black',90000,10,'tablets','Xiaomi-MiPad-4.png','tablets','Xiaomi'),(25,'Samsung Galaxy Tab A','Velocidad CPU 1.8GHz, 1.6GHz. Tamaño (Pantalla principal) 10.1\" (255.4mm). Cámara Principal - Resolución 8.0 MP. Peso (g) 469. Tiempo de Reproducción de Video (Horas) Hasta 13.',125000,10,'tablets','Samsung-Galaxy-Tab-A.png','tablets','Samsung');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `image_product` varchar(100) NOT NULL,
  `role` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Nataniel','Isaksen','nisaksen0@a8.net','d3MZ36RlRf','user_1.jpg',1),(2,'Lissa','Andrea','landrea1@geocities.jp','GEZ8AqWXj','user_2.jpg',1),(3,'Margaux','Pippard','mpippard2@seattletimes.com','2SXDw8P','user_3.jpg',1),(4,'Reggy','Mulryan','rmulryan3@bigcartel.com','jz5whrX','user_4.jpg',1),(5,'Ally','Tremblay','atremblay4@wunderground.com','eQOkoyWvn','user_5.jpg',1),(6,'Evangelin','Acreman','eacreman5@google.nl','DLmjhS8rmUb','user_6.jpg',1),(7,'Marmaduke','Farren','mfarren6@e-recht24.de','Y210UwnQ','user_7.jpg',1),(8,'Zacherie','Karlsson','zkarlsson7@ucoz.com','Jl1MJPvmvHN','user_8.jpg',1),(9,'Maria','Abdo','mjabdo@hotmail.com','$2a$10$uy1r9XBSp2B1HsOmk.3te.819T9cQ/QzFLVYwXFpnLuAwwqXV0BzC','1661338098353_img.jpg',1),(10,'Maria','Abdo','jorabdo1991@gmail.com','$2a$10$74.eL2MFq.aXZKJw3yw.oe/IrjtYRJVN/ooeS7JzOJGg5R.lj41XS','1661344099631_img.jpg',1),(12,'Pablo','Resch','pabloresch011@gmail.com','$2a$10$fwxm1bgLpDEZgEXIjWFOIem9UBCFtvFteqwPfCic6sPHp3fmgMCHi','1662334849745_img.jpg',9),(13,'Pablo','Resch','pabloresch007@hotmail.com','$2a$10$C2GTkiW/KPTGFepb5Is5pODVxf8TJCdM2Eogrkm7FmcZ.GQiGgy1K','1662335038022_img.png',1),(14,'pablo','res','pabloresch020@gmail.com','$2a$10$kKVQwph774niLsZxr3CYaefgQHQ2py.aZxX4xt4eVkEssORjW07oO','1662541179009_img.jpg',1),(15,'Pablo','Francisco','edu@gmail.com','$2a$10$IIE1XGoNyO/OFzUH.mGs..30QCcM5hR/szxR5kNyyiswIRL1IddBy','1662586229382_img.jpg',1),(16,'Pablo','Resch','pabloresch012@gmail.com','$2a$10$z85xFhCwhAnQN40BS/BAxeGo59CejcBR4SM4EvCDIkGCQBgj670Ze','1674315073566_img.jpeg',1),(17,'Pablo','Resch','pabloresch013@gmail.com','$2a$10$vEbFlPAjjZlYuFkWhKllCOlekIC7Jj433S46jyvekJ.XsRjHPZ33u','1691527515039_img.png',9);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'tecnomundo'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-16 19:49:15
