import { Component } from 'react'

import logo from '../../assets/logo_white.svg'

import './footer.css'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer_img">
          <img src={logo} alt="Logo du site de location d'appartements Kasa" />
        </div>
        <div className="copyright">
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
    )
  }
}

export default Footer
