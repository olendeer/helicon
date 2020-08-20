import {MdPhotoCamera} from 'react-icons/md'
import {FaRegCalendar} from 'react-icons/fa'
import {BsClock} from 'react-icons/bs'
import {FiLink2} from 'react-icons/fi'
import {AiOutlinePlus} from 'react-icons/ai'
import { useState } from 'react'
function CreateEvent({setCreateEventIsOpen}){
	let [addLink, setAddLink] = useState(false)
	return (
		<div className="create-event-wrapper">
			<div className="create-event-content">
				<div className="necessary">
					<div className="create-event-content-header">Necessary information</div>
					<div className="create-event-content-title">To create an event, provide the following information.</div>
					<div className="necessary-content">
						<div className="necessary-wrapper-media">
							<div className="wrapper-title">Photo or video of the event</div>
							<div className="necessary-upload">
								<div className="necessary-upload-body">
									<MdPhotoCamera/> upload video/photo
								</div>
							</div>
						</div>
						<div className="necessary-wrapper-input">
							<div className="wrapper-title">Event name</div>
							<input type="text" className="wrapper-input"/>
						</div>
						<div className="necessary-wrapper-input">
							<div className="wrapper-title">Location</div>
							<input type="text" className="wrapper-input"/>
						</div>
						<div className="necessary-wrapper-input">
							<div className="wrapper-title">Description</div>
							<textarea name="" className="wrapper-textarea" id="" cols="30" rows="10"></textarea>
						</div>
						<div className="necessary-wrapper-input">
							<div className="wrapper-title">Keyword</div>
							<input type="text" className="wrapper-input"/>
						</div>
						<div className="necessary-wrapper-input">
							<div className="wrapper-title"></div>
							<div className="necessary-date">
								<div className="necessary-date-line">
									<div className="necessary-date-line-title">Beginning</div>
									<div className="necessary-date-line-day">23.24.3409 <FaRegCalendar/></div>
									<div className="necessary-date-line-time">18:00 <BsClock/></div>
								</div>
								<div className="necessary-date-line">
									<div className="necessary-date-line-title">End</div>
									<div className="necessary-date-line-day">23.24.3409 <FaRegCalendar/></div>
									<div className="necessary-date-line-time">18:00 <BsClock/></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="conditions">
					<div className="create-event-content-header">Conditions of entry</div>
					<div className="create-event-content-title">Please inform us about the conditions of entry to your event</div>
					<div className="add-link">
						<div className="add-link-wrap">
							<FiLink2/>
							<div className="add-link-title">Add a link to the ticket</div>
						</div>
						<div className="add-link-plus"
						onClick={() => setAddLink(true)}><AiOutlinePlus/></div>
					</div>
					{addLink ? (
							<div className="add-link-input-wrap">
								<div className="add-link-input-title">Link</div>
								<input type="text" className="add-link-input"/>
							</div>
						) : ''}
				</div>
				<div className="chars">
					<div className="create-event-content-header">Characteristic</div>
					<div className="create-event-content-title">Specify who can post to your event</div>
					<div className="checkbox-item">
						<div className="chekbox-item-title">
							Permissions for publications
						</div>
						<div className="checkbox-data">
							<div className="chekbox-item-box">
								<div className="checkbox-item-box-check"></div>
								<div className="checkbox-item-box-title">Only administrators can publish</div>
							</div>
							<div className="chekbox-item-box">
								<div className="checkbox-item-box-check"></div>
								<div className="checkbox-item-box-title">Anyone can publish</div>
							</div>
						</div>
					</div>
					<div className="checkbox-item">
						<div className="chekbox-item-title">
							Messaging
						</div>
						<div className="chekbox-item-box">
							<div className="checkbox-item-box-check"></div>
							<div className="checkbox-item-box-title">People will be able to ask you questions about your event in Messenger</div>
						</div>
					</div>
				</div>
				<div className="create-event-btns">
					<button className="create-event-save-btn" onClick={() => setCreateEventIsOpen(false)}>Save draft</button>
					<button className="create-event-create-btn" onClick={() => setCreateEventIsOpen(false)}>Create</button>
				</div>
			</div>
		</div>
	)
}


export default CreateEvent;