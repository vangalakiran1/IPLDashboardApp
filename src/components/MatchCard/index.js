// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatchesDetails} = props
  const {
    // umpires,
    result,
    // manOfTheMatch,
    // firstInnings,
    // id,
    // date,
    // venue,
    competingTeam,
    competingTeamLogo,
    // secondInnings,
    matchStatus,
  } = recentMatchesDetails
  let winOrLose
  if (matchStatus === 'Won') {
    winOrLose = 'won'
  } else {
    winOrLose = 'lose'
  }
  return (
    <li className="match-card-container">
      <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={`${winOrLose}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
