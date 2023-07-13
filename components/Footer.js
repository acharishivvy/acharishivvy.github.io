import {
	Box,
	chakra,
	Container,
	Stack,
	Center,
	useColorModeValue,
	VisuallyHidden,
} from "@chakra-ui/react";

const SocialButton = ({ children, label, href }) => {
	return (
		<chakra.button
			bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
			rounded={"full"}
			w={8}
			h={8}
			cursor={"pointer"}
			as={"a"}
			href={href}
			display={"inline-flex"}
			alignItems={"center"}
			justifyContent={"center"}
			transition={"background 0.3s ease"}
			_hover={{
				bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
			}}>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</chakra.button>
	);
};

export default function Footer() {
	return (
		<Center>
			<Box>
				<Container
					as={Stack}
					maxW={"6xl"}
					py={4}
					direction={{ base: "column", md: "row" }}
					spacing={4}
					justify={{ base: "center", md: "space-between" }}
					align={{ base: "center", md: "center" }}>
					<Center color='black'>
						Made by Shivneel Achari using NextJS and ChakraUI
					</Center>
					{/* <Stack direction={"row"} spacing={6}>
					<SocialButton label={"Twitter"} href={"#"} />
					<SocialButton label={"YouTube"} href={"#"} />
					<SocialButton label={"Instagram"} href={"#"} />
				</Stack> */}
				</Container>
			</Box>
		</Center>
	);
}
