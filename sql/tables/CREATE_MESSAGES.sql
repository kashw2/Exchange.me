CREATE TABLE `messages` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`userid` int(11) NOT NULL,
`date` datetime NOT NULL,
`contents` tinytext NOT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
