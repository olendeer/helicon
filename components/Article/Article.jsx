import Link from 'next/link'
import {motion} from 'framer-motion'
import {animations} from '../../hooks/animations'

function Article({article}){
	return (
		<Link href='/news/articles?type=articles'>
			<div className="article">
				<motion.img src={article.img} alt="" className="article-bg"
				initial="hidden"
				animate="visible"
				variants={animations.menuLink}
				transition={{duration: .3, delay: .1}}/>
				<motion.div className="article-info"
				initial="hidden"
				animate="visible"
				variants={animations.news}
				transition={{duration: .3, delay: .2}}>
					<div className="header-article">
						{article.name}
					</div>
					<div className="description-article">
						{article.title}
					</div>
					<div className="owner-article">
						<img src={article.owner.avatar} alt="" className="owner-avatar"/>
						<div className="article-post">
							<span className="owner-name">{article.owner.name}</span>
							<span className="article-date">{article.date}</span>
						</div>
					</div>
				</motion.div>
			</div>
		</Link>
	)
}

export default Article