import { useContext } from 'react';
import { Context } from '../context/Context';
import { IoMdAddCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ img, nombre, precio, medidas, id }) => {
	const { addToCart } = useContext(Context);

	const handleClick = (evt) => {
		evt.preventDefault();
		toast.success(`${nombre} se ha agregado al carrito!`, {
			position: 'bottom-right',
			autoClose: 2500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		addToCart(id);
	};

	return (
		<Link
			to={`/detail/${id}`}
			className="w-40 border border-slate-500 p-4 rounded-md flex flex-col shadow-lg"
		>
			<img
				src={img}
				alt={nombre}
				className="h-32 m-0 aspect-square object-contain"
			/>
			<h3 className="font-bold flex-1">{nombre}</h3>
			<small className="text-slate-600 font-md">{medidas}</small>
			<div className="flex justify-between items-center">
				<p className="font-bold">AR$ {precio}</p>
				<IoMdAddCircle
					className="text-red-400"
					size={42}
					onClick={(evt) => handleClick(evt)}
				/>
			</div>
		</Link>
	);
};

export default Product;
