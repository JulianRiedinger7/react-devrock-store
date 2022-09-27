import { useContext } from 'react';
import CartProduct from '../components/CartProduct';
import { Context } from '../context/Context';

const Cart = () => {
	const { cart, getTotalPrice } = useContext(Context);

	let totalPrice = getTotalPrice();
	/* if (cart.length > 0) {
		totalPrice = getTotalPrice();
	} */

	return (
		<>
			<section className="h-[70vh] overflow-scroll w-11/12 border-2 border-slate-800 rounded-md max-w-sm mx-auto p-2">
				{cart.length === 0 ? (
					<h2>No tenes productos en el carrito</h2>
				) : (
					<div className="flex flex-col space-y-4">
						{cart.map((item) => (
							<CartProduct key={item.id} {...item} />
						))}
					</div>
				)}
			</section>
			{cart.length > 0 && (
				<h2 className="text-right w-11/12 mt-3 text-2xl">
					Total <span className="font-bold">AR${totalPrice}</span>
				</h2>
			)}
		</>
	);
};

export default Cart;
