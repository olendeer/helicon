import {useState} from 'react'
import Comment from './Comment/Comment'
import {motion} from 'framer-motion'
import {animations} from '../../hooks/animations'
function Comments({comments, login}) {
	let [allComments, setAllComments] = useState(false)
	return (
		<div className="post-comments">
			{allComments ? (
				comments.map((comment, index) => {
					return (
						<Comment comment={comment} key={index} login={login}/>
					)
				})
			) : (
				<Comment comment={comments[0]}/>
			)}
			<motion.div className={"comment-more " + (allComments ? 'comment-more-hide' : '')}
			initial="hidden"
			animate="visible"
			variants={animations.moreBtn}
			transition={{duration: 0.6, delay: 0.2}}
			onClick={() => setAllComments(true)}>More reviews</motion.div>
		</div>
	)	
}

export default Comments;