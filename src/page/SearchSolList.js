import React from 'react';

const SearchSolList = ({ data }) => {
  // const solutions = Array.isArray(data) ? data : [];
  return (
    <div>
      <h2>검색 결과</h2>
      <ul>
        {data.map((solution) => (
          <li key={solution.id}>
            {solution.sol_name} - {solution.kor_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchSolList;
