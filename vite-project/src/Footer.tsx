
const Footer = () => {
  return (
      <footer className="footer">
          <div>We are Open!</div>
          <div>{new Date().toLocaleTimeString() } </div>
      </footer>
  )
}

export default Footer;