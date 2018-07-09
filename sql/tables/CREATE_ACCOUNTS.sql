CREATE TABLE `accounts` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`username` varchar(45) NOT NULL,
`email` varchar(45) NOT NULL,
`password` varchar(45) NOT NULL,
`salt` varchar(45) NOT NULL,
`firstname` varchar(100) DEFAULT NULL,
`lastname` varchar(100) DEFAULT NULL,
`alias` varchar(45) DEFAULT NULL,
`gender` varchar(45) NOT NULL,
`age` int(11) DEFAULT '0',
`occupation` varchar(100) DEFAULT NULL,
`creationdate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`lastlogin` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`awards` varchar(45) DEFAULT '',
`ip` varchar(45) NOT NULL,
`session` varchar(200) NOT NULL,
`permissionid` int(11) DEFAULT '0',
`notes` text,
PRIMARY KEY (`id`),
UNIQUE KEY `username_UNIQUE` (`username`),
UNIQUE KEY `email_UNIQUE` (`email`),
UNIQUE KEY `password_UNIQUE` (`password`),
UNIQUE KEY `salt_UNIQUE` (`salt`),
UNIQUE KEY `ip_UNIQUE` (`ip`),
UNIQUE KEY `session_UNIQUE` (`session`),
KEY `permissions_idx` (`permissionid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
