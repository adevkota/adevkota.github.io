import { h } from "preact";
import style from "./style";
import { useReducer } from "preact/hooks";

const reducer = (state, action) => {
	switch (action.type) {
		case 'increment': 
			return state.imageIndexToDisplay === action.data ? {imageIndexToDisplay: 0} : {imageIndexToDisplay: state.imageIndexToDisplay + 1}
		case 'decrement': 
			return state.imageIndexToDisplay === 0 ? {imageIndexToDisplay: action.data - 1} : {imageIndexToDisplay: state.imageIndexToDisplay - 1};
		default:
			return {imageIndexToDisplay: 0};
	}
};
const Modal = ({ onClose, showSelf, imageUrls, projectName, companyName, tech }) => {
	const [{imageIndexToDisplay}, dispatch] = useReducer(reducer, {imageIndexToDisplay: 0});
	return (
		showSelf ?
			<div className={style.Modal} >
				<div className={style.backdrop} onClick={() => { onClose() }}>
				</div>
				<div className={style.modalBox}>
					<div className={style.modalHeader}>
						<div className={style.close} onClick={() => onClose()}>
							<span class="icon-close"></span>
						</div>
					</div>
					<div className={style.imageCarousel}>
						<div className={style.previousImage} onClick={() => dispatch({type: "decrement", data: imageUrls.length - 1})}>
							<span class="icon-chevron-left" />
						</div>
						<div className={style.currentImage}>
							<img src={imageUrls[imageIndexToDisplay]} alt={`${projectName} demo image ${1}`} />
						</div>
						<div className={style.nextImage} onClick={() => dispatch({type: "increment", data: imageUrls.length - 1})}>
							<span class="icon-chevron-right" />
						</div>
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