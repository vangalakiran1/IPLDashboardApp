// Write your code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {teamClassName: '', teamDetails: [], isLoading: true}

  componentDidMount() {
    this.getDataFromApi()
  }

  getDataFromApi = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const getData = await response.json()
    console.log(getData)
    const convertSnakeToCamel = {
      teamBannerUrl: getData.team_banner_url,
      latestMatchDetails: {
        id: getData.latest_match_details.id,
        competingTeam: getData.latest_match_details.competing_team,
        competingTeamLogo: getData.latest_match_details.competing_team_logo,
        date: getData.latest_match_details.date,
        firstInnings: getData.latest_match_details.first_innings,
        manOfTheMatch: getData.latest_match_details.man_of_the_match,
        matchStatus: getData.latest_match_details.match_status,
        result: getData.latest_match_details.result,
        secondInnings: getData.latest_match_details.second_innings,
        umpires: getData.latest_match_details.umpires,
        venue: getData.latest_match_details.venue,
      },
      recentMatches: getData.recent_matches.map(eachItem => ({
        umpires: eachItem.umpires,
        result: eachItem.result,
        manOfTheMatch: eachItem.man_of_the_match,
        firstInnings: eachItem.first_innings,
        id: eachItem.id,
        date: eachItem.date,
        venue: eachItem.venue,
        competingTeam: eachItem.competing_team,
        competingTeamLogo: eachItem.competing_team_logo,
        secondInnings: eachItem.second_innings,
        matchStatus: eachItem.match_status,
      })),
    }
    this.setState({
      teamClassName: id,
      teamDetails: convertSnakeToCamel,
      isLoading: false,
    })
  }

  renderLatestMatch = () => {
    const {teamDetails} = this.state
    const {teamBannerUrl, latestMatchDetails} = teamDetails
    return (
      <div>
        <img
          src={teamBannerUrl}
          alt="team banner"
          className="team-banner-img"
        />
        <LatestMatch latestDetails={latestMatchDetails} name="details" />
        {this.renderRecentMatches()}
      </div>
    )
  }

  renderRecentMatches = () => {
    const {teamDetails} = this.state
    const {recentMatches} = teamDetails
    return (
      <ul className="match-card-main">
        {recentMatches.map(eachMatch => (
          <MatchCard recentMatchesDetails={eachMatch} key={eachMatch.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {teamClassName, isLoading} = this.state
    return (
      <div className={`team-matches-container ${teamClassName}`}>
        {isLoading ? this.renderLoader() : this.renderLatestMatch()}
      </div>
    )
  }
}

export default TeamMatches
