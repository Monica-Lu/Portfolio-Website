import * as NavMenu from "@radix-ui/react-navigation-menu";

import './NavBar.css';

export const NavBar = () => {
    return (
        <NavMenu.Root className="NavBar" delayDuration={1000}>

            <NavMenu.Link className='logo-link' href="/">
                <div className='logo-text'>Monica Lu</div>
            </NavMenu.Link>

            <NavMenu.List className="NavBar-list">
                <NavMenu.Item>
                    <NavMenu.Link className='link' href="/aboutme">Status</NavMenu.Link>
                </NavMenu.Item>
                <NavMenu.Item>
                    <NavMenu.Link className='link' href="/projects">Status</NavMenu.Link>
                </NavMenu.Item>
            </NavMenu.List>
        </NavMenu.Root>
    )
}