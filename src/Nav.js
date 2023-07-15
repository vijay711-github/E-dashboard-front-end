import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
		<div>
			
				<ul className="nav-ul">
					<li>
						<Link to="/">Product</Link>
					</li>
					<li>
						<Link to="/add">Add Product</Link>
					</li>
					<li>
						<Link to="/profile">Profile</Link>
					</li>
					<li>
						<Link to="/account">Account</Link>
					</li>
					<li>
						<Link to="/update">Update</Link>
					</li>
				</ul>
			</div>
		);
}
export default Nav;