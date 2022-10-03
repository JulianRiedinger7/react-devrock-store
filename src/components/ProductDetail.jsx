import { useContext } from 'react';
import { Context } from '../context/Context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoMdAddCircle } from 'react-icons/io';

const ProductDetail = ({ img, nombre, descripcion, precio, medidas, id }) => {
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
		<>
			<div className="flex flex-col items-center px-4 min-h-[calc(100vh-184px)]">
				<img
					src={img}
					alt={nombre}
					className="w-60 aspect-square object-contain"
				/>
				<h3 className="font-bold text-2xl">{nombre}</h3>
				<small className="text-zinc-600">{medidas}</small>
				<div className="flex items-center gap-2">
					<p className="font-semibold text-xl">AR${precio}</p>
					<IoMdAddCircle
						className="text-red-400"
						size={42}
						onClick={(evt) => handleClick(evt)}
					/>
				</div>
				<p className="text-center">{descripcion}</p>
			</div>
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

export default ProductDetail;
