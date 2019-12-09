var express = require("express");
var router = express.Router();

/* GET home page. */

router.get("/all", function(req, res, next) {
  res.send([
    {
      id: 1,
      firstname: "Barack",
      lastname: "Obama",
      city: "Atlanta",
      picture: "localhost:5252/images/artists/obama.jpg",
      blurb:
        "Obama was born in Honolulu, Hawaii. After graduating from Columbia University in 1983, he worked as a community organizer in Chicago. In 1988, he enrolled in Harvard Law School, where he was the first black president of the Harvard Law Review. After graduating, he became a civil rights attorney and an academic, teaching constitutional law at the University of Chicago Law School from 1992 to 2004. He represented the 13th district for three terms in the Illinois Senate from 1997 until 2004, when he ran for the U.S. Senate. He received national attention in 2004 with his March primary win, his well-received July Democratic National Convention keynote address, and his landslide November election to the Senate. In 2008, he was nominated for president a year after his campaign began, after a close primary campaign against Hillary Clinton. He was elected over Republican John McCain and was inaugurated on January 20, 2009. Nine months later, he was named the 2009 Nobel Peace Prize laureate.",
      email: "barack@bamanation.com"
    },
    {
      id: 2,
      firstname: "SpongeBob",
      lastname: "SquarePants",
      city: "Bikini Bottom",
      picture: "localhost:5252/images/artists/spongebob.jpg",
      blurb:
        'SpongeBob SquarePants is an energetic and optimistic sea sponge who physically resembles a rectangular kitchen sponge. He lives in a submerged pineapple with his pet snail Gary, who meows like a cat. SpongeBob has a childlike enthusiasm for life, which carries over to his job as a fry cook at a fast food restaurant called the Krusty Krab. His greatest goal in life is to obtain a license to drive a boatmobile. His favorite pastimes include "jellyfishing", which involves catching jellyfish with a net in a manner similar to butterfly catching, and blowing soap bubbles into elaborate shapes.',
      email: "spongebob@krustykrab.com"
    }
  ]);
});

router.get("/id/1", function(req, res, next) {
  res.send({
    id: 1,
    firstname: "Barack",
    lastname: "Obama",
    city: "Atlanta",
    picture: "localhost:5252/images/artists/obama.jpg",
    blurb:
      "Obama was born in Honolulu, Hawaii. After graduating from Columbia University in 1983, he worked as a community organizer in Chicago. In 1988, he enrolled in Harvard Law School, where he was the first black president of the Harvard Law Review. After graduating, he became a civil rights attorney and an academic, teaching constitutional law at the University of Chicago Law School from 1992 to 2004. He represented the 13th district for three terms in the Illinois Senate from 1997 until 2004, when he ran for the U.S. Senate. He received national attention in 2004 with his March primary win, his well-received July Democratic National Convention keynote address, and his landslide November election to the Senate. In 2008, he was nominated for president a year after his campaign began, after a close primary campaign against Hillary Clinton. He was elected over Republican John McCain and was inaugurated on January 20, 2009. Nine months later, he was named the 2009 Nobel Peace Prize laureate.",
    email: "barack@bamanation.com"
  });
});

router.get("/id/2", function(req, res, next) {
  res.send({
    id: 2,
    firstname: "SpongeBob",
    lastname: "SquarePants",
    city: "Bikini Bottom",
    picture: "localhost:5252/images/artists/spongebob.jpg",
    blurb:
      'SpongeBob SquarePants is an energetic and optimistic sea sponge who physically resembles a rectangular kitchen sponge. He lives in a submerged pineapple with his pet snail Gary, who meows like a cat. SpongeBob has a childlike enthusiasm for life, which carries over to his job as a fry cook at a fast food restaurant called the Krusty Krab. His greatest goal in life is to obtain a license to drive a boatmobile. His favorite pastimes include "jellyfishing", which involves catching jellyfish with a net in a manner similar to butterfly catching, and blowing soap bubbles into elaborate shapes.',
    email: "spongebob@krustykrab.com"
  });
});

module.exports = router;
