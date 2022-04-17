import {
	Box,
	Flex,
	Link,
	Button,
	useColorModeValue,
	Stack,
	useColorMode,
	HStack,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const NavLink = ({ children }) => (
	<Link
		px={2}
		py={1}
		rounded={"md"}
		_hover={{
			textDecoration: "none",
			bg: useColorModeValue("gray.200", "gray.700"),
		}}
		href={`${children}`.toLowerCase()}>
		{children}
	</Link>
);

const Links = ["Home", "Projects", "Contact"];

export default function Nav() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<>
			<Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
				<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
					<Box>Shivneel Achari</Box>

					<HStack spacing={8} alignItems={"center"}>
						<HStack
							as={"nav"}
							spacing={4}
							display={{ base: "none", md: "flex" }}>
							{Links.map((link) => (
								<NavLink key={link}>{link}</NavLink>
							))}
						</HStack>
					</HStack>

					<Flex alignItems={"center"}>
						<Stack direction={"row"} spacing={7}>
							<Button onClick={toggleColorMode}>
								{colorMode === "light" ? <MoonIcon /> : <SunIcon />}
							</Button>
						</Stack>
						<Box> </Box>
					</Flex>
				</Flex>
			</Box>
		</>
	);
}
