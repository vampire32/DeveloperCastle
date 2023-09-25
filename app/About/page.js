import Navbar from "@/Components/Navbar";
import Image from "next/image";
import React from "react";
import About1 from "../../assets/About1.png";
import CEO from "../../assets/t1.png";
import ServicesCard from "@/Components/ServicesCard";
import Cardimg from "../../assets/AboutCard1.png";
import Cardimg2 from "../../assets/AboutCard2.png";
import Cardimg3 from "../../assets/AboutCard3.png";
import Cardimg4 from "../../assets/AboutCard4.png";
import About2 from '../../assets/About2.png'
import CheckBox from '../../assets/foundation_checkbox.png'
import Footor from "@/Components/Footor";
const About = () => {
	return (
		<>
			<div className="bgg_about">
				<Navbar />
				<div className="container pb-36">
					<div className="row">
						<div className="col-md-6 mt-[10%]">
							<h1 className="text-[40px] text-white font-bold pb-2">
								Developer Castle
							</h1>
							<p className="text-[16px] text-white">
								Developer Castle Software House is a leading technology
								solutions provider specializing in custom software development,
								digital transformation, and IT consulting services. With a
								passion for innovation and a commitment to excellence, we
								empower businesses to thrive in the digital age
							</p>
						</div>
						<div className="col-md-2"></div>
						<div className="col-md-4 d-flex ">
							<div className="mt-[12%]">
								<Image
									src={About1}
									width={400}
									height={400}
									className="drop-shadow-xl "
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container mt-24 pb-36">
				{/* <h1 className='text-center text-[40px] font-bold'>CEO Message</h1> */}
				<div className="row">
					<div className="col-md-6">
						<Image
							src={CEO}
							width={400}
							height={400}
							className="border-4 border-blue-900 drop-shadow-xl mb-5"
							style={{ borderRadius: 20 }}
						/>
					</div>
					<div className="col-md-6">
						<h1 className="text-[40px] font-bold text-[#26204C] drop-shadow-lg">
							CEO Message
						</h1>
						<p className="mt-5 text-justify">
							At Techno Cro we understand that digital marketing is not just
							about generating clicks and impressions; it’s about creating
							meaningful connections, fostering brand loyalty, and delivering
							measurable results. With our team of skilled professionals and
							cutting-edge strategies, we are committed to propelling your
							business to new heights.
							<br />
							<br />
							<br /> We offer a comprehensive suite of digital marketing
							services tailored to meet your unique business objectives. From
							crafting engaging content that resonates with your audience to
							devising targeted social media campaigns and optimizing your
							online advertising efforts, we leave no stone unturned in
							maximizing your brand’s reach and impact.
						</p>
						<div
							style={{
								width: "100%",
								marginTop: 40,
								border: "1px black solid",
							}}
						></div>
						<h1 className="mt-10 text-[20px] text-[#262E65]">
							<span className="text-[#262E65]]  font-bold drop-shadow-lg">
								For More Information:
							</span>
							+92 316 9089872
						</h1>
					</div>
				</div>
			</div>
			<div className="container-fluid bgg2_about pt-5 pb-36">
				<h1 className="text-[40px] font-bold text-center">
					Providing Best Business Solution
				</h1>
				<h1 className="text-[40px] font-bold text-center">
					For Growing Your Business
				</h1>
				<div className="m-auto">
					<div className="row mt-20">
						<div className="col-md-3 mb-5">
							<ServicesCard
								tc="#253fcc"
								BG="#fff"
								image={Cardimg}
								title="Amazing Work Process"
								detail="Our way of working is very 
productive and
 schedulized. As we believe in
 step by step organized process."
								height="18rem"
							/>
						</div>
						<div className="col-md-3 mb-5">
							<ServicesCard
								tc="#253fcc"
								BG="#fff"
								image={Cardimg2}
								title="Clients Satisfaction"
								detail="By providing customized plans
 we place a high priority on 
customer happiness."
								height="18rem"
							/>
						</div>
						<div className="col-md-3 mb-5">
							<ServicesCard
								tc="#253fcc"
								BG="#fff"
								image={Cardimg3}
								title="Connecting Potential"
								detail="We connect our audience
 with marketing strategies for
 their active proposals.."
								height="18rem"
							/>
						</div>
						<div className="col-md-3 mb-5">
							<ServicesCard
								tc="#253fcc"
								BG="#fff"
								image={Cardimg4}
								title="Increase Sales Ratio"
								detail="Our teamwork increase 
your sale ratio which helps 
us in getting great review
s from our clients."
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="container mt-16 pb-36">
				<div className="row">
					<div className="col-md-6">
						<h1 className="text-[40px] font-bold text-[#262E65]">
							Some Reasons to Work Together
						</h1>
						<div className="d-flex mt-5">
							<Image src={CheckBox} width={50} height={50} />
							<h2 className="text-[26px] font-bold text-[#262E65]">
								Experience:
							</h2>
						</div>
						<p className="text-[16px] mt-3">
							Our team has years of experience in the digital marketing industry
							and has worked with businesses of all sizes.
						</p>
						<div className="d-flex mt-5">
							<Image src={CheckBox} width={50} height={50} />
							<h2 className="text-[26px] font-bold text-[#262E65]">Results:</h2>
						</div>
						<p className="text-[16px] mt-3">
							We are dedicated to delivering results that drive business growth
							and increase revenue.
						</p>
						<div className="d-flex mt-5">
							<Image src={CheckBox} width={50} height={50} />
							<h2 className="text-[26px] font-bold text-[#262E65]">
								Communication:
							</h2>
						</div>
						<p className="text-[16px] mt-3">
							We keep our clients informed every step of the way and are always
							available to answer any questions or concerns.
						</p>
					</div>
					<div className="col-md-2"></div>
					<div className="col-md-4">
						<Image src={About2} layout="cover" />
					</div>
				</div>
			</div>
      <Footor/>
		</>
	);
};

export default About;
