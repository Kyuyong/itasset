const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db')

const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors');
app.use(cors());


app.use(bodyParser.json());

// 'RegisterSolution' 컴포넌트에서 전송된 데이터를 처리하는 '/registersolution' 경로
app.post('/registersolution', async (req, res) => {
  // 클라이언트에서 전송된 데이터 추출
  const { sol_id, sol_nm, sol_full_nm, sol_kor_nm, n_id, n_nm, headqt, team, url, github_url, work_fld, search_tag }
    = req.body;

  try {
    // 데이터베이스에 데이터 저장
    const result = await db.execute(`
      INSERT INTO SolutionTable (sol_id, sol_nm, sol_full_nm, sol_kor_nm, n_id, n_nm, headqt, team, url, github_url, work_fld, search_tag)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [sol_id, sol_nm, sol_full_nm, sol_kor_nm, n_id, n_nm, headqt, team, url, github_url, work_fld, search_tag]
    );
    console.log(result); // 결과 로깅, 예: 삽입된 행의 수 확인
    // 성공 응답 전송
    res.status(200).send('솔루션 등록 성공');
  } catch (error) {
    // 에러 처리
    console.error('솔루션 등록 중 에러 발생:', error);
    res.status(500).send('솔루션 등록 실패');
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));

