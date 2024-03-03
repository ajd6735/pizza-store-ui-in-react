import { Button } from "./Button";
const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  if (!isOpen) {
    return (
      <p>We are happy to welcome you between {openHour}:00 and {closeHour}:00.</p>
    )
  }

  return (
      <footer className="footer">
      {isOpen && <Button closeHour={closeHour} />}
      </footer>
  )
}

export default Footer;