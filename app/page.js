import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/Components/Navbar";
import Main from "../assets/mainpic.png";
import Main2 from '../assets/Main2.png'
import Main3 from "../assets/Main3.png";
import Cardimg1 from "../assets/card1.png";
import Cardimg2 from "../assets/card2.png";
import Cardimg3 from "../assets/card3.png";
import Cardimg4 from "../assets/card4.png";
import Cardimg5 from "../assets/card5.png";
import Cardimg6 from "../assets/card6.png";
import App from '../assets/apps.png'
import ServicesCard from "@/Components/ServicesCard";

export default function Home() {
	return (
		<>
			<main className="bgg">
				<Navbar />
				<div className="container pb-36 ">
					<div className="row">
						<div className="col-md-6 mt-[10%]">
							<h1 className="text-[40px] font-extrabold">
								Welcome to Developer Castle
							</h1>
							<h2 className="text-[40px] font-extrabold">
								We build things for the Software.
							</h2>
							<p className="text-[16px]">
								I’m a software engineer specializing in building (and
								occasionally designing) exceptional digital experiences.
								Currently, I’m focused on building accessible, human-centered
								products at Upstatement.
							</p>
							<div className="d-flex mt-5">
								<a href="#" className="transparent-button drop-shadow-2xl">
									Call Now
								</a>
								<a href="#" className="transparent-button ml-5 drop-shadow-2xl">
									Contact us
								</a>
							</div>
						</div>
						<div className="col-md-2"></div>
						<div className="col-md-4 mt-[5%] drop-shadow-xl">
							<Image src={Main} layout="cover" className="drop-shadow-xl" />
						</div>
					</div>
				</div>
			</main>
			<div className="container pb-20 me-auto">
				<h1 className="text-center text-[46px] font-bold text-[#F06AF1] mt-10 drop-shadow-lg ">
					Our Services
				</h1>
				<div className=" row mt-5">
					<div className="col-md-4 mt-5">
						<ServicesCard
							image={Cardimg1}
							title="Website Creation"
							detail="Website creation is one of the popular
 services of the Software House company,
 especially for the administration
 and business needs of a company."
						/>
					</div>
					<div className="col-md-4 mt-5">
						<ServicesCard
							image={Cardimg2}
							title="Mobile App Delevopment"
							detail="Website creation is one of the popular
 services of the Software House company,
 especially for the administration
 and business needs of a company."
						/>
					</div>
					<div className="col-md-4 mt-5">
						<ServicesCard
							image={Cardimg3}
							title="UI/UX Design"
							detail="Website creation is one of the popular
 services of the Software House company,
 especially for the administration
 and business needs of a company."
						/>
					</div>
					<div className="col-md-4  mt-5">
						<ServicesCard
							image={Cardimg4}
							title="Digital Marketing"
							detail="Website creation is one of the popular
 services of the Software House company,
 especially for the administration
 and business needs of a company."
						/>
					</div>
					<div className="col-md-4 mt-5">
						<ServicesCard
							image={Cardimg5}
							title="Graphic Designing"
							detail="Website creation is one of the popular
 services of the Software House company,
 especially for the administration
 and business needs of a company."
						/>
					</div>
					<div className="col-md-4 mt-5 ">
						<ServicesCard
							image={Cardimg6}
							title="E-Commerce Solution "
							detail="Website creation is one of the popular
 services of the Software House company,
 especially for the administration
 and business needs of a company."
						/>
					</div>
				</div>
			</div>
			<div className="bgg2 pb-40">
				<div className="container">
					<h1 className="text-[40px] font-bold text-center pt-10">
						Remarkable IT Solutions Hosted In Pakistan
					</h1>
					<div className="row mt-28">
						<div className="col-md-6">
							<Image src={Main2} />
						</div>
						<div className="col-md-6 mt-[8%]">
							<p className="text-[16px]">
								In this competitive era, the demands of potential customers have
								increased dramatically. No matter which business it is, there is
								a dire need for a remarkable online presence. If done
								strategically, it can bring a real boost in sales and help in
								gaining a competitive edge.
							</p>
						</div>
						<div className="col-md-6 mt-[9%]">
							<p className="text-[16px]">
								BruhTech understands the day-to-day challenges of an ordinary
								businessman, and thus, it works with the core dictum of
								providing a unique identity to your business. Having a team of
								IT connoisseurs, we deliver modern business solutions under one
								roof. Our huge list of satisfied clients is a mirror image of
								our commitment. With unmatched ideas, passion, and commitment
								towards perfection, we strive to bring a commendable change to
								your business.
							</p>
						</div>
						<div className="col-md-2"></div>
						<div className="col-md-4 ">
							<Image src={Main3} />
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid pb-32">
				<h1 className="text-[40px] font-bold text-center mt-10">
					Get Invaluable Apps and Websites for Your Business
				</h1>
				<div className="d-flex mt-10">
					<div className="m-auto">
						<Image src={App} layout="cover" />
					</div>
				</div>
			</div>
		</>
	);
}
