import styled from  'styled-components' ;
import './nine.css'
import moral from './moral.png'



const Moral = styled.img`
position: absolute;
width:1084px;
height:429;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
filter: drop-shadow(1px 4px 5px black);
`

function Pagenine(){
    return(
        <div className="contain2" id="moral">
        <Moral src={moral}/>
       <div className="moral">
       
        </div>
        </div>
 
    )
 
 
 }
 export default Pagenine