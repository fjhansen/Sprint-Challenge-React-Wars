import styled from 'styled-components';

export const dimGrey = "#636363";



export const WrapperDiv = styled.div `
width: 79%;
display: flex;
flex-wrap: wrap;
margin: auto;
border: 1px solid #ad7d37;
background: rgba(126,120,99, 0.5);
border-radius: 10%;
height: 90vh;
margin-top: 1%;
padding: 0 3%;

`

export const StarCardList = styled.ul `
background: #7e7863;

margin: 3%;
display: flex;
flex-wrap: wrap;
text-align: center;

flex-direction: column;
line-height: 1;
width: 80%;
padding: 3% 1%;
list-style: none;
color: #e6d119;

${props => (props.type === 'primary' ? `color: #fdd835; color:#4caf50` : null)};

`

export const StarCardTitle = styled.h3 `
background-color: #BEAD15;
padding: 5% 0;
display: flex;
justify-content: center;
align-items: center;
width: 82%;
font-size: .8em;

margin: 3%;

`

export const B = styled.b `
color: black;
text-align: left;
margin-right: 1%;

`