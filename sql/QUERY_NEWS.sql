SELECT
exchangeme.accounts.username,
exchangeme.news.date,
exchangeme.news.content
FROM exchangeme.news
INNER JOIN exchangeme.accounts ON exchangeme.news.userid = exchangeme.accounts.id
ORDER BY exchangeme.news.id DESC;