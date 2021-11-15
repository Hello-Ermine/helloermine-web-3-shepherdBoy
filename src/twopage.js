
import styled from  'styled-components' ;
import { Page } from './firstpage';
import page2 from './page2.jpg';
import boy1 from './boy1.png';
import boy3 from './boy3.2.png';
import boy2 from './boy2.1.png';
import girl1 from './girl2.1.png';
import Wood2 from './wood2.png';

const Girlone = styled.img`
position: absolute;
top: 100%;
padding-top:38em;
padding-left:22em;
width:300px; 
height:300px;
`
const Boytwo = styled.img`
position: absolute;
top: 100%;
padding-top:31em;
padding-left: 40em;
width:350px; 
height:350px;
`
const Boyone = styled.img`
position: absolute;
top: 100%;
padding-top:35em;
padding-left: 14em;
width:350px; 
height:350px;
`
const Boythree = styled.img`
position: absolute;
top: 100%;
padding-top:38em;
padding-left: 29em;
width:230px; 
height:230px;
`
const Woodtwo = styled.div`
 background-image: ${props => `url(${props.wood})`};
 background-repeat: no-repeat;
 width:421px;
 height:166px ;
 background-size: contain;
 z-index: +1;
 position: absolute;
 top: 10%;
 right: 45%;
 
`

function Pagetwo(){
    return(
     <div>   
      <Boyone src={boy1}/>
      <Boytwo src={boy2}/>
      <Boythree src={boy3}/>
      <Girlone src={girl1}/>
    <Page bg={page2} height="120vh" >

    <Woodtwo wood={Wood2}>
            <h1>He rushed down towards the village calling out Wolf, Wolf</h1>
        </Woodtwo>
          </Page>
       </div>
    );
}

export default Pagetwo