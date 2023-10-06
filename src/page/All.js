import { Link } from 'react-router-dom';

const All = () => {
  return (
    <div>
      <h1>All Page</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default All;