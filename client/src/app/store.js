import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "../features/userRegistration/userRegistrationSlice";
import productsReducer from '../features/products/productsSlice';


const store = configureStore({
	reducer: {
		registration: registrationReducer,
		products: productsReducer
	},
});

export default store;