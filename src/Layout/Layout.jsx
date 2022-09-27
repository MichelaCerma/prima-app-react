import { Nav } from "./Nav/Nav.jsx"
import './Layout.css'
import { Header } from "./Header/Header.jsx"
import Section from "./Section/Sections.jsx"
import { Footer } from "./Footer/Footer.jsx"
import { ReactComponent as Waves } from "./Waves.svg"


export default function Layout(){
    return (
        <>
            <Nav></Nav>
            <Header></Header>
            <Waves></Waves>
            <Section></Section>
            <Footer></Footer>  
        </>
        

    )

}