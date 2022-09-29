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
			return data;
		} catch (error) {
			console.error(error);
		}
	};

	const addToCart = (id) => {
		const itemFound = state.cart.find((item) => item[0].id === id);

		if (itemFound) {
			itemFound.map((el) => {
				el.quantity++;
				return el;
			});
			totalQuantity();
			localStorage.setItem('cart', JSON.stringify(state.cart));
		} else {
			dispatch({ type: 'ADD_TO_CART', payload: id });
		}
	};

	const deleteFromCart = (id) => {
		dispatch({ type: TYPES.DELETE_FROM_CART, payload: id });
	};

	const clear = () => {
		localStorage.removeItem('cart');
		dispatch({ type: TYPES.CLEAR });
	};

	useEffect(() => {
		totalQuantity();
		localStorage.setItem('cart', JSON.stringify(state.cart));
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
				clear,
			}}
		>
			{children}
		</Context.Provider>
	);
};
