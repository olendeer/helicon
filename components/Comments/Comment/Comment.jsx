import React from 'react'
import {motion} from 'framer-motion'
import {animations} from '../../../hooks/animations'
import {FaReplyAll} from 'react-icons/fa'
import {MdFavorite} from 'react-icons/md'
function Comment({comment, login}) {
	return(
		<motion.div className="comment-item"
		initial="hidden"
		animate="visible"
		variants={animations.feed}
		transition={{duration: 0.3, delay: 0.3}}>
			<img src={comment.img} alt="avatar" className="comment-avatar"/>
			<div className="comment-data">
				<span className="comment-name">{comment.name}</span>
				<p className="comment-text">{comment.text}</p>
				<div className="comment-estimations">
					{login ? (
						<div className="comment-reply">
							<FaReplyAll/>
						</div>
					) : ''}
					<div className="comment-likes">
						<MdFavorite/>
						<span className="count">{comment.likes}</span>
					</div>
				</div>
			</div>
		</motion.div> 
	)
}

export default Comment;