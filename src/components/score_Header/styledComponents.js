import styled from 'styled-components'

export const BorderContainer = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin: 50px;
  width: 70%;
`
export const GameTitle = styled.h1`
  font-family: Bree Serif;
  font-size: 25px;
  font-weight: 400;
  color: white;
  width: min-content;
  margin: 0;
`
export const ScoreContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 100px;
`
export const Score = styled.p`
  font-family: Roboto;
  font-size: 40px;
  font-weight: 600;
  color: #223a5f;
  margin: 0;
  margin-bottom: 40px;
`
export const ScoreText = styled.p`
  font-family: Bree Serif;
  font-size: 20px;
  font-weight: 500;
  color: #223a5f;
  margin: 0;
  margin-top: 40px;
`
