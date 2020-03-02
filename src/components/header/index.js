import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		{/* <nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/profile">Me</Link>
			<Link activeClassName={style.active} href="/profile/john">John</Link>
		</nav> */}
		<div class={style.summary}>
			
			<h1 class={style.name}>Ashutosh Devkota</h1>
			<h2 class={style.skills}>Front-End/Javascript Engineer</h2>
		</div>
	</header>
);

export default Header;
