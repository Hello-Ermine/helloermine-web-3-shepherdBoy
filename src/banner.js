import styled from 'styled-components'
import './banner.css' 
import lg from'./lg1.png'

const Logo = styled.img`
background-image: ${props => `url(${props.logo})`};
width: 794px;
height: 327px;
position: absolute;
`





function banner(){
    return(
        <div className="banner">
            <Logo logo={lg} />
        </div>
    )
}















export default banner