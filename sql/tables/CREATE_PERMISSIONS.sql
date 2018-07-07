CREATE TABLE `permissions` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`name` varchar(50) NOT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `permission_UNIQUE` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
