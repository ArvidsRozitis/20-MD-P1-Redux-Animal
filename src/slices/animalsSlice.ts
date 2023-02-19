import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Animal = {
  id: number;
  name: string;
  species: string;
  imageUrl: string;
};

interface AnimalsSliceType {
  animals: Animal[];
  loading: boolean;
  species: string
}

const initialState: AnimalsSliceType = {
  animals: [],
  loading: true,
  species: ""
};

const animalsSlice = createSlice({
  name: "animals",
  initialState,
  reducers: {
    setAllAninmals: (state, action: PayloadAction<Animal[]>) => {
      state.animals = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean> ) => {
      state.loading = action.payload
    },
    setAnimalSpecie: (state, action: PayloadAction<string> ) => {
      state.species = action.payload
    }
  },
  
});

export type { Animal };
export const { setAllAninmals, setLoading, setAnimalSpecie } = animalsSlice.actions;
// export const selectAnimals = (state: RootState) => state.animals.animals
export default animalsSlice.reducer;
