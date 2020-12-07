const Card2 = ({ icon, title, paracard, style, style2 }) => {
  return (
    <div className="bigcard" style={style}>
      <div className="cardicondiv" style={style2}>
        <div className="cardicons">{icon}</div>
      </div>
      <div className="card-content">
        <h1 className="h2name"> {title}</h1>
        <p className="paracard pt-3 l-3 mr-3">{paracard}</p>
      </div>
    </div>
  );
};
export default Card2;
