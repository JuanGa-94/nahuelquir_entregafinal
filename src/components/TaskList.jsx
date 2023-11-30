import { BsBookmarkCheckFill } from "react-icons/bs";
import { BsBookmarkFill } from "react-icons/bs";
import { BsBookmarkXFill } from "react-icons/bs";


function ListaDeTareas({ tareas, onBorrarTarea, onTareaHecha }) {


    return (
        <table>

            <thead>
                <th>Tarea</th>
                <th>Borrar</th>
                <th>Hecho</th>
            </thead>
            <tbody>
                {tareas.map(t => <tr key={t.id}
                    className={t.hecho ? "finalizado" : "pendiente"}>
                    <td className="descripcionT">{t.descripcion}</td>
                    <td className="botonT"><button onClick={() => onBorrarTarea(t.id)} className="borrar">Borrar<BsBookmarkXFill /></button></td>
                    <td className="botonT"><button onClick={() => onTareaHecha(t.id)} className="check">Hecho<BsBookmarkCheckFill /> </button></td>
                </tr>)}
            </tbody>
        </table>
    )

};

export default ListaDeTareas;
