import {
	Box,
	Heading,
	Container,
	Text,
	Stack,
	HStack,
	VStack,
	IconButton,
} from "@chakra-ui/react";
import { MailIcon } from "@chakra-ui/icons";
import styles from "../styles/Home.module.css";
import ContactModal from "../components/ContactModal";
import ProjectCard from "../components/ProjectCard";
import ProjectCarousel from "../components/ProjectCarousel";

export default function Home() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<Container maxW={"max-content"}>
					<Stack
						textAlign={"center"}
						spacing={{ base: 8, md: 14 }}
						py={{ base: 10, md: 16 }}>
						<Heading
							fontWeight={600}
							fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
							lineHeight={"110%"}
							fontFamily={"Fira Sans"}>
							Hi, I&apos;m
							<Text as={"span"} color={"#FF5D73"}>
								{" "}
								Shivneel.
							</Text>
						</Heading>
						{/* <Heading
							fontWeight={600}
							fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
							lineHeight={"110%"}
							fontFamily={"Fira Sans"}>
							<Text as={"span"} color={"#FF5D73"}>
								I Write Code.
							</Text>
						</Heading> */}
						<Text color={"#FF5D73"}></Text>
						<Box>
							<ContactModal />
						</Box>
					</Stack>
					<Stack>
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
