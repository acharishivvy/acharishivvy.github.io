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
								{" "}
								Shivneel
							</Text>
						</Heading>
						<Text color={"gray.500"}>
							Promotions Support Analyst and Developer at Solutionists Ltd.
							Bachelor of Computer System Graduate.
						</Text>
						<Heading color={"red.500"}>
							Currently Under Construction. <br /> Check back soon!
						</Heading>
					</Stack>
					<Stack as={Box} textAlign={"center"}>
						<HStack>
							<Box className={styles.grid}>
								<a id='reactDex' className={styles.card}>
									<h2>Simple Pokedex</h2>
									<p>Made with React, Tailwind & PokeAPI</p>
								</a>
								<a id='sfmlSnake' className={styles.card}>
									<h2>Snake Game</h2>
									<p>Made using SFML & C/C++</p>
								</a>
							</Box>
						</HStack>
						<HStack>
							<Box className={styles.grid}>
								<a id='htmlSnake' className={styles.card}>
									<h2>Snake Game</h2>
									<p>Made with HTML & JS</p>
								</a>
								<a id='libgdxPF' className={styles.card}>
									<h2>Android Platformer</h2>
									<p>Made using LibGDX & Java</p>
								</a>
							</Box>
						</HStack>
						<HStack>
							<Box className={styles.grid}>
								<a id='netQS' className={styles.card}>
									<h2>Quality Souvenirs - E-Commerce Website</h2>
									<p>Made using C# ASP.NET Core MVC</p>
								</a>
								<a id='phpQS' className={styles.card}>
									<h2>Quality Souvenirs - E-Commerce Website (Remake)</h2>
									<p>Made using PHP & Blade</p>
								</a>
							</Box>
						</HStack>
						<ProjectCard />
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
