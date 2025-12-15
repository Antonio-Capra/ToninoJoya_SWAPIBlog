
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export const Planets = () => {

    const { store, dispatch } = useGlobalReducer();

    const { planets = [] } = store

     const handleOnClick = (planetaId) => {
        const planetaEncontrado = planets.find(planeta => planeta._id == planetaId);
        
        const nombreDelPlaneta = planetaEncontrado.properties.name;

        const estaEnFavoritos = store.favorites.includes(nombreDelPlaneta);

        let nuevaListaDeFavoritos;

        if (estaEnFavoritos) {
            nuevaListaDeFavoritos = store.favorites.filter(fav => fav !== nombreDelPlaneta);
        } else {
            nuevaListaDeFavoritos = [...store.favorites, nombreDelPlaneta];
        }
        
        dispatch({
            type: "SET_FAVORITES",
            payload: nuevaListaDeFavoritos
        });
    };

    if (!planets || planets.length === 0) {
        return (
            <div className="container mt-5">
                <h2 className="text-danger">Planets</h2>
                <p className="text-center" style={{ color: '#666' }}>Cargando planetas...</p>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h2 className="text-danger">Planets</h2>
            <div className="d-flex flex-row flex-nowrap overflow-auto py-3">
                {
                    planets.map((item) => {
                        return (
                            <div className="card me-4 flex-shrink-0" key={item._id}>
                                <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/planets/${item.uid}.jpg`} className="card-img-top" alt={item.properties.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.properties.name}</h5>
                                    <p className="card-text">Population: {item.properties.population} <br />Terrain: {item.properties.terrain}</p>
                                    <div className="d-flex justify-content-between">
                                        <Link to={`/planetsDetails/${item.uid}`} className="btn btn-outline-primary">Learn more! </Link>
                                        <button type="button" className="btn btn-outline-warning"
                                        onClick={()=>handleOnClick(item._id)}>{
														store.favorites.includes(item.properties.name)?
														<i className="fa-solid fa-heart"></i>:<i className="fa-regular fa-heart"></i>

													}</button>
                                    </div>
                                </div>

                            </div>
                        );
                    })
                }

            </div>
        </div>

    );
}