const mysql = require('mysql2');
const pool = mysql.createPool({
  host: '172.19.152.27',
  user: 'onsdb_jo',
  password: 'Onsdb123$',
  database: 'special.TB_itasset_solutiondata',
  port: 3306
});


// 연결 테스트를 위한 함수 추가
// async function testConnection() {
//   try {
//     const connection = await pool.promise().getConnection();
//     console.log('Database connection successful');
//     connection.release();
//   } catch (error) {
//     console.error('Database connection failed', error);
//     console.error('Error code:', error.code);
//   }
// }

// testConnection();


module.exports = pool.promise();