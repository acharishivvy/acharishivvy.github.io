import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import { VerticalProjectCarousel } from "@/components/ProjectCarousel";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Home() {
	return (
		<div className='grid grid-rows items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] w-full'>
			<main className='flex flex-col items-center sm:items-start max-w-screen-lg mx-auto w-full'>
				<HeroSection />

				<div className='flex gap-4 items-center flex-col sm:flex-row w-full'>
					<a
						className='rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full'
						href='https://github.com/acharishivvy'
						target='_blank'
						rel='noopener noreferrer'>
						<FaGithub /> Github
					</a>
					<a
						className='rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full'
						href='www.linkedin.com/in/shivneel-achari-188573170'
						target='_blank'
						rel='noopener noreferrer'>
						<FaLinkedin /> LinkedIn
					</a>
					<a
						className='rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full'
						href='mailto:acharishivvy@outlook.com'
						target='_blank'
						rel='noopener noreferrer'>
						<IoMail />
						Contact
					</a>
				</div>
				<div className='flex flex-row py-4 px-4 justify-between w-full gap-4'>
					<div className='basis-2/3'>
						<VerticalProjectCarousel />
					</div>
					<div className='basis-1/3'>
						<ContactForm />
					</div>
				</div>
			</main>
			<footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center w-full'>
				<p>Made by Shivneel Achari using Next.js, Tailwind CSS and Shadcn.</p>
			</footer>
		</div>
	);
}
