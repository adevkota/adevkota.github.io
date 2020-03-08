import { h } from 'preact';
import { useState } from "preact/hooks";
import style from './style';
import Modal from '../modal';
const Tile = ({imageUrls, projectName, companyName, shortDescription, tech}) => {
	const [showModal, setShowModal] = useState(false);
	return (
		<Fragment>
			<div className={style.tile} onClick={() => {setShowModal(true)}}>
				<img className={style.previewImage} src={imageUrls[0]} alt="previewImage"/>
				<div className={style.shortDescription}>
					<span className={style.description}>{shortDescription}</span>
				</div>
			</div>
			<Modal 
				showSelf={showModal} 
				{...{
					projectName,
					companyName,
					imageUrls,
					tech
				}}
				onClose={() => {setShowModal(false)}}/>
		</Fragment>
	)
};
export default Tile;