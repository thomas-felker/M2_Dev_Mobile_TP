import { createSlice, PayloadAction, configureStore } from "@reduxjs/toolkit";
import { Personne } from "../models/Personne";

const initialState : Array<Personne> = [];

const listAmis =  createSlice({
    name: 'list',
    initialState,
    reducers: {
        addPersonne(state, action: PayloadAction<Personne>) {
            state.push(action.payload);
        },
        removePersonne(state, action: PayloadAction<Personne>) {
            let index : number = state.findIndex((elem) => action.payload.id == elem.id);
            if (index > -1) {
                state.splice(index,1);
            }
        },
    },
});

const store = configureStore({
    reducer: {
        personnes : listAmis.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export const { addPersonne, removePersonne } = listAmis.actions;
export default listAmis.reducer;
export {store};