import { Link } from "react-router-dom";
import starWars from "../assets/img/Star-Wars-Logo.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()
	const { favorites } = store

	const deleteFavorites = (indexBorrado, event) => {

		event.stopPropagation();
		dispatch({
			type: "DELETE_FAVORITES",
			payload: indexBorrado
		})
	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img src={starWars}
						className="img-fluid w-25" /></span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites <span className="badge text-bg-secondary">{favorites.length}</span> 
						</button>
						<ul className="dropdown-menu">
							{ favorites.length == 0 ? (
								<li className="text-center p-4">
									<div className="mb-3">
										<i className="fa-regular fa-bookmark" style={{ fontSize: '2rem', color: '#ddd' }}></i>
									</div>
									<span className="text-muted">No hay favoritos aún</span>
								</li>
							) : (
								favorites.map((item, index) => {
									return (<li className="p-2 d-flex justify-content-between"
												key={index}>{item}
										<span className="btn"
											onClick={(event) => deleteFavorites(index, event)}
										>
											<i className="fa-solid fa-trash"></i>
										</span>
									</li>
									)
								})
							)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};