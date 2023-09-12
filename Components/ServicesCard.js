import Image from 'next/image';
import React from 'react'

const ServicesCard = (props) => {
  return (
		<div>
			<div
				className="card py-4 px-4 "
				style={{
					width: "22rem",
					background: props.BG,
					borderRadius: 10,
					border: "3px #CA9203 solid",
					boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
				}}
			>
				<Image src={props.image} className=" m-auto" />
				<div className="card-body">
					<h5
						className={`card-title text-[${props.tc}] text-center text-[20px] font-bold drop-shadow-lg`}
					>
						{props.title}
					</h5>
					<p className={`card-text text-[${props.tc}] text-center text-[13px] drop-shadow-lg`}>
						{props.detail}
					</p>
				</div>
			</div>
		</div>
	);
}

export default ServicesCard