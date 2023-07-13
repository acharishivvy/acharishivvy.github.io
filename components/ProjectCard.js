import {
	Box,
	Center,
	useColorModeValue,
	Heading,
	Text,
	Stack,
	Image,
	Badge,
} from "@chakra-ui/react";

export default function ProjectCard(prop) {
	return (
		<Center py={12}>
			<Box
				role={"group"}
				p={6}
				maxW={"330px"}
				w={"full"}
				bg={useColorModeValue("white", "gray.800")}
				boxShadow={"2xl"}
				rounded={"lg"}
				pos={"relative"}>
				<Box
					rounded={"lg"}
					mt={-12}
					pos={"relative"}
					height={"230px"}
					_after={{
						transition: "all .3s ease",
						content: '""',
						w: "full",
						h: "full",
						pos: "absolute",
						top: 5,
						left: 0,
						filter: "blur(15px)",
						zIndex: -1,
					}}
					_groupHover={{
						_after: {
							filter: "blur(20px)",
						},
					}}>
					<Image
						rounded={"lg"}
						height={230}
						width={282}
						objectFit={"cover"}
						src={`${prop.image}`}
						alt={"alt"}
					/>
				</Box>
				<Stack pt={10} align={"center"}>
					<Text fontWeight={800} fontSize={"xl"}>
						{`${prop.title}`}
					</Text>
					<a href={prop.url} target='_blank' rel='noreferrer'>
						<Badge variant='outline'>View on Github</Badge>
					</a>
					<Heading
						fontSize={"2xl"}
						fontFamily={"body"}
						fontWeight={500}></Heading>
					<Stack direction={"row"} align={"center"}>
						<Text
							color={"gray.500"}
							fontSize={"sm"}
							textTransform={"uppercase"}>{`${prop.desc}`}</Text>
					</Stack>
				</Stack>
			</Box>
		</Center>
	);
}
