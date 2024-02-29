import Pizza from './Pizza'

export const Menu = () => {
  return (
      <main className='menu'>
          <h2> Our Menu </h2>
          <Pizza name='Spinach Pizza' ingredients='Tomato, mozarela, spinach and ricotta cheese' photoName='../public/pizza_images/spinaci.jpg' price={10.00} />
    </main>
  )
}
