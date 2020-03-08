import { h } from "preact";
import style from "./style"
import { Link } from "preact-router/match";

const Nav = () => {
	return (
		<div class={style.nav}>
			{/* <nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/profile">Me</Link>
			<Link activeClassName={style.active} href="/profile/john">John</Link>
		</nav> */}
			<Link activeClassName={style.active} href="/">Home</Link>
			<a href="https://adevkota.me/resume/Ashutosh%20Devkota.pdf" target="_blank">Resume↗</a>
			{/* <Link activeClassName={style.active} href="/resume">Resume</Link> */}
		</div>
	);
}

export default Nav;