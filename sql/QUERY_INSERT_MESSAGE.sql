INSERT INTO exchangeme.messages (
exchangeme.messages.id,
exchangeme.messages.userid,
exchangeme.messages.date,
exchangeme.messages.content
)
VALUES (
DEFAULT,
    (
        SELECT
        exchangeme.accounts.id
        FROM exchangeme.accounts
        WHERE exchangeme.accounts.username = 'Keanu Ashwell'
    ),
DEFAULT,
'Test'
);