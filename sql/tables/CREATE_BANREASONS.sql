CREATE TABLE `banreasons` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`reason` varchar(50) NOT NULL,
`defaulttime` datetime DEFAULT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `reason_UNIQUE` (`reason`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
