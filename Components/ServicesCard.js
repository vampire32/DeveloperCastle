import Image from 'next/image';
import React from 'react'

const ServicesCard = (props) => {
  return (
		<div>
			<div
				class="card py-4 px-4 "
				style={{
					width: "22rem",
					background: "linear-gradient(180deg, #2368DF 0%, #E86AF0 100%)",
					borderRadius: 10,
					border: "3px #CA9203 solid",
					boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
				}}
			>
				<Image src={props.image} class="card-img-top m-auto"  />
				<div class="card-body">
					<h5 class="card-title text-white text-center text-[20px] font-bold drop-shadow-lg">{props.title}</h5>
					<p class="card-text text-white text-center text-[13px] drop-shadow-lg">
						{props.detail}
					</p>
				</div>
			</div>
		</div>
	);
}

export default ServicesCard