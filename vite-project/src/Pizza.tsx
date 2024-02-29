const Pizza = (props: {
  photoName: string;
  name: string;
  ingredients: string;
  price: number;
}) => {
  return (
    <div>
      <img src={props.photoName} alt="spinach pizza" />
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
      <span>${props.price}</span>
      <br />
      <div>
        <button
          style={{
            color: "white",
            backgroundColor: "blue",
            width: "140px",
            height: "80px",
          }}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Pizza;
