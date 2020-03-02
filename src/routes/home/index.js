import { h } from 'preact';
import style from './style';

const Home = () => (
	<div class={style.home}>
	 <section class="intro-text">
		<p>
		  Full stack Javascript engineer with a focus on front end side of things.
		</p>
		<p>
		  My current interest is in building performant web apps that takes into account the principles of Human-Computer Interaction.
		</p>
	 </section>
	</div>
);

export default Home;
