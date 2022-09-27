import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../context/Context';
import { IoMdAddCircle } from 'react-icons/io';

const Detail = () => {
	const { itemId } = useParams();
	const { products, addToCart } = useContext(Context);

	const { img, nombre, medidas, precio, descripcion, id } = products.find(
		(product) => product.id === parseInt(itemId)
	);

	return (
		<div className="flex flex-col items-center px-4">
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
					onClick={(evt) => addToCart(evt, id)}
				/>
			</div>
			<p className="text-center">{descripcion}</p>
		</div>
	);
};

export default Detail;
