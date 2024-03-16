import { createSlice, PayloadAction, configureStore } from "@reduxjs/toolkit";
import {TypeAnnonce} from "../models/TypeAnnonce";

const initialState: Array<TypeAnnonce> = [];

const listFavoris = createSlice({
    name: 'favoris',
    initialState,
    reducers: {
        addFavoris(state, action: PayloadAction<TypeAnnonce>) {
            state.push(action.payload);
        },
        removeFavoris(state, action: PayloadAction<TypeAnnonce>) {
            let index: number = state.findIndex((elem) => action.payload.id == elem.id);
            if (index > -1) {
                state.splice(index, 1);
            }
        }
    }
})

const store = configureStore({
    reducer: {
        favoris : listFavoris.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export const { addFavoris, removeFavoris } = listFavoris.actions;
export default listFavoris.reducer;


export {store};