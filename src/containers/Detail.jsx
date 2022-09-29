import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { Context } from '../context/Context';
import ProductDetail from '../components/ProductDetail';
import { CircleLoader } from 'react-spinners';

const Detail = () => {
	const { itemId } = useParams();
	const { products, getData } = useContext(Context);
	const [item, setItem] = useState({});

	useEffect(() => {
		const getProduct = async (url) => {
			const data = await getData(url);
			setItem(data.find((product) => product.id === parseInt(itemId)));
		};
		getProduct(
			'https://devrockstore-default-rtdb.firebaseio.com/productos.json'
		);
	}, [products]);

	return (
		<>
			{Object.keys(item).length !== 0 ? (
				<ProductDetail {...item} />
			) : (
				<CircleLoader
					color="#36d7b7"
					size={100}
					className="mx-auto min-h-screen"
				/>
			)}
		</>
	);
};

export default Detail;
