import Link from 'next/link'

import Nav from '../../components/Nav/Nav'

import {motion} from 'framer-motion'
import {animations} from '../../hooks/animations'
 
import {MdPhotoCamera} from 'react-icons/md'

function AddArticle(){

	return (
		<Nav>
			<div className="add-article-content-wrapper">
				<motion.div className="header-news"
				initial="hidden"
				animate="visible"
				variants={animations.breadcrumbs}
				transition={{duration: .3}}>Add your article</motion.div>
				<div className="add-article-content">
					<motion.div className="article-information"
					initial="hidden"
					animate="visible"
					variants={animations.news}
					transition={{duration: .3}}>
						<input type="text" className="article-name" placeholder="Headline"/>
						<textarea name="" id="" cols="30" rows="10" className="article-description" placeholder="Text"></textarea>
						<div className="article-btns">
							<Link href="/articles">
								<button className="article-cancel-btn">Cancel</button>
							</Link>
							<button className="article-post-btn">Post</button>
						</div>
					</motion.div>
					<input type="file" id="add-article"/>
					<motion.label htmlFor="add-article" className="add-article-image"
					initial="hidden"
					animate="visible"
					variants={animations.avatar}
					transition={{duration: .3}}>
						<div className="image-circle">
							<MdPhotoCamera/>
						</div>
					</motion.label>
				</div>
			</div>
		</Nav>
	)
}

export default AddArticle;