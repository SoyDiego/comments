import React from "react";
import { Nav, NavItem, WelcomeMessage, Button } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { startLogout } from "../../../actions/auth";
import { startNewComment } from "../../../actions/comments";

export const Navigation = () => {
	const dispatch = useDispatch();
	const { username } = useSelector((state) => state?.auth);

	const handleLogout = () => {
		dispatch(startLogout());
	};

	const handleNewComment = () => {
		dispatch(startNewComment());
	};

	return (
		<Nav>
			<ul>
				{!username && (
					<li>
						<NavItem activeClassName="selected" to="/auth/register">
							Register
						</NavItem>
					</li>
				)}

				<li>
					<NavItem exact activeClassName="selected" to="/">
						Main
					</NavItem>
				</li>
				<li>
					{username ? (
						<NavItem
							activeClassName="selected"
							to="/auth/logout"
							onClick={handleLogout}>
							Logout
						</NavItem>
					) : (
						<NavItem activeClassName="selected" to="/auth/login">
							Login
						</NavItem>
					)}
				</li>
			</ul>

			<div>
				<WelcomeMessage>
					Welcome, {username ? username : "unknown"}
				</WelcomeMessage>
			</div>

			{username && (
				<div>
					<Button onClick={handleNewComment}>New comment :)</Button>
				</div>
			)}
		</Nav>
	);
};
