const Entry = ({ img, title, country, dates, text }) => {
  return (
    <div>
      <img src={img} alt={title} height="350" width="350" />
      <h2>{title}</h2>
      <h3>{country}</h3>
      <h3>Time to go: {dates}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Entry;
