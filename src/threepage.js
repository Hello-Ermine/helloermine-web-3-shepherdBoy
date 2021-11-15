import styled from  'styled-components' ;
import { Page } from './firstpage';
import bg3 from './bg3.jpg'; 
import boy1 from './boy1.png';
import boy2 from './boy2.png';
import boy3 from './boy3.png';
import girl1 from './girl1.png';
import Wood3 from  './wood3.png';

const Boytwo = styled.img`
position: absolute;
top: 100%;
padding-top:70em;
padding-left: 36em;
width:350px; 
height:350px;
`
const Girlone = styled.img`
position: absolute;
top: 100%;
padding-top:60em;
padding-left: 4em;
width:350px; 
height:350px;
`
const Boythree = styled.img`
position: absolute;
top: 100%;
padding-top:71.5em;
padding-left: 10em;
width:300px; 
height:300px;
`
const Boyone = styled.img`
position: absolute;
top: 100%;
padding-top:68em;
width:350px; 
height:350px;
`
const Woodthree = styled.div`
 background-image: ${props => `url(${props.wood})`};
 background-repeat: no-repeat;
 width:421px;
 height:166px ;
 background-size: contain;
 z-index: +1;
 position: absolute;
 top: 65%;
 right: 68%;
 
`


function Pagethree(){
   return(
       <div>
           <Girlone src={girl1}/>
            <Boythree src={boy3}/>
           <Boyone src={boy1}/>
           <Boytwo src={boy2}/>
           


       <Page bg={bg3} height="100vh">
        <Woodthree wood={Wood3}>
            <h1>And the villagers came out to meet him, and some of them stopped with him for a consideration time. This pleased the boy so much</h1>
        </Woodthree>
          </Page>
            
       </div>

   )


}
export default Pagethree