import { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import { Context } from '../context/Context';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartProduct = ({ nombre, precio, img, id, quantity }) => {
	const { deleteFromCart } = useContext(Context);

	const handleClick = (id) => {
		toast.info(`${nombre} se ha eliminado del carrito`, {
			position: 'bottom-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		deleteFromCart(id);
	};

	return (
		<div className="flex justify-between items-center">
			<img
				src={img}
				alt={nombre}
				className="w-20 aspect-square object-contain"
			/>
			<div className="flex flex-col w-40">
				<h3 className="font-bold">{nombre}</h3>
				<p>
					AR${precio} x {quantity}{' '}
					<span className="font-semibold">(${precio * quantity})</span>
				</p>
				<hr className="w-100 border border-black" />
			</div>
			<MdDelete size={30} onClick={() => handleClick(id)} />
		</div>
	);
};

export default CartProduct;
