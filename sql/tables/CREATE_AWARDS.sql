CREATE TABLE `awards` (
`id` int(11) NOT NULL,
`name` varchar(45) NOT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
