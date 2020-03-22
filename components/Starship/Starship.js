import { useState, useEffect, useCallback, useRef } from "react";

import * as GridStyle from "~/styles/Grid";
import * as Style from './StarshipStyle';

import LoadingComponent from "~/components/Loading/Loading";
import IconSvg from "./Icon";

import API from "~/Services/Api";

const Starship = (props) => {
  const [starship, setStarship] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const {
    info
  } = props;

  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  const loadStarship = useCallback(async () => {
    const starshipId = info.split("https://swapi.co/api/starships/");

    try {
      setErrorMsg("");
      setLoading(true);
      const response = await API.get(`starships/${starshipId[1]}`);

      setStarship(response.data);

      if (response.data.length === 0) {
        setErrorMsg("Não encontramos nenhuma starship. Tente novamente.");
      }
    } catch (error) {
      setErrorMsg("Não encontramos nenhuma starship. Tente novamente.");
    }

    setLoading(false);
  });

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon minus"
    );
  }

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
        <div className="accordion__section">
          <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
            <p className="accordion__title ln-h21px fn-s16px fn-wb">
              <IconSvg
                width={20}
                fill={"#007DC5"}
                viewBox={"0 0 640 512"}
                content="M620.61 366.55L512 320v192h112c8.84 0 16-7.16 16-16V395.96a32 32 0 0 0-19.39-29.41zM0 395.96V496c0 8.84 7.16 16 16 16h112V320L19.39 366.55A32 32 0 0 0 0 395.96zm464.46-149.28L416 217.6V102.63c0-8.49-3.37-16.62-9.38-22.63L331.31 4.69c-6.25-6.25-16.38-6.25-22.62 0L233.38 80c-6 6-9.38 14.14-9.38 22.63V217.6l-48.46 29.08A31.997 31.997 0 0 0 160 274.12V512h96v-96c0-35.35 28.66-64 64-64s64 28.65 64 64v96h96V274.12c0-11.24-5.9-21.66-15.54-27.44z"
              />
              {" "}
              {starship.name}
            </p>
            <IconSvg
              className={`${setRotate}`}
              width={16}
              fill={"#007DC5"}
              viewBox={"0 0 448 512"}
              content={setActive ? 'M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z' : 'M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z'}
            />
          </button>
          
          <div
            ref={content}
            style={{ maxHeight: `${setHeight}` }}
            className="accordion__content"
          >
            <GridStyle.Row>
              <GridStyle.Col mobile={12} tablet={6} general={4}>
                <p>
                  <strong>
                    Name: {" "}
                  </strong>
                  {starship.name}
                </p>
              </GridStyle.Col>

              <GridStyle.Col mobile={12} tablet={6} general={4}>
                <p>
                  <strong>
                    Model: {" "}
                  </strong>
                  {starship.model}
                </p>
              </GridStyle.Col>

              <GridStyle.Col mobile={12} tablet={4} general={4}>
                <p>
                  <strong>
                    Manufacturer: {" "}
                  </strong>
                  {starship.manufacturer}
                </p>
              </GridStyle.Col>

              <GridStyle.Col mobile={6} tablet={4} general={4}>
                <p>
                  <strong>
                    Cost in credits: {" "}
                  </strong>
                  {starship.cost_in_credits}
                </p>
              </GridStyle.Col>

              <GridStyle.Col mobile={6} tablet={4} general={4}>
                <p>
                  <strong>
                    Length: {" "}
                  </strong>
                  {starship.length}
                </p>
              </GridStyle.Col>

              <GridStyle.Col mobile={6} tablet={4} general={4}>
                <p>
                  <strong>
                    Max atmosphering speed: {" "}
                  </strong>
                  {starship.max_atmosphering_speed}
                </p>
              </GridStyle.Col>
            
              <GridStyle.Col mobile={6} tablet={4} general={4}>
                <p>
                  <strong>
                    Crew: {" "}
                  </strong>
                  {starship.crew}
                </p>
              </GridStyle.Col>

              <GridStyle.Col mobile={6} tablet={4} general={4}>
                <p>
                  <strong>
                    Passengers: {" "}
                  </strong>
                  {starship.passengers}
                </p>
              </GridStyle.Col>

              <GridStyle.Col mobile={6} tablet={4} general={4}>
                <p>
                  <strong>
                    Cargo capacity: {" "}
                  </strong>
                  {starship.cargo_capacity}
                </p>
              </GridStyle.Col>

              <GridStyle.Col mobile={6} tablet={4} general={4}>
                <p>
                  <strong>
                    Consumables: {" "}
                  </strong>
                  {starship.consumables}
                </p>
              </GridStyle.Col>

              <GridStyle.Col mobile={6} tablet={4} general={4}>
                <p>
                  <strong>
                    Hyperdrive rating: {" "}
                  </strong>
                  {starship.hyperdrive_rating}
                </p>
              </GridStyle.Col>

              <GridStyle.Col mobile={6} tablet={4} general={4}>
                <p>
                  <strong>
                    MGLT: {" "}
                  </strong>
                  {starship.MGLT}
                </p>
              </GridStyle.Col>

              <GridStyle.Col mobile={6} tablet={4} general={4}>
                <p>
                  <strong>
                    Starship class: {" "}
                  </strong>
                  {starship.starship_class}
                </p>
              </GridStyle.Col>
            </GridStyle.Row>
          </div>
        </div>
      </Style.Starship>
    </>
  );
};

export default Starship;
