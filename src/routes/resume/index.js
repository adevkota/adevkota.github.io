import { h, Fragment } from 'preact';
import { useRef } from 'preact/hooks'
import style from './style';
// import Header from '../../components/header';

const Resume = () => {
   const iframe = useRef(null);
   return (
      <Fragment>
         {/* <Header /> */}
         <div class={style.pdfLinkWrapper}>

         <a href="https://adevkota.me/resume/Ashutosh%20Devkota.pdf" target="_blank">Pdf Version ↗</a>
         </div>
         <div class={style.resumeWrapper}>
            <iframe ref={iframe} src="https://adevkota.me/resume/" frameborder="0" style="width:100%; height:100%;border:0;" onLoad={() => resizeIframe(iframe)}/>
         </div>
      </Fragment>
   )
}

function resizeIframe(obj) {
   obj.current.style.height = (obj.current.contentWindow.document.documentElement.scrollHeight + 60)+ 'px';
 }

export default Resume;