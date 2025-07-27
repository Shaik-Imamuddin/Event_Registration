const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

// Middleware to parse form data from urlencoded format to javascript object
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Immu@9866',
    database: 'event'
});

db.connect(err => {
    if (err) {
        console.error('Database connection error:', err);
        return;
    }
});

// Form submission route
app.post('/register', (req, res) => {
    const { stdid, name, email, mobileno, event } = req.body;

    const query = `
        INSERT INTO registration (stdid, name, email, mobileno, event)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(query, [stdid, name, email, mobileno, event], (err, result) => {
        if (err) {
            console.error('DB insert error:', err);
            return res.status(500).send('Registration failed');
        }
        res.send('Registration successful!');
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

