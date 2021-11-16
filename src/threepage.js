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
top: 320%;
width: 520px;
height: 498px;
left: 438px;
`
const Girlone = styled.img`
position: absolute;
top: 295%;
width: 500px;
height: 500px;
left: -16px;
`
const Boythree = styled.img`
position: absolute;
top: 328%;
width: 406px;
height: 406px;
left: 148px;
`
const Boyone = styled.img`
position: absolute;
left: -5%;
top: 320%;
width: 493px;
height: 493px;
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
           


       <Page bg={bg3} height="120vh">
        <Woodthree wood={Wood3}>
            <h1>And the villagers came out to meet him, and some of them stopped with him for a consideration time. This pleased the boy so much</h1>
        </Woodthree>
          </Page>
            
       </div>

   )


}
export default Pagethree