import { FC, ReactElement } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer";

type Props = {
    children: ReactElement;
}

const Layot:FC<Props> = ({children}) => {
    return (
        <>
            <Navbar />
            <main 
            className="mt-[60px] w-full max-w-[1400px]
             mx-auto min-h-[85vh]">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layot