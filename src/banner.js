import styled from 'styled-components'
import './banner.css' 
import lg from'./lg1.png'

const Logo = styled.img`
width: 794px;
height: 327px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);

`





function banner(){
    return(
        <div className="banner">
            <Logo src={lg} />
            
        </div>
        
    );
}















export default banner