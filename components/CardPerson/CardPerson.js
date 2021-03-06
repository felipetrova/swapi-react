import { useEffect } from "react";

import * as GridStyle from "~/styles/Grid";
import * as Style from './CardPersonStyle';

import StarshipComponent from "~/components/Starship/Starship";

const CardPersson = (props) => {

  const {
    name,
    gender,
    height,
    mass,
    birth_year,
    hair_color,
    skin_color,
    eye_color,
    starships
  } = props;

  useEffect(() => {
  }, []);

  return (
    <>
      <Style.CardPerson className="mb-10px">
        <GridStyle.Row>
          <GridStyle.Col general={12} mobile={12} tablet={12}>
            <p>
              <strong>
                Name: {" "}
              </strong>
              {name}, {gender}
            </p>
          </GridStyle.Col>
        </GridStyle.Row>

        <GridStyle.Row>
          <GridStyle.Col general={4}>
            <p>
              <strong>
                Height:
              </strong>
              <br />
              {height}
            </p>
          </GridStyle.Col>

          <GridStyle.Col general={4}>
            <p>
              <strong>
                Mass:
              </strong>
              <br />
              {mass}
            </p>
          </GridStyle.Col>

          <GridStyle.Col general={4}>
            <p>
              <strong>
                Birth year:
              </strong>
              <br />
              {birth_year}
            </p>
          </GridStyle.Col>
        </GridStyle.Row>

        <GridStyle.Row>
          <GridStyle.Col general={4}>
            <p>
              <strong>
                Hair color:
              </strong>
              <br />
              {hair_color}
            </p>
          </GridStyle.Col>

          <GridStyle.Col general={4}>
            <p>
              <strong>
                Skin color:
              </strong>
              <br />
              {skin_color}
            </p>
          </GridStyle.Col>

          <GridStyle.Col general={4}>
            <p>
              <strong>
                Eye color:
              </strong>
              <br />
              {eye_color}
            </p>
          </GridStyle.Col>
        </GridStyle.Row>

        <GridStyle.Row>
          <GridStyle.Col general={12}>
          {starships.length > 0 &&
            starships.map((item, index) => (
              <StarshipComponent
                key={index + 1}
                info={item}
              />
            ))
          }
          
          {!starships.length > 0 &&
            <p>
              <strong>
                This person don't have a starship
              </strong>
            </p>
          }
          </GridStyle.Col>
        </GridStyle.Row>
      </Style.CardPerson>
    </>
  );
};

export default CardPersson;
