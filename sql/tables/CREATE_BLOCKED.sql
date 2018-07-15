CREATE TABLE `blocked` (
`userid` int(10) unsigned NOT NULL,
`blockedid` int(10) unsigned NOT NULL,
`datestart` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
