export const animations = {
	page : {
		hidden: {
			opacity: 0
		},
		visible :{
			opacity: 1
		}

	},
	logo: {
		hidden: {
			opacity: 0,
			scale: 0.4
		},
		visible :{
			opacity: 1,
			scale: 1
		}
	},
	logoName : {
		hidden: {
			x: -15
		},
		visible :{
			x: 0
		}
	},
	headerLink : {
		visible: { opacity: 1, y: 0 },
		hidden: { opacity: 0, y: 10 },
	},
	helloUser: {
		hidden: {
			x: 15,
			opacity: 0
		},
		visible :{
			x: 0,
			opacity: 1
		}
	},
	avatar: {
		hidden: {
			x: 15,
			opacity: 0
		},
		visible :{
			x: 0,
			opacity: 1
		}
	},
	wrapper: {
		hidden: {
			opacity: 0
		},
		visible :{
			opacity: 1
		},
		exit: {
			opacity: 0
		}
	},
	menuLink: {
		hidden: {
			opacity: 0,
			x: -15,
			scale: 0.8
		},
		visible :{
			opacity: 1,
			x: 0,
			scale: 1
		}
	},
	news: {
		hidden: {
			opacity: 0,
			y: 30,
			// scale: 0.8
		},
		visible :{
			opacity: 1,
			y: 0,
			// scale: [1.2, 1]
		}
	},
	moreBtn: {
		hidden: {
			x: -15,
			opacity: 0,
		},
		visible :{
			x: 0,
			opacity: 1,
		},
	},
	breadcrumbs: {
		hidden: {
			x: 15,
			opacity: 0,
		},
		visible :{
			x: 0,
			opacity: 1,
		},
	},
	feed: {
		hidden: {
			y: 25,
			opacity: 0,
		},
		visible :{
			y: 0,
			opacity: 1,
		},
	},
	input: {
		hidden: {
			width: 0,
			opacity: 0,
		},
		visible :{
			width: 270,
			opacity: 1,
		},
	}
	
}