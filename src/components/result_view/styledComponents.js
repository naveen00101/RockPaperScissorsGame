import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction === 'column' ? 'column' : 'row')};
  justify-content: space-between;
  align-items: center;
  width: ${props => props.width}px;
`
export const PlayerHeading = styled.h1`
  font-family: Roboto;
  font-size: 24px;
  font-weight: 600;
  color: white;
  text-align: center;
`

export const Card = styled.img`
  width: 150px;
  height: 150px;
`

export const PlayAgain = styled.button`
  background-color: white;
  border: none;
  font-family: Bree Serif;
  color: #223a5f;
  border-radius: 10px;
  padding: 15px;
  width: 150px;
  cursor: pointer;
`
export const ResultText = styled.p`
  font-family: Roboto;
  font-size: 28px;
  font-weight: 600;
  color: white;
  text-align: center;
`
