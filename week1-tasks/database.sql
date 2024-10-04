


-- Create the new table with the correct data type for date_added
CREATE TABLE quotes (
    id INT IDENTITY(1,1) PRIMARY KEY,
    quote_text TEXT NOT NULL,
    author_name VARCHAR(255),
    date_added DATETIME DEFAULT CURRENT_TIMESTAMP
);

select * from quotes; 

-- Insert data the new table with the correct data 

 INSERT INTO quotes (quote_text, author_name) VALUES 
('Self-respect and self-reliance are the greatest virtues of a person.', 'Chhatrapati Shivaji Maharaj'),
('Freedom is my birthright, and I shall have it.', 'Bal Gangadhar Tilak'),
('Life should be great rather than long.', 'Dr. B.R. Ambedkar'),
('Every drop of my blood will contribute to the growth of this nation.', 'Vinoba Bhave'),
('One who keeps striving is never defeated.', 'Savitribai Phule'),
('We must unite to uplift the society.', 'Mahatma Jyotiba Phule'),
('Do not be afraid of anything. You will do marvelous work.', 'Swami Vivekananda'),
('To uplift the downtrodden is the highest form of service.', 'Dr. B.R. Ambedkar'),
('Where there is righteousness in the heart, there is beauty in the character.', 'A.P.J. Abdul Kalam'),
('Even if I die in the service of the nation, I will be proud of it.', 'Balasaheb Thackeray'),
('Success comes to those who act on their dreams.', 'Sharad Pawar'),
('My only aim is to make Maharashtra a progressive state.', 'Yashwantrao Chavan'),
('The power to change lies within you.', 'Chhatrapati Shivaji Maharaj'),
('Education is the greatest tool for social revolution.', 'Mahatma Jyotiba Phule'),
('Women are the pillars of society.', 'Savitribai Phule'),
('The mind is its own place and can make a heaven of hell, a hell of heaven.', 'Pandit Ramabai'),
('Patience, persistence, and perspiration make an unbeatable combination for success.', 'Dadasaheb Phalke'),
('Social reform is the essence of true progress.', 'Dr. B.R. Ambedkar'),
('In the battle for justice, courage is the first weapon.', 'Chhatrapati Shivaji Maharaj'),
('A small spark can ignite a great fire.', 'Vinoba Bhave'); 

select * from quotes;