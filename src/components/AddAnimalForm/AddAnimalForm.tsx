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
    <div>
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
          <input
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
function uuid() {
  throw new Error("Function not implemented.");
}
