import {
  MainContainer,
  CardContainer,
  CardButton,
  CardImage,
} from './styledComponents'

const Playing = props => {
  const {cards, selectCard} = props
  return (
    <MainContainer>
      <CardContainer>
        {cards.map(card => (
          <li key={card.id} style={{listStyle: 'none'}}>
            <CardButton
              type="button"
              data-testid={`${card.id.toLowerCase()}Button`}
              onClick={() => selectCard(card.id)}
            >
              <CardImage src={card.imageUrl} alt={card.id} />
            </CardButton>
          </li>
        ))}
      </CardContainer>
    </MainContainer>
  )
}

export default Playing
