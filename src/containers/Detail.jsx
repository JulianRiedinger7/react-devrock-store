import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { Context } from '../context/Context';
import { IoMdAddCircle } from 'react-icons/io';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Detail = () => {
	const { itemId } = useParams();
	const { products, addToCart } = useContext(Context);
	const [item, setItem] = useState({});

	useEffect(() => {
		setItem(products.find((product) => product.id === parseInt(itemId)));
	}, [products]);

	/* const { img, nombre, medidas, precio, descripcion, id } = products.find(
		(product) => product.id === parseInt(itemId)
	); */

	const handleClick = (evt) => {
		evt.preventDefault();
		toast.success(`${item.nombre} se ha agregado al carrito!`, {
			position: 'bottom-right',
			autoClose: 2500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		addToCart(item.id);
	};
	return (
		<>
			{products.length > 0 ? (
				<div className="flex flex-col items-center px-4">
					<img
						src={item.img}
						alt={item.nombre}
						className="w-60 aspect-square object-contain"
					/>
					<h3 className="font-bold text-2xl">{item.nombre}</h3>
					<small className="text-zinc-600">{item.medidas}</small>
					<div className="flex items-center gap-2">
						<p className="font-semibold text-xl">AR${item.precio}</p>
						<IoMdAddCircle
							className="text-red-400"
							size={42}
							onClick={(evt) => handleClick(evt)}
						/>
					</div>
					<p className="text-center">{item.descripcion}</p>
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
				</div>
			) : (
				<h2>Cargando...</h2>
			)}
		</>
	);
};

export default Detail;
