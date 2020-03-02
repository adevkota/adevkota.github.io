import { h, Fragment } from 'preact';
import style from './style';

const Resume = () => {
   return (
      <div class={style.resumeWrapper}>
         <iframe src="https://adevkota.me/resume" frameborder="0" style="width:100%; height:100%;border:0;"/>
      </div>
   )
}

export default Resume;