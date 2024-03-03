import Pizza from './Pizza';
import pizzaData from './data';
import '../public/pizza_images/focaccia.jpg';

export const Menu = () => {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2> Our Menu </h2>
      {numPizzas > 0 && (
        <>
          <p className="pizzas">
            Authentic Italian cuisine, 6 creative dishes to choose from.All from
            our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      )}
    </main>
  );
};
