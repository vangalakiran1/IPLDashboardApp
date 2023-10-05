// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {cardDetails} = props
  const {id, name, teamImageUrl} = cardDetails
  return (
    <Link to={`/team-matches/${id}`} className="team-card-link">
      <li className="team-card-container">
        <img src={teamImageUrl} alt={name} />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
