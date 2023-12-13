
import { useParams } from 'react-router-dom';



const Product = (props) => {
  let { id } = useParams();

  let findItem = props.sol_data.find(function (sol_data) {
    return sol_data.id === id;
  });


  return (
    <div>

      <p>{findItem.sol_name}</p>
      <p>{findItem.sol_full_name}</p>
      <p>{findItem.kor_name}</p>
      <p>{findItem.developer}</p>
      <p>{findItem.headquarters}</p>
      <p>{findItem.team}</p>


      {/* <Container className="main-container">
        <h1>Product Page (연습중) </h1>
        <div className="gap-60" />
        <div >
          <h2>{sol_data[id].sol_name}</h2>
          <span>{sol_data[id].sol_full_name}</span>
          <p>test</p>
        </div>
      </Container> */}
    </div>
  );
};

export default Product;