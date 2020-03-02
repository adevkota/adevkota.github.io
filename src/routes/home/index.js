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
      <p>
        Connect with me on  <a target="_self"href="https://www.linkedin.com/in/tosh-sharma">LinkedIn</a>.
      </p>
      <p>
        Find me on <a target="_self"href="https://github.com/adevkota">GitHub</a>.
      </p>
      <p>
        View/download my <a target="_self" href="https://adevkota.me/resume/">resume(pdf)</a>.
      </p>
    </section>
	</div>
);

export default Home;
