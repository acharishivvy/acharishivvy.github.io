<Box
	role={"group"}
	p={6}
	maxW={"330px"}
	bg='#3D9895'
	boxShadow={"2xl"}
	rounded={"lg"}
	pos={"relative"}>
	<Box
		rounded={"lg"}
		height={"250px"}
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
			max-height='fit-content(20em)'
			rounded={"lg"}
			objectFit={"contain"}
			src={`${prop.image}`}
			alt={"alt"}
		/>
	</Box>
	<Stack pt={10} align={"center"}>
		<Text fontWeight={800} fontSize={"xl"}>
			{`${prop.title}`}
		</Text>
		<a href={prop.url} target='_blank' rel='noreferrer'>
			<Badge variant='outline' color={"#494949"}>
				View on Github
			</Badge>
		</a>
		<Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}></Heading>
		<Stack direction={"row"} align={"center"}>
			<Text
				color={"#494949"}
				fontSize={"md"}
				fontWeight={500}
				textTransform={"uppercase"}>{`${prop.desc}`}</Text>
		</Stack>
	</Stack>
</Box>;
