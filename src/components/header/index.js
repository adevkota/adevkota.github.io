import { h, Fragment } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
import Nav from "../nav";

const Header = () => (
	<Fragment>
		<Nav />

		<header class={style.header}>
			<div class={style.summary}>
				<h1 class={style.name}>Ashutosh Devkota</h1>
				<h2 class={style.skills}>Front-End/Javascript Engineer</h2>
			</div>
		</header>
	</Fragment>
);

export default Header;
