// ProjectCarousel.tsx
import * as React from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import ProjectCard from "./ProjectCard";

export function VerticalProjectCarousel() {
	const projects = [
		{
			id: 1,
			title: "Pokedex",
			description:
				"This is another brief description. It provides an overview of what the project does.",
			technologies: ["React", "Vite", "TailwindCSS", "Shadcn"],
			githubLink: "https://github.com/acharishivvy/tw-react-dex",
			liveLink: "https://neo-tw-react-dex.vercel.app/",
			imageUrl: "reactdex.png",
		},
		{
			id: 2,
			title: "Android Platformer",
			description:
				"I tried to create a simple platformer game using libGDX that could be run on android. The Project is incomplete.",
			technologies: ["libGDX 1.9.8", "Java"],
			githubLink: "https://github.com/acharishivvy/libgdx-platformer",
			imageUrl: "libgdx.gif",
		},
		{
			id: 3,
			title: "Snake Game",
			description:
				"The aim of the project is to recreate the classic snake game using C++ and SFML, with the ability to add another player. The Snake is controlled using WSAD (or Directional Keys). Collect Apple (Red Squares) to grow your snake. Eating yourself ends the game.",
			technologies: ["C++", "C", "SFML"],
			githubLink: "https://github.com/acharishivvy/sfml-snake-game",
			imageUrl: "sfmlsnake.gif",
		},
		{
			id: 4,
			title: "Pseudo - GPS",
			description:
				"This project is meant to demonstrate the use of Super, Base Classes and various ViewForm Elements. It is done in the form of a simple GPS where the user is able to add a 'object' to the 'map' by inputting various types of data including Building Type, Location, Rating.",
			technologies: ["C#"],
			githubLink: "https://github.com/acharishivvy/Pseudo-GPS",
			imageUrl: "phpqs.png",
		},
		{
			id: 5,
			title: "Quality Souvenirs - E-Commerce Website (C#)",
			description:
				"Simple E-Commerce Website using C# ASP.NET Core and the MVC Architecture. The User's are able to a register, add to cart and checkout items from the store. There are are also predefined admin user's that are able to create, update or delete item listing. They can also check and manage user order's.",
			technologies: ["C#", "ASP.NET MVC", "ASP.NET Core"],
			githubLink: "https://github.com/acharishivvy/Quality-Souvenirs",
			imageUrl: "phpqs.png",
		},
		{
			id: 6,
			title: "Quality Souvenirs - E-Commerce Website (PHP)",
			description:
				"The task was to re-create the C# E-Commerce Website by using PHP and Laravel instead.",
			technologies: ["Laravel 5.2.0", "Composer for PHP", "Node.js", "XAMPP"],
			githubLink: "https://github.com/acharishivvy/phpQS",
			imageUrl: "ViewForm1.jpg",
		},
	];

	return (
			<Carousel className='max-w-4xl'>
				<CarouselContent>
					{projects.map((project) => (
						<CarouselItem key={project.id} className="p-1">
							<ProjectCard {...project} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="" />
				<CarouselNext className="" />
			</Carousel>
	);
}
