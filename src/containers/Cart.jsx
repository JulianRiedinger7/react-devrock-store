import { useContext } from 'react';
import CartProduct from '../components/CartProduct';
import { Context } from '../context/Context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
	const { cart, getTotalPrice, clear } = useContext(Context);

	const totalPrice = getTotalPrice();

	const handleClick = () => {
		toast.success(`Tu compra se ha registrado correctamente!`, {
			position: 'bottom-right',
			autoClose: 2500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		clear();
	};

	return (
		<>
			<section className="h-[70vh] overflow-scroll w-11/12 border-2 border-slate-800 rounded-md max-w-sm mx-auto p-2">
				{cart.length === 0 ? (
					<h2>No tenes productos en el carrito</h2>
				) : (
					<div className="flex flex-col space-y-4">
						{cart.map((item) => (
							<CartProduct key={item[0].id} {...item[0]} />
						))}
					</div>
				)}
			</section>
			{cart.length > 0 && (
				<div className="flex items-center justify-between w-11/12 mx-auto mt-2 space-x-4">
					<h2 className="margin-0 text-2xl">
						Total <span className="font-bold">AR${totalPrice}</span>
					</h2>
					<button
						className="px-2 py-2 bg-red-400 text-white  tracking-wide rounded-full"
						onClick={handleClick}
					>
						Finalizar Compra
					</button>
				</div>
			)}
			<ToastContainer
				position="bottom-right"
				autoClose={2500}
				hideProgressBar={false}
				newestOnTop={true}
				closeOnClick={true}
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover
			/>
		</>
	);
};

export default Cart;
