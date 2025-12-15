import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Details = () => {
    const { store } = useGlobalReducer();
    const { theId } = useParams();


    const [characterDetail, setCharacterDetail] = useState(null);

    const getDetailCharacters = () => {

        if (store.characters && store.characters.length > 0 && theId) {
            try {
                const result = store.characters.find((item) => {
                    if (item.uid !== undefined && item.uid !== null) {
                        return theId === item.uid.toString();
                    }
                    return false;
                });

                if (result) {
                    setCharacterDetail(result);
                } else {
                    setCharacterDetail(null);
                }
            } catch (error) {
                console.log("Error buscando personaje:", error);
                setCharacterDetail(null);
            }
        }
    };

    useEffect(() => {
        getDetailCharacters();
    }, [store.characters, theId]);



    if (!store.characters || store.characters.length === 0) {
        return (
            <div className="container text-center mt-5">
                <p>Cargando lista general de personajes...</p>
            </div>
        );
    }

    if (characterDetail === null) {
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
                        src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/people/${characterDetail.uid}.jpg`}
                        className="img-fluid"
                        alt={characterDetail.properties.name}
                        style={{ borderRadius: '16px', width: '100%' }}
                    />
                </div>
                <div className="col-lg-8 col-12">
                    <div className="details-content">
                        <h1>{characterDetail.properties.name}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, debitis. Eligendi accusantium maiores pariatur sed dolores dicta repellendus dolorem debitis laboriosam voluptatum excepturi, eveniet labore culpa quis doloremque facere exercitationem commodi blanditiis minima adipisci aperiam neque id. Et debitis sapiente voluptatibus placeat, enim error aut veritatis quibusdam, dignissimos molestias nemo?</p>
                    </div>
                </div>
            </div>
            <div className="container text-center mt-5 border-top border-danger">
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 text-danger">

                    <div className="col p-3">
                        Name <br />{characterDetail.properties.name}</div>
                    <div className="col p-3">
                        Birth Year <br />{characterDetail.properties.birth_year}</div>
                   <div className="col p-3">
                        Gender<br />{characterDetail.properties.gender}</div>
                    <div className="col p-3">
                        Height<br />{characterDetail.properties.height}</div>
                    <div className="col p-3">
                        Skin Color<br />{characterDetail.properties.skin_color}</div>
                </div>
            </div>
        </div>
    );
};