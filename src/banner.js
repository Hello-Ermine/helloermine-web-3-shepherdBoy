import styled from 'styled-components';
import './banner.css' ;
import lg from'./lg1.png';
import cloud1 from './cloud1.png';
import cloud2 from './cloud2.png';
import cloud3 from './cloud3.png';
import cloud4 from './cloud4.png';
import cloud5 from './cloud5.png';
const Logo = styled.img`
width: 794px;
height: 327px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);

`

const Cloud1 = styled.img`
position: absolute;
width: 236.16px;
height: 112px;
left: 78.1%;
right: 5.54%;
top: 64.73%;
bottom: 12.38%;

`
const Cloud2 = styled.img`
position: absolute;
width:295.2px;
height: 139px;
left: 6.58%;
right: 72.97%;
top: 56.85%;
bottom: 17.07%;
`
const Cloud3 = styled.img`
position: absolute;
width: 183px;
height: 120px;
left: 150px;
top: 52px;

`
const Cloud4 = styled.img`
position: absolute;
width: 389px;
height: 117px;
left: 1125px;
top: 20px;
`
const Cloud5 = styled.img`
position: absolute;
width: 268px;
height: 125px;
left: 37.95%;
right: 43.49%;
top: 87.62%;
bottom: -11.07%;
`



function banner(){
    return(
        <div className="banner">
            <Logo src={lg} />
            <Cloud1 src={cloud1}  />
            <Cloud2 src={cloud2}  />
            <Cloud3 src={cloud3}  />
            <Cloud4 src={cloud4}  />
            <Cloud5 src={cloud5}  />
        </div>
        
    );
}















export default banner