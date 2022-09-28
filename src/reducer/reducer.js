export const TYPES = {
	ADD_TO_CART: 'ADD_TO_CART',
	DELETE_FROM_CART: 'DELETE_FROM_CART',
	GET_PRODUCTS: 'GET_PRODUCTS',
	TOTAL_QUANTITY: 'TOTAL_QUANTITY',
	CLEAR: 'CLEAR',
};

export const initialState = {
	products: [],
	cart: JSON.parse(localStorage.getItem('cart')) || [],
	quantity: 0,
};

export function reducer(state, action) {
	const { type, payload } = action;
	switch (type) {
		case 'GET_PRODUCTS':
			return { ...state, products: payload };

		case 'DELETE_FROM_CART':
			return {
				...state,
				cart: state.cart.filter((product) => product[0].id !== payload),
			};

		case 'ADD_TO_CART':
			return {
				...state,
				cart: [
					...state.cart,
					state.products
						.filter((item) => item.id === payload)
						.map((el) => {
							el.quantity = 1;
							return el;
						}),
				],
			};

		case 'CLEAR':
			localStorage.removeItem('cart');
			return {
				products: [],
				cart: JSON.parse(localStorage.getItem('cart')) || [],
				quantity: 0,
			};

		case 'TOTAL_QUANTITY':
			return {
				...state,
				quantity: state.cart.reduce(
					(acc, product) => acc + product[0].quantity,
					0
				),
			};

		default:
			return state;
	}
}
