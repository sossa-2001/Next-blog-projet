const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'xamp'
});

connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
    return;
  }
  console.log('Connexion à la base de données établie avec succès !');
});

// Exemple de requête SQL simple
connection.query('SELECT * FROM ma_table', (error, results, fields) => {
  if (error) throw error;
  console.log('Résultats de la requête :', results);
});

connection.end();