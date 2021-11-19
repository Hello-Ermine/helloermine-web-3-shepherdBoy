import React from 'react'

import { Stack } from 'react-bootstrap'

const Profile = ({ name, image, role, link, aos }) => {
    return (
        <a href={link} data-aos={aos} target="_blank" className="">
            {/* <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            > */}
            <Stack
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <h3> {name} </h3>
                <img
                    src={image}
                    style={{ objectFit: "cover", width: "100%" }}
                    className="member onhold"
                />
                <h2 className="subText" >
                    {role}
                </h2>
            </Stack >
            {/* </div> */}
        </a>
    );
}

export default Profile
