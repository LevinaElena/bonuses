import styled from 'styled-components';

const StyledHeaderDiv = styled.div<{color: string}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  font-family: Lato, sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  color: white;
  padding: 1rem 0 0 0;
  background-color: ${({color}) => color};`

export default StyledHeaderDiv;