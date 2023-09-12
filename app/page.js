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
import T1 from '../assets/t1.png'
import T2 from "../assets/t2.png";
import T3 from "../assets/t3.png";
import T4 from "../assets/t4.png";
import W1 from '../assets/w1.png'
import W2 from "../assets/w2.png";
import W3 from "../assets/w3.png";
import W4 from "../assets/w4.png";
import W5 from "../assets/w5.png";
import W6 from "../assets/w6.png";
import App from '../assets/apps.png'
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import {BsInstagram} from 'react-icons/bs'
import ServicesCard from "@/Components/ServicesCard";
import Footor from "@/Components/Footor";

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
							tc="#FFF"
							BG="linear-gradient(180deg, #2368DF 0%, #E86AF0 100%)"
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
							tc="#FFF"
							BG="linear-gradient(180deg, #2368DF 0%, #E86AF0 100%)"
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
							tc="#FFF"
							BG="linear-gradient(180deg, #2368DF 0%, #E86AF0 100%)"
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
							tc="#FFF"
							BG="linear-gradient(180deg, #2368DF 0%, #E86AF0 100%)"
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
							tc="#FFF"
							BG="linear-gradient(180deg, #2368DF 0%, #E86AF0 100%)"
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
							tc="#FFF"
							BG="linear-gradient(180deg, #2368DF 0%, #E86AF0 100%)"
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
			<div className="container m-auto">
				<h1 className="text-center  text-[46px] font-bold text-[#F06AF1]  mt-10 drop-shadow-lg ">
					{" "}
					Meet Our Teams
				</h1>
				<div className="row m-auto">
					<div className="col-md-5 mt- 5">
						<div className="adjust">
							<Image
								className="border-2 border-black drop-shadow-lg"
								src={T1}
								style={{ borderRadius: "50%" }}
							/>
							<div className="mt-16 ml-5">
								<p className="text-[12] font-bold text-[#C7622B]">
									CE0-Founder
								</p>
								<h2 className="mt-8 text-[32px] font-bold">Hassan Tariq</h2>
								<div className="divide-y border-black border-b-2 mt-4"></div>
								<div className="d-flex justify-between mt-4">
									<AiFillLinkedin size={25} color="rgba(46,86,200,0.9)" />
									<BsInstagram size={25} color="#F06AF1" />
									<AiOutlineTwitter size={25} color="rgba(46,86,200,0.9)" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-2"></div>
					<div className="col-md-5 mt-5">
						<div className="adjust">
							<Image
								className="border-2 border-black drop-shadow-lg"
								src={T2}
								style={{ borderRadius: "50%" }}
							/>
							<div className="mt-16 ml-5">
								<p className="text-[12] font-bold text-[#C7622B]">
									CE0-Founder
								</p>
								<h2 className="mt-8 text-[32px] font-bold">Abdul Moiz</h2>
								<div className="divide-y border-black border-b-2 mt-4"></div>
								<div className="d-flex justify-between mt-4">
									<AiFillLinkedin size={25} color="rgba(46,86,200,0.9)" />
									<BsInstagram size={25} color="#F06AF1" />
									<AiOutlineTwitter size={25} color="rgba(46,86,200,0.9)" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-5 mt-5">
						<div className="adjust">
							<Image
								className="border-2 border-black drop-shadow-lg"
								src={T3}
								style={{ borderRadius: "50%" }}
							/>
							<div className="mt-16 ml-5">
								<p className="text-[12] font-bold text-[#C7622B]">
									ARCHITECT LEAD
								</p>
								<h2 className="mt-8 text-[32px] font-bold">Ihtisham </h2>
								<div className="divide-y border-black border-b-2 mt-4"></div>
								<div className="d-flex justify-between mt-4">
									<AiFillLinkedin size={25} color="rgba(46,86,200,0.9)" />
									<BsInstagram size={25} color="#F06AF1" />
									<AiOutlineTwitter size={25} color="rgba(46,86,200,0.9)" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-2"></div>
					<div className="col-md-5 mt-5">
						<div className="adjust">
							<Image
								className="border-2 border-black drop-shadow-lg"
								src={T4}
								style={{ borderRadius: "50%" }}
								width={300}
								
							/>
							<div className="mt-16 ml-5">
								<p className="text-[12] font-bold text-[#C7622B]">MANAGER</p>
								<h2 className="mt-8 text-[32px] font-bold"> Abdul Basit</h2>
								<div className="divide-y border-black border-b-2 mt-4"></div>
								<div className="d-flex justify-between mt-4">
									<AiFillLinkedin size={25} color="rgba(46,86,200,0.9)" />
									<BsInstagram size={25} color="#F06AF1" />
									<AiOutlineTwitter size={25} color="rgba(46,86,200,0.9)" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bgg3 mt-5">
				<div className="container pt-10 pb-36">
					<h1 className="text-[40px] text-center font-bold drop-shadow-xl text-white">
						Why Choose Us
					</h1>
					<div className="row m-auto">
						<div className="col-md-4 mt-5">
							<ServicesCard
								tc="#000"
								BG="#fff"
								image={W1}
								title="Excellent Quality Services"
								detail="Our primary aim is to deliver above 
and beyond your expectations. 
All of our services are guaranteed to 
be of best quality,
 thus aiming to ensure you are satisfied 
with our services."
							/>
						</div>
						<div className="col-md-4 mt-5">
							<ServicesCard
								tc="#000"
								BG="#fff"
								image={W2}
								title="State of the Art Solutions"
								detail="Our primary aim is to deliver above 
and beyond your expectations. 
All of our services are guaranteed to 
be of best quality,
 thus aiming to ensure you are satisfied 
with our services."
							/>
						</div>
						<div className="col-md-4 mt-5">
							<ServicesCard
								tc="#000"
								BG="#fff"
								image={W3}
								title="24 x 7 User Support"
								detail="Our primary aim is to deliver above 
and beyond your expectations. 
All of our services are guaranteed to 
be of best quality,
 thus aiming to ensure you are satisfied 
with our services."
							/>
						</div>
						<div className="col-md-4 mt-5">
							<ServicesCard
								tc="#000"
								BG="#fff"
								image={W4}
								title="Experienced Specialists"
								detail="Our primary aim is to deliver above 
and beyond your expectations. 
All of our services are guaranteed to 
be of best quality,
 thus aiming to ensure you are satisfied 
with our services."
							/>
						</div>
						<div className="col-md-4 mt-5">
							<ServicesCard
								tc="#000"
								BG="#fff"
								image={W5}
								title="Market Strategy"
								detail="Our primary aim is to deliver above 
and beyond your expectations. 
All of our services are guaranteed to 
be of best quality,
 thus aiming to ensure you are satisfied 
with our services."
							/>
						</div>
						<div className="col-md-4 mt-5">
							<ServicesCard
								tc="#000"
								BG="#fff"
								image={W6}
								title="Affordable cost"
								detail="Our primary aim is to deliver above 
and beyond your expectations. 
All of our services are guaranteed to 
be of best quality,
 thus aiming to ensure you are satisfied 
with our services."
							/>
						</div>
					</div>
				</div>
			</div>
			<Footor/>
		</>
	);
}
