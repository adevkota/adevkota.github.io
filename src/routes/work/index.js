import { h, Fragment } from "preact";
import Header from "../../components/header";
import style from "./style";
import Tile from "../../components/tile";
const Work = () => {
	return (
		<Fragment>
			<Header />
			<div className={style.work}>
				<div className={style.tileWrapper}>
					<Tile 
						{...{
							shortDescription: "Offline first shareable product catalog",
							projectName:"Shareable Catalog",
							companyName: "Pampered Chef",
							imageUrls: [
								"/assets/portfolio/pampered_chef/1.png",
								"/assets/portfolio/pampered_chef/2.png",
								"/assets/portfolio/pampered_chef/3.png",
								"/assets/portfolio/pampered_chef/4.png",
								"/assets/portfolio/pampered_chef/5.png",
							]
						}} />
				</div>
				<div className={style.tileWrapper}>
					<Tile 
						{...{
							shortDescription: "Mobile Friendly tools for consultants",
							projectName:"Consultant's Corner",
							companyName: "Pampered Chef",
							imageUrls: [
								"/assets/portfolio/pampered_chef/1.png",
								"/assets/portfolio/pampered_chef/2.png",
								"/assets/portfolio/pampered_chef/3.png",
								"/assets/portfolio/pampered_chef/4.png",
								"/assets/portfolio/pampered_chef/5.png",
							]
						}}/>
				</div>
				<div className={style.tileWrapper}>
					<Tile 
						{...{
							shortDescription: "Managed Care Market Portal",
							companyName: "RR Donnelly",
							imageUrls: [
								"/assets/portfolio/rrd/1.png",
								"/assets/portfolio/rrd/2.png",
								"/assets/portfolio/rrd/3.png",
							]
						}}/>
				</div>
			</div>
		</Fragment>
	)
}

export default Work;