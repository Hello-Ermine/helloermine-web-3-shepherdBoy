import bg1 from './bg1.png'
import sleep2 from './sleep2.png'
import styled from 'styled-components';
import Wood1 from './wood1.png'
import './firstpage.css'
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>







export const Page = styled.div`
 background-image: ${props => `url(${props.bg})`};
 background-size:cover;
 background-repeat: no-repeat;
 height: ${props => props.height || "100vh"} ;
 width: 100vw;
 position: relative;
 z-index: -1;
 background-position:center bottom;
 padding: 0;
 margin: 0;
 

`
const Sleep = styled.img`
position: absolute;
top: 160%;
width:200px; 
height:200px;
`

const Wood = styled.div`
 background-image: ${props => `url(${props.wood})`};
 width:621px;
 height:266px ;
 background-size: contain;
 z-index: +1;
 position: absolute;
 top: 20%;
 right: 7%;
`





function Pageone() {
    return (
        <div id="story" style={{ margin: 0 }}>
            <Sleep src={sleep2} />

            <Page bg={bg1} height="122vh">
                <Wood wood={Wood1}>
                    <h1 id="s1">Once upon a time, there was once a young Shepherd Boy who tended his sheep at the foot of a mountain near a dark forest. It was rather lonely for him all day,so he thought upon a plan by which he could get a little company and some excitement.</h1>
                </Wood>
            </Page>



        </div >


    );
}

export default Pageone