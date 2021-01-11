users:

id: INTEGER PRIMARY KEY
firstname: TEXT
lastname: TEXT
birthday: DATETIME
password_hash: TEXT
bio: TEXT
join_date: DATETIME
location: TEXT

posts:

id: INTEGER PRIMARY KEY
user_id: INTEGER FOREIGN KEY REFERENCES users(id)
text: TEXT
timestamp: DATETIME DEFAULT CURRENT TIME
likes: INTEGER DEFAULT 0

friends:

id: INTEGER PRIMARY KEY
sender_id: INTEGER FOREIGN KEY REFERENCES users(id)
recipient_id: INTEGER FOREIGN KEY REFERENCES users(id)
status: TEXT (enum?)
date_requested: DATETIME DEFAULT CURRENT TIME
date_responded: DATETIME (nullable)
