// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getDataFromApi()
  }

  getDataFromApi = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const getData = await response.json()
    const convertSnakeToCamel = getData.teams.map(eachIpl => ({
      id: eachIpl.id,
      name: eachIpl.name,
      teamImageUrl: eachIpl.team_image_url,
    }))

    this.setState({teamsList: convertSnakeToCamel, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <div className="home-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <h1 className="main-heading">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <span>IPL Dashboard</span>
            </h1>
            <ul className="team-list-container">
              {teamsList.map(eachItem => (
                <TeamCard cardDetails={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
