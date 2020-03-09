import { h } from "preact";
import style from "./style";

const Modal = ({onClose, showSelf, imageUrls, projectName, companyName, tech}) => {
	return (
		showSelf? 
			<div className={style.Modal} >
				<div className={style.backdrop} onClick={() => {onClose()}}>
				</div>
				<div className={style.modalBox}>
					<div className={style.modalHeader}>
						<div className={style.close} onClick={() => onClose()}>
							<span class="icon-close"></span>
						</div>
					</div>
					<div className={style.currentImage}>
						<img src={imageUrls[0]} alt={`${projectName} demo image ${1}`}/>
					</div>
					<div className={style.title}>
						<span className={style.projectName}>{projectName}</span>
						<span className={style.companyName}>({companyName})</span>
					</div>
					<div className={style.tech}>
						<span>
							Built using: {tech}
						</span>
					</div>
					
				</div>
			</div>
		: ""
	)
	
}

export default Modal;