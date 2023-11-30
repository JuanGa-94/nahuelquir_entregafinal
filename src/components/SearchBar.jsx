function Busqueda({ onBusqueda }) {

    return (
        <>
            <p>¿Algo en particular? Buscá acá</p>
            <form className="busqueda">

                <input type="search" name="search" id="search" placeholder="Buscá una tarea" onChange={(e) => onBusqueda(e.target.value)} />
            </form>

        </>

    )

}



export default Busqueda;
