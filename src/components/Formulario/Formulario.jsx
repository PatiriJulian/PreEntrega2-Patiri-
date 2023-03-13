import { Button } from "react-bootstrap";
import './Formulario.css'


function Formulario(){
    return(
        
            <form className="form">
                <h2>Ingrese sus datos</h2>
                <p><input class="input" type="text" name="name" placeholder="Ingresar Nombre"/></p>
                <p><input class="input" type="tel" name="number" placeholder="Ingresar Telefono"/></p>
                <p><input class="input" type="email" name="email" placeholder="Ingresar Mail"/></p>
                <p><input class="input" type="email" name="validaremail" placeholder="Validar Mail"/></p>
                <textarea class="input" name="coment" cols="25" rows="5" placeholder="Ingresar Observaciones"></textarea>
                <p class='actionWrapper'><Button class='button'>Enviar</Button></p>
            </form>
        
    )
}
export default Formulario;