import {createSlice} from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: 'root',
    initialState:{
      make: "Make",
      model: "Model",
      year: "Year",
      horse_power: "Horse Power",
      value: "Value"

    },
    reducers:{
        chooseMake: (state, action)=>{ state.make = action.payload},
        chooseModel: (state, action)=>{ state.model = action.payload},
        chooseYear: (state, action)=>{ state.year = action.payload},
        chooseHorsePower: (state, action)=>{ state.horse_power = action.payload},
        chooseValue: (state, action)=>{ state.value = action.payload},

    }
})

export const reducer = rootSlice.reducer;
export const {chooseMake, chooseModel, chooseYear, chooseHorsePower, chooseValue} = rootSlice.actions