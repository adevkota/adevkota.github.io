import { h, Fragment } from 'preact';
import style from './style';
import Header from '../../components/header';

const Home = () => (
	<Fragment>
		<Header />
		<div class={style.home}>
		<section class="intro-text">
			<p>
			Full stack Javascript engineer with a focus on front end side of things.
			</p>
			{/* <p>
			My current interest is in building performant web apps that takes into account the principles of Human-Computer Interaction.
			</p> */}
			<p>
				Designed and built websites using HTML, CSS/SCSS, JavaScript/TypeScript, Angular, React, Redux.
			</p>
			<p>
				I also have experience with node/express and familiarity with python.
			</p>
			<p>
				Contact me on <a className={style.link} target="_self"href="https://www.linkedin.com/in/tosh-devkota" native>LinkedIn<span class="icon-external-link"></span></a> or 
				check out my <a  className={style.link} target="_self"href="https://github.com/adevkota" native>GitHub<span class="icon-external-link"></span></a>.
			
			</p>
		</section>
		</div>
	</Fragment>
);

export default Home;
