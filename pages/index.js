import {
	Box,
	Heading,
	Container,
	Stack,
	VStack,
	Button,
} from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import ProjectCard from "../components/ProjectCard";
import ContactModal from "../components/ContactModal";
import HeroTitle from "../components/HeroTitle";
import { VscGithub } from "react-icons/vsc";

export default function Home() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<Container maxW={"max-content"}>
					<Stack>
						<HeroTitle />
						<Box textAlign={"center"}>
							<Heading color={"#FF5D73"} fontFamily={"Fira Sans"}>
								Projects
							</Heading>
						</Box>
						<VStack>
							<Box w={"full"}>{/* <ProjectCarousel /> */}</Box>
							<Box w={"full"}>
								<ProjectCard
									image='pkdex.png'
									title='Pokedex'
									desc='Made with React, Tailwind & PokeAPI'
									url='https://github.com/SaiyanShivvy/tw-react-dex'
								/>
							</Box>
							<Box w={"full"}>
								<ProjectCard
									image='libgdx.gif'
									title='Android Platformer'
									desc='Made using LibGDX & Java'
									url='https://github.com/SaiyanShivvy/libgdx-platformer'
								/>
							</Box>
						</VStack>
						<VStack>
							<Box w={"full"}>
								<ProjectCard
									image='sfmlsnake.gif'
									title='Snake Game'
									desc='Made using SFML & C/C++'
									url='https://github.com/SaiyanShivvy/sfml-snake-game'
								/>
							</Box>
							<Box w={"full"}>
								<ProjectCard
									image='ViewForm1.jpg'
									title='Pseudo-GPS'
									desc='Made using C# MVC'
									url='https://github.com/SaiyanShivvy/htmlSnake'
								/>
							</Box>
						</VStack>
						<VStack>
							<Box w={"full"}>
								<ProjectCard
									image='phpqs.png'
									title='Quality Souvenirs - E-Commerce Website'
									desc='Made using C# ASP.NET Core MVC'
									url='https://github.com/SaiyanShivvy/Quality-Souvenirs'
								/>
							</Box>
							<Box w={"full"}>
								<ProjectCard
									image='phpqs.png'
									title='Quality Souvenirs - E-Commerce Website (Alt)'
									desc='Made using PHP & Laravel'
									url='https://github.com/SaiyanShivvy/phpQS'
								/>
							</Box>
						</VStack>
					</Stack>
				</Container>
			</main>
		</div>
	);
}
