
import LevelCard from "../../Components/LevelCard"

function Phishing() {
  return (
    <div>
      <section>
        <div className='quizzes'>
          <div className='levels-grid'>
            <LevelCard destination="/phishing-one" number="1"/>
            <LevelCard number="2"/>
            <LevelCard number="3"/>
            <LevelCard number="4"/>
            <LevelCard number="5"/>
            <LevelCard number="6"/>
            <LevelCard number="7"/>
            <LevelCard number="8"/>
            <LevelCard number="9"/>
            <LevelCard number="10"/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Phishing