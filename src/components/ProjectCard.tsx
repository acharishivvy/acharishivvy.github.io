"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardHeader, CardFooter, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
export default function ProjectCard({
	title,
	description,
	technologies = [],
	githubLink,
	imageUrl,
}: {
	id: number;
	title: string;
	description: string;
	technologies?: string[];
	githubLink?: string;
	imageUrl: string;
}) {
	return (
		<Card className='w-full shadow-none'>
			<CardHeader className='flex flex-col items-center'>
				<h6 className='font-bold text-lg leading-tight'>{title}</h6>
			</CardHeader>
			<CardContent className='p-4'>
				<div className='relative mb-4 w-full h-auto'>
					<Image
						src={imageUrl}
						alt={title}
						width={400} // Set a fixed width or use layout="responsive"
						height={350} // Set a fixed height or use layout="responsive"
						className='rounded-lg object-cover w-full'
					/>
				</div>
				<h2 className='font-semibold'>Description</h2>
				<p className='mt-1 text-sm text-muted-foreground'>{description}</p>
				<br />
				{technologies && (
					<div>
						<h3 className='text-sm font-semibold'>Technologies Used:</h3>
						<ul className='mt-1 space-y-1'>
							{technologies.map((tech, index) => (
								<Badge variant='outline' key={index}>
									{tech}
								</Badge>
							))}
						</ul>
					</div>
				)}
			</CardContent>
			<CardFooter className='py-2 px-4'>
				<div className='flex justify-end w-full'>
					{githubLink && (
						<a href={githubLink} target='_blank' rel='noopener noreferrer'>
							<Button variant='outline'>View on GitHub</Button>
						</a>
					)}
				</div>
			</CardFooter>
		</Card>
	);
}
