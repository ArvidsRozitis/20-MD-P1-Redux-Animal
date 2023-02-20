import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import styled from "styled-components";
import Button from "../Button/Button";
import { setAllAninmals } from "../../slices/animalsSlice";
import { SelectSpecies } from "../SelectSpecies/SelectSpecies";

export const AddAnimalForm = () => {
  const dispatch = useAppDispatch();
  const animals = useAppSelector((store) => {
    return store.animals.animals;
  });

  const [selectValue, setSelectValue] = useState("select species");
  const [formData, setFormData] = useState({
    name: "",
    imageUrl: "",
  });

  const submitHandler = () => {
    const newAnimal = { ...formData, species: selectValue, id: uuidv4() };
    const updatedAnimals = [...animals, newAnimal];
    localStorage.setItem("animals", JSON.stringify(updatedAnimals));

    console.log("submited");
    setFormData({
      name: "",
      imageUrl: "",
    });
    setSelectValue("select species");
    const storedAnimals = localStorage.getItem("animals");
    dispatch(setAllAninmals(storedAnimals ? JSON.parse(storedAnimals) : []));
  };
  return (
    <DivStyledFromContainer>
      name: {formData.name}
      <br />
      species: {selectValue}
      <br />
      imageUrl: {formData.imageUrl}
      <FormStyled
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <LabelStyled>
          Animal name
          <InputStyled
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.currentTarget.value });
            }}
          />
        </LabelStyled>
        <SelectSpecies
          selectValue={selectValue}
          onChange={(value: string) => {
            setSelectValue(value);
          }}
        />

        <LabelStyled>
          image url
          <InputStyled
            value={formData.imageUrl}
            onChange={(e) => {
              setFormData({ ...formData, imageUrl: e.currentTarget.value });
            }}
          />
        </LabelStyled>
        <Button onClick={() => submitHandler()} text={"add new animal"} />
      </FormStyled>
    </DivStyledFromContainer>
  );
};

const FormStyled = styled.form`
  display: flex;
  width: 400px;
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
const DivStyledFromContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
`;
const InputStyled = styled.input`
  display: flex;
  width: 100%;
`;
