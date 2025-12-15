import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const PlanetsDetails = () => {
    const { store } = useGlobalReducer();
    const { theId } = useParams();


    const [planetsDetail, setPlanetsDetail] = useState(null);

    const getDetailplanets = () => {

        if (store.planets && store.planets.length > 0 && theId) {
            try {
                const result = store.planets.find((item) => {
                    if (item.uid !== undefined && item.uid !== null) {
                        return theId === item.uid.toString();
                    }
                    return false;
                });

                if (result) {
                    setPlanetsDetail(result);
                } else {
                    setPlanetsDetail(null);
                }
            } catch (error) {

                setPlanetsDetail(null);
            }
        }
    };

    useEffect(() => {
        getDetailplanets();
    }, [store.planets, theId]);



    if (!store.planets || store.planets.length === 0) {
        return (
            <div className="container text-center mt-5">
                <p>Cargando lista general de personajes...</p>
            </div>
        );
    }

    if (planetsDetail === null) {
        return (
            <div className="container text-center mt-5">
                <p>Buscando detalles del personaje con ID: {theId} o no se encontró...</p>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-4 col-12 mb-4 mb-lg-0">
                    <img
                        src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/planets/${planetsDetail.uid}.jpg`}
                        className="img-fluid"
                        alt={planetsDetail.properties.name}
                        style={{ borderRadius: '16px', width: '100%' }}
                    />
                </div>
                <div className="col-lg-8 col-12">
                    <div className="details-content">
                        <h1>{planetsDetail.properties.name}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, debitis. Eligendi accusantium maiores pariatur sed dolores dicta repellendus dolorem debitis laboriosam voluptatum excepturi, eveniet labore culpa quis doloremque facere exercitationem commodi blanditiis minima adipisci aperiam neque id. Et debitis sapiente voluptatibus placeat, enim error aut veritatis quibusdam, dignissimos molestias nemo?</p>
                    </div>
                </div>
            </div>
            <div className="container text-center mt-5 border-top border-danger">
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 text-danger">

                    <div className="col p-3">
                        Name <br />{planetsDetail.properties.name}</div>
                    <div className="col p-3">
                        Terrain <br />{planetsDetail.properties.terrain}</div>
                    <div className="col p-3">
                        Population<br />{planetsDetail.properties.population}</div>
                    <div className="col p-3">
                        Diameter <br />{planetsDetail.properties.diameter}</div>
                    <div className="col p-3">
                        Climate <br />{planetsDetail.properties.climate}</div>
                </div>
            </div>
        </div>
    );
};