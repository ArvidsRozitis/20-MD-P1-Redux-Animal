import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { AnimalCard } from "../AnimalCard/AnimalCard";
import { useEffect } from "react";
import { setAllAninmals, setLoading } from "../../slices/animalsSlice";
import { availableAnimals } from "../../assets/animalsHardCoded";

export const AnimalCardList = () => {
  const dispatch = useAppDispatch();
  const animals = useAppSelector((store) => {
    return store.animals.animals;
  });

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(setAllAninmals(availableAnimals));
    dispatch(setLoading(false));
  }, []);
  console.log("animals", animals);

  if (!animals.length) {
    return <h1> There is no animals in library</h1>
  }

  return (
    <div>
      {animals.map((animal) => (
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
