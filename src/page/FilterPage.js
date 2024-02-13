import React from 'react';
import { useParams } from 'react-router-dom';

const FilteredPage = (props) => {
  const { filterType } = useParams();

  let filteredData = [];
  switch (filterType) {
    case 'all':
      filteredData = props.sol_data;
      break;
    case 'access':
    case 'rm':
    case 'wire':
    case 'infra':
    case 'assetmgmt':
    case 'somgmt':
    case 'mgmt':
      filteredData = props.sol_data.filter(item => item.work_field === filterType);
      break;
    default:
      filteredData = []; // 기본값 혹은 잘못된 경로 처리
  }


  return (
    <div>
      {filteredData.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3> {/* 예시 필드, 실제 필드에 맞게 수정 필요 */}
          {/* 추가 정보 렌더링 */}
          <p> test page</p>
        </div>
      ))}
    </div>
  );
};

export default FilteredPage;