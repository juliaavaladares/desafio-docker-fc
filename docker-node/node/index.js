const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')


app.get('/', (req,res) => {
    const connection = mysql.createConnection(config)

    const insert = `INSERT INTO people(name) values('Julia')`
    connection.query(insert)

    const select = `SELECT name FROM people`
    connection.query(select)

    connection.query(select, (err, rows) => {
        if(err) throw err;
  
        var pagina = '<h1>Full Cycle Rocks!</h1><ul>';
        for(let i = 0; i < rows.length; i = i + 1) {
            pagina = pagina.concat('<li>')
            pagina = pagina.concat(rows[i].name)
            pagina = pagina.concat('</li>')
        }
        pagina = pagina.concat('</ul>')

        res.send(pagina)
    });

    connection.end()
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})