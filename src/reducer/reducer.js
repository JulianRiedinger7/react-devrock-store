export const TYPES = {
	ADD_TO_CART: 'ADD_TO_CART',
	DELETE_FROM_CART: 'DELETE_FROM_CART',
	GET_PRODUCTS: 'GET_PRODUCTS',
};

export const initialState = {
	products: [],
	cart: [],
};

export function reducer(state, action) {
	const { type, payload } = action;
	switch (type) {
		case 'GET_PRODUCTS':
			return { ...state, products: payload };

		case 'DELETE_FROM_CART':
			return {
				...state,
				cart: state.cart.filter((product) => product.id !== payload),
			};

		case 'ADD_TO_CART':
			return {
				...state,
				cart: [
					...state.cart,
					state.products.find((product) => product.id === payload),
				],
			};

		default:
			return state;
	}
}
