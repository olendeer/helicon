import Nav from '../components/Nav/Nav'
function Helicon(){
	return (
		<Nav>

		</Nav>
	)
}

export async function getServerSideProps(context){
	context.res.writeHead(302, { Location: "/news" });
	context.res.end()
	return {
		props: {

		}
	}
}

export default Helicon;