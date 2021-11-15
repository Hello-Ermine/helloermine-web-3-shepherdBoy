import styled from  'styled-components' ;
import { Page } from './firstpage';
import bg5 from './bg5.jpg'; 
import Wood5 from './wood5.png'

const Woodfive = styled.div`
 background-image: ${props => `url(${props.wood})`};
 background-repeat: no-repeat;
 width:421px;
 height:166px ;
 background-size: contain;
 z-index: +1;
 position: absolute;
 top: 35%;
 right: 20%;
 
`
function Pagefive(){
    return(
        <div>
        <Page bg={bg5} height="120vh">
 
        <Woodfive wood={Wood5}>
            <h1>But shortly after this a wolf actually did came out from the forest and began to worry the sheep</h1>
        </Woodfive>
          </Page>
            
        </div>
 
    )
 
 
 }
 export default Pagefive