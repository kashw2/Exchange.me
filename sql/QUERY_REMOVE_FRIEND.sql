DELETE
FROM exchangeme.friends
WHERE exchangeme.friends.userid = (
    SELECT
    exchangeme.accounts.id
    FROM exchangeme.accounts
    WHERE exchangeme.accounts.username = 'Keanu Ashwell'
)
AND exchangeme.friends.friendid = (
    SELECT
    exchangeme.accounts.id
    FROM exchangeme.accounts
    WHERE exchangeme.accounts.username = 'Test'
);