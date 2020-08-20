import Link from 'next/link'
import {IoIosArrowBack} from 'react-icons/io'
import {motion} from 'framer-motion'
import {animations} from '../../hooks/animations'

function BreadCrumbs({breadcrumbs}) {
	return (
		<div className="breadcrumbs">
			{breadcrumbs.map((breadcrumb, index) => {
				return (
					<Link href={breadcrumb.link} key={index}>
						<a>
							<motion.span
							initial="hidden"
							animate="visible"
							variants={animations.breadcrumbs}
							transition={{duration: 0.2, delay: index/10}}>
								<IoIosArrowBack/>
							</motion.span>
							<motion.span
							initial="hidden"
							animate="visible"
							variants={animations.breadcrumbs}
							transition={{duration: 0.2, delay: index/10 + 0.2}}>
								{breadcrumb.name}
							</motion.span>
						</a>
					</Link>
				)
			})}
		</div>
	)
}

export default BreadCrumbs;