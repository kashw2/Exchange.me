SELECT 
exchangeme.accounts.username
FROM exchangeme.accounts 
WHERE exchangeme.accounts.username = 'Keanu Ashwell'
OR exchangeme.accounts.email = 'Supra4keanu@hotmail.com'
AND exchangeme.accounts.password
LIKE 'cf4853d2d95217aa1113e6e8601f4618%';