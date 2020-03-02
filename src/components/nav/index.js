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
			<Link activeClassName={style.active} href="/resume">Resume</Link>
			<a target="_self"href="https://github.com/adevkota" native>GitHub</a>
			<a target="_self"href="https://www.linkedin.com/in/tosh-sharma" native>LinkedIn</a>
		</div>
	);
}

export default Nav;