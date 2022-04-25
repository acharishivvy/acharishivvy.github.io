import ContactForm from "./ContactForm";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure,
} from "@chakra-ui/react";

export default function ContactModal() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Button onClick={onOpen} variant='ghost' colorScheme='teal'>
				Contact Me
			</Button>

			<Modal isOpen={isOpen} onClose={onClose} size='5xl' isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton />
					<ModalBody>
						<ContactForm />
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}
