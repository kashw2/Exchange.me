CREATE TABLE IF NOT EXISTS `accounts` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`username` varchar(50) NOT NULL,
`email` varchar(50) NOT NULL,
`password` varchar(75) NOT NULL,
`salt` varchar(45) NOT NULL,
`firstname` varchar(100) DEFAULT NULL,
`lastname` varchar(100) DEFAULT NULL,
`alias` varchar(45) DEFAULT NULL,
`gender` varchar(45) NOT NULL,
`age` int(11) DEFAULT '0',
`occupation` varchar(45) DEFAULT NULL,
`company` varchar(45) DEFAULT NULL,
`companywebsite` varchar(50) DEFAULT NULL,
`website` varchar(50) DEFAULT NULL,
`creationdate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`lastlogin` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`awards` varchar(45) DEFAULT '',
`ip` varchar(45) NOT NULL,
`session` varchar(200) NOT NULL,
`permissionid` int(11) DEFAULT '0',
`biography` mediumtext,
`notes` text,
PRIMARY KEY (`id`),
UNIQUE KEY `username_UNIQUE` (`username`),
UNIQUE KEY `email_UNIQUE` (`email`),
UNIQUE KEY `password_UNIQUE` (`password`),
UNIQUE KEY `salt_UNIQUE` (`salt`),
UNIQUE KEY `session_UNIQUE` (`session`),
KEY `permissions_idx` (`permissionid`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `awards` (
`id` int(11) NOT NULL,
`name` varchar(45) NOT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `banreasons` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`reason` varchar(50) NOT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `reason_UNIQUE` (`reason`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `bans` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`userid` int(11) NOT NULL,
`startdate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`enddate` datetime NOT NULL,
`reasonid` int(11) NOT NULL,
`admin` varchar(45) NOT NULL,
`details` mediumtext NOT NULL,
`ip` varchar(45) NOT NULL,
`lastmodified` datetime DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `blocked` (
`userid` int(10) unsigned NOT NULL,
`blockedid` int(10) unsigned NOT NULL,
`datestart` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `deletedbans` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`userid` int(11) NOT NULL,
`startdate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`enddate` datetime NOT NULL,
`reasonid` int(11) NOT NULL,
`admin` varchar(45) NOT NULL,
`details` mediumtext NOT NULL,
`ip` varchar(45) NOT NULL,
`lastmodified` datetime DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `deletedwarnings` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`userid` varchar(45) NOT NULL,
`date` datetime NOT NULL,
`admin` varchar(45) NOT NULL,
`brief` tinytext NOT NULL,
`ip` varchar(45) NOT NULL,
`lastmodified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `editedbans` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`bannumber` int(11) NOT NULL,
`admin` varchar(45) NOT NULL,
`reason` text NOT NULL,
`date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`adminip` varchar(45) NOT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=05 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `friends` (
`userid` int(10) unsigned NOT NULL,
`friendid` int(10) unsigned NOT NULL,
`datestart` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `messages` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`userid` int(11) NOT NULL,
`date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`content` tinytext NOT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `news` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`userid` int(11) NOT NULL,
`date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`content` mediumtext NOT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `date_UNIQUE` (`date`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `permissions` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`name` varchar(50) NOT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `permission_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `reports` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`complaintantid` int(11) NOT NULL,
`userid` int(11) NOT NULL,
`details` mediumtext,
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `useroptions` (
`id` int(11) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `warnings` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`userid` int(11) NOT NULL,
`date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`admin` varchar(45) NOT NULL,
`brief` tinytext NOT NULL,
`ip` varchar(45) NOT NULL,
`lastmodified` datetime DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;