import { useState, useEffect, useCallback } from "react";

import * as GridStyle from "~/styles/Grid";
import * as Style from './StarshipStyle';

import LoadingComponent from "~/components/Loading/Loading";

import API from "~/Services/Api";

const Starship = (props) => {
  const [starship, setStarship] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const {
    info
  } = props;

  const loadStarship = useCallback(async () => {
    const starshipId = info.split("https://swapi.co/api/starships/");

    try {
      setErrorMsg("");
      setLoading(true);
      const response = await API.get(`starships/${starshipId[1]}`);

      console.log(response.data);
      setStarship(response.data);

      if (response.data.length === 0) {
        setErrorMsg("Não encontramos nenhuma starship. Tente novamente.");
      }
    } catch (error) {
      setErrorMsg("Não encontramos nenhuma starship. Tente novamente.");
    }

    setLoading(false);
  });

  useEffect(() => {
    loadStarship();
  }, []);

  return (
    <>
      {loading && <LoadingComponent />}

      {(errorMsg || starship.length === 0) && (
        <div className="flex align-itcenter cont-center h-75vh">
          <p>{errorMsg}</p>
        </div>
      )}
      
      <Style.Starship className="mb-10px">
        <GridStyle.Row>
          <GridStyle.Col general={12} mobile={12} tablet={12}>
            <p>
              <strong>
                Name: {" "}
              </strong>
              {starship.name}
            </p>
          </GridStyle.Col>
        </GridStyle.Row>

        <GridStyle.Row>
          <GridStyle.Col general={12} mobile={12} tablet={12}>
            <p>
              <strong>
                Model: {" "}
              </strong>
              {starship.model}
            </p>
          </GridStyle.Col>
        </GridStyle.Row>
          
        <GridStyle.Row>
          <GridStyle.Col general={12} mobile={12} tablet={12}>
            <p>
              <strong>
                Manufacturer: {" "}
              </strong>
              {starship.manufacturer}
            </p>
          </GridStyle.Col>
        </GridStyle.Row>

        <GridStyle.Row>
          <GridStyle.Col general={12} mobile={6} tablet={12}>
            <p>
              <strong>
                Cost in credits: {" "}
              </strong>
              {starship.cost_in_credits}
            </p>
          </GridStyle.Col>

          <GridStyle.Col general={12} mobile={6} tablet={12}>
            <p>
              <strong>
                Length: {" "}
              </strong>
              {starship.length}
            </p>
          </GridStyle.Col>
        </GridStyle.Row>

        <GridStyle.Row>
          <GridStyle.Col general={12} mobile={6} tablet={12}>
            <p>
              <strong>
                Max atmosphering speed: {" "}
              </strong>
              {starship.max_atmosphering_speed}
            </p>
          </GridStyle.Col>
        
          <GridStyle.Col general={12} mobile={6} tablet={12}>
            <p>
              <strong>
                Crew: {" "}
              </strong>
              {starship.crew}
            </p>
          </GridStyle.Col>
        </GridStyle.Row>

        <GridStyle.Row>
          <GridStyle.Col general={12} mobile={6} tablet={12}>
            <p>
              <strong>
                Passengers: {" "}
              </strong>
              {starship.passengers}
            </p>
          </GridStyle.Col>

          <GridStyle.Col general={12} mobile={6} tablet={12}>
            <p>
              <strong>
                Cargo capacity: {" "}
              </strong>
              {starship.cargo_capacity}
            </p>
          </GridStyle.Col>
        </GridStyle.Row>

        <GridStyle.Row>
          <GridStyle.Col general={12} mobile={6} tablet={12}>
            <p>
              <strong>
                Consumables: {" "}
              </strong>
              {starship.consumables}
            </p>
          </GridStyle.Col>

          <GridStyle.Col general={12} mobile={6} tablet={12}>
            <p>
              <strong>
                Hyperdrive rating: {" "}
              </strong>
              {starship.hyperdrive_rating}
            </p>
          </GridStyle.Col>

          <GridStyle.Col general={12} mobile={6} tablet={12}>
            <p>
              <strong>
                MGLT: {" "}
              </strong>
              {starship.MGLT}
            </p>
          </GridStyle.Col>

          <GridStyle.Col general={12} mobile={6} tablet={12}>
            <p>
              <strong>
                Starship class: {" "}
              </strong>
              {starship.starship_class}
            </p>
          </GridStyle.Col>
        </GridStyle.Row>
      </Style.Starship>
    </>
  );
};

export default Starship;
