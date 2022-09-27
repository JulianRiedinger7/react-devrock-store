import { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import { Context } from '../context/Context';

const CartProduct = ({ nombre, precio, img, id, quantity }) => {
	const { deleteFromCart } = useContext(Context);

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
			<MdDelete size={30} onClick={() => deleteFromCart(id)} />
		</div>
	);
};

export default CartProduct;
