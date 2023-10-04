// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestDetails} = props
  const {
    // id,
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    // matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestDetails
  return (
    <div className="latest-match-container">
      <div className="latest-match-profile">
        <div>
          <h2>{competingTeam}</h2>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
      </div>
      <div className="latest-match-innings">
        <div>
          <p>First Innings</p>
          <p>{firstInnings}</p>
        </div>
        <div>
          <p>Second Innings</p>
          <p>{secondInnings}</p>
        </div>
        <div>
          <p>Man of The Match</p>
          <p>{manOfTheMatch}</p>
        </div>
        <div>
          <p>Umpires</p>
          <p>{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
