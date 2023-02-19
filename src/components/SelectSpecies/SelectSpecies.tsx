import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setAnimalSpecie } from "../../slices/animalsSlice";
import { useState } from "react";

const SelectSpecies = () => {
  const [inputIsVisable, setInputIsVisable] = useState(false);
  const dispatch = useAppDispatch();

  const addNewHandler = () => {
    setInputIsVisable(true);
  };

  const animals = useAppSelector((store) => {
    return store.animals.animals;
  });

  if (inputIsVisable === true) {
    return <h1>inputs</h1>;
  }

  return (
    <>
      <select
        defaultValue={"first"}
        onChange={(e) => dispatch(setAnimalSpecie(e.target.value))}
      >
        <option value={"first"} disabled>
          select species
        </option>
        {animals.map((animal) => (
          <option key={Math.random()} value={animal.species}>
            {animal.species}
          </option>
        ))}
        <option value={'1'}>add new species</option>
      </select>
    </>
  );
};

export default SelectSpecies;
