import { Box, Heading, Container, Text, Stack, HStack } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import ContactModal from "../components/ContactModal";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<Container maxW={"3xl"}>
					<Stack
						as={Box}
						textAlign={"center"}
						spacing={{ base: 8, md: 14 }}
						py={{ base: 20, md: 36 }}>
						<Heading
							fontWeight={600}
							fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
							lineHeight={"110%"}>
							Hi, I&apos;m
							<Text as={"span"} color={"green.400"}>
								Shivneel
							</Text>
						</Heading>
						<Text color={"gray.500"}>
							I write code and stuff...
							<br />
							Take a look at some of the projects I&apos;ve done!
						</Text>
					</Stack>
					<Stack as={Box} textAlign={"center"}>
						<Heading color={"teal.500"}>Projects</Heading>
						<HStack>
							<Box className={styles.grid}>
								<ProjectCard
									image='pkdex.png'
									title='Pokedex'
									desc='Made with React, Tailwind & PokeAPI'
									url='https://github.com/SaiyanShivvy/tw-react-dex'
								/>
								<ProjectCard
									image='libgdx.gif'
									title='Android Platformer'
									desc='Made using LibGDX & Java'
									url='https://github.com/SaiyanShivvy/libgdx-platformer'
								/>
							</Box>
						</HStack>
						<HStack>
							<Box className={styles.grid}>
								<ProjectCard
									image='sfmlsnake.gif'
									title='Snake Game'
									desc='Made using SFML & C/C++'
									url='https://github.com/SaiyanShivvy/sfml-snake-game'
								/>
								<ProjectCard
									image='ViewForm1.jpg'
									title='Pseudo-GPS'
									desc='Made using C# MVC'
									url='https://github.com/SaiyanShivvy/htmlSnake'
								/>
							</Box>
						</HStack>
						<HStack>
							<Box className={styles.grid}>
								<ProjectCard
									image='phpqs.png'
									title='Quality Souvenirs - E-Commerce Website'
									desc='Made using C# ASP.NET Core MVC'
									url='https://github.com/SaiyanShivvy/Quality-Souvenirs'
								/>
								<ProjectCard
									image='phpqs.png'
									title='Quality Souvenirs - E-Commerce Website (Alt)'
									desc='Made using PHP & Laravel'
									url='https://github.com/SaiyanShivvy/phpQS'
								/>
							</Box>
						</HStack>
					</Stack>
					<Stack as={Box} textAlign={"center"}>
						<div>
							<ContactModal />
						</div>
					</Stack>
				</Container>
			</main>
		</div>
	);
}
