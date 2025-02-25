"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import Image from "next/image";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
	CardFooter,
	CardContent,
} from "./ui/card";
import { Label } from "./ui/label";
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
		<Card className='w-full max-w-lg shadow-none'>
			<CardHeader className='flex flex-col py-2'>
				<div className='flex gap-3'>
					<div className='flex flex-col gap-4'>
						<h6 className='text-sm leading-none font-medium'>{title}</h6>
					</div>
				</div>
			</CardHeader>
			<CardContent className='p-0'>
				<div className='relative border-y' />
				<Image
					src={imageUrl}
					alt={title}
					width={400}
					height={350}
					className='mt-4 rounded-lg object-cover'
				/>
				<div className='pt-3 pb-4 px-6'>
					<h2 className='font-semibold'>Description</h2>
					<p className='mt-1 text-sm text-muted-foreground'>{description}</p>
				</div>
			</CardContent>
			<CardFooter className=' py-2 px-2'>
				{technologies && (
					<div>
						<h3 className='text-sm font-semibold'>Technologies Used:</h3>
						<ul className='mt-1 space-y-1'>
							{technologies.map((tech, index) => (
								<Label key={index} className='w-full text-muted-foreground'>
									{tech}
								</Label>
							))}
						</ul>
					</div>
				)}

				{githubLink && (
					<a href={githubLink} target='_blank' rel='noopener noreferrer'>
						<Button variant='outline'>View on GitHub</Button>
					</a>
				)}
			</CardFooter>
		</Card>
	);
}
