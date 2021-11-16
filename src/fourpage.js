import styled from  'styled-components' ;
import { Page } from './firstpage';
import bg4 from './bg4.jpg'; 
import boy2 from './boy2.png';
import Wood4 from './wood4.png';

const Boytwo = styled.img`
position: absolute;
top: 473%;
width: 520px;
height: 520px;
`
const Woodfour = styled.div`
 background-image: ${props => `url(${props.wood})`};
 background-repeat: no-repeat;
 width:421px;
 height:166px ;
 background-size: contain;
 z-index: +1;
 position: absolute;
 top: 35%;
 right: 10%;
 
`


function Pagefour(){
    return(
        <div>
        <Boytwo src={boy2}/>
        <Page bg={bg4} height="120vh">
        <Woodfour wood={Wood4}>
            <h1>A few days afterwards he tried the same trick, and again the villagers came to his help.</h1>
        </Woodfour>
          </Page>
 
        </div>
 
    )
 
 
 }
 export default Pagefour