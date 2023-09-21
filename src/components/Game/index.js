import {useState} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import ResultView from '../result_view'
import ScoreHeader from '../score_Header'
import Playing from '../playing'
import {MainContainer, Container, CloseBtn, RulesBtn} from './styledComponents'

const Game = ({choicesList}) => {
  const [score, setScore] = useState(0)
  const [card, setCard] = useState({you: choicesList[0], opp: choicesList[2]})
  const [playing, setPlaying] = useState(true)
  const [result, setResult] = useState('')

  const calculateResult = (selectedCard, opponentCard) => {
    if (selectedCard.id === opponentCard.id) {
      return 'IT IS DRAW'
    }

    const wins = {
      ROCK: 'SCISSORS',
      PAPER: 'ROCK',
      SCISSORS: 'PAPER',
    }

    if (wins[selectedCard.id] === opponentCard.id) {
      setScore(prevScore => prevScore + 1)
      return 'YOU WON'
    }
    setScore(prevScore => prevScore - 1)
    return 'YOU LOSE'
  }

  const setPlayAgain = () => {
    setPlaying(prevState => !prevState)
  }

  const getSelectedCard = id => {
    const selectedCard = choicesList.find(each => each.id === id)
    const opponentCard = choicesList[Math.floor(Math.random() * 3)]

    setCard({you: selectedCard, opp: opponentCard})
    const resultText = calculateResult(selectedCard, opponentCard)
    setResult(resultText)

    setPlaying(false)
  }

  return (
    <MainContainer>
      <ScoreHeader score={score} />
      {playing ? (
        <Playing cards={choicesList} selectCard={getSelectedCard} />
      ) : (
        <ResultView selected={card} result={result} play={setPlayAgain} />
      )}
      <Popup trigger={<RulesBtn>Rules</RulesBtn>} modal nested>
        {close => (
          <Container>
            <img
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
            <CloseBtn onClick={close}>
              <RiCloseLine />
            </CloseBtn>
          </Container>
        )}
      </Popup>
    </MainContainer>
  )
}

export default Game
