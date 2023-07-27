import {
	Box,
	chakra,
	Container,
	Stack,
	Text,
	useColorModeValue,
	VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";

export default function SmallWithSocial() {
	return (
		<Box
		// bg={useColorModeValue("gray.50", "gray.900")}
		// color={useColorModeValue("gray.700", "gray.200")}
		>
			<Container
				as={Stack}
				maxW={"6xl"}
				py={4}
				direction={{ base: "column", md: "row" }}
				spacing={4}
				justify={{ base: "center", md: "space-between" }}
				align={{ base: "center", md: "center" }}>
				<Text fontWeight={500}></Text>
				<Text fontWeight={500}>
					{" "}
					Made by Shivneel Achari, using Next.JS and ChakraUI
				</Text>
				<Text fontWeight={500}></Text>
			</Container>
		</Box>
	);
}
