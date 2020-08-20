
import {MdFavorite} from 'react-icons/md'
import {FaEye} from 'react-icons/fa'
import {motion} from 'framer-motion'
import {animations} from '../../hooks/animations'
function HeadArticle(){

	return (
		<div className="current-article">
			<motion.img src={require('../../public/img/articles/test_article.png')} alt="" className="current-article-image"
			initial="hidden"
			animate="visible"
			variants={animations.helloUser}
			transition={{duration: .3, delay: .1}}
			/>
			<div className="current-article-data">
				<div className="current-article-header">
					<motion.div className="current-article-header-data"
					initial="hidden"
					animate="visible"
					variants={animations.news}
					transition={{duration: .3, delay: .1}}>
						<h1 className="current-article-name">Lorem ipsum dolor sit amet, consetetur</h1>
						<span className="current-article-owner">By Natalia Smith</span>
					</motion.div>
					<motion.div className="current-article-estimations"
					initial="hidden"
					animate="visible"
					variants={animations.moreBtn}
					transition={{duration: .3, delay: .1}}
					>
						<div className="likes">
							<span className="count">200</span>
							<MdFavorite/>
						</div>
						<div className="views">
							<span className="count">200</span>
							<FaEye/>
						</div>
					</motion.div>
				</div>
				<motion.p className="current-article-text"
				initial="hidden"
				animate="visible"
				variants={animations.feed}
				transition={{duration: .3, delay: .2}}>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet  
				<br/>
				<br/>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet 
				<br/>
				<br/>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
				</motion.p>
			</div>
		</div>
	)
}

export default HeadArticle;