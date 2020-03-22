import { useState, useEffect, useCallback } from "react";

import * as GridStyle from "~/styles/Grid";

import HeaderComponent from "~/components/Header/Header";
import LoadingComponent from "~/components/Loading/Loading";
import CardPersonComponent from "~/components/CardPerson/CardPerson";

import API from "~/Services/Api";

const Index = () => {
  const [peoples, setPeoples] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const loadPersons = useCallback(async () => {
    try {
      setLoading(true);
      setErrorMsg("");
      const response = await API.get("people");
      
      // paginacao: https://swapi.co/api/people/?page=2

      setPeoples(response.data.results);

      if (response.data.results.length === 0) {
        setErrorMsg("Nenhum personagem encontrado. Favor tentar novamente.");
      }
    } catch (error) {
      setErrorMsg("Nenhum personagem encontrado. Favor tentar novamente.");
    }

    setLoading(false);
  });

  useEffect(() => {
    loadPersons();
  }, []);

  return (
    <>
      {loading && <LoadingComponent />}

      <HeaderComponent
        link="/"
        title={"SW API"}
      />

      <div className="mt-85px">
        {(errorMsg || peoples.length === 0) && (
          <div className="flex align-itcenter cont-center h-75vh">
            <p>{errorMsg}</p>
          </div>
        )}
        
        {peoples.length > 0 && (
          <GridStyle.Container>
            {peoples.map(
              (
                {
                  name,
                  height,
                  mass,
                  hair_color,
                  skin_color,
                  eye_color,
                  birth_year,
                  gender,
                  starships
                },
                index
              ) => (
                  <CardPersonComponent
                    key={index + 1}
                    name={name}
                    height={height}
                    mass={mass}
                    hair_color={hair_color}
                    skin_color={skin_color}
                    eye_color={eye_color}
                    birth_year={birth_year}
                    gender={gender}
                    starships={starships}
                  />
                )
            )}
          </GridStyle.Container>
        )}
      </div>
    </>
  );
};

export default Index;
