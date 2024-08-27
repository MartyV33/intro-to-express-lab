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

const collectibles = [
    {name: 'shiny ball', price: 5.95 },
    {name: 'autographed picture of a dog', price: 10},
    {name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

app.get('/collectibles/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);

    if(isNaN(index) || index < 0 || index >= collectibles.length) {
        res.send('This item is not in stock yet. Check back Soon!');
    } else {
        const item = collectibles[index];
        res.send(`You want the ${item.name}? For ${item.price}, it can be yours!`);
    }
});

const shoes = [
    {name: "Birkenstocks", price: 50, type: "sandal"},
    {name: "Air Jordans", price: 500, type: "sneaker"},
    {name: "Air Mohomeses", price: 501, type: "sneaker"},
    {name: "Utility Boots", price: 20, type: "boot"},
    {name: "Velcro Sandals", price: 15, type: "sandal"},
    {name: "Jet Boots", price: 1000, type: "boot"},
    {name: "Fifty-Inch Heels", price: 174, type: "heel"}
];  // Define the shoes array

app.get('/shoes', (req, res) => {
    let filteredShoes = shoes;

    const minPrice = parseFloat(req.query['min-price']);
    const maxPrice = parseFloat(req.query['max-price']);
    const type = req.query.type;

    if (!isNaN(minPrice)) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price >= minPrice);
    }

    if (type) {
        filteredShoes = filteredShoes.filter(shoe => shoe.type === type);
    }

    res.json(filteredShoes);
});
