
import { Planets } from "../components/Planets.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";



export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const { characters = [], favorites } = store

const handleOnClick = (characterId) => {

    const personajeEncontrado = characters.find(character => character._id == characterId); 

    const nombreDelPersonaje = personajeEncontrado.properties.name;

    const estaEnFavoritos = store.favorites.includes(nombreDelPersonaje);

    let nuevaListaDeFavoritos;

    if (estaEnFavoritos) {
        nuevaListaDeFavoritos = store.favorites.filter(fav => fav !== nombreDelPersonaje);
    } else {
        nuevaListaDeFavoritos = [...store.favorites, nombreDelPersonaje];
    }
    dispatch({
        type: "SET_FAVORITES",
        payload: nuevaListaDeFavoritos
    });

};



	return (
		<>
			<div className="container mt-5">
				<h2 className="text-danger">Characters</h2>
				{characters && characters.length > 0 ? (
					<div className="d-flex flex-row flex-nowrap overflow-auto py-3">
						{
							characters.map((item) => {
								return (
									<div className="card me-4 flex-shrink-0"
										key={item._id}>
										<img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/people/${item.uid}.jpg`} className="card-img-top" alt={item.properties.name} />
										<div className="card-body">
											<h5 className="card-title">{item.properties.name}</h5>
											<p className="card-text">Gender: {item.properties.gender} <br /> Hair color: {item.properties.hair_color} <br /> Eye-color: {item.properties.eye_color} </p>
											<div className="d-flex justify-content-between">
												<Link to={`/details/${item.uid}`} className="btn btn-outline-primary">Learn more! </Link>
												<button type="button" className="btn btn-outline-warning" onClick={() => handleOnClick(item._id)}>
													{
														store.favorites.includes(item.properties.name)?
														<i className="fa-solid fa-heart"></i>:<i className="fa-regular fa-heart"></i>

													}</button>
											</div>
										</div>

									</div>
								)
							})
						}
					</div>
				) : (
					<p className="text-center" style={{ color: '#666' }}>Cargando personajes...</p>
				)}
			</div >
			<Planets />
		</>
	);
};
