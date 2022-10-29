import styled from 'styled-components';

const StyledDiv = styled.div<{color: string}>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    background-color: ${({color}) => color};`

export default StyledDiv;