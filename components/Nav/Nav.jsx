import {useState, useEffect} from 'react'

import {motion} from 'framer-motion'
import {animations} from '../../hooks/animations'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Menu from '../Menu/Menu'
import SingIn from '../SingIn/SingIn'
import Hint from '../Hint/Hint'

import { IoIosChatboxes } from 'react-icons/io';
import { FaPalette } from 'react-icons/fa'
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import {MdGavel as GavelIcon } from 'react-icons/md'


function Nav({children, footer}){
	let pathname = process.browser ? window.location.pathname : undefined
	let [login, setLogin] = useState(false)
	let [menu, setMenu] = useState([
		{
			icon : (
				<React.Fragment>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</React.Fragment>
			),
			active: true,
			url : '/news'
		},
		{
			icon: <ImageIcon/>,
			active: false,
			url : '/arts'
		},
		{
			icon: <WorkIcon/>,
			active: false,
			url : '/work'
		},
		{
			icon: <InsertInvitationIcon/>,
			active: false,
			url : '/events'
		},
		{
			icon: <GavelIcon/>,
			active: false,
			url : '/auctions'
		},
		{
			icon: <FaPalette/>,
			active: false,
			url : '/palette'
		}
	])
	let [singInIsOpen, setSingInIsOpen] = useState(false)

	useEffect(() => {
		setMenu(menu.map(link => {
			if(link.url === window.location.pathname){
				link.active = true
			} else {
				link.active = false
			}
			return link
		}))
		//eslint-disable-next-line
	}, [])

	const updateMenu = (id) => {
		setMenu(menu.map((link, index) => {
			if(index === id){
				link.active = true
			} else {
				link.active = false
			}
			return link
		}))
	}
	return ( 
		<>
			<Header pathname={pathname} singInIsOpen={singInIsOpen} setSingInIsOpen={setSingInIsOpen} login={login}/>
				<motion.div className="wrapper"
					initial="hidden"
					animate="visible"
					exit="exit"
					variants={animations.wrapper}
					transition={{duration: 0.1}}>
					<Menu menu={menu} updateMenu={updateMenu}/>
					<section className="content">
						{children}
					</section>
				</motion.div>
			<Footer footer={footer}/>
			{singInIsOpen ? <SingIn setSingInIsOpen={setSingInIsOpen} setLogin={setLogin}/> : ''}
			{/* <Hint/> */}
		</>
	)
}



export default Nav;