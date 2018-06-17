SELECT
exchangeme.news.author,
exchangeme.news.date,
exchangeme.news.content,
exchangeme.accounts.creationdate
FROM 
exchangeme.news,
exchangeme.accounts
ORDER BY exchangeme.news.id DESC;