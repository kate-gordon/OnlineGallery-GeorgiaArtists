/*
    Run this for junk data on your database for testing purposes.
*/

INSERT INTO artists (firstname,
    lastname,
    city,
    portrait,
    blurb,
    email) VALUES (
    'Barack',
    'Obama',
    'Atlanta',
    'admin.insae.org/images/artists/obama.jpg',
    'Obama was born in Honolulu, Hawaii. After graduating from Columbia University in 1983, he worked as a community organizer in Chicago. In 1988, he enrolled in Harvard Law School, where he was the first black president of the Harvard Law Review. After graduating, he became a civil rights attorney and an academic, teaching constitutional law at the University of Chicago Law School from 1992 to 2004. He represented the 13th district for three terms in the Illinois Senate from 1997 until 2004, when he ran for the U.S. Senate. He received national attention in 2004 with his March primary win, his well-received July Democratic National Convention keynote address, and his landslide November election to the Senate. In 2008, he was nominated for president a year after his campaign began, after a close primary campaign against Hillary Clinton. He was elected over Republican John McCain and was inaugurated on January 20, 2009. Nine months later, he was named the 2009 Nobel Peace Prize laureate.',
    'barack@bamanation.com');

INSERT INTO artists (firstname,
    lastname,
    city,
    portrait,
    blurb,
    email) VALUES (   
    'SpongeBob',
    'SquarePants',
    'Bikini Bottom',
    'admin.insae.org/images/artists/spongebob.jpg',
    'SpongeBob SquarePants is an energetic and optimistic sea sponge who physically resembles a rectangular kitchen sponge. He lives in a submerged pineapple with his pet snail Gary, who meows like a cat. SpongeBob has a childlike enthusiasm for life, which carries over to his job as a fry cook at a fast food restaurant called the Krusty Krab. His greatest goal in life is to obtain a license to drive a boatmobile. His favorite pastimes include "jellyfishing", which involves catching jellyfish with a net in a manner similar to butterfly catching, and blowing soap bubbles into elaborate shapes.',
    'spongebob@krustykrab.com');

INSERT INTO artworks (title,
    medium,
    artist,
    picture,
    price,
    award) VALUES (
    'Hilary Stole My Apple Pie',
    'Painting',
    1,
    'admin.insae.org/images/artworks/applepie.jpg',
    175,
    'Best Apple Pie Related'
    );

INSERT INTO artworks (title,
    medium,
    artist,
    picture,
    price,
    sold,
    award) VALUES (
    'Sea Man',
    'Marble',
    2,
    'admin.insae.org/images/artworks/spongeart.png',
    2225,
    true,
    'Most Beautiful Statue'
    );
INSERT INTO artworks (title,
    medium,
    artist,
    picture,
    price,
    sold,
    award) VALUES (
    'Self Portrait',
    'Painting',
    2,
    'admin.insae.org/images/artworks/spongebobselfportrait.png',
    525,
    false,
    'Best Pineapple Painting'
    );
INSERT INTO events(
    title ,
    datewhen,
    location,
    picture,
    blurb)VALUES (
    'Gallary At The Park',
    '01/06/2020 02:30 PM',
    'Piedmont Park, Atlanta GA',
    'admin.insae.org/images/events/piedmont-park.jpg',
    'PostgreSQL uses Julian dates for all date/time calculations. This has the useful property of correctly calculating dates from 4713 BC to far into the future, using the assumption that the length of the year is 365.2425 days. Date conventions before the 19th century make for interesting reading, but are not consistent enough to warrant coding into a date/time handler.'
);
INSERT INTO events(
    title ,
    datewhen,
    location,
    picture,
    blurb)VALUES (
    'Lost At Sea: Oceanic Art',
    '01/22/2020 06:30 PM',
    'Atlanta Tech Village, Buckhead GA',
    'admin.insae.org/images/events/lostatsea.jpeg',
    'An art museum or art gallery is a building or space for the display of art, usually from the museums own collection. It might be in public or private ownership and may be accessible to all or have restrictions in place.'
);