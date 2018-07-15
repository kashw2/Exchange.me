SELECT
exchangeme.accounts.username,
exchangeme.accounts.lastlogin
FROM exchangeme.accounts
WHERE exchangeme.accounts.lastlogin > DATE_SUB(NOW(), INTERVAL 60 MINUTE)
ORDER BY exchangeme.accounts.lastlogin DESC;