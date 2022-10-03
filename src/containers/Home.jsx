import React, { useEffect, useContext } from 'react';
import Product from '../components/Product';
import { CircleLoader } from 'react-spinners';
import { Context } from '../context/Context';
import { ToastContainer } from 'react-toastify';

const Home = () => {
	const { getData, products } = useContext(Context);

	useEffect(() => {
		getData('https://devrockstore-default-rtdb.firebaseio.com/productos.json');
	}, []);

	return (
		<section className="h-[calc(100vh-184px)] overflow-scroll overflow-x-hidden">
			{products.length === 0 ? (
				<div className="flex justify-center items-center h-[calc(100vh-128px)]">
					<CircleLoader color="#36d7b7" size={100} />
				</div>
			) : (
				<div className="flex flex-wrap gap-6 justify-center">
					{products.map((product) => (
						<Product key={product.id} {...product} />
					))}
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
			)}
		</section>
	);
};

export default Home;
