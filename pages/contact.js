import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Heading,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	Link,
	Stack,
	Textarea,
	Tooltip,
	useClipboard,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";

export default function ContactForm() {
	const { hasCopied, onCopy } = useClipboard("acharishivvy@outlook.com");
	const [fullname, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	//   Form validation state
	const [errors, setErrors] = useState({});

	//   Setting button text on form submission
	const [buttonText, setButtonText] = useState("Send");

	// Setting success or failure messages states
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [showFailureMessage, setShowFailureMessage] = useState(false);

	// Validation check method
	const handleValidation = () => {
		let tempErrors = {};
		let isValid = true;

		if (fullname.length <= 0) {
			tempErrors["fullname"] = true;
			isValid = false;
		}
		if (email.length <= 0) {
			tempErrors["email"] = true;
			isValid = false;
		}
		if (message.length <= 0) {
			tempErrors["message"] = true;
			isValid = false;
		}

		setErrors({ ...tempErrors });
		console.log("errors", errors);
		return isValid;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		let isValidForm = handleValidation();

		if (isValidForm) {
			setButtonText("Sending");
			const res = await fetch("/api/sendgrid", {
				body: JSON.stringify({
					email: email,
					fullname: fullname,
					message: message,
				}),
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
			});

			const { error } = await res.json();
			if (error) {
				console.log(error);
				setShowSuccessMessage(false);
				setShowFailureMessage(true);
				setButtonText("Send");

				// Reset form fields
				setFullname("");
				setEmail("");
				setMessage("");
				return;
			}
			setShowSuccessMessage(true);
			setShowFailureMessage(false);
			setButtonText("Send");
			// Reset form fields
			setFullname("");
			setEmail("");
			setMessage("");
		}

		console.log(fullname, email, message);
	};

	return (
		<form
			bg={useColorModeValue("gray.100", "gray.900")}
			align='center'
			justify='center'
			id='contact'
			onSubmit={handleSubmit}>
			<Box
				borderRadius='lg'
				m={{ base: 5, md: 16, lg: 10 }}
				p={{ base: 5, lg: 16 }}>
				<Box>
					<VStack spacing={{ base: 4, md: 8, lg: 20 }}>
						<Heading
							fontSize={{
								base: "4xl",
								md: "5xl",
							}}>
							Get in Touch
						</Heading>

						<Stack
							spacing={{ base: 4, md: 8, lg: 20 }}
							direction={{ base: "column", md: "row" }}>
							<Stack
								align='center'
								justify='space-around'
								direction={{ base: "row", md: "column" }}>
								<Tooltip
									label={hasCopied ? "Email Copied!" : "Copy Email"}
									closeOnClick={false}
									hasArrow>
									<IconButton
										aria-label='email'
										variant='ghost'
										size='lg'
										fontSize='3xl'
										icon={<MdEmail />}
										_hover={{
											bg: "blue.500",
											color: useColorModeValue("white", "gray.700"),
										}}
										onClick={onCopy}
										isRound
									/>
								</Tooltip>

								<Link href='https://github.com/SaiyanShivvy'>
									<IconButton
										aria-label='github'
										variant='ghost'
										size='lg'
										fontSize='3xl'
										icon={<BsGithub />}
										_hover={{
											bg: "blue.500",
											color: useColorModeValue("white", "gray.700"),
										}}
										isRound
									/>
								</Link>

								<Link href='https://www.linkedin.com/in/shivneel-achari-188573170/'>
									<IconButton
										aria-label='linkedin'
										variant='ghost'
										size='lg'
										icon={<BsLinkedin size='28px' />}
										_hover={{
											bg: "blue.500",
											color: useColorModeValue("white", "gray.700"),
										}}
										isRound
									/>
								</Link>
							</Stack>

							<Box
								bg={useColorModeValue("white", "gray.700")}
								borderRadius='lg'
								p={8}
								color={useColorModeValue("gray.700", "whiteAlpha.900")}
								shadow='base'>
								<VStack spacing={5}>
									<FormControl isRequired>
										<FormLabel>Name</FormLabel>

										<InputGroup>
											<InputLeftElement>
												<BsPerson />
											</InputLeftElement>
											<Input
												type='text'
												name='name'
												placeholder='Your Name'
												onChange={(e) => {
													setFullname(e.target.value);
												}}
											/>
										</InputGroup>
									</FormControl>

									<FormControl isRequired>
										<FormLabel>Email</FormLabel>

										<InputGroup>
											<InputLeftElement>
												<MdOutlineEmail />
											</InputLeftElement>
											<Input
												type='email'
												name='email'
												placeholder='Your Email'
												onChange={(e) => {
													setEmail(e.target.value);
												}}
											/>
										</InputGroup>
									</FormControl>

									<FormControl isRequired>
										<FormLabel>Message</FormLabel>

										<Textarea
											name='message'
											placeholder='Your Message'
											rows={6}
											resize='none'
											onChange={(e) => {
												setMessage(e.target.value);
											}}
										/>
									</FormControl>

									<Button
										type='submit'
										colorScheme='blue'
										bg='blue.400'
										c
										color='white'
										_hover={{
											bg: "blue.500",
										}}
										isFullWidth>
										Send Message
									</Button>
								</VStack>
							</Box>
						</Stack>
					</VStack>
					<div className='text-center'>
						{showSuccessMessage && (
							<p className='text-green-500 font-semibold text-sm my-2'>
								Thankyou! Your Message has been delivered.
							</p>
						)}
						{showFailureMessage && (
							<p className='text-red-500'>
								Oops! Something went wrong, please try again.
							</p>
						)}
					</div>
				</Box>
			</Box>
		</form>
	);
}
