import ImgTeam from  '../../assets/Team.png'
import './Team.css'
export function Team(){
    return(
        <section id="team">
        <div>
            <h1>We work with the Great Team</h1>
            <hr />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Morbi risus duis nibh laoreet. Malesuada luctus tincidunt
                tortor consectetur netus facilisi dapibus laoreet orci.
                Viverra amet maecenas consectetur tincidunt felis, pretium
                posuere ut sapien. Cursus lacus vitae purus est viverra eu
                ornare tellus augue. Proin risus, sed diam ac. Aliquet.
            </p>
        </div>
        <div>
            <img src={ImgTeam} alt="img01" />
        </div>
    </section>
    )
}