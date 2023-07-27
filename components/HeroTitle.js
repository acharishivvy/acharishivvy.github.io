import {
	Container,
	Stack,
	Flex,
	Heading,
	Text,
	Button,
	Link,
} from "@chakra-ui/react";
import ContactModal from "./ContactModal";
import { VscGithub } from "react-icons/vsc";

export default function HeroTitle() {
	return (
		<Container maxW={"7xl"}>
			<Stack
				align={"center"}
				spacing={{ base: 8, md: 10 }}
				py={{ base: 20, md: 28 }}
				direction={{ base: "column", md: "row" }}>
				<Stack flex={1} spacing={{ base: 5, md: 10 }}>
					<Heading
						lineHeight={1.1}
						fontWeight={600}
						fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
						<Text
							as={"span"}
							position={"relative"}
							_after={{
								content: "''",
								width: "full",
								height: "30%",
								position: "absolute",
								bottom: 1,
								left: 0,
								bg: "red.400",
								zIndex: -1,
							}}>
							Hi I`&apos;`m,
						</Text>
						<br />
						<Text as={"span"} color={"red.400"}>
							Shivneel!
						</Text>
					</Heading>
					<Text color={"gray.500"}>
						I`&apos;`m a Computer Systems and Information Graduate from Unitec,
						with a focus on Software Development. I mostly work on Web
						Development but I`&apos;`m looking to branch into Mobile
						Development.
						<br /> <br />
						This is where I share what I`&apos;`ve worked on and have learned.
					</Text>
					<Stack
						spacing={{ base: 4, sm: 6 }}
						direction={{ base: "column", sm: "row" }}>
						<Button
							rounded={"full"}
							size={"lg"}
							fontWeight={"bold"}
							px={6}
							colorScheme={"red"}
							bg={"red.400"}
							_hover={{ bg: "red.500" }}
							leftIcon={<VscGithub />}>
							<a target='_blank' href='https://www.github.com/saiyanshivvy'>
								{" "}
								<span> Github </span>{" "}
							</a>
						</Button>
						<Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6}>
							<ContactModal />
						</Button>
					</Stack>
				</Stack>
				<Flex
					flex={1}
					justify={"center"}
					align={"center"}
					position={"relative"}
					w={"full"}></Flex>
			</Stack>
		</Container>
	);
}
