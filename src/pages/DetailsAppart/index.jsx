import { Component } from 'react'
import Carrousel from '../../components/Carrousel'
import Tag from '../../components/Tag'
import Profil from '../../components/Profil'
import Rate from '../../components/Rate'
import Dropdown from '../../components/Dropdown'

import { dataAppart } from '../../data/dataAppart'

import './detailsAppart.css'

class DetailsAppart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.getData(),
    }
  }

  getData() {
    const { id } = this.props.match.params
    const data = dataAppart.filter((el) => {
      if (el.id === id) {
        return el
      } else {
        return false
      }
    })
    return data
  }

  getListEquipments() {
    return (
      <ul>
        {this.state.data[0].equipments.map((el) => {
          return <li key={el}>{el}</li>
        })}
      </ul>
    )
  }

  render() {
    return (
      <main className="detailsAppart">
        <Carrousel
          pictures={this.state.data[0].pictures}
          title={this.state.data[0].title}
        />
        <div className="container">
          <div className="info_1">
            <h1>{this.state.data[0].title}</h1>
            <h2>{this.state.data[0].location}</h2>
            <div className="tags">
              {this.state.data[0].tags.map((el) => (
                <Tag key={el} value={el} />
              ))}
            </div>
          </div>
          <div className="info_2">
            <Rate nbStars={this.state.data[0].rating} />
            <Profil
              name={this.state.data[0].host.name}
              photo={this.state.data[0].host.picture}
            />
          </div>
        </div>
        <div className="info_3">
          <Dropdown title="Description">
            <p>{this.state.data[0].description}</p>
          </Dropdown>
          <Dropdown title="Équipements">{this.getListEquipments()}</Dropdown>
        </div>
      </main>
    )
  }
}

export default DetailsAppart
