SELECT
exchangeme.messages.sender,
exchangeme.messages.date,
exchangeme.messages.message
FROM exchangeme.messages
WHERE
exchangeme.messages.date > DATE_SUB(NOW(), INTERVAL 1 HOUR)
ORDER BY exchangeme.messages.date DESC;