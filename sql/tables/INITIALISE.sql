#Create Admin Account
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
    "session",
    6,
    "Default Administrator Account",
    "Default Site Administrator"
);

# Create Test Account
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
    "Test",
    "Test@Exchange.me",
    "5ed4cd4d31ba61c558a332b2c9b89c56.hOS2R/rj!3|Ap",
    ".hOS2R/rj!3|Ap",
    "Tes",
    "ter",
    "Test",
    "Male",
    "1337",
    "Tester",
    "Exchangeme",
    "Exchange.me",
    "Exchange.me",
    DEFAULT,
    CURRENT_TIME,
    "",
    "127.0.0.1",
    "***SESSION***",
    1,
    "Default Test Account",
    "This is a Test Account"
);

INSERT INTO exchangeme.banreasons (
    exchangeme.banreasons.id,
    exchangeme.banreasons.reason
) VALUES (
    DEFAULT,
    "Custom / Undisclosed"
);

INSERT INTO exchangeme.banreasons (
    exchangeme.banreasons.id,
    exchangeme.banreasons.reason
) VALUES (
    DEFAULT,
    "Hacking"
);

INSERT INTO exchangeme.banreasons (
    exchangeme.banreasons.id,
    exchangeme.banreasons.reason
) VALUES (
    DEFAULT,
    "Spamming"
);

INSERT INTO exchangeme.banreasons (
    exchangeme.banreasons.id,
    exchangeme.banreasons.reason
) VALUES (
    DEFAULT,
    "Malicious Intent"
);

INSERT INTO exchangeme.banreasons (
    exchangeme.banreasons.id,
    exchangeme.banreasons.reason
) VALUES (
    DEFAULT,
    "Harassment"
);

INSERT INTO exchangeme.banreasons (
    exchangeme.banreasons.id,
    exchangeme.banreasons.reason
) VALUES (
    DEFAULT,
    "Racism"
);

INSERT INTO exchangeme.banreasons (
    exchangeme.banreasons.id,
    exchangeme.banreasons.reason
) VALUES (
    DEFAULT,
    "Trolling"
);

INSERT INTO exchangeme.banreasons (
    exchangeme.banreasons.id,
    exchangeme.banreasons.reason
) VALUES (
    DEFAULT,
    "Foul Language"
);

INSERT INTO exchangeme.news (
    exchangeme.news.id,
    exchangeme.news.userid,
    exchangeme.news.date,
    exchangeme.news.content
) VALUES (
    DEFAULT,
    1,
    DEFAULT,
    "Welcome to Exchange.me!"
);

INSERT INTO exchangeme.permissions (
    exchangeme.permissions.id,
    exchangeme.permissions.name
) VALUES (
    DEFAULT,
    "Banned"
);

INSERT INTO exchangeme.permissions (
    exchangeme.permissions.id,
    exchangeme.permissions.name
) VALUES (
    DEFAULT,
    "Guest"
);

INSERT INTO exchangeme.permissions (
    exchangeme.permissions.id,
    exchangeme.permissions.name
) VALUES (
    DEFAULT,
    "Registered"
);

INSERT INTO exchangeme.permissions (
    exchangeme.permissions.id,
    exchangeme.permissions.name
) VALUES (
    DEFAULT,
    "Member"
);

INSERT INTO exchangeme.permissions (
    exchangeme.permissions.id,
    exchangeme.permissions.name
) VALUES (
    DEFAULT,
    "Moderator"
);

INSERT INTO exchangeme.permissions (
    exchangeme.permissions.id,
    exchangeme.permissions.name
) VALUES (
    DEFAULT,
    "Administrator"
);

INSERT INTO exchangeme.permissions (
    exchangeme.permissions.id,
    exchangeme.permissions.name
) VALUES (
    DEFAULT,
    "Site-Administrator"
);

# Information for Admin Account
# Password = password.01
# Salt = >W'q+DgN.!C3p*]
# Stored DB Password = md5(password.01) + >W'q+DgN.!C3p*]

# Information for Test Account
# Password = password.02
# Salt = .hOS2"R/rj!3|Ap
# Stored DB Password = md5(password.02) + .hOS2R/rj!3|Ap