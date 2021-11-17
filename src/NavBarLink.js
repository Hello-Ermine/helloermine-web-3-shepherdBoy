import { useState } from 'react'
const NavBarLink = ({ href, childrenavigator, isactive, children }) => {
    const [ishover, setishover] = useState(isactive || false);

    return (
        <li style={{ padding: "14px 16px" }} onMouseEnter={() => setishover(true)} onMouseLeave={() => setishover(false)} >
            <a className={ishover ? 'bg-active' : 'bg'} href={href}>{children}</a>

        </li>
    )
}

export default NavBarLink