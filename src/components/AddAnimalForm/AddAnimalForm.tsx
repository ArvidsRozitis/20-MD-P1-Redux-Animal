import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import styled from "styled-components";
import Button from "../Button/Button";
import SelectSpecies from "../SelectSpecies/SelectSpecies";
import { setAnimalSpecie } from "../../slices/animalsSlice";

const AddAnimalForm = () => {
  const dispatch = useAppDispatch();
  const animalSpecie = useAppSelector((store) => {
    return store.animals.species;
  });
  const [formData, setFormData] = useState({
    name: "",
    imageUrl: animalSpecie,
  });

  const submitHandler = () => {
    console.log("submited");
    dispatch(setAnimalSpecie(''))
    setFormData({
      name: "",
      imageUrl: "",
    });
  };
  return (
    <div>
      name: {formData.name}
      <br />
      species: {animalSpecie}
      <br />
      imageUrl: {formData.imageUrl}
      <FormStyled
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <LabelStyled>
          Animal name
          <input
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.currentTarget.value });
            }}
          />
        </LabelStyled>
        <SelectSpecies />

        <LabelStyled>
          image url
          <input
            value={formData.imageUrl}
            onChange={(e) => {
              setFormData({ ...formData, imageUrl: e.currentTarget.value });
            }}
          />
        </LabelStyled>
        <Button onClick={() => submitHandler()} text={"add new animal"} />
      </FormStyled>
    </div>
  );
};

export default AddAnimalForm;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #343333;
  color: whitesmoke;
  padding: 20px;
  border-radius: 10px;
  gap: 20px;
`;
const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
