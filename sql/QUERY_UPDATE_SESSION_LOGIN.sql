UPDATE exchangeme.accounts 
SET exchangeme.accounts.lastlogin = CURRENT_TIME,
exchangeme.accounts.ip = "127.0.0.1",
exchangeme.accounts.session = "5h790cngqpbcbqi0gfbaimv814"
WHERE exchangeme.accounts.username = "Keanu Ashwell"
OR exchangeme.accounts.email = "Supra4keanu@hotmail.com"
AND exchangeme.accounts.password = "fcb4174b1c4f85c27027295ff78df21cÊ%";