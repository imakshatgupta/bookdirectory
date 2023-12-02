const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const exp = require('constants');
const port = 3000;


app.use(bodyParser.json());
app.use(express.static('public'))

let books = [ 
    {
        "id": 1,
        "title": "Harry Potter and the Philosopher's Stone",
        "author": "J. K. Rowling",
        "year": 1997
    },
    {
        "id": 2,
        "title": "Harry Potter and the Chamber of Secrets",
        "author": "J. K. Rowling",
        "year": 1998
    },
    {
        "id": 3,
        "title": "Harry Potter and the Prisoner of Azkaban",
        "author": "J. K. Rowling",
        "year": 1999
    }
];



//GET all books

app.get('/books', (req, res) => {
    res.json(books);
    }
);




//GET book by id

app.get('/books/:id', (req, res) => {
    const id = Number(req.params.id);
    const book = books.find(book => book.id === id);
    res.json(book);
    }
);





//POST new book

app.post('/books', (req, res) => {
    const book = req.body;
    books.push(book);
    res.json(book);
    }
);






//PUT update book by id

app.put('/books/:id', (req, res) => {
    const id = Number(req.params.id);rs
    const book = req.body;
    books = books.map(book => book.id === id ? req.body : book);
    res.json(book);
    }
);




//DELETE book by id

app.delete('/books/:id', (req, res) => {
    const id = Number(req.params.id);
    books = books.filter(book => book.id !== id);
    res.json(books);
    }
);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);
