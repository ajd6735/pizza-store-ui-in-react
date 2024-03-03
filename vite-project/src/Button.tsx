export const Button = ({closeHour}) => {
  return (
    <div className="order">
      <button className="btn">Order</button>
          <p>We are Open until {closeHour}:00, Order now!</p>
    </div>
  );
};
