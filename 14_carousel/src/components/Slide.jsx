const Slide = ({ url, isActive }) => {
  return (
    <div className={isActive ? "slide active" : "slide"}>
      <img src={url} />
    </div>
  );
};

export default Slide;
