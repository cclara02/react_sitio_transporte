import '../styles/nosotros.css';

const Nosotros = (props) => {
    return(
        <main className="holder">

        <section className="historia">
            <h2>Historia</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae sed eius repudiandae voluptas atque incidunt ducimus natus aspernatur voluptatibus dolores in, iusto, veritatis ex earum perspiciatis cupiditate animi quam molestias?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, qui deserunt? Nemo, facilis facere! Repellendus, praesentium sequi ipsam eum earum repellat voluptates perferendis unde quibusdam ducimus quasi, suscipit deserunt nulla?</p>
        </section>
        <section className="staff">
            <h2>Staff</h2>
            <div className="personas">  
                <div className="persona"> 
                    <img src="img/nosotros/nosotros1.jpg" alt="Juan Gomez" />
                    <h5>Juan Gomez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, accusantium voluptates exercitationem odit, doloribus nemo similique beatae officiis placeat nam dolorem quo alias ullam sed ratione eum delectus culpa impedit.</p>
                </div>
                <div className="persona"> 
                    <img src="img/nosotros/nosotros2.jpg" alt="Diana Reyes" />
                    <h5>Diana Reyes</h5>
                    <h6>Gerente Comercial</h6>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, accusantium voluptates exercitationem odit, doloribus nemo simil quo alias ullam sed ratione eum delectus culpa impedit.</p>
                </div>
                <div className="persona"> 
                    <img src="img/nosotros/nosotros3.jpg" alt="Roberto Zavala"/>
                    <h5>Roberto Zavala</h5>
                    <h6>Gerente de Sistemas</h6>
                    <p>Lorem, ipsum dolor sit amet consectet elit. Hic, accusantium voluptates exercitationem odit, doloribus nemo similique beatae officiis placeat nam dolorem quo alias ullam sed ratione eum delectus culpa impedit.</p>
                </div>
                <div className="persona"> 
                    <img src="img/nosotros/nosotros4.jpg" alt="Sandra Mastroloi"/>
                    <h5>Sandra Mastroloi</h5>
                    <h6>Gerente de Marketing</h6>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, accusantalias ullam sed ratione eum delectus culpa impedit.</p>
                </div>
                <div className="persona"> 
                    <img src="img/nosotros/nosotros5.jpg" alt="Luciano Gomez" />
                    <h5>Luciano Gomez</h5>
                    <h6>Gerente de Logistica</h6>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, accusantium voluptates exercitationem odit, doloribus nemo simeatae officiis placeat nam dolorem quo alias ullam sed ratione eum delectus culpa impedit.</p>
                </div>
            </div> 
        </section>
    </main>
    )
}

export default Nosotros;