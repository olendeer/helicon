import {useEffect} from 'react'
import Chart from 'chart.js'

import Nav from '../components/Nav/Nav'
import {TiArrowDownThick} from 'react-icons/ti'
import {FiDollarSign} from 'react-icons/fi'

import {motion} from 'framer-motion'
import {animations} from '../hooks/animations'

function Analitics(){
	useEffect(() => {
		let ctx = document.getElementById('myChart').getContext('2d');
		var grd1 = ctx.createLinearGradient(0, 0, 0, 500);
		grd1.addColorStop(.5, 'rgba(94, 206, 177, 0)');
		grd1.addColorStop(0.14, 'rgba(0, 31, 255, .14)');
		var grd2 = ctx.createLinearGradient(0, 0, 0, 600);
		grd2.addColorStop(.5, 'rgba(94, 206, 177, 0)');
		grd2.addColorStop(0.14, 'rgba(31, 144, 250, 0.7)');
		new Chart(ctx, {
			type: 'line',
			data: {
				labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
				datasets: [{
					label: '# of Votes',
					data: [200, 250, 200, 230, 190, 200, 190],
					borderColor : '#001fff',
					backgroundColor: grd1,
					pointBorderColor: 'transparent',
       				pointBackgroundColor: 'transparent'
				}, {
					borderColor: 'rgba(31, 144, 250, 0.31)',
					data: [100, 180, 156, 174, 173, 135, 180],
					backgroundColor: grd2,
					pointBorderWidth: 0,
					pointBorderColor: 'transparent',
       				pointBackgroundColor: 'transparent',
				}]
			},
			options: {
				responsive: true,
				legend : {
					display: false
				},
				scales: {
					yAxes: [{
						display: false,
						ticks: {
							max: 300,
							min: 0,
							stepSize: 100,
							display: false
						},
						gridLines: {
							borderDash : [2, 10],
							borderDashOffset: 0.5
						}
					}],
					xAxes: [
						{
							display: false,
							gridLines: {
								display: false,
							},
							ticks: {
								display: false
							}
						}
					],
				}
			}
		});
		document.getElementById('myChart').style.height = 300 + 'px'
	}, [])
	return (
		<Nav>
			<div className="analitics-content-wrapper">
			<div className="analitics-content-wrapper-header">
				<motion.div className="header-news"
				initial="hidden"
				animate="visible"
				variants={animations.breadcrumbs}
				transition={{duration: 0.3}}>Analitics</motion.div>
				<motion.div className="withdraw"
				initial="hidden"
				animate="visible"
				variants={animations.avatar}
				transition={{duration: 0.3}}>
					<div className="withdraw-price">
						987,23$
					</div>
					<div className="withdraw-label">
						Withdraw
					</div>
				</motion.div>
			</div>
			<div className="analitics-content">
				<motion.div className="analitics-chart"
				initial="hidden"
				animate="visible"
				variants={animations.news}
				transition={{duration: 0.3}}>
					<div className="chart">
						<div className="mark-sum1 mark-sum">300$</div>
						<div className="mark-sum2 mark-sum">200$</div>
						<div className="mark-sum3 mark-sum">100$</div>
						<div className="mark-sum4 mark-sum">0$</div>
						<div className="mark-data">
							<div className="mark-data-item">
								<span className="circle"></span>
								<div className="mark-data-item-text">523$</div>
							</div>
							<div className="mark-data-item">
								<span className="circle"></span>
								<div className="mark-data-item-text">553</div>
							</div>
						</div>
						<div className="chart-wrapper">
							<canvas id="myChart" height="400">
								<p>Hello Fallback World</p>
							</canvas>
						</div>
						<div className="mark-description">
							<div className="mark-description-item">
								<div className="circle"></div>
								<div className="mark-description-item-text">Earned $</div>
							</div>
							<div className="mark-description-item">
								<div className="circle"></div>
								<div className="mark-data-item-text">Spent on advertisement</div>
							</div>
						</div>
						<div className="mark-bottom">
							<div className="mark-bottom-item">Jan</div>
							<div className="mark-bottom-item">Feb</div>
							<div className="mark-bottom-item">Mar</div>
							<div className="mark-bottom-item">Apr</div>
							<div className="mark-bottom-item">May</div>
							<div className="mark-bottom-item">Jun</div>
							<div className="mark-bottom-item">Jul</div>
						</div>
					</div>
					<div className="chart-data">
						<div className="chart-data-item">
							<div className="chart-data-item-name">Total Earnings</div>
							<div className="chart-data-item-value">
							987,23 <span>$</span>
							</div>
							<div className="chart-data-item-arrow">
								<TiArrowDownThick/>
							</div>
						</div>
						<div className="chart-data-item">
							<div className="chart-data-item-name">Earned in April</div>
							<div className="chart-data-item-value">
							94,23 <span>$</span>
							</div>
							<div className="chart-data-item-arrow">
								<TiArrowDownThick/>
							</div>
						</div>
						<div className="chart-data-item">
							<div className="chart-data-item-name">Written Articles</div>
							<div className="chart-data-item-value">
							34
							</div>
							<div className="chart-data-item-arrow">
								<TiArrowDownThick/>
							</div>
						</div>
						<div className="chart-data-item">
							<div className="chart-data-item-name">Likes</div>
							<div className="chart-data-item-value">
							54
							</div>
							<div className="chart-data-item-arrow">
								<TiArrowDownThick/>
							</div>
						</div>
						<div className="chart-data-item">
							<div className="chart-data-item-name">Followers</div>
							<div className="chart-data-item-value">
							568
							</div>
							<div className="chart-data-item-arrow">
								<TiArrowDownThick/>
							</div>
						</div>
					</div>
				</motion.div>
				<div className="analitics-up">
					<motion.div className="analitics-up-header"
					initial="hidden"
					animate="visible"
					variants={animations.avatar}
					transition={{duration: 0.3, delay: .1}}>
						Advertisement
					</motion.div>
					<motion.div className="analitics-up-item"
					initial="hidden"
					animate="visible"
					variants={animations.news}
					transition={{duration: 0.3, delay: .1}}>
						<div className="analitics-up-item-header">Start you campaign to increase your traffic from Helicon search</div>
						<div className="analitics-up-variables">
							<div className="analitics-up-variables-btns">
								<FiDollarSign/>&ensp;7
							</div>
							<div className="analitics-up-variables-btns">
								Days 7
							</div>
						</div>
						<div className="analitics-up-start">
							Start
						</div>
					</motion.div>
					<motion.div className="analitics-up-item"
					initial="hidden"
					animate="visible"
					variants={animations.news}
					transition={{duration: 0.3, delay: .2}}>
						<div className="analitics-up-item-header">Add yourself in our newsletter</div>
						<div className="analitics-up-variables">
							<div className="analitics-up-variables-btns">
								<FiDollarSign/>&ensp;5
							</div>
							<div className="analitics-up-variables-btns">
								Times 1
							</div>
						</div>
						<div className="analitics-up-start">
							Start
						</div>
					</motion.div>
					<motion.div className="analitics-up-item"
					initial="hidden"
					animate="visible"
					variants={animations.news}
					transition={{duration: 0.3, delay: .3}}>
						<div className="analitics-up-item-header">Stay in Top</div>
						<div className="analitics-up-variables">
							<div className="analitics-up-variables-btns">
								<FiDollarSign/>&ensp;2
							</div>
							<div className="analitics-up-variables-btns">
								Days 1
							</div>
						</div>
						<div className="analitics-up-start">
							Start
						</div>
					</motion.div>
					
				</div>
			</div>
		</div>
		</Nav>
	)
}

export default Analitics;