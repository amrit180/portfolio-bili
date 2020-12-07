const Overlay = ({ link, title }) => {
  return (
    <div
      className="mt-5 "
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="containered">
        <img src={link} alt="Avatar" className="image" />
        <div className="overlay ">
          <div className="text">{title}</div>
          <div className="text2">visit</div>
        </div>
      </div>
    </div>
  );
};
export default Overlay;
