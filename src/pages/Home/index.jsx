import { Component } from 'react'
import Banner from '../../components/Banner'
import Thumb from '../../components/Thumb'

import { dataAppart } from '../../data/dataAppart'

class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <main role="main">
          <section className="listAppart">
            {dataAppart.map((el) => (
              <Thumb key={el.id} title={el.title} id={el.id} cover={el.cover} />
            ))}
          </section>
        </main>
      </div>
    )
  }
}

export default Home
