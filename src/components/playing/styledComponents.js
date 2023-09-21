import styled from 'styled-components'

export const CardContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  flex-wrap: wrap;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`

export const CardImage = styled.img`
  width: 180px;
  height: 180px;
`

export const CardButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  //   position: absolute;
  //   top: 50%;
  //   transform: translateX(-50%) translateY(-50%);
`
