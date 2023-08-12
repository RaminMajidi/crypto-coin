import { FC, ReactElement } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer";

type Props = {
    children: ReactElement;
}

const Layout:FC<Props> = ({children}) => {
    return (
        <>
            <Navbar />
            <main 
            className="mt-[10dvh] w-full max-w-[1400px]
             mx-auto min-h-[90dvh]">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout