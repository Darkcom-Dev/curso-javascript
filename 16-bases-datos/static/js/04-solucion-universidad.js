const sql = require('sqlite3');

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

// Endpoints
// GET - ESTUDIANTES (legajo)
// POST - ESTUDIANTES Create( nombre, apellido, legajo)
// PUT - NOTAS (id, nota)
// DELETE - NOTAS (id)
// GET - NOTAS (codigo)-> Aprobados

const db = new sql.Database('./universidad.db');


app.get('/ESTUDIANTES', (req, res) => {
    db.all('SELECT * FROM ESTUDIANTES', (err, rows) => {
        if (err) console.error(err);
        res.send(rows);
        console.log(res)
    });
});

app.post('/ESTUDIANTES', (req, res) => {
    db.run('INSERT INTO ESTUDIANTES VALUES (NULL, ?, ?, ?)', [req.body.nombre, req.body.apellido, req.body.legajo]);
    res.send('OK');
});

app.put('/NOTAS', (req, res) => {
    db.run('INSERT INTO NOTAS VALUES (NULL, ?, ?)', [req.body.codigo, req.body.nota]);
    res.send('OK');
});

app.delete('/NOTAS', (req, res) => {
    db.run('DELETE FROM NOTAS WHERE codigo = ?', [req.body.codigo]);
    res.send('OK');
});

app.get('/NOTAS', (req, res) => {
    db.all('SELECT * FROM NOTAS', (err, rows) => {
        if (err) console.error(err);
        res.send(rows);
        console.log(res)
    });
});