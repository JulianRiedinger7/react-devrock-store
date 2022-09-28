import { useEffect } from 'react';
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
		if (state.cart.find((item) => item[0].id === id)) {
			state.cart
				.find((item) => item[0].id === id)
				.map((el) => {
					el.quantity++;
					return el;
				});
			totalQuantity();
		} else {
			dispatch({ type: 'ADD_TO_CART', payload: id });
		}
	};

	const deleteFromCart = (id) => {
		dispatch({ type: TYPES.DELETE_FROM_CART, payload: id });
	};

	useEffect(() => {
		totalQuantity();
	}, [state.cart]);

	const totalQuantity = () => {
		dispatch({ type: TYPES.TOTAL_QUANTITY });
	};

	const getTotalPrice = () =>
		state.cart &&
		state.cart.reduce(
			(acc, product) => acc + product[0].precio * product[0].quantity,
			0
		);

	const getSingleProduct = (id) =>
		state.products.find((product) => product.id === id);

	return (
		<Context.Provider
			value={{
				products: state.products,
				cart: state.cart,
				quantity: state.quantity,
				getData,
				addToCart,
				deleteFromCart,
				getTotalPrice,
				getSingleProduct,
			}}
		>
			{children}
		</Context.Provider>
	);
};
