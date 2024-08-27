const express = require('express');
const app = express(); 
app.get('/greetings/:username',(req, res) => {
    const username = req.params.username;
    res.send(`Well hello there, ${username}!`);
});  // We're defining a route for greeting the user

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});  // This is to listen on port 3000

app.get('/roll/:number', (req, res) => {
    const number = parseInt(req.params.number, 10);
    // We are defining a route for rolling the dice

    if (isNaN(number)) {
        res.send('You must specify a number.');
    } else {
        const randomNumber = Math.random() * (number + 1);
        res.send(`You rolled a  ${randomNumber}.`);
    }
});

