import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import info from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${info.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch: Ways to Connect with Me
						</div>

						<div className="subtitle contact-subtitle">
							Thank you for reaching out! I truly appreciate your
							interest and welcome your feedback, questions, and
							suggestions. If you have a specific question or
							comment, please feel free to email me directly at
							&nbsp;{" "}
							<a href={`mailto:${info?.main?.email}`}>
								{info?.main?.email}
							</a>.
 							I make it a priority to respond to all messages
							within 24 hours, though it may take a bit longer
							during busy times.
							<br />
							Alternatively, you can use the contact form on my
							website to get in touch. Simply fill out the
							required fields, and I'll get back to you as soon as
							possible. If you prefer to connect via social media,
							you can find me on LinkedIn at{" "}
							<a
								href={info?.socials?.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								@noman-swe
							</a>
							. I post regular updates and engage with my
							followers there, so feel free to reach out!
							<br />
							Thanks again for your interest, and I look forward
							to hearing from you!
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
