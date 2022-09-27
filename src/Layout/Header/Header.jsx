import './Header.css'
import ImgPhone from "../assets/Phone.png"
export function Header(){
    return (
        <header>
            <div>
                <h1>We Create Powerful Digital <span>Products.</span></h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adiscing edit. Dolor
                    morbi vedit turpis et dolor sit morbi odio id. Aliquam ultricies
                    tortor ac.
                </p>
                <button>Get Started</button>
            </div>
            
            <img src={ImgPhone} alt="cellulare"/>

       
        </header>
    
    )
}