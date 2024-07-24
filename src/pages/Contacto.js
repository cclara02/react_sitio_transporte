import '../styles/contacto.css';

const Contacto = (props) => {
    return(
        <main className="holder contacto ">
        <div>
            <h2>Completa el formulario</h2>
            <form action="" className="formulario">
                <p>
                    <label for="">Nombre</label>
                    <input type="text"/>
                </p>
                <p>
                    <label for="">Email</label>
                    <input type="text"/>
                </p>
                <p>
                    <label for="">Telefono</label>
                    <input type="text"/>
                </p>
                <p>
                    <label for="">Comentarios</label>
                    <textarea name=""></textarea>
                </p>
                <p>
                    <input type="submit" value="Enviar"/>
                </p>
            </form>
        </div>
        <div className="datos">
            <h2>Otras vias de comunicacion</h2>
            <p>tambien pueden conectarse a traves de estos medios</p>
            <ul>
                <li><i className="fa-solid fa-mobile-retro"></i>: 2134567</li>
                <li><i className="fa-solid fa-envelope"></i>: transporte@transporte.com</li>
                <li><i className="fa-brands fa-facebook"></i>: facebook.com/transporteX</li>
                <li><i className="fa-brands fa-twitter"></i>: @transporteX</li>
                <li><i className="fa-brands fa-skype"></i>: transporte_skype</li>
                
            </ul>
            <div className="mapa">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.2408793320155!2d-58.42258492536941!3d-34.598069957198014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca7d27fdff63%3A0x843209e824224cd3!2sAv.%20Medrano%20991%2C%20C1179%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1721670728820!5m2!1ses-419!2sar" style={{width:600, height:300, border:0}} title="mapa" ></iframe>
            </div>
        </div>
    </main>
    )
}

export default Contacto;