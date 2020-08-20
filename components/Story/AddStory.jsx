import {TiPlus} from 'react-icons/ti'
import {IoIosFlash} from 'react-icons/io'
import {MdPhotoCamera} from 'react-icons/md'
import {FaPhotoVideo} from 'react-icons/fa'

import {motion} from 'framer-motion'
import {animations} from '../../hooks/animations'

function Storys({isOpen, setIsOpen}){
	return (
		<section className={"story " + (isOpen ? 'story-active' : '')}>
			<div className="story-close" onClick={() => setIsOpen(false)}>
				<TiPlus/>
			</div>
			<div className="story-content">
				<div className="story-content-user">

				</div>
				<motion.div className="story-content-add-header"
				initial="hidden"
				animate="visible"
				variants={animations.menuLink}
				transition={{duration: 0.3, delay: .2}}>
					<IoIosFlash/>
				</motion.div>
				<motion.div className="story-content-create-story"
				initial="hidden"
				animate="visible"
				variants={animations.feed}
				transition={{duration: 0.3, delay: .2}}>
					<MdPhotoCamera className="add-story"/>
					<FaPhotoVideo className="photo-video"/>
				</motion.div>
			</div>
		</section>
	)
}

export default Storys;
