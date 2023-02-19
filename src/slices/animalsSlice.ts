import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

type Animal = {
  id: number;
  name: string;
  species: string;
  imageUrl: string;
};

const availableAnimals: Animal[] = [
  {
    id: 1,
    name: "Cat",
    species: "Domestic Cat",
    imageUrl:
      "https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/AmericanBobtail_body_6.jpg?itok=974XSSws",
  },
  {
    id: 2,
    name: "dog",
    species: "Domesticaded Dog",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZe7j1AkzyZG00LBp030dDsgHnJic68m-klQ&usqp=CAU",
  },
];

interface AnimalsSliceType {
  animals: Animal[];
  loading: boolean;
}

const initialState: AnimalsSliceType = {
  animals: [],
  loading: true,
};

export const animalsSlice = createSlice({
  name: "animals",
  initialState,
  reducers: {},
});
