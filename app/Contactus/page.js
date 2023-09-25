import Navbar from '@/Components/Navbar'
import React from 'react'

const Contactus = () => {
  return (
		<>
			<div className="bgg">
				<Navbar />
			</div>
			<section class="text-gray-600 body-font relative">
				<h1 className="text-center text-[40px] font-bold mt-10 text-[#F06AF1]">
					Contact US
				</h1>
				<div class="container px-5 py-24  ">
					<div className="row">
						<div class="col-md-6 bg-gray-300 rounded-lg overflow-hidden  p-10 flex items-end justify-start relative">
							<iframe
								width="100%"
								height="100%"
								class="absolute inset-0"
								frameborder="0"
								title="map"
								marginheight="0"
								marginwidth="0"
								scrolling="no"
								src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1660.4989775979254!2d73.1588614106981!3d33.65721487019714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1695653719274!5m2!1sen!2s" 
							></iframe>
							<div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
								<div class="lg:w-1/2 px-6">
									<h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
										ADDRESS
									</h2>
									<p class="mt-1">
										Street 7B Hostel City ChakShezad Islambad Pakistan
									</p>
								</div>
								<div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
									<h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
										EMAIL
									</h2>
									<a class="text-purple-500 leading-relaxed">
										info@developercastle
									</a>
									<h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
										PHONE
									</h2>
									<p class="leading-relaxed">+923169089872</p>
								</div>
							</div>
						</div>
						<div class="col-md-5  bg-white  ml-auto">
							<h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
								Feedback
							</h2>
							<p class="leading-relaxed mb-5 text-gray-600">
								Post-ironic portland shabby chic echo park, banjo fashion axe
							</p>
							<div class="relative mb-4">
								<label for="name" class="leading-7 text-sm text-gray-600">
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									class="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								/>
							</div>
							<div class="relative mb-4">
								<label for="email" class="leading-7 text-sm text-gray-600">
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									class="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								/>
							</div>
							<div class="relative mb-4">
								<label for="message" class="leading-7 text-sm text-gray-600">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									class="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
								></textarea>
							</div>
							<button class="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
								Button
							</button>
							<p class="text-xs text-gray-500 mt-3">
								Chicharrones blog helvetica normcore iceland tousled brook viral
								artisan.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Contactus
