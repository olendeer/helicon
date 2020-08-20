import Comments from '../Comments/Comments'
import {motion} from 'framer-motion'
import {animations} from '../../hooks/animations'

import {BsThreeDots} from 'react-icons/bs'
import {MdFavorite} from 'react-icons/md'
import {FaEye} from 'react-icons/fa'

function Feed({feed}) {
	console.log(feed)
	return (
		<motion.article className="post"
		initial="hidden"
		animate="visible"
		variants={animations.feed}
		transition={{duration: 0.5}}>
			<header className="post-header">
				<div className="owner-post">
					<motion.img src={feed.owner.avatar} alt="avatar" className="owner-avatar"
					initial="hidden"
					animate="visible"
					variants={animations.moreBtn}
					transition={{duration: 0.3, delay: 0.2}}/>
					<motion.div className="post-info"
					initial="hidden"
					animate="visible"
					variants={animations.moreBtn}
					transition={{duration: 0.3, delay: 0.3}}>
						<span className="header-name">{feed.owner.name}</span>
						<span className="port-date">{feed.date}</span>
					</motion.div>
				</div>
				<div className="post-setting">
					<BsThreeDots/>
				</div>
			</header>
			<img src={feed.image} alt="post" className="image-post"/>
			<div className="estimations">
				<motion.div className="likes"
				initial="hidden"
				animate="visible"
				variants={animations.menuLink}
				transition={{duration: 0.2, delay: 0.2}}>
					<span className="count">{feed.likes}</span>
					<MdFavorite/>
				</motion.div>
				<motion.div className="views"
				initial="hidden"
				animate="visible"
				variants={animations.menuLink}
				transition={{duration: 0.2, delay: 0.3}}>
					<span className="count">{feed.views}</span>
					<FaEye/>
				</motion.div>
			</div>
			<Comments comments={feed.comments}/>
		</motion.article>
	)
}



export default Feed;