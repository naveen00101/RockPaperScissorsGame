import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #223a5f;
  min-height: 100vh;
`
export const Container = styled.div`
  display: flex;
  background-color: white;
  align-items: flex-start;
  padding: 10px;
  position: relative;
`
export const CloseBtn = styled.button`
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 20px;
  background-color: #00000040;
  color: white;
  border: none;
  border-radius: 30px;
  text-align: center;
  width: 40px;
  height: 40px;
`
export const RulesBtn = styled.button`
  align-self: flex-end;
  margin: 40px;
  padding: 10px;
  border-radius: 10px;
  background-color: white;
  border: none;
  font-size: 20px;
  font-weight: 500;
  font-family: Roboto;
  cursor: pointer;
`
