import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import { VerticalProjectCarousel } from "@/components/ProjectCarousel";
import Image from "next/image";

export default function Home() {
	return (
		<div className='grid grid-rows items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] w-full'>
			<main className='flex flex-col items-center sm:items-start max-w-screen-lg mx-auto w-full'>
				<HeroSection />

				<div className='flex gap-4 items-center flex-col sm:flex-row w-full'>
					<a
						className='rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full'
						href=''
						target='_blank'
						rel='noopener noreferrer'>
						<Image
							className='dark:invert'
							src='/vercel.svg'
							alt='Vercel logomark'
							width={20}
							height={20}
						/>
						Github
					</a>
					<a
						className='rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full'
						href=''
						target='_blank'
						rel='noopener noreferrer'>
						<Image
							className='dark:invert'
							src='/vercel.svg'
							alt='Vercel logomark'
							width={20}
							height={20}
						/>
						LinkedIn
					</a>
					<a
						className='rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full'
						href=''
						target='_blank'
						rel='noopener noreferrer'>
						<Image
							className='dark:invert'
							src='/vercel.svg'
							alt='Vercel logomark'
							width={20}
							height={20}
						/>
						Contact
					</a>
				</div>
				<div className='flex gap-4 items-center flex-col sm:flex-row w-full h-[400px]'>
					<VerticalProjectCarousel />
				</div>
				<div className='flex gap-4 items-center flex-col sm:flex-row w-full h-[400px]'>
					<ContactForm />
				</div>
			</main>
			<footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center w-full'>
				<a
					className='flex items-center gap-2 hover:underline hover:underline-offset-4'
					href=''
					target='_blank'
					rel='noopener noreferrer'>
					<Image
						aria-hidden='true'
						src='/file.svg'
						alt='File icon'
						width={16}
						height={16}
					/>
					Learn
				</a>
				<a
					className='flex items-center gap-2 hover:underline hover:underline-offset-4'
					href=''
					target='_blank'
					rel='noopener noreferrer'>
					<Image
						aria-hidden='true'
						src='/window.svg'
						alt='Window icon'
						width={16}
						height={16}
					/>
					Examples
				</a>
				<a
					className='flex items-center gap-2 hover:underline hover:underline-offset-4'
					href=''
					target='_blank'
					rel='noopener noreferrer'>
					<Image
						aria-hidden='true'
						src='/globe.svg'
						alt='Globe icon'
						width={16}
						height={16}
					/>
					Go to nextjs.org →
				</a>
			</footer>
		</div>
	);
}

