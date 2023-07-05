
import { Link } from "react-router-dom"

function LevelCard({ destination, number }) {
  return (
    <div className="level-card">
        <Link className="div-link" to={destination}>
            <div className="level-card">{number}</div>
        </Link>
    </div>
  )
}

export default LevelCard