import {
	Box,
	Heading,
	Container,
	Text,
	Button,
	Stack,
	Icon,
	useColorModeValue,
	createIcon,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import styles from "../styles/Home.module.css";
import ContactForm from "./contact";

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
							Welcome to
							<Text as={"span"} color={"green.400"}>
								{" "}
								My Portfolio
							</Text>
						</Heading>
						<Text color={"gray.500"}>
							Upgrade is currently in progress from Jekyll to NextJS! Stay
							Tuned!
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
			<ContactForm id='Contact' />
		</div>
	);
}
