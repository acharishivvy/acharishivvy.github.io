import { Box, Heading, Container, Text, Stack } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import ContactForm from "../Components/contactForm";

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
					</Stack>
				</Container>

				<div className={styles.grid}>
					<a id='Projects' className={styles.card}>
						<h2>Projects</h2>
						<p>Take a look at some things I&apos;ve worked on!</p>
					</a>
				</div>
			</main>
			<div>
				<ContactForm />
			</div>
		</div>
	);
}
