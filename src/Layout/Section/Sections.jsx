import { Expertise } from "./Expertise/Expertise.jsx"
import { Strategic } from "./Strategic/Strategic.jsx";
import { Team } from "./Team/Team.jsx";
import { Portfolio } from "./Portfolio/Portfolio.jsx";
import { Contact } from "./Contact/Contact.jsx";
export  default function Section(){
    return(
        <>
            <Expertise></Expertise>
            <Strategic></Strategic>
            <Team></Team>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </>
       
        
    )
}