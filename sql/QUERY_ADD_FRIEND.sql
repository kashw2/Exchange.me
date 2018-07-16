INSERT INTO exchangeme.friends (
exchangeme.friends.userid,
exchangeme.friends.friendid,
exchangeme.friends.datestart
) VALUES (
    (
        SELECT
        exchangeme.accounts.id
        FROM exchangeme.accounts
        WHERE exchangeme.accounts.username = 'Keanu Ashwell'
        AND exchangeme.accounts.session = '2dj28dha8wd207808221dwa'
    ),
    (
        SELECT
        exchangeme.account.id
        FROM exchangeme.accounts
        WHERE exchangeme.accounts.username = 'Test'
    ),
DEFAULT
)