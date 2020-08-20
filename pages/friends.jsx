import Link from 'next/link'

import Nav from '../components/Nav/Nav'
import BreadCrumbs from '../components/Breadcrumbs/Breadcrumbs'

import SearchIcon from '@material-ui/icons/Search';
import EmailIcon from '@material-ui/icons/Email';

import {motion} from 'framer-motion'
import {animations} from '../hooks/animations'

function Friends({friends}) {
	return (
		<Nav>
			<BreadCrumbs breadcrumbs={[{name: 'My profile', link: '/profile'}]}/>
			<motion.div className="friends-content"
			initial="hidden"
			animate="visible"
			variants={animations.feed}
			transition={{duration: .3}}>
				<div className="friends-content-header">
					<div className="friends-content-search-bar">
						<input type="text" className="search-bar-value" placeholder="Search..."/>
						<SearchIcon/>
					</div>
					<Link href='/follows'>
						<div className="followers-btn">Followers</div>
					</Link>
				</div>
				<div className="friends-list">
					{friends.map((friend, index) => {
						return (
							<Link href='/profile?user=qrezzz' key={index}>
								<div className="friend-item">
									<div className="friend-item-data">
										<img src={friend.avatar} alt="" className="friend-item-image"/>
										<div className="friend-item-info">
											<div className="friend-item-name">{friend.name}</div>
											<div className="friend-item-send-message">
												<EmailIcon/>
												<span>Message</span>
											</div>
										</div>
									</div>
									<div className="friend-item-status">Friend</div>
								</div>
							</Link>
						)
					})}
				</div>
			</motion.div>
		</Nav>
	)
}

export async function getServerSideProps(){
	return {
		props: {
			friends: [
				{
					avatar: require('../public/img/test_avatar.png'),
					name: 'Garcia Koul'
				},
				{
					avatar: require('../public/img/test_avatar.png'),
					name: 'Garcia Koul'
				},
				{
					avatar: require('../public/img/test_avatar.png'),
					name: 'Garcia Koul'
				},
				{
					avatar: require('../public/img/test_avatar.png'),
					name: 'Garcia Koul'
				},
				{
					avatar: require('../public/img/test_avatar.png'),
					name: 'Garcia Koul'
				},
				{
					avatar: require('../public/img/test_avatar.png'),
					name: 'Garcia Koul'
				}
			]
		}
	}
}

export default Friends;