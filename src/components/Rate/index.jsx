import { Component } from 'react'

import './rate.css'

import star_grey from '../../assets/star-grey.svg'
import star_color from '../../assets/star-color.svg'

class Rate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stars: [1, 2, 3, 4, 5],
    }
  }
  render() {
    return (
      <div className="rating">
        <ul className="stars-container">
          {this.state.stars.map((el) => {
            if (el < this.props.nbStars) {
              return (
                <li key={el}>
                  <p>
                    <img src={star_color} alt="" />
                  </p>
                </li>
              )
            } else {
              return (
                <li key={el}>
                  <p>
                    <img src={star_grey} alt="" />
                  </p>
                </li>
              )
            }
          })}
        </ul>
      </div>
    )
  }
}

export default Rate
