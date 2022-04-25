import { Box, Heading, Container, Text, Stack } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import ContactModal from "../components/ContactModal";

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
						<Box className={styles.grid}>
							<a id='1' className={styles.card}>
								<h2>1</h2>
								<p>Text Here!</p>
							</a>
							<a id='2' className={styles.card}>
								<h2>2</h2>
								<p>Text Here!</p>
							</a>
						</Box>
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
