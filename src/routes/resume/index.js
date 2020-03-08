import { h, Fragment } from 'preact';
import { useRef } from 'preact/hooks'
import style from './style';
import Header from '../../components/header';

const Resume = () => {
   const iframe = useRef(null);
   return (
      <Fragment>
         <Header />
         <div class={style.resumeWrapper}>
            <iframe ref={iframe} src="https://adevkota.me/resume/" frameborder="0" style="width:100%; height:100%;border:0;" onLoad={() => resizeIframe(iframe)}/>
         </div>
      </Fragment>
   )
}

function resizeIframe(obj) {
   obj.current.style.height = obj.current.contentWindow.document.documentElement.scrollHeight + 'px';
 }

export default Resume;