import 'react-toastify/dist/ReactToastify.css'
import BookMe from '../components/BookMe'
import Divider from '../components/Divider'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import MyExperiences from '../components/MyExpreiences'
import MyMission from '../components/MyMission'
import MyWorkflow from '../components/MyWorkflow'
import Navbar from '../components/Navbar'
import ScrollToTop from '../components/ScrollToTop'

export default function Index() {
	return (
		<>
			<section>
				<Hero />
				<MyMission />
				<MyExperiences />
				<MyWorkflow />
				<BookMe />
				<Gallery />
				<ScrollToTop />
			</section>
		</>
	)
}

Index.getLayout = function getLayout(page) {
	return (
		<Layout>
			<Navbar />
			{page}
			<Footer />
		</Layout>
	)
}
