UPDATE exchangeme.accounts 
SET exchangeme.accounts.lastlogin = CURRENT_TIME,
exchangeme.accounts.ip = "127.0.0.1",
exchangeme.accounts.session = "9v36ig3vunp17asgnqslnsvta4"
WHERE exchangeme.accounts.session = "9v36ig3vunp17asgnqslnsvta4";