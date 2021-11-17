import styled from 'styled-components';
import './ten.css'
import fence from './fencegroup.png'
import aomsin from './aomsin.png'
import gift from './gift.png'
import fah from './fah.png'
import bom from './bom.png'
import boat from './boat.png'
import toey from './toey.png'
import shepmember from './shepmember.png'


const pageTen2 = () => {
    return (
        <div id="member" style={{ width: "100vw", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", background: "#A5DAE2", justifyContent: "space-between" }} >
            <div>
                <h1> Member </h1>
            </div>
            <div id="gridthing" style={{ display: "grid", width: "97vw" }}  >
               <a href="https://www.instagram.com/chatzsin/" target="_blank"> <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h3> AOMSIN </h3>
                    <img src={aomsin} style={{ objectFit: "cover", width: "100%" }} className="aomsin" />
                    <h2 className="subText" > WEB DESIGN </h2>
                </div></a>
                <a href="https://www.instagram.com/cchabarr/" target="_blank"><div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h3> GIFT </h3>
                    <img src={gift} style={{ objectFit: "cover", width: "100%" }} className="gift" />
                    <h2 className="subText" > WEB DESIGN </h2>
                </div></a>
                <a href="https://www.instagram.com/_fxaxhx/" target="_blank"> <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h3> FAH </h3>
                    <img src={fah} style={{ objectFit: "cover", width: "100%" }}  className="fah"/>
                    <h2 className="subText"> FRONT END </h2>
                </div></a>
                <a href="https://www.instagram.com/balalombie_/" target="_blank"> <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h3> BOM </h3>
                    <img  a href =""src={bom} style={{ objectFit: "cover", width: "100%" }}  className="bom"/>
                    
                    <h2 className="subText"> FRONT END </h2>
                </div></a>
                <a href="https://www.instagram.com/uuuuuu_ou/" target="_blank"> <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h3> BOAT </h3>
                    <img src={boat} style={{ objectFit: "cover", width: "100%" }} className="boat"/>
                    <h2 className="subText"> FRONT END </h2>
                </div></a>
                <a href="https://www.instagram.com/nakatnan/" target="_blank">  <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h3> TOEY </h3>
                    <img src={toey} style={{ objectFit: "cover", width: "100%" }}  className="toey"/>
                    <h2 className="subText"> INFRASTRUCTURE </h2>
                </div></a>
            </div>
            <div style={{ width: "100vw", height: "200px", overflow: "hidden", display: "flex", alignItems: "flex-end" }} >
                <img src={fence} />
                <img src={fence} />
                <img src={fence} />
                
            </div>
        </div>
    )
}
export default pageTen2