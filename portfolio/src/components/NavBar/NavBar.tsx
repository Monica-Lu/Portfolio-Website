import react, {useEffect, Suspense} from 'react';
import {useResetRecoilState} from 'recoil';
import * as NavMenu from "@radix-ui/react-navigation-menu";

import './NavBar.css';

export const NavBar = () => {
    return (
        <NavMenu.Root className="NavBar">
            <NavMenu.List className="NavBar-list">
                <NavMenu.Item>
                    <NavMenu.Trigger className="NavBar-trigger">Home</NavMenu.Trigger>
                </NavMenu.Item>
                <NavMenu.Item>
                    <NavMenu.Trigger className="NavBar-trigger">About Me</NavMenu.Trigger>
                </NavMenu.Item>
                <NavMenu.Item>
                    <NavMenu.Trigger className="NavBar-trigger">Projects</NavMenu.Trigger>
                </NavMenu.Item>
            </NavMenu.List>
        </NavMenu.Root>
    )
}