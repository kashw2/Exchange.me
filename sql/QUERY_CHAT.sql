SELECT
exchangeme.accounts.username,
exchangeme.messages.date,
exchangeme.messages.content
FROM exchangeme.messages
INNER JOIN exchangeme.accounts ON exchangeme.messages.userid = exchangeme.accounts.id
WHERE 
exchangeme.messages.date > DATE_SUB(NOW(), INTERVAL 1 HOUR)
ORDER BY exchangeme.messages.date DESC;