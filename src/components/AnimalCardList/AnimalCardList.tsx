import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { AnimalCard } from "../AnimalCard/AnimalCard";
import { useEffect, useState } from "react";
import { setAllAninmals, setLoading } from "../../slices/animalsSlice";
// import { availableAnimals } from "../../assets/animalsHardCoded";

const AnimalCardList = () => {
  const [selectedSpecies, setSelectedSpecies] = useState("");
  const dispatch = useAppDispatch();
  const animals = useAppSelector((store) => {
    return store.animals.animals;
  });

  //first data get
  useEffect(() => {
    const storedAnimals = localStorage.getItem("animals");
    dispatch(setLoading(true));
    dispatch(setAllAninmals(storedAnimals ? JSON.parse(storedAnimals) : []));
    dispatch(setLoading(false));
  }, []);

  //if there is no animals
  if (!animals.length) {
    return <h1> There is no animals in library</h1>;
  }

  // filter animals
  const filteredAnimals = animals.filter((animal) => {
    if (selectedSpecies === "") {
      return animal;
    } else {
      return animal.species === selectedSpecies;
    }
  });

  //render
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setSelectedSpecies(e.currentTarget.value);
        }}
      />
      {filteredAnimals.map((animal) => (
        <AnimalCard
          key={Math.random()}
          id={animal.id}
          name={animal.name}
          species={animal.species}
          imageUrl={animal.imageUrl}
        />
      ))}
    </div>
  );
};

export { AnimalCardList };
