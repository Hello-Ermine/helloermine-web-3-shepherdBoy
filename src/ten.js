import styled from  'styled-components' ;
import './ten.css'
import fence from './fence.png'
import shepmember from './shepmember.png'

const Fence = styled.img`
position: absolute;
top: 75%;
left: -1%;
width:1022px; 
height:300px;

`
const Fence1 = styled.img`
position: absolute;
top: 75%;
left: 39%;
width:1022px; 
height:300px;

`
const Fence2 = styled.img`
position: absolute;
top: 75%;
left: 80%;
width:1022px; 
height:300px;

`


const Shepmember = styled.img`
position: absolute;
width:250px; 
height:250px;
left: 5%;

`
const Shepmember1 = styled.img`
position: absolute;
width:250px; 
height:250px;
left: 20%;

`
const Shepmember2 = styled.img`
position: absolute;
width:250px; 
height:250px;
left: 35%;

`
const Shepmember3 = styled.img`
position: absolute;
width:250px; 
height:250px;
left: 50%;

`
const Shepmember4 = styled.img`
position: absolute;
width:250px; 
height:250px;
left: 65%;

`
const Shepmember5 = styled.img`
position: absolute;
width:250px; 
height:250px;
left: 80%;

`

function Pageten(){
    return(
        
        <div className="contain3" id="member">
        
     <h1>Member</h1>
        
         <div class="grid-container">
        
         <div class="grid-item">asdasd</div>
         <Fence src={fence}/>
         <Fence1 src={fence}/>
         <Fence2 src={fence}/>
         <Shepmember src={shepmember}/>

         <div class="grid-item"></div>
         <Shepmember1 src={shepmember}/>
         <div class="grid-item"></div>  
         <Shepmember2 src={shepmember}/>
         <div class="grid-item"></div>
         <Shepmember3 src={shepmember}/>
         <div class="grid-item"></div>
         <Shepmember4 src={shepmember}/>
         <div class="grid-item"></div>  
         <Shepmember5 src={shepmember}/>
    
       </div>
       <div class="grid-container2">
        
        <div class="grid-item1">Aomsin</div>
  

        <div class="grid-item1">Gift</div>
       
        <div class="grid-item1">Fah</div>  
      
        <div class="grid-item1">Bom</div>
      
        <div class="grid-item1">Boat</div>
      
        <div class="grid-item1">Toey</div>  
     
        </div>
       </div>
        
 
    )
 
 
 }
 export default Pageten