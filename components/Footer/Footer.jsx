import Link from 'next/link'
import { useState, useEffect } from 'react'
function Footer({footer}){
	let [show, setShow] = useState(false)
	// let [didMount, setDidMount] = useState(false)
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.innerHeight + window.scrollY > document.body.clientHeight - 20) {
				setShow(true)
			} else {
				setShow(false)
			}
		})
	},[])
	// useEffect(() => {
	// 	setDidMount(true);
  	// 	return () => setDidMount(false);
	// })
	return (
		<footer className={show ? 'footer-active' : ''}>
			<Link href=''><a className="footer-link">About us</a></Link>
			<Link href=''><a className="footer-link">Terms of use</a></Link>
			<Link href=''><a className="footer-link">Contact us</a></Link>
			<Link href=''><a className="footer-link">Connect with us</a></Link>
			<Link href=''><a className="footer-link">Have a tip?</a></Link>
		</footer>
	)
}


export default Footer