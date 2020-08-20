import Link from 'next/link'
import {motion} from 'framer-motion'
import {animations} from '../../hooks/animations'
function Menu({menu, updateMenu}){
	return ( 
		<nav className="navigation">
		 	{menu.map((link, index) => {
				return (
					<Link href={link.url}
						key={index}>
						<motion.a 
							className={"nav-link " + (link.active ? "nav-link-active" : '')}
							onClick={() => updateMenu(index)}
							initial="hidden"
							animate="visible"
							variants={animations.menuLink}
							transition={{duration: 0.2, delay: index/10}}
						>{link.icon}</motion.a>
					</Link>
				)
		 	})}
		</nav>
	)
}

export default Menu