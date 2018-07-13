SELECT
exchangeme.accounts.username,
exchangeme.accounts.lastlogin
FROM exchangeme.accounts
WHERE exchangeme.accounts.lastlogin > DATE_SUB(NOW(), INTERVAL 5 MINUTE)