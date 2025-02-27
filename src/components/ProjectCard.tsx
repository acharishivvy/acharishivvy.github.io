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
			<CardHeader className='flex flex-col'>
				<div className='flex gap-3'>
					<div className='flex flex-col gap-4'>
						<h6 className='text-sm leading-none font-medium'>{title}</h6>
					</div>
				</div>
			</CardHeader>
			<CardContent className='aspect-square items-center p-4'>
				<div className='' />
				<Image
					src={imageUrl}
					alt={title}
					width={400}
					height={350}
					className='rounded-lg object-cover'
				/>
				<div className=''>
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
				</div>
			</CardContent>
			<CardFooter className=' py-2 px-2'>
				{githubLink && (
					<div className='justify-self-end p-4'>
						<a href={githubLink} target='_blank' rel='noopener noreferrer'>
							<Button variant='outline'>View on GitHub</Button>
						</a>
					</div>
				)}
			</CardFooter>
		</Card>
	);
}
