import Link from 'next/link'

import {FaEye} from 'react-icons/fa'
import {TiPlus} from 'react-icons/ti'

import {motion} from 'framer-motion'
import {animations} from '../../hooks/animations'
 
function Portfolio({section, works, modal, setPortfolioIsOpen}) {
	return (
		<motion.div className={"portfolio " + (!section ? 'portfolio-full ' : '') + (modal ? 'portfolio-modal' : '')}
		initial="hidden"
		animate="visible"
		variants={animations.news}
		transition={{duration: .4, delay: .1}}>
			{modal ? (
				<div className="header-news">Portfolio</div>
			) : (
				<div className="portfolio-header">
					<div className="portfolio-header-item portfolio-header-item-active">My</div>
					<div className="portfolio-header-item">Saved</div>
				</div>
			)}
			<div className="portfolio-list">
				{works.map((work, index) => {
					return (
						<Link href={modal ? '' : '/'} key={index}>
							<motion.div className="portfolio-item"
							initial="hidden"
							animate="visible"
							variants={animations.moreBtn}
							transition={{duration: .1, delay: index/10}}>
								{modal ? (
									<img src={work.img} alt="" className="portfolio-item-image" onClick={() => setPortfolioIsOpen(false)}/>
								) : (
									<img src={work.img} alt="" className="portfolio-item-image"/>
								)}
								<div className="portfolio-item-info">
									<div className="portfolio-item-price">{work.price}</div>
									<div className="portfolio-item-views">
										<span className="count">{work.views}</span>
										<FaEye/>
									</div>
								</div>
							</motion.div>
						</Link>
					)
				})}
			</div>
			{(!section ? (
				<Link href="/portfolio/add">
					<div className="add-portfolio-item">
						<TiPlus/>
					</div>
				</Link>
			) : '')}
		</motion.div>
	)
}

export default Portfolio;