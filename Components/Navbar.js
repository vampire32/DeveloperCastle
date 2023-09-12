"use client"
import React, { useState } from "react";

import Image from "next/image";
import Logo from '../assets/logo.png'
import Link from "next/link";

const Navbar = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};
	return (
		<div>
			<nav class="navbar navbar-expand-lg ">
				<div class="container-fluid">
					<a class="navbar-brand text-white" href="#">
						<Image
							src={Logo}
							alt="Logo"
							width={30}
							height={24}
							class="d-inline-block align-text-top"
						/>
						<span className="ml-3">Developer Castle</span>
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div
						class=" navbar-collapse justify-center"
						id="navbarSupportedContent"
					>
						<ul class="navbar-nav ">
							<li class="nav-item">
								<a class="nav-link active text-white" aria-current="page">
									<Link href="/">Home</Link>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link text-white">
									<Link href="/Services">Services</Link>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link text-white">
									<Link href="/About">About</Link>
								</a>
							</li>

							<li class="nav-item">
								<a class="nav-link  text-white" aria-disabled="true">
									<Link href="/Contactus"> Contact</Link>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
