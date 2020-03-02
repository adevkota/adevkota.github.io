import { h, Fragment } from 'preact';
import style from './style';
import Header from '../../components/header';

const Resume = () => {
   return (
      <Fragment>
         <Header />
         <div class={style.resumeWrapper}>
            <iframe src="https://adevkota.me/resume/" frameborder="0" style="width:100%; height:100%;border:0;"/>
         </div>
      </Fragment>
   )
}

export default Resume;