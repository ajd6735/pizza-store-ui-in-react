

const Pizza = ({pizzaObj}) => {

  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt="spinach pizza" />
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      <span>{pizzaObj.soldOut ? 'SOLD OUT ' : pizzaObj.price}</span>
      <span>{ pizzaObj.soldOut}</span>
      <br />
      <div>
      </div>
    </div>
  );
};

export default Pizza;
