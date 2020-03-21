import { useEffect } from "react";

import * as Style from './CardPersonStyle';

const CardPersson = (props) => {

  const {
    name,
    /* height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    starships */
  } = props;

  useEffect(() => {
  }, []);

  return (
    <>
      <Style.CardPerson>
        <p>
          <strong>
            Name: {" "}
          </strong>
          {name}
        </p>
      </Style.CardPerson>
    </>
  );
};

export default CardPersson;
