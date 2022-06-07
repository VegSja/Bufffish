CREATE TABLE user(
       user_id TEXT PRIMARY KEY,
       auth_code TEXT NOT NULL UNIQUE,
       strava_access_code TEXT NOT NULL,
       strava_refresh_token TEXT NOT NULL,
       firstname TEXT,
       lastname TEXT,
       email TEXT UNIQUE
);

CREATE TABLE dates(
       date_id TEXT PRIMARY KEY,
       day INTEGER,
       month INTEGER,
       year INTEGER
);

CREATE TABLE activity(
       id TEXT PRIMARY KEY,
       strava_id TEXT UNIQUE,
       athlete TEXT NOT NULL,
       name TEXT NOT NULL,
       type TEXT NOT NULL,
       distance REAL,
       moving_time INTEGER,
       elapsed_time INTEGER,
       elevation_gain REAL,
       date_id TEXT NOT NULL,
       start_lat REAL,
       start_lng REAL,
       end_lat REAL,
       end_lng REAL,
       average_speed REAL,
       max_speed REAL,
       FOREIGN KEY(athlete) REFERENCES user(user_id) ON DELETE CASCADE
       FOREIGN KEY(date_id) REFERENCES dates(date_id) ON DELETE CASCADE
);

