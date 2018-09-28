INSERT INTO exchangeme.accounts (
    exchangeme.accounts.id,
    exchangeme.accounts.username,
    exchangeme.accounts.email,
    exchangeme.accounts.password,
    exchangeme.accounts.salt,
    exchangeme.accounts.firstname,
    exchangeme.accounts.lastname,
    exchangeme.accounts.alias,
    exchangeme.accounts.gender,
    exchangeme.accounts.age,
    exchangeme.accounts.occupation,
    exchangeme.accounts.company,
    exchangeme.accounts.companywebsite,
    exchangeme.accounts.website,
    exchangeme.accounts.creationdate,
    exchangeme.accounts.lastlogin,
    exchangeme.accounts.awards,
    exchangeme.accounts.ip,
    exchangeme.accounts.session,
    exchangeme.accounts.permissionid,
    exchangeme.accounts.biography,
    exchangeme.accounts.notes
) VALUES (
    DEFAULT,
    "Admin",
    "Admin@Exchange.me",
    "7526FE44F393370A1905F869D3FC3519>W'q+DgN.!C3p*]",
    ">W'q+DgN.!C3p*]",
    "Admin",
    "Istrator",
    "Admin",
    "Male",
    "1337",
    "Administrator",
    "Exchangeme",
    "Exchange.me",
    "Exchange.me",
    DEFAULT,
    CURRENT_TIME,
    "",
    "127.0.0.1",
    "***SESSION***",
    6,
    "Default Administrator Account",
    "Default Site Administrator"
)

# Password = password.01
# Salt = >W'q+DgN.!C3p*]

# Stored DB Password = md5(password.01) + >W'q+DgN.!C3p*]