CREATE TABLE `friends` (
`userid` int(10) unsigned NOT NULL,
`friendid` int(10) unsigned NOT NULL,
`datestart` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
