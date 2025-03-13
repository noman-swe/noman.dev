import React from "react";

function article_1() {
	return {
		date: "5 Nov 2023",
		title: "The Benefits of Cloud Computing",
		description:
			"Cloud computing offers numerous benefits, making it an essential technology for businesses and individuals. It is cost-efficient, eliminating the need for expensive hardware and maintenance. Scalability allows users to adjust resources based on demand, ensuring flexibility. With cloud accessibility, data and applications can be accessed from anywhere with an internet connection. Security is enhanced through advanced encryption and regular backups, protecting sensitive information. Cloud services also promote collaboration by enabling real-time file sharing and communication. Additionally, automatic updates ensure that software and security patches are seamlessly managed, reducing the risk of vulnerabilities.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Cloud Computing",
			"Cloud Computing",
			"Cloud Computing",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 Nov 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"Artificial Intelligence is transforming healthcare by improving diagnosis, treatment, and overall efficiency. AI enables early disease detection, especially in conditions like cancer, through advanced data analysis. It personalizes treatment plans based on patient history, ensuring better medical outcomes. In medical imaging, AI enhances the accuracy of X-ray, MRI, and CT scan interpretations. Virtual assistants and chatbots help patients with medical inquiries and appointment scheduling. AI also accelerates drug discovery by analyzing vast datasets to identify potential treatments. Additionally, it automates administrative tasks such as medical record management and billing, reducing workload and improving efficiency in healthcare systems.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"AI Healthcare",
			"AI Healthcare",
			"AI Healthcare",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 2</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
