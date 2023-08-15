import React from "react";

export type NavType = "home" | "coins" | "exchanges" | ""

interface ContextPrpos {
    navActive: NavType | null
    setNavActive: (navActive: NavType) => void
}

export const NavContext = React.createContext<ContextPrpos>({
    navActive: "",
    setNavActive: () => { }
});





