const SolutionBox = ({ id, solName, solFullName, korName }) => {
  return (

    <div className="solution-img">
      <img src={process.env.PUBLIC_URL + "/image/solution/solution" + id + ".png"} alt="newsolution-box" />
      <p className="solution-title">{solName}</p>
      <p className="solution-title-fullname">{solFullName}</p>
      <p className="solution-titlekr">{korName}</p>
    </div>
  );
}

export default SolutionBox;