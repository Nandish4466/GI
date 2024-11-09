const express = require('express');
const stripe = require('stripe')('sk_test_51Q0fHdFLplcAzhe4H76yfD3vsZb5U3xIaPIOeB3O7IuxhBxR8tnlWp89iO7A8G7Qb29HHpJ3l0qTliKdT8YGTQjo007Orrpn0Q'); // Replace with your Stripe secret key
const bodyParser = require('body-parser');
const cors = require('cors'); // Add this line
const app = express();

app.use(cors()); // Enable CORS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/charge', async (req, res) => {
    try {
        const { stripeToken } = req.body;

        // Create a charge: this will charge the user's card
        const charge = await stripe.charges.create({
            amount: 5000, // Amount in cents (5000 cents = $50)
            currency: 'usd',
            description: 'Payment for GI Product',
            source: stripeToken, // The token from the client-side
        });

        res.send({ success: true, message: 'Payment Successful!' });
    } catch (error) {
        res.status(500).send({ success: false, error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
