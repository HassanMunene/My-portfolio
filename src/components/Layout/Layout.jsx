import './Layout.scss';
import Sidebar from '../Sidebar/Sidebar.jsx';
import { Outlet, useLocation } from 'react-router-dom';
import Preloader from '../Preloader/preloader.jsx';
import {useState, useEffect} from 'react';

const Layout = () => {
	const [loading, setLoading] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false)
		}, 500)
	}, [location]);

	return (
		<div className="App">
			<Sidebar />
			{loading && <Preloader />}
			<div className="page">
				<Outlet />
			</div>
		</div>
	)
}


export default Layout;
