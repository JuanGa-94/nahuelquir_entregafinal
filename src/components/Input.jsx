import { BsBookmarkPlusFill } from "react-icons/bs";

function CargarTarea({ onAgregarTarea }) {
    const controlCargar = (e) => {
        e.preventDefault();

        const hacerData = new FormData(e.target);
        const descripcion = hacerData.get('descripcion');
        onAgregarTarea(descripcion);
        e.target.reset();
    }


    return (
        <form className="inputT" onSubmit={controlCargar}>
            <label htmlFor="descripcion" className="nuevaTarea">Nueva tarea: </label>
            <input type="text" name="descripcion" id="descripcion" placeholder="Añadí una tarea para recordar" required/>
            <button type="submit" value="Agregar" className="agregar"><BsBookmarkPlusFill /> Agregar</button>
            
        </form>

    )

}

export default CargarTarea;