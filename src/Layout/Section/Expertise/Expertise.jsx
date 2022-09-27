import './Expertise.css';
import ImgWebDesign from '../../assets/Web-Designing 1.png'
import ImgWebDev from '../../assets/Web-development 1.png'
import ImgMobile from '../../assets/Mobile app development 1.png'
export function Expertise(){
    return(
        <section id="expertise">
        
        <div class="description">
            <h2>Special Expertise from Us</h2>
            <div></div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                augue et pharetra dolor pharetra, convallis turpis euismod
                ultrices. Netus nisl pretium sapien egestas vestibulum
                felis. Nisi orci.
            </p>
        </div>
        
        <div class="cards">
            <div class="card">
                <img src={ImgMobile} alt="" />
                <h3>Mobile Apps</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    In dictum mauris non pellentesque accumsan. Nec
                    pellentesque eget.
                </p>
            </div>
            <div class="card">
                <img src={ImgWebDev} alt="" />
                <h3>Website Apps</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    In dictum mauris non pellentesque accumsan. Nec
                    pellentesque eget.
                </p>
            </div>
            <div class="card">
                <img src={ImgWebDesign} alt="" />
                <h3>UI UX Design</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    In dictum mauris non pellentesque accumsan. Nec
                    pellentesque eget.
                </p>
            </div>
        </div>
    </section>
    )
}