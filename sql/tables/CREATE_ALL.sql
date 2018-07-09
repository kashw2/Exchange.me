CREATE DATABASE IF NOT EXISTS `exchangeme` /*!40100 DEFAULT CHARACTER SET latin1 */;

CREATE TABLE IF NOT EXISTS exchangeme.`accounts` (
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

CREATE TABLE IF NOT EXISTS exchangeme.`awards` (
`id` int(11) NOT NULL,
`name` varchar(45) NOT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS exchangeme.`banreasons` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`reason` varchar(50) NOT NULL,
`defaulttime` datetime DEFAULT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `reason_UNIQUE` (`reason`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS exchangeme.`bans` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`userid` int(11) NOT NULL,
`startdate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`enddate` datetime NOT NULL,
`reasonid` int(11) NOT NULL,
`admin` varchar(45) NOT NULL,
`details` tinytext NOT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS exchangeme.`messages` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`userid` int(11) NOT NULL,
`date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`content` tinytext NOT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS exchangeme.`news` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`userid` int(11) NOT NULL,
`date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`content` mediumtext NOT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `date_UNIQUE` (`date`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS exchangeme.`permissions` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`name` varchar(50) NOT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `permission_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;