import { useContext } from 'react';
import CartProduct from '../components/CartProduct';
import { Context } from '../context/Context';

const Cart = () => {
	const { cart, getTotalPrice } = useContext(Context);

	let totalPrice = getTotalPrice();

	console.log(totalPrice);

	/* if (cart.length > 0) {
		totalPrice = getTotalPrice();
	} */

	return (
		<section className="h-[calc(100vh-128px)] overflow-scroll w-11/12 border-2 border-slate-800 rounded-md max-w-sm mx-auto p-2">
			{cart.length === 0 ? (
				<h2>No tenes productos en el carrito</h2>
			) : (
				<div className="flex flex-col space-y-4">
					{cart.map((item) => (
						<CartProduct key={item.id} {...item} />
					))}
					<h2>Total AR${totalPrice}</h2>
				</div>
			)}
		</section>
	);
};

export default Cart;
