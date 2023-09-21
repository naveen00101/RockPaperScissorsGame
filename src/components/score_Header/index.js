import {
  BorderContainer,
  GameTitle,
  ScoreContainer,
  ScoreText,
  Score,
} from './styledComponents'

const ScoreHeader = props => {
  const {score} = props
  return (
    <BorderContainer>
      <GameTitle>ROCK PAPER SCISSORS</GameTitle>
      <ScoreContainer>
        <ScoreText>Score</ScoreText>
        <Score>{score}</Score>
      </ScoreContainer>
    </BorderContainer>
  )
}

export default ScoreHeader
