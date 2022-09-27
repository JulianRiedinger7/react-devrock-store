import { createContext, useReducer } from 'react';
import { initialState, reducer, TYPES } from '../reducer/reducer';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const getData = async (url) => {
		try {
			const res = await fetch(url);
			const data = await res.json();
			dispatch({ type: TYPES.GET_PRODUCTS, payload: data });
		} catch (error) {
			console.error(error);
		}
	};

	const addToCart = (evt, id) => {
		evt.preventDefault();
		dispatch({ type: TYPES.ADD_TO_CART, payload: id });
	};

	const deleteFromCart = (id) => {
		dispatch({ type: TYPES.DELETE_FROM_CART, payload: id });
	};

	const getTotalPrice = () =>
		state.cart && state.cart.reduce((acc, product) => acc + product.precio, 0);

	return (
		<Context.Provider
			value={{
				products: state.products,
				cart: state.cart,
				getData,
				addToCart,
				deleteFromCart,
				getTotalPrice,
			}}
		>
			{children}
		</Context.Provider>
	);
};
