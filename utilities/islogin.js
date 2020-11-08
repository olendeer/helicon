import Cookies from 'cookies'

export function isLogin(req, res){
	const cookies = new Cookies(req, res)
	const login = JSON.parse(!cookies.get('login') ? false : true)
	if(login.isLogin){
		return true
	} else {
		return false
	}
}