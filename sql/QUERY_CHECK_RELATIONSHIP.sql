SELECT *
FROM exchangeme.friends
WHERE exchangeme.friends.userid = (
    SELECT
    exchangeme.accounts.id
    FROM exchangeme.accounts
    WHERE exchangeme.accounts.username = 'Keanu Ashwell'
    AND exchangeme.accounts.session = '4q3uljhanptvab1p0gf0k0fa70'
)
AND exchangeme.friends.friendid = ( 
    SELECT
    exchangeme.accounts.id
    FROM exchangeme.accounts
    WHERE exchangeme.accounts.username = 'Test'
);