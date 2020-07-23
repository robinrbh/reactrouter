import React from "react"

import { NavLink } from "react-router-dom"

export default function NavBar() {
	return (
		<ul>
			<li>
				<NavLink
					exact
					to="/"
					activeStyle={{
						fontWeight: "bold",
					}}
				>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					exact
					to="/about"
					activeStyle={{
						fontWeight: "bold",
					}}
				>
					About
				</NavLink>
			</li>
			<li>
				<NavLink
					exact
					to="/discover"
					activeStyle={{
						fontWeight: "bold",
					}}
				>
					Users
				</NavLink>
			</li>
		</ul>
	)
}
