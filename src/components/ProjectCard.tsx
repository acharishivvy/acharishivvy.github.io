"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
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
		<Card className='m-4'>
			<Image
				src={imageUrl}
				alt={title}
				width={200}
				height={150}
				className='mr-4'
			/>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>

			{technologies && (
				<div className='mt-2'>
					<h3>Technologies Used:</h3>
					<ul>
						{technologies.map((tech, index) => (
							<Label key={index}>{tech}</Label>
						))}
					</ul>
				</div>
			)}

			{githubLink && (
				<Dialog>
					<a href={githubLink} target='_blank' rel='noopener noreferrer'>
						<Button variant='outline'>View on GitHub</Button>
					</a>
				</Dialog>
			)}
		</Card>
	);
}
