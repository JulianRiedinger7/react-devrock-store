import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Cart from '../containers/Cart';
import Detail from '../containers/Detail';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import { ContextProvider } from '../context/Context';

function App() {
	return (
		<main className="text-lg p-2 max-w-sm mx-auto">
			<BrowserRouter>
				<ContextProvider>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/detail" element={<Detail />} />
						<Route path="/detail/:itemId" element={<Detail />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
					<Footer />
				</ContextProvider>
			</BrowserRouter>
		</main>
	);
}

export default App;
