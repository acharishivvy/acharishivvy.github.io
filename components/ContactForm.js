import { useForm, ValidationError } from "@formspree/react";
import {
	Container,
	Flex,
	Box,
	Button,
	VStack,
	Wrap,
	WrapItem,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
	Textarea,
	Heading,
	Text,
} from "@chakra-ui/react";
import { MdEmail, MdPerson } from "react-icons/md";

export default function ContactForm() {
	const [state, handleSubmit] = useForm("xqkawgnb");

	if (state.succeeded) {
		return <p>Thanks for reaching out!</p>;
	}

	return (
		<Container maxW='full' maxH='full' centerContent overflow='hidden'>
			<form onSubmit={handleSubmit}>
				<Flex>
					<Box
						bg='#b07bac'
						color='white'
						borderRadius='sm'
						m={{ sm: 4, md: 16, lg: 10 }}
						p={{ sm: 5, md: 5, lg: 16 }}>
						<Box p={4}>
							<Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
								<WrapItem>
									<Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
										<Heading>Contact</Heading>
										<Text mt={{ sm: 3, md: 3, lg: 5 }} color='gray.500'>
											Fill up the form below to contact
										</Text>

										<Text mt={{ sm: 3, md: 3, lg: 5 }} color='gray.500'>
											You can grab my CV here.
										</Text>

										<Button
											colorScheme='teal'
											variant='outline'
											mt={{ sm: 3, md: 3, lg: 5 }}
											color='gray.500'>
											<a href='https://profile.indeed.com/p/shivneela-c0nm5h5'>
												Get CV (PDF)
											</a>
										</Button>
									</Box>
								</WrapItem>
								<WrapItem>
									<Box bg='white' borderRadius='lg'>
										<Box m={8} color='#0B0E3F'>
											<VStack spacing={5}>
												<FormControl id='name'>
													<FormLabel>Your Name</FormLabel>
													<InputGroup borderColor='#E0E1E7'>
														<InputLeftElement pointerEvents='none'>
															<MdPerson />
														</InputLeftElement>
														<Input type='text' size='md' />
													</InputGroup>
												</FormControl>
												<FormControl id='mail'>
													<FormLabel>Mail</FormLabel>
													<InputGroup borderColor='#E0E1E7'>
														<InputLeftElement pointerEvents='none'>
															<MdEmail />
														</InputLeftElement>
														<Input
															size='md'
															id='email'
															type='email'
															name='email'
														/>
													</InputGroup>
												</FormControl>
												<ValidationError
													prefix='Email'
													field='email'
													errors={state.errors}
												/>
												<FormControl id='message'>
													<FormLabel>Message</FormLabel>
													<Textarea
														borderColor='gray.300'
														_hover={{
															borderRadius: "gray.300",
														}}
														placeholder='Message...'
														id='message'
														name='message'
													/>
													<ValidationError
														prefix='Message'
														field='message'
														errors={state.errors}
													/>
												</FormControl>
												<FormControl id='name' float='right'>
													<Button
														type='submit'
														variant='solid'
														bg='#0D74FF'
														color='white'
														_hover={{}}
														disabled={state.submitting}>
														Send Message
													</Button>
													<ValidationError errors={state.errors} />
												</FormControl>
											</VStack>
										</Box>
									</Box>
								</WrapItem>
							</Wrap>
						</Box>
					</Box>
				</Flex>
			</form>
		</Container>
	);
}
