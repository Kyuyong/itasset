// useParams를 사용하기 위해 import를 해줍니다.
import { useParams } from 'react-router-dom';

function Detail(props) {
  // 이렇게 :id 값을 가져옵니다.
  let { id } = useParams();
  let data = props.data;

  return (
    <div>

      <article >
        <div >

          <div >
            <h2>{data[id].author}</h2>
            <span>{data[id].location}</span>
          </div>
        </div>

      </article>

      <article >
        <h1>{data[id].name}</h1>
        <p>{data[id].content}</p>
      </article>
    </div>
  );
};

export default Detail;