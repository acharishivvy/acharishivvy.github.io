export default function HeroSection() {
	return (
		<>
			{/* Hero */}
			<div className='relative overflow-hidden py-24 lg:py-32 w-full'>
				{/* Gradients */}
				<div
					aria-hidden='true'
					className='flex absolute -top-96 start-1/2 transform -translate-x-1/2'>
					<div className='bg-gradient-to-r from-background/50 to-background blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]' />
					<div className='bg-gradient-to-tl blur-3xl w-full h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-primary-foreground via-primary-foreground to-background' />
				</div>
				{/* End Gradients */}
				<div className='relative z-10'>
					<div className='max-w-screen-md mx-auto text-center'>
						{/* <p className=''>Test Text</p> */}
						{/* Title */}
						<div className='mt-5 max-w-screen-md'>
							<h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
								Hi, I&apos;m Shivneel
							</h1>
						</div>
						{/* End Title */}
						<div className='mt-5 max-w-screen-md'>
							<p className='text-xl text-muted-foreground'>
								Bachelor&apos;s Degreee in Information & Computer Systems
								(Computer Science), specializing in Software Development. My
								primary focus has been Web Development using ReactJS, but I am
								passionate about expanding my skills into other fields. I am
								currently learning about Mobile Development, using React Native
								as well as A.I Development. While I have experience in formal
								work experience with IT Support roles, I&apos;ve also developed
								several personal web projects that have honed my technical
								abilities.
							</p>
							<br />
							<p className='text-xl text-muted-foreground'>
								On this page, you&apos;ll find a showcase of the some work
								I&apos;ve completed.
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* End Hero */}
		</>
	);
}
