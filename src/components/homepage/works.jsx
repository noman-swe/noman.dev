import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";
import { Link } from "react-router-dom";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<Link
							to={"https://luminouslabsbd.com/"}
							className="work"
						>
							<img
								src="/image/luminousLabs.png"
								alt="LuminousLabs"
								className="work-image"
							/>
							<p className="work-title">Luminous Labs</p>
							<div className="work-subtitle">
								Frontend Developer
							</div>
							<div className="work-duration">2024 - Present</div>
						</Link>

						<div className="work">
							<img
								src="/image/grap.png"
								alt="Grap View"
								className="work-image"
							/>
							<div className="work-title">Grap View</div>
							<div className="work-subtitle">
								Trainee Frontend Developer
							</div>
							<div className="work-duration">
								03/2022 - 10/2022
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
