import '../styles/home.css';

const Home = (props) => {
    return(
        <main className="holder">
        <div className="homeimg">
            <img src="img/home/img01.jpg" alt="avion"/>
        </div>
        <div className="columnas">
            <div className="bienvenidos">
                <h2>Bienvenidos</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatibus animi facere placeat deleniti, laborum officia nam officiis aspernatur accusamus, nisi rerum ut. Obcaecati sint, animi alias necessitatibus praesentium harum.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, quia dolor enim iste error amet aspernatur vero at mollitia labore aliquam ad excepturi id, voluptas provident, ipsum sit eum. Dolor.</p>
            </div>
            <div className="testimonios">
                <h2>Testimonios</h2>
                <div className="testimonio">
                    <span className="cita">Simplemente Excelente</span>
                    <span className="autor">Juan Gomez - transporte.com</span>
                </div>
            </div>

        </div>

    </main>
    )
}

export default Home;