import { TPlanet } from "@/utils/services/planets/planet.api";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface WhislistProp {
  data: TPlanet[];
}

// Define the initial state using that type
const initialState: WhislistProp = {
  data: [],
};

export const whislistSlice = createSlice({
  name: "whislist",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addWhislist: (state, action: PayloadAction<TPlanet>) => {
      const planetToAdd = action.payload;

      const isPlanetInWishlist = state.data.some(
        (planet) => planet.name === planetToAdd.name,
      );

      if (!isPlanetInWishlist) {
        state.data.push(planetToAdd);
      }
    },
    removeWishlist: (state, action: PayloadAction<TPlanet>) => {
      state.data = state.data.filter(
        (planet) => planet.name !== action.payload.name,
      );
    },
  },
});

export const { addWhislist, removeWishlist } = whislistSlice.actions;

export default whislistSlice.reducer;
