import { useContext, useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Context } from '../context/Context';
import { Link } from 'react-router-dom';

const Header = () => {
	const { quantity } = useContext(Context);

	return (
		<header className="h-16 py-4 mb-10">
			<nav className="flex justify-between items-center">
				<Link to="/">
					<IoIosArrowBack size={40} />
				</Link>
				<h1 className="text-2xl text-red-400">DevRock Store</h1>
				<Link to="/cart" className="flex items-center">
					<AiOutlineShoppingCart size={40} />
					{quantity > 0 && <p className="text-red-400">{quantity}</p>}
				</Link>
			</nav>
		</header>
	);
};

export default Header;
