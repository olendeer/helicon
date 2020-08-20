import Link from 'next/link'
import { motion } from 'framer-motion';
import Messages from './Messages/Messages'

import {animations} from '../../hooks/animations'

import {useState} from 'react'

import EmailIcon from '@material-ui/icons/Email';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchIcon from '@material-ui/icons/Search';
import {FaSearch} from 'react-icons/fa'

function Header({pathname, setSingInIsOpen, login}){
	let [messageIsOpen, setMessageIsOpen] = useState(false)
	return (
		<motion.header 
			className="header"
			initial="hidden"
			animate="visible"
			variants={animations.page}
			transition={{duration: 0.2}}>
			<Link href="/">
				<a className="helicon">
					<img src={require("../../public/img/helicon.svg")} alt="logo" className="logo"
						initial="hidden"
						animate="visible"
						variants={animations.logo}
						transition={{duration: 0.1, delay: 0.1}}
					/>
					<motion.h2
						initial="hidden"
						animate="visible"
						variants={animations.logoName}
					>Helicon</motion.h2>
				</a>
			</Link>
			{login === true ? (
				<div className="header-nav">
					<div className="links-user">
						<Link href='/basket'>
							<motion.a className={"link-user " + (pathname == '/basket' ? 'link-user-active' : '')}
								initial="hidden"
								animate="visible"
								variants={animations.headerLink}
								transition={{duration: 0.2}}>
								<ShoppingCartOutlinedIcon/>
							</motion.a>
						</Link>
						<Link href='/analitics'>
							<motion.a className={"link-user " + (pathname == '/analitics' ? 'link-user-active' : '')}
								initial="hidden"
								animate="visible"
								variants={animations.headerLink}
								transition={{duration: 0.2, delay: .1}}>
								<svg xmlns="http://www.w3.org/2000/svg" width="25.317" height="24.262" viewBox="0 0 25.317 24.262">
									<g id="prefix__screen" transform="translate(0 -1)">
										<path id="prefix__Контур_180" d="M16.537 24.261a1.044 1.044 0 0 1-.572-.17l-4.483-2.9a1.055 1.055 0 0 1 1.147-1.771l4.483 2.9a1.055 1.055 0 0 1-.575 1.941z" className="prefix__cls-1" data-name="Контур 180" transform="translate(.603 1.001)"/>
										<path id="prefix__Контур_181" d="M7.806 24.261a1.055 1.055 0 0 1-.574-1.941l4.483-2.9a1.055 1.055 0 1 1 1.147 1.771l-4.483 2.9a1.053 1.053 0 0 1-.573.17z" className="prefix__cls-1" data-name="Контур 181" transform="translate(.37 1.001)"/>
										<path id="prefix__Контур_182" d="M11 19v4.219a1.055 1.055 0 1 0 2.11 0V19z" className="prefix__cls-1" data-name="Контур 182" transform="translate(.603 .987)"/>
										<path id="prefix__Контур_183" d="M22.847 6.5H2.277a3.347 3.347 0 0 1-.527-.054v10.342a1.848 1.848 0 0 0 1.85 1.846h17.929a1.848 1.848 0 0 0 1.846-1.846V6.449a3.347 3.347 0 0 1-.527.054zm-3.932 3.31l-4.027 4.9a1.055 1.055 0 0 1-1.389.215l-2.313-1.5-3.426 3.328a1.055 1.055 0 1 1-1.47-1.513l4.027-3.918a1.053 1.053 0 0 1 1.31-.129l2.23 1.446 3.429-4.17a1.054 1.054 0 1 1 1.629 1.34z" className="prefix__cls-1" data-name="Контур 183" transform="translate(.096 .299)"/>
										<path id="prefix__Контур_184" d="M22.943 5.747H2.373a2.373 2.373 0 1 1 0-4.747h20.57a2.373 2.373 0 1 1 0 4.747z" className="prefix__cls-1" data-name="Контур 184"/>
									</g>
								</svg>
							</motion.a>
						</Link>
						<Link href=''>
							<>
								<motion.a 
									initial="hidden"
									animate="visible"
									variants={animations.headerLink}
									transition={{duration: 0.2, delay: 0.2}}
									className={"link-user "  + (pathname == '/messages' ? 'link-user-active' : '')}
									onClick={() => setMessageIsOpen(!messageIsOpen)}>
									<EmailIcon className={messageIsOpen ? "active-header-icon" : ''}/>
								</motion.a>
								<Messages messageIsOpen={messageIsOpen}/>
							</>
						</Link>
						<Link  href=''>
							<motion.a className="link-user"
								initial="hidden"
								animate="visible"
								variants={animations.headerLink}
								transition={{duration: 0.2, delay: 0.3}}>
								<SearchIcon/>
							</motion.a>
						</Link>
						<Link  href=''>
							<motion.a className="link-user"
								initial="hidden"
								animate="visible"
								variants={animations.headerLink}
								transition={{duration: 0.2, delay: 0.4}}>
								<NotificationsIcon/>
							</motion.a>
						</Link>
					</div>
					<motion.span className="hello-user"
						initial="hidden"
						animate="visible"
						variants={animations.helloUser}
						transition={{duration: 0.2, delay: 0.1}}
					>Hello, Julia</motion.span>
					<Link href='/profile'>
						<motion.img src={require("../../public/img/test_avatar.png")} alt="avatar" className="avatar"
							initial="hidden"
							animate="visible"
							variants={animations.avatar}
							transition={{duration: 0.2, delay: 0.1}}
						/>
					</Link>
				</div>
			) : (
				<motion.div className="header-singin">
					<FaSearch/>
					<button className="singin-btn" onClick={() => setSingInIsOpen(true)}>Sign in</button>
				</motion.div>
			)}
			
		</motion.header>
	)
}

export default Header