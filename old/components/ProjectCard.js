import {
	Card,
	CardBody,
	CardFooter,
	Image,
	Stack,
	Button,
	Heading,
	Text,
	Box,
	Spacer,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function ProjectCard(prop) {
	return (
		<Card
			direction={{ base: "column", sm: "row" }}
			overflow={"hidden"}
			variant={"outline"}
			boxShadow={"2xl"}
			w={"full"}>
			<Image
				objectFit={"cover"}
				maxW={{ base: "100%", sm: "200px" }}
				src={`${prop.image}`}
				alt={`${prop.title}`}
			/>
			<Stack>
				<CardBody>
					<Heading
						as='h3'
						size='lg'
						mb={4}
						color={"#494949"}
						letterSpacing='wide'>{`${prop.title}`}</Heading>
					<Spacer></Spacer>
					<Text
						as='cite'
						fontSize='md'
						py='2'
						lineHeight='normal'
						fontWeight='semibold'>{`${prop.desc}`}</Text>
				</CardBody>
				<CardFooter>
					<Box boxSize='2.5em'>
						<Image src='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png' />
					</Box>
					<a href={prop.url} target='_blank' rel='noreferrer'>
						<Button colorScheme='blue' variant='outline'>
							View on Github
						</Button>
					</a>
				</CardFooter>
			</Stack>
		</Card>
	);
}
