import React from 'react'

const Footer = () => {
  return (
      <footer>
          <div>We are Open!</div>
          <div>{new Date().toLocaleTimeString() } </div>
      </footer>
  )
}

export default Footer;