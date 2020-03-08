import { h } from 'preact';
import style from './style';
const Tile = ({imageUrls, projectName, companyName, shortDescription}) => {
   return (
      <div className={style.tile}>
         <div className={style.hero}>
            <img className={style.previewImage} src={imageUrls[0]} alt="previewImage"/>
            <div className={style.shortDescription}>
               <span className={style.description}>{shortDescription}</span>
            </div>
         </div>
         <div className={style.meta}>
            <div className={style.projectName}>{projectName}</div>
            <div className={style.companyName}>{companyName}</div>
         </div>
      </div>
   )
};
export default Tile;