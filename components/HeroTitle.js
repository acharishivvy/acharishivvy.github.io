import {
	Container,
	Stack,
	Flex,
	Heading,
	Text,
	Button,
	Box,
} from "@chakra-ui/react";
import ContactModal from "../components/ContactModal";
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
							Hi, I&apos;m
						</Text>
						<br />
						<Text as={"span"} color={"red.400"}>
							Shivneel!
						</Text>
					</Heading>
					<Text color={"gray.500"}>
						I&apos;m a Computer Systems and Information Graduate from Unitec,
						with a focus on Software Development. I mostly work on Web
						Development but I&apos;m looking to branch into Mobile Development.
						<br /> <br />
						This is where I share what I&apos;ve worked on and have learned.
					</Text>
					<Stack
						spacing={{ base: 4, sm: 6 }}
						direction={{ base: "column", sm: "row" }}>
						<Text as='button' fontWeight={600}>
							{" "}
							Socials and Contact:{" "}
						</Text>
						<Box as='button' boxSize='5em'>
							<a
								href='https://github.com/SaiyanShivvy/'
								target='_blank'
								rel='noreferrer'>
								<img src='https://imgs.search.brave.com/XikLXqKz4_tQ8NZisVBhxTVsLu9MMvcXJsYzXJGiPlg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9HaXRIdWIv/R2l0SHViLVdvcmRt/YXJrLUxvZ28ud2lu/ZS5zdmc.svg' />
							</a>
						</Box>
						<Box boxSize='5em' as='button'>
							<a
								href='https://www.linkedin.com/in/shivneel-achari-188573170/'
								target='_blank'
								rel='noreferrer'>
								<img src='https://imgs.search.brave.com/bi3Z0OVytL_FlfY8sL5AreYJMmzFVnlAm1xZSFiswQ0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wcm9p/bmZsdWVudC5iLWNk/bi5uZXQvd3AtY29u/dGVudC91cGxvYWRz/LzIwMTkvMDUvTG9n/by1MaW5rZWRJbi1v/ZmZpY2llbC5wbmc' />
							</a>
						</Box>

						<Box boxSize='5em' as='button'>
							<a
								href='https://profile.indeed.com/p/shivneela-c0nm5h5'
								target='_blank'
								rel='noreferrer'>
								<img src='https://imgs.search.brave.com/1orYgjW1RxZUtANRhaMMMjtbCQ3NMT_aV1hFLuwHieU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzAx/L0luZGVlZC1sb2dv/LTUwMHgyODEucG5n' />
							</a>
						</Box>
						<Box boxSize='5em' as='button'>
							<ContactModal />
						</Box>
					</Stack>
				</Stack>
			</Stack>
		</Container>
	);
}
