const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./db.js')
const bodyParser = require('body-parser');


app.use(bodyParser.json());

app.post('/registersolution', async (req, res) => {
  // 솔루션 등록 로직 구현
  try {
    // 데이터 검증 및 데이터베이스 저장 로직
    res.status(200).send('솔루션 등록 성공');
  } catch (error) {
    res.status(500).send('서버 에러');
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));