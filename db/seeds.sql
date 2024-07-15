-- Insert data into the genres table
INSERT INTO genres (id, name) VALUES
(1, 'Action-Adventure'),            
(2, 'Action Role-Playing'),       
(3, 'Fighting'),                            
(4, 'First-Person Shooter'),    
(5, 'Party'),                                   
(6, 'Platform'),                            
(7, 'Puzzle'),                                
(8, 'Racing'),                                
(9, 'Rail Shooter'),                      
(10, 'Role-Playing'),                   
(11, 'Run and Gun'),                    
(12, 'Sandbox'),                           
(13, 'Simulation'),                        
(14, 'Sports');                           

-- Insert data into the platforms table
INSERT INTO platforms (id, name) VALUES                
(1, 'Dreamcast'),                        
(2, 'Game Boy'),                       
(3, 'Game Boy Advance'),            
(4, 'Game Boy Color'),            
(5, 'GameCube'),                                          
(6, 'Neo Geo'),                             
(7, 'NES'),                           
(8, 'Nintendo 3DS'),                   
(9, 'Nintendo 64'),                     
(10, 'Nintendo DS'),                    
(11, 'Nintendo Switch'),           
(12, 'PC'),                                    
(13, 'PlayStation'),                   
(14, 'PlayStation 2'),                
(15, 'PlayStation 3'),             
(16, 'PlayStation 4'),           
(17, 'PlayStation 5'),           
(18, 'Sega Genesis'),                  
(19, 'Sega Saturn'),         
(20, 'SNES'),                         
(21, 'Wii'),                                      
(22, 'Wii U'),                             
(23, 'Xbox'),                           
(24, 'Xbox 360'),                      
(25, 'Xbox One'),                      
(26, 'Xbox Series X/S');           

-- Insert data into the titles table
INSERT INTO titles (name, genres_id, decade_created, platforms_id, rating) VALUES
('Animal Crossing: New Horizons', 13, 2020, 11, 9),                     -- Nintendo Switch
('Ape Escape 3', 6, 2000, 14, 8.3),                                     -- PS2
('Assassin''s Creed Origins', 2, 2010, 12, 9),                          -- PC
('Assassin''s Creed Origins', 2, 2010, 16, 9),                          -- PS4
('Assassin''s Creed Origins', 2, 2010, 25, 9),                          -- Xbox One
('Assassin''s Creed Unity', 2, 2010, 12, 7.8),                          -- PC
('Assassin''s Creed Unity', 2, 2010, 16, 7.8),                          -- PS4
('Assassin''s Creed Unity', 2, 2010, 25, 7.8),                          -- Xbox One
('Baldur''s Gate III', 2, 2020, 12, 10),                                -- PC
('Baldur''s Gate III', 2, 2020, 17, 10),                                -- PS5
('Baldur''s Gate III', 2, 2020, 26, 10),                                -- Xbox Series X/S
('Banjo-Kazooie', 1, 1990, 9, 9.6),                                     -- N64
('Banjo-Kazooie', 1, 1990, 24, 9.6),                                    -- Xbox 360
('Batman: Arkham Asylum', 1, 2000, 11, 9.3),                            -- Nintendo Switch
('Batman: Arkham Asylum', 1, 2000, 12, 9.3),                            -- PC
('Batman: Arkham Asylum', 1, 2000, 15, 9.3),                            -- PS3
('Batman: Arkham Asylum', 1, 2000, 16, 9.3),                            -- PS4
('Batman: Arkham Asylum', 1, 2000, 24, 9.3),                            -- Xbox 360
('Batman: Arkham Asylum', 1, 2000, 25, 9.3),                            -- Xbox One
('Batman: Arkham City', 1, 2010, 11, 9.5),                              -- Nintendo Switch
('Batman: Arkham City', 1, 2010, 12, 9.5),                              -- PC
('Batman: Arkham City', 1, 2010, 15, 9.5),                              -- PS3
('Batman: Arkham City', 1, 2010, 16, 9.5),                              -- PS4
('Batman: Arkham City', 1, 2010, 24, 9.5),                              -- Xbox 360
('Batman: Arkham City', 1, 2010, 25, 9.5),                              -- Xbox One
('Batman: Arkham Knight', 1, 2010, 11, 9.5),                            -- Nintendo Switch
('Batman: Arkham Knight', 1, 2010, 12, 9.5),                            -- PC
('Batman: Arkham Knight', 1, 2010, 16, 9.5),                            -- PS4
('Batman: Arkham Knight', 1, 2010, 25, 9.5),                            -- Xbox One
('Bomberman 64', 1, 1990, 9, 7.6),                                      -- N64
('Call of Duty: Black Ops', 4, 2010, 12, 8.5),                          -- PC
('Call of Duty: Black Ops', 4, 2010, 15, 8.5),                          -- PS3
('Call of Duty: Black Ops', 4, 2010, 24, 8.5),                          -- Xbox 360
('Call of Duty: Black Ops II', 4, 2010, 12, 9.3),                       -- PC
('Call of Duty: Black Ops II', 4, 2010, 15, 9.3),                       -- PS4
('Call of Duty: Black Ops II', 4, 2010, 24, 9.3),                       -- Xbox 360
('Capcom VS. SNK 2: Mark of the Millennium 2001', 3, 2000, 5, 8.4),     -- GameCube
('Capcom VS. SNK 2: Mark of the Millennium 2001', 3, 2000, 14, 8.4),    -- PS2  
('Capcom VS. SNK 2: Mark of the Millennium 2001', 3, 2000, 23, 8.4),    -- Xbox
('Chip ''n Dale Rescue Rangers', 6, 1990, 7, 7),                        -- NES 
('Conan Exiles', 1, 2010, 12, 6.7),                                     -- PC
('Conan Exiles', 1, 2010, 16, 6.7),                                     -- PS4
('Conan Exiles', 1, 2010, 25, 6.7),                                     -- Xbox One
('Conan Exiles', 1, 2010, 26, 6.7),                                     -- Xbox Series X/S
('Cyberpunk 2077', 2, 2020, 12, 9),                                     -- PC
('Cyberpunk 2077', 2, 2020, 16, 9),                                     -- PS4
('Cyberpunk 2077', 2, 2020, 17, 9),                                     -- PS5
('Cyberpunk 2077', 2, 2020, 25, 9),                                     -- Xbox One
('Cyberpunk 2077', 2, 2020, 26, 9),                                     -- Xbox Series X/S
('Destiny 2', 4, 2010, 12, 8.5),                                        -- PC
('Destiny 2', 4, 2010, 16, 8.5),                                        -- PS4
('Destiny 2', 4, 2010, 17, 8.5),                                        -- PS5
('Destiny 2', 4, 2010, 25, 8.5),                                        -- Xbox One
('Destiny 2', 4, 2010, 26, 8.5),                                        -- Xbox Series X/S
('Diablo IV', 2, 2020, 16, 9),                                          -- PS4
('Diablo IV', 2, 2020, 17, 9),                                          -- PS5
('Diablo IV', 2, 2020, 25, 9),                                          -- Xbox One
('Diablo IV', 2, 2020, 26, 9),                                          -- Xbox Series X/S
('Donkey Kong Country', 6, 1990, 3, 8),                                 -- Game Boy Advance
('Donkey Kong Country', 6, 1990, 4, 8),                                 -- Game Boy Color
('Donkey Kong Country', 6, 1990, 20, 8),                                -- SNES
('Donkey Kong Country 2: Diddy''s Kong Quest', 6, 1990, 3, 8),          -- Game Boy Advance
('Donkey Kong Country 2: Diddy''s Kong Quest', 6, 1990, 20, 8),         -- SNES
('Dragon Ball FighterZ', 3, 2010, 11, 8.5),                             -- Nintendo Swich
('Dragon Ball FighterZ', 3, 2010, 12, 8.5),                             -- PC
('Dragon Ball FighterZ', 3, 2010, 16, 8.5),                             -- PS4
('Dragon Ball FighterZ', 3, 2010, 17, 8.5),                             -- PS5
('Dragon Ball FighterZ', 3, 2010, 25, 8.5),                             -- Xbox One
('Dragon Ball FighterZ', 3, 2010, 26, 8.5),                             -- Xbox Series X/S
('EarthBound', 10, 1990, 3, 9),                                         -- Game Boy Advance
('EarthBound', 10, 1990, 20, 9),                                        -- SNES
('Elden Ring', 2, 2020, 12, 10),                                        -- PC
('Elden Ring', 2, 2020, 16, 10),                                        -- PS4
('Elden Ring', 2, 2020, 17, 10),                                        -- PS5
('Elden Ring', 2, 2020, 25, 10),                                        -- Xbox One
('Elden Ring', 2, 2020, 26, 10),                                        -- Xbox Series X/S
('The Elder Scrolls V: Skyrim', 2, 2010, 12, 9.5),                      -- PC
('The Elder Scrolls V: Skyrim', 2, 2010, 15, 9.5),                      -- PS3
('The Elder Scrolls V: Skyrim', 2, 2010, 16, 9.5),                      -- PS4
('The Elder Scrolls V: Skyrim', 2, 2010, 17, 9.5),                      -- PS5
('The Elder Scrolls V: Skyrim', 2, 2010, 24, 9.5),                      -- Xbox 360
('The Elder Scrolls V: Skyrim', 2, 2010, 25, 9.5),                      -- Xbox One
('The Elder Scrolls V: Skyrim', 2, 2010, 26, 9.5),                      -- Xbox Series X/S
('Excitebike', 8, 1980, 7, 8.4),                                        -- NES
('Fall Guys', 6, 2020, 12, 8),                                          -- PC
('Fall Guys', 6, 2020, 16, 8),                                          -- PS4
('Fall Guys', 6, 2020, 17, 8),                                          -- PS5
('Fall Guys', 6, 2020, 25, 8),                                          -- Xbox One
('Fall Guys', 6, 2020, 26, 8),                                          -- Xbox Series X/S
('Fallout 76', 2, 2010, 12, 7),                                         -- PC
('Fallout 76', 2, 2010, 16, 7),                                         -- PS4
('Fallout 76', 2, 2010, 25, 7),                                         -- Xbox One
('Final Fantasy II', 10, 1990, 20, 8.3),                                -- SNES
('Final Fantasy III', 10, 1990, 3, 9.5),                                -- Game Boy Advance
('Final Fantasy III', 10, 1990, 11, 9.5),                               -- Nintendo Switch
('Final Fantasy III', 10, 1990, 12, 9.5),                               -- PC
('Final Fantasy III', 10, 1990, 13, 9.5),                               -- PS1
('Final Fantasy III', 10, 1990, 16, 9.5),                               -- PS4
('Final Fantasy III', 10, 1990, 20, 9.5),                               -- SNES
('Final Fantasy VII', 10, 1990, 11, 8.2),                               -- Nintendo Switch
('Final Fantasy VII', 10, 1990, 12, 8.2),                               -- PC
('Final Fantasy VII', 10, 1990, 15, 8.2),                               -- PS3
('Final Fantasy VII', 10, 1990, 16, 8.2),                               -- PS4
('Final Fantasy VII', 10, 1990, 25, 8.2),                               -- Xbox One
('Fossil Fighters', 10, 2000, 10, 7.7),                                 -- Nintendo DS
('Ghost of Tsushima', 6, 2020, 12, 9),                                  -- PC
('Ghost of Tsushima', 6, 2020, 16, 9),                                  -- PS4
('Ghost of Tsushima', 6, 2020, 17, 9),                                  -- PS5
('God of War', 6, 2010, 12, 10),                                        -- PC
('God of War', 6, 2010, 16, 10),                                        -- PS4
('God of War Ragnarök', 6, 2020, 12, 10),                               -- PC
('God of War Ragnarök', 6, 2020, 16, 10),                               -- PS4
('God of War Ragnarök', 6, 2020, 17, 10),                               -- PS5
('GoldenEye 007', 4, 1990, 9, 9.7),                                     -- N64
('Grand Theft Auto: San Andreas', 6, 2000, 14, 9.6),                    -- PS2
('Grand Theft Auto: Vice City', 6, 2000, 14, 9.7),                      -- PS2
('Guilty Gear Strive', 3, 2020, 12, 9),                                 -- PC
('Guilty Gear Strive', 3, 2020, 16, 9),                                 -- PS4
('Guilty Gear Strive', 3, 2020, 17, 9),                                 -- PS5
('Guilty Gear Strive', 3, 2020, 25, 9),                                 -- Xbox One
('Guilty Gear Strive', 3, 2020, 26, 9),                                 -- Xbox Series X/S
('Halo 2', 4, 2000, 16, 9.8),                                           -- PC
('Halo 2', 4, 2000, 23, 9.8),                                           -- Xbox
('Halo 3', 4, 2000, 24, 9.5),                                           -- Xbox 360
('Halo 3: ODST', 4, 2000, 24, 9),                                       -- Xbox 360
('Halo 4', 4, 2010, 24, 9.8),                                           -- Xbox 360
('Halo 5', 4, 2010, 25, 9),                                             -- Xbox One
('Halo: Combat Evolved', 4, 2000, 12, 9.7),                             -- PC
('Halo: Combat Evolved', 4, 2000, 23, 9.7),                             -- Xbox
('Halo: Combat Evolved', 4, 2000, 24, 9.7),                             -- Xbox 360
('Halo Infinite', 4, 2020, 12, 9),                                      -- PC
('Halo Infinite', 4, 2020, 25, 9),                                      -- Xbox One
('Halo Infinite', 4, 2020, 26, 9.10),                                   -- Xbox Series X/S
('Halo: Reach', 4, 2010, 24, 9.5),                                      -- Xbox 360
('High on Life', 4, 2020, 12, 8),                                       -- PC
('High on Life', 4, 2020, 16, 8),                                       -- PS4
('High on Life', 4, 2020, 17, 8),                                       -- PS5
('High on Life', 4, 2020, 25, 8),                                       -- Xbox One
('High on Life', 4, 2020, 26, 8),                                       -- Xbox Series X/S
('The King of Fighters XV', 3, 2020, 12, 8),                            -- PC
('The King of Fighters XV', 3, 2020, 16, 8),                            -- PS4
('The King of Fighters XV', 3, 2020, 17, 8),                            -- PS5
('The King of Fighters XV', 3, 2020, 26, 8),                            -- Xbox Series X/S
('Kingdom Hearts', 2, 2000, 3, 9),                                      -- Game Boy Advance
('Kingdom Hearts', 2, 2000, 10, 9),                                     -- Nintendo DS
('Kingdom Hearts', 2, 2000, 11, 9),                                     -- Nintendo Switch
('Kingdom Hearts', 2, 2000, 12, 9),                                     -- PC
('Kingdom Hearts', 2, 2000, 14, 9),                                     -- PS2
('Kingdom Hearts', 2, 2000, 15, 9),                                     -- PS3
('Kingdom Hearts', 2, 2000, 16, 9),                                     -- PS4
('Kingdom Hearts', 2, 2000, 25, 9),                                     -- Xbox One
('Kingdom Hearts II', 2, 2000, 14, 9.1),                                -- PS2
('Kingdom Hearts III', 2, 2010, 11, 8.7),                               -- Nintendo Switch
('Kingdom Hearts III', 2, 2010, 12, 8.7),                               -- PC
('Kingdom Hearts III', 2, 2010, 16, 8.7),                               -- PS4
('Kingdom Hearts III', 2, 2010, 25, 8.7),                               -- Xbox One
('The Last of Us', 1, 2010, 15, 10),                                    -- PS3
('The Last of Us', 1, 2010, 16, 10),                                    -- PS4
('The Last of Us Part II', 1, 2020, 16, 10),                            -- PS4
('The Last of Us Part II', 1, 2020, 17, 10),                            -- PS5
('The Legend of Zelda: A Link to the Past', 1, 1990, 20, 9.5),          -- SNES
('The Legend of Zelda: Breath of the Wild', 1, 2010, 11, 10),           -- Nintendo Switch
('The Legend of Zelda: Ocarina of Time', 1, 1990, 5, 10),               -- GameCube
('The Legend of Zelda: Ocarina of Time', 1, 1990, 9, 10),               -- N64
('Luigi''s Mansion', 1, 2000, 5, 7),                                    -- GameCube
('Luigi''s Mansion', 1, 2000, 8, 7),                                    -- Ninendo 3DS
('Mario Golf', 14, 1990, 4, 8),                                         -- Game Boy Color
('Mario Golf', 14, 1990, 9, 8),                                         -- N64
('Mario Kart 8 Deluxe', 8, 2010, 11, 9.3),                              -- Nintendo Switch
('Mario Party 8', 5, 2000, 21, 5.2),                                    -- Wii
('Mario Party 10', 5, 2010, 22, 6.5),                                   -- Wii U
('Mario Party Superstars', 5, 2020, 11, 8),                             -- Nintendo Switch
('Mario Tennis', 14, 2000, 4, 9),                                       -- Game Boy Color
('Mario Tennis', 14, 2000, 9, 9),                                       -- N64
('Mario Tennis Aces', 14, 2010, 11, 7.5),                               -- Nintendo Switch
('Marvel VS Capcom 2: New Age of Heroes', 3, 2000, 1, 9),               -- Dreamcast
('Marvel VS Capcom 2: New Age of Heroes', 3, 2000, 14, 9),              -- PS2
('Marvel VS Capcom 2: New Age of Heroes', 3, 2000, 15, 9),              -- PS3
('Marvel VS Capcom 2: New Age of Heroes', 3, 2000, 23, 9),              -- Xbox
('Marvel VS Capcom 2: New Age of Heroes', 3, 2000, 24, 9),              -- Xbox 360
('Mega Man X', 6, 1990, 5, 9),                                          -- GameCube
('Mega Man X', 6, 1990, 11, 9),                                         -- Nintendo Switch
('Mega Man X', 6, 1990, 12, 9),                                         -- PC
('Mega Man X', 6, 1990, 13, 9),                                         -- PS1
('Mega Man X', 6, 1990, 14, 9),                                         -- PS2
('Mega Man X', 6, 1990, 16, 9),                                         -- PS4
('Mega Man X', 6, 1990, 20, 9),                                         -- SNES
('Mega Man X', 6, 1990, 25, 9),                                         -- Xbox One
('Metal Slug', 11, 1990, 6, 8.5),                                       -- Neo Geo
('Metal Slug', 11, 1990, 13, 8.5),                                      -- PS1
('Metal Slug', 11, 1990, 19, 8.5),                                      -- Sega Saturn
('Mike Tyson''s Punch-Out!!', 14, 1980, 7, 8.1),                        -- NES
('Mortal Kombat 1', 3, 2020, 11, 8),                                    -- Nintendo Switch
('Mortal Kombat 1', 3, 2020, 12, 8),                                    -- PC
('Mortal Kombat 1', 3, 2020, 17, 8),                                    -- PS5
('Mortal Kombat 1', 3, 2020, 26, 8),                                    -- Xbox Series X/S
('New World', 10, 2020, 12, 6),                                         -- PC
('New World', 10, 2020, 17, 6),                                         -- PS5
('New World', 10, 2020, 26, 6),                                         -- Xbox Series X/S
('NBA 2K24', 14, 2020, 11, 6),                                          -- Nintendo Switch
('NBA 2K24', 14, 2020, 12, 6),                                          -- PC
('NBA 2K24', 14, 2020, 16, 6),                                          -- PS4
('NBA 2K24', 14, 2020, 17, 6),                                          -- PS5
('NBA 2K24', 14, 2020, 25, 6),                                          -- Xbox One
('NBA 2K24', 14, 2020, 26, 6),                                          -- Xbox Series X/S
('Phasmophobia', 7, 2020, 12, 7.6),                                     -- PC
('Phasmophobia', 7, 2020, 17, 7.6),                                     -- PS5
('Phasmophobia', 7, 2020, 26, 7.6),                                     -- Xbox Series X/S
('Pokémon Red, Blue, and Yellow', 10, 1990, 2, 10),                     -- Game Boy
('Pokémon Red, Blue, and Yellow', 10, 1990, 4, 10),                     -- Game Boy Color
('Pokémon Red, Blue, and Yellow', 10, 1990, 8, 10),                     -- Nintendo 3DS
('Pokémon Ruby and Sapphire', 10, 2000, 3, 5),                          -- Game Boy Advance
('Pokémon Snap', 9, 1990, 9, 7.8),                                      -- N64
('Portal 2', 7, 2010, 11, 9.5),                                         -- Nintendo 64
('Portal 2', 7, 2010, 12, 9.5),                                         -- PC
('Portal 2', 7, 2010, 15, 9.5),                                         -- PS3
('Portal 2', 7, 2010, 24, 9.5),                                         -- Xbox 360
('Red Dead Redemption 2', 1, 2010, 12, 10),                             -- PC
('Red Dead Redemption 2', 1, 2010, 16, 10),                             -- PS4
('Red Dead Redemption 2', 1, 2010, 25, 10),                             -- Xbox One
('Resident Evil', 1, 1990, 10, 8.7),                                    -- Nintendo DS
('Resident Evil', 1, 1990, 12, 8.7),                                    -- PC
('Resident Evil', 1, 1990, 13, 8.7),                                    -- PS1
('Resident Evil', 1, 1990, 19, 8.7),                                    -- Sega Saturn
('Sonic the Hedgehog', 6, 1990, 3, 8),                                  -- Game Boy Advance
('Sonic the Hedgehog', 6, 1990, 8, 8),                                  -- Nintendo 3DS
('Sonic the Hedgehog', 6, 1990, 11, 8),                                 -- Nintendo Switch
('Sonic the Hedgehog', 6, 1990, 12, 8),                                 -- PC
('Sonic the Hedgehog', 6, 1990, 18, 8),                                 -- Sega Genesis
('Star Fox 64', 9, 1990, 9, 8.7),                                       -- N64
('Star Wars Episode I: Racer', 8, 1990, 1, 7.3),                        -- Dreamcast
('Star Wars Episode I: Racer', 8, 1990, 4, 7.3),                        -- Game Boy Color
('Star Wars Episode I: Racer', 8, 1990, 9, 7.3),                        -- N64
('Star Wars Episode I: Racer', 8, 1990, 11, 7.3),                       -- Nintendo Switch
('Star Wars Episode I: Racer', 8, 1990, 12, 7.3),                       -- PC
('Star Wars Episode I: Racer', 8, 1990, 16, 7.3),                       -- PS4
('Star Wars Episode I: Racer', 8, 1990, 25, 7.3),                       -- Xbox One
('Starfield', 2, 2020, 12, 7),                                          -- PC
('Starfield', 2, 2020, 26, 7),                                          -- Xbox Series X/S
('Stardew Valley', 13, 2010, 12, 10),                                   -- PC
('Street Fighter 6', 3, 2020, 12, 9),                                   -- PC
('Street Fighter 6', 3, 2020, 16, 9),                                   -- PS4
('Street Fighter 6', 3, 2020, 17, 9),                                   -- PS5
('Street Fighter 6', 3, 2020, 26, 9),                                   -- Xbox Series X/S
('Street Fighter III: 3rd Strike', 3, 1990, 1, 8.9),                    -- Dreamcast
('Street Fighter III: 3rd Strike', 3, 1990, 11, 8.9),                   -- Nintendo Switch
('Street Fighter III: 3rd Strike', 3, 1990, 12, 8.9),                   -- PC
('Street Fighter III: 3rd Strike', 3, 1990, 14, 8.9),                   -- PS2
('Street Fighter III: 3rd Strike', 3, 1990, 15, 8.9),                   -- PS3
('Street Fighter III: 3rd Strike', 3, 1990, 16, 8.9),                   -- PS4
('Street Fighter III: 3rd Strike', 3, 1990, 23, 8.9),                   -- Xbox 
('Street Fighter III: 3rd Strike', 3, 1990, 24, 8.9),                   -- Xbox 360
('Street Fighter III: 3rd Strike', 3, 1990, 25, 8.9),                   -- Xbox One
('Super Mario 64', 6, 1990, 9, 9.8),                                    -- N64
('Super Mario Sunshine', 6, 2000, 5, 9.4),                              -- GameCube
('Super Metroid', 1, 1990, 20, 9.5),                                    -- SNES
('Super Smash Bros. Melee', 3, 2000, 5, 9.6),                           -- GameCube
('Super Street Fighter II: The World Warrior', 3, 1990, 20, 7),         -- SNES
('Tony Hawk''s Pro Skater', 14, 1990, 1, 9.8),                          -- Dreamcast
('Tony Hawk''s Pro Skater', 14, 1990, 4, 9.8),                          -- Game Boy Color
('Tony Hawk''s Pro Skater', 14, 1990, 9, 9.8),                          -- N64
('Tony Hawk''s Pro Skater', 14, 1990, 13, 9.8),                         -- PS1
('Tony Hawk''s Pro Skater 2', 14, 2000, 1, 9.3),                        -- Dreamcast
('Tony Hawk''s Pro Skater 2', 14, 2000, 4, 9.3),                        -- Game Boy Color
('Tony Hawk''s Pro Skater 2', 14, 2000, 5, 9.3),                        -- GameCube
('Tony Hawk''s Pro Skater 2', 14, 2000, 9, 9.3),                        -- N64
('Tony Hawk''s Pro Skater 2', 14, 2000, 12, 9.3),                       -- PC
('Tony Hawk''s Pro Skater 2', 14, 2000, 13, 9.3),                       -- PS1
('Tony Hawk''s Pro Skater 3', 14, 2000, 3, 9.5),                        -- Game Boy Advance
('Tony Hawk''s Pro Skater 3', 14, 2000, 4, 9.5),                        -- Game Boy Color
('Tony Hawk''s Pro Skater 3', 14, 2000, 5, 9.5),                        -- GameCube
('Tony Hawk''s Pro Skater 3', 14, 2000, 9, 9.5),                        -- N64
('Tony Hawk''s Pro Skater 3', 14, 2000, 12, 9.5),                       -- PC
('Tony Hawk''s Pro Skater 3', 14, 2000, 13, 9.5),                       -- PS1
('Tony Hawk''s Pro Skater 3', 14, 2000, 14, 9.5),                       -- PS2
('Tony Hawk''s Pro Skater 3', 14, 2000, 23, 9.5),                       -- Xbox
('Tony Hawk''s Pro Skater 4', 14, 2000, 3, 9.3),                        -- Game Boy Advance
('Tony Hawk''s Pro Skater 4', 14, 2000, 5, 9.3),                        -- GameCube
('Tony Hawk''s Pro Skater 4', 14, 2000, 12, 9.3),                       -- PC
('Tony Hawk''s Pro Skater 4', 14, 2000, 13, 9.3),                       -- PS1
('Tony Hawk''s Pro Skater 4', 14, 2000, 14, 9.3),                       -- PS2
('Tony Hawk''s Pro Skater 4', 14, 2000, 23, 9.3),                       -- Xbox
('Tekken 8', 3, 2020, 12, 9),                                           -- PC
('Tekken 8', 3, 2020, 17, 9),                                           -- PS5
('Tekken 8', 3, 2020, 26, 9),                                           -- Xbox Series X/S
('Tomb Raider', 1, 1990, 12, 9.3),                                      -- PC
('Tomb Raider', 1, 1990, 13, 9.3),                                      -- PS1
('Tomb Raider', 1, 1990, 26, 9.3),                                      -- Sega Saturn
('Ultimate Marvel VS Capcom 3', 3, 2010, 12, 8),                        -- PC
('Ultimate Marvel VS Capcom 3', 3, 2010, 15, 8),                        -- PS3
('Ultimate Marvel VS Capcom 3', 3, 2010, 16, 8),                        -- PS4
('Ultimate Marvel VS Capcom 3', 3, 2010, 24, 8),                        -- Xbox 360
('Ultimate Marvel VS Capcom 3', 3, 2010, 25, 8),                        -- Xbox One
('Valheim', 12, 2020, 12, 9),                                           -- PC
('Valheim', 12, 2020, 25, 9),                                           -- Xbox One
('Valheim', 12, 2020, 26, 9),                                           -- Xbox Series X/S
('The Witcher 3: Wild Hunt', 2, 2010, 11, 9.3),                         -- Nintendo Switch
('The Witcher 3: Wild Hunt', 2, 2010, 12, 9.3),                         -- PC
('The Witcher 3: Wild Hunt', 2, 2010, 16, 9.3),                         -- PS4
('The Witcher 3: Wild Hunt', 2, 2010, 17, 9.3),                         -- PS5
('The Witcher 3: Wild Hunt', 2, 2010, 25, 9.3),                         -- Xbox One
('The Witcher 3: Wild Hunt', 2, 2010, 26, 9.3),                         -- Xbox Series X/S
('Wizard101', 10, 2000, 12, 8.4);                                       -- PC