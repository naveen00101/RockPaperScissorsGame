import {
  Container,
  PlayerHeading,
  Card,
  ResultText,
  PlayAgain,
} from './styledComponents'

const ResultView = props => {
  const {selected, result, play} = props

  const {you, opp} = selected
  console.log(you)
  console.log(opp.imageUrl)

  return (
    <Container direction="column">
      <Container width={500}>
        <Container direction="column">
          <PlayerHeading>YOU</PlayerHeading>
          <Card src={you.imageUrl} alt="your choice" />
        </Container>

        <Container direction="column">
          <PlayerHeading>OPPONENT</PlayerHeading>
          <Card src={opp.imageUrl} alt="opponent choice" />
        </Container>
      </Container>
      <ResultText>{result}</ResultText>
      <PlayAgain
        onClick={() => {
          play()
        }}
      >
        PLAY AGAIN
      </PlayAgain>
    </Container>
  )
}

export default ResultView
