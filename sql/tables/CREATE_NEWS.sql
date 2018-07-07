CREATE TABLE `news` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`userid` int(11) NOT NULL,
`date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`content` mediumtext NOT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `date_UNIQUE` (`date`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
