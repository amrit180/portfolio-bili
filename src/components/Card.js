const Card = ({ icon, title, style }) => {
  return (
    <>
      <div data-aos="zoom-in" className="carded mt-5" style={style}>
        <div className="cardicon">{icon}</div>
        <div className="card-content">
          <h1 className="h2name"> {title}</h1>
        </div>
      </div>
    </>
  );
};
export default Card;
