import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';


const RegisterSolution = ({ onSubmit }) => {

  const [solution, setSolution] = useState({
    sol_id: '',
    sol_nm: '',
    sol_full_nm: '',
    so_kor_nm: '',
    n_id: '',
    n_nm: '',
    headqt: '',
    team: '',
    url: '',
    github_url: '',
    work_fld: '',
    search_tag: ''
  });


  const handleChange = (e) => {
    setSolution({ ...solution, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/registersolution', solution);
      if (response.status >= 200 && response.status < 300) {
        // 성공 처리 로직
        alert('솔루션 등록 성공');
      } else {
        // 실패 처리 로직
        alert('솔루션 등록 실패');
      }
    } catch (error) {
      alert(`솔루션 등록 실패: ${error.message}`);
      console.error('솔루션 등록 중 에러 발생', error);
    }
    setSolution({
      sol_id: '',
      sol_nm: '',
      sol_full_nm: '',
      so_kor_nm: '',
      n_id: '',
      n_nm: '',
      headqt: '',
      team: '',
      url: '',
      github_url: '',
      work_fld: '',
      search_tag: ''
    });
  };


  return (
    <>
      <div className="register-box">
        <div className="register-bg" />
      </div>
      <div className="gap-60" />
      <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h5">Solution 등록</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="sol_id"
            label="Solution id"
            name="sol_id"
            autoComplete="sol_id"
            autoFocus
            value={solution.sol_id}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="sol_nm"
            label="Solution Name"
            type="text"
            id="sol_nm"
            autoComplete="sol_nm"
            value={solution.sol_nm}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="sol_full_nm"
            label="Solution Full Name"
            type="text"
            id="sol_full_nm"
            autoComplete="sol_full_nm"
            value={solution.sol_full_nm}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="so_kor_nm"
            label="한국어 Solution 이름"
            type="text"
            id="so_kor_nm"
            autoComplete="so_kor_nm"
            value={solution.so_kor_nm}
            onChange={handleChange}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="n_id"
            label="개발자 사번"
            type="text"
            id="n_id"
            autoComplete="n_id"
            value={solution.n_id}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="n_nm"
            label="개발자 이름"
            type="text"
            id="n_nm"
            autoComplete="n_nm"
            value={solution.n_nm}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="headqt"
            label="담당 명"
            type="text"
            id="headqt"
            autoComplete="headqt"
            value={solution.headqt}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="team"
            label="팀 이름"
            type="text"
            id="team"
            autoComplete="team"
            value={solution.team}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="url"
            label="Solution URL"
            type="text"
            id="url"
            autoComplete="url"
            value={solution.url}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="github_url"
            label="GitHub URL"
            type="text"
            id="github_url"
            autoComplete="github_url"
            value={solution.github_url}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="work_fld"
            label="업무 영역"
            type="text"
            id="work_fld"
            autoComplete="work_fld"
            value={solution.work_fld}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="search_tag"
            label="검색 Tag"
            type="text"
            id="search_tag"
            autoComplete="search_tag"
            value={solution.search_tag}
            onChange={handleChange}
          />




          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            등록
          </Button>
        </form>
        <div className="gap-60" />
      </Container>


    </>
  );
};

export default RegisterSolution;