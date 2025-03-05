import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    origin: null, 
    destination: null, 
    travelTimeInformation: null, 
};

export const navSlice = createSlice({ 
    name: 'nav',
    initialState,
    reducers: { // Corrigido de "reducer" para "reducers"
        setOrigin: (state, action) => { 
            state.origin = action.payload;
            console.log(state.origin); // Corrigido de "console.log(origin)" para "console.log(state.origin)"
        },
        setDestination: (state, action) => { 
            state.destination = action.payload;
            console.log(state.destination);
        },
        setTravelTimeInformation: (state, action) => { 
            state.travelTimeInformation = action.payload;
        }
    }
}); 

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;  

// Selectors 
export const selectOrigin = (state) => state.nav.origin; 
export const selectDestination = (state) => state.nav.destination; 
export const selectTimeInformation = (state) => state.nav.travelTimeInformation; 

export default navSlice.reducer;
