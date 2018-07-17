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
        AND exchangeme.accounts.session = 'd78wa82769n7d2yuaijda'
    ),
    (
        SELECT
        exchangeme.accounts.id
        FROM exchangeme.accounts
        WHERE exchangeme.accounts.username = 'Test'
    ),
DEFAULT
);