import styled from 'styled-components';
import { Page } from './firstpage';
import bg6 from './bg6.jpg';
import boy1 from './boy1.1.png';
import boy2 from './boy2.2.png';
import boy3 from './boy3.1.png';
import girl1 from './girl2.2.png';
import Wood6 from './wood6.png';


const Boytwo = styled.img`
position: absolute;
top: 740%;
width: 373px;
height: 373px;
left: 695px;
`
const Girlone = styled.img`
position: absolute;
top: 744%;
width: 315px;
height: 315px;
left: 151px;
`
const Boythree = styled.img`
position: absolute;
top: 744%;
width: 267px;
height: 282px;
left: 453px;
`
const Boyone = styled.img`
position: absolute;
top: 743%;
width: 353px;
height: 353px;
left: 306px;
`
const Woodsix = styled.div`
 background-image: ${props => `url(${props.wood})`};
 background-repeat: no-repeat;
 width: 487px;
height: 392px;
 background-size: contain;
 z-index: +1;
 position: absolute;
 top: 12%;
 right: 45.5%;
 
`
function Pagesix() {
    return (
        <div>
            <Girlone src={girl1} />
            <Boythree src={boy3} />
            <Boyone src={boy1} />
            <Boytwo src={boy2} />

            <Page bg={bg6} height="130vh">
                <Woodsix wood={Wood6}>
                    <h1>The boy of course cried out wolf, wolf” still louder than before but the villagers, who had fooled twice before, thought the boy was again deceiving them, and nobody stirred to come to his help.</h1>
                </Woodsix>
            </Page>


        </div>

    )


}
export default Pagesix