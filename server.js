const express = require('express');
const app = express();
const port = 3000;

// Serve static files (CSS, client-side JS)
app.use(express.static('public'));

// API to provide the cryptocurrency data
app.get('/api/data', (req, res) => {
    const data = [
        { platform: "WazirX", lastPrice: "₹25,72,612", buySellPrice: "₹25,72,610 / ₹25,72,612", difference: "-3.14%", savings: "₹83,498" },
        { platform: "Bitbns", lastPrice: "₹28,83,906", buySellPrice: "₹28,55,164 / ₹28,82,157", difference: "8.58%", savings: "₹2,27,796" },
        { platform: "Colodax", lastPrice: "₹25,46,035", buySellPrice: "₹25,33,304 / ₹25,51,559", difference: "-4.14%", savings: "₹1,10,074" },
        { platform: "Zebpay", lastPrice: "₹26,50,500", buySellPrice: "₹26,49,999 / ₹26,21,000", difference: "-0.23%", savings: "₹6,110" },
    ];
    res.json(data);
});

app.listen(port, () => {'console.log(Server is running onhttp://localhost:${port});'
    });