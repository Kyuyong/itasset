const mysql = require('mysql2');
const pool = mysql.createPool({
  host: '172.19.152.27',
  user: 'onsdb_jo',
  password: 'Onsdb123$',
  database: 'special.TB_itasset_solutiondata',
  port: 3306

});
module.exports = pool.promise();