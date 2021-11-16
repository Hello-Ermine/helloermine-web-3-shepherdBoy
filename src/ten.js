import styled from  'styled-components' ;
import './ten.css'
import fence from './fence.png'
import shepmember from './shepmember.png'

const Fence = styled.img`
position: absolute;
top: 79.5%;
left: -1%;
width:1022px; 
height:300px;

`
const Fence1 = styled.img`
position: absolute;
top: 79.5%;
left: 39%;
width:1022px; 
height:300px;

`
const Fence2 = styled.img`
position: absolute;
top: 79.5%;
left: 80%;
width:1022px; 
height:300px;

`


const Shepmember = styled.img`
position: absolute;
width:300px; 
height:300px;
left: 5%;

`
const Shepmember1 = styled.img`
position: absolute;
width:300px; 
height:300px;
left: 20%;

`
const Shepmember2 = styled.img`
position: absolute;
width:300px; 
height:300px;
left: 35%;

`
const Shepmember3 = styled.img`
position: absolute;
width:300px; 
height:300px;
left: 50%;

`
const Shepmember4 = styled.img`
position: absolute;
width:300px; 
height:300px;
left: 65%;

`
const Shepmember5 = styled.img`
position: absolute;
width:300px; 
height:300px;
left: 80%;

`

function Pageten(){
    return(
        
        <div className="contain3" id="member">
        
     <h1>Member</h1>
        
         <div class="grid-container">
         <div class="grid-item">1</div>
         <Fence src={fence}/>
         <Fence1 src={fence}/>
         <Fence2 src={fence}/>
         

         <div class="grid-item"></div>
         <Shepmember src={shepmember}/>
         <div class="grid-item"></div>  
         <Shepmember1 src={shepmember}/>
         <div class="grid-item"></div>
         <Shepmember2 src={shepmember}/>
         <div class="grid-item"></div>
         <Shepmember3 src={shepmember}/>
         <div class="grid-item"></div>  
         <Shepmember4 src={shepmember}/>
         <Shepmember5 src={shepmember}/>
       </div>

        </div>
 
    )
 
 
 }
 export default Pageten