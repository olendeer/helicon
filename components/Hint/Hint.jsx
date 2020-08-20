import {FaArrowLeft} from 'react-icons/fa'
function Hint(){
	return (
		<div className="hint-wrapper">
			<div className="hint-item">
				<FaArrowLeft/>
				<div className="hint-header">News</div>
				<div className="hint-title">Do you want to know what is happening in the art world? so check it out! <br/> Read articles written by others artists and be aware of what is happening around you</div>
			</div>
			<div className="hint-item">
				<FaArrowLeft/>
				<div className="hint-header">Gallery</div>
				<div className="hint-title">Here you can ook for inspiration, post your paintings and drawings, buy a nice picture for someone and even more :) </div>
			</div>
			<div className="hint-item">
				<FaArrowLeft/>
				<div className="hint-header">Work place</div>
				<div className="hint-title">MONEY! Yas, here you can earn them ;) or order a special artwork</div>
			</div>
			<div className="hint-item">
				<FaArrowLeft/>
				<div className="hint-header">Events</div>
				<div className="hint-title">is there something going on tight now? or maybe you want to gather people?</div>
			</div>
			<div className="hint-item">
				<FaArrowLeft/>
				<div className="hint-header">Auction</div>
				<div className="hint-title">Find authentic painting for yourself or your friend</div>
			</div>
			<div className="hint-item">
				<FaArrowLeft/>
				<div className="hint-header">Pallete</div>
				<div className="hint-title">Find the best color matches for your next drawing</div>
			</div>
		</div>
	)
}

export default Hint;