import Link from 'next/link'

import {FaSearch} from 'react-icons/fa'
function Messages({messageIsOpen}) {
	return (
		<div className={"messages-popup " + (messageIsOpen ? 'messages-popup-active' : '')}>
			<div className="messages-header">
				Messages
			</div>
			<div className="messages-searchbar">
				<input type="text" placeholder="Search..." className="messages-search-input"/>
				<FaSearch/>
			</div>
			<div className="messages-list">
				<div className="messages-list-item">
					<img src={require("../../../public/img/test_avatar.png")} alt="" className="message-owner-avatar"/>
					<div className="message-info">
						<div className="message-owner-name">Carlo Bruno</div>
						<div className="message-owner-text">Sent you a picture</div>
					</div>
					<div className="message-time">
						&nbsp; &middot;	&nbsp; 12 min ago
					</div>
				</div>
				<div className="messages-list-item">
					<img src="img/test_avatar.png" alt="" className="message-owner-avatar"/>
					<div className="message-info">
						<div className="message-owner-name">Carlo Bruno</div>
						<div className="message-owner-text">Sent you a picture</div>
					</div>
					<div className="message-time">
						&nbsp; &middot;	&nbsp; 12 min ago
					</div>
				</div>
				<div className="messages-list-item">
					<img src="img/test_avatar.png" alt="" className="message-owner-avatar"/>
					<div className="message-info">
						<div className="message-owner-name">Carlo Bruno</div>
						<div className="message-owner-text">Sent you a picture</div>
					</div>
					<div className="message-time">
						&nbsp; &middot;	&nbsp; 12 min ago
					</div>
				</div>
				<div className="messages-list-item">
					<img src="img/test_avatar.png" alt="" className="message-owner-avatar"/>
					<div className="message-info">
						<div className="message-owner-name">Carlo Bruno</div>
						<div className="message-owner-text">Sent you a picture</div>
					</div>
					<div className="message-time">
						&nbsp; &middot;	&nbsp; 12 min ago
					</div>
				</div>
				<div className="messages-list-item">
					<img src="img/test_avatar.png" alt="" className="message-owner-avatar"/>
					<div className="message-info">
						<div className="message-owner-name">Carlo Bruno</div>
						<div className="message-owner-text">Sent you a picture</div>
					</div>
					<div className="message-time">
						&nbsp; &middot;	&nbsp; 12 min ago
					</div>
				</div>
			</div>
			<Link href='/messages'>
				<div className="messages-opened-full-btn">Open All Messages</div>
			</Link>
		</div>
	)
}

export default Messages;