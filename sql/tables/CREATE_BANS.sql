CREATE TABLE `bans` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`userid` int(11) NOT NULL,
`startdate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`enddate` datetime NOT NULL,
`reasonid` int(11) NOT NULL,
`admin` varchar(45) NOT NULL,
`details` tinytext NOT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
