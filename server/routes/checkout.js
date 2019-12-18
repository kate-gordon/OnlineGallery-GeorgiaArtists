const express = require('express');
const router = express.Router();
const stripe = require('stripe')('pk_test_4v8zi9Y35PCIfLBnAbUZUKcc00BdZcXFx5');

router.post('/', async (req, res) => {
  const { stripeToken, amount, email, artworkIdArray } = req.body;
  stripe.charges.create(
    {
      amount,
      currency: 'usd',
      source: stripeToken,
      description: `Charges for ${email}`
    },
    (err, charge) => {
      if (err) {
        res.json({
          msg: 'errorProcessing'
        });
      } else {
        //this is the happy path, update database with sold status. Tell DB to update tables, send out emails, etc. res.json message to display success page
        console.log(charge);
        res.json({
          msg: 'paymentSuccess'
        });
      }
    }
  );
});

module.exports = router;
