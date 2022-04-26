let conn;
function connect() {
    let { Client } = require('pg');
    conn = new Client({
      host: 'localhost',
      database: 'gerenciador_estoque',
      username: 'gerenciador_estoque',
      password: 'estoque',
      port: 8000,
    });
    conn.connect();
  }