"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "./ui/card";

interface ProjectProps {
	id: number;
	title?: string;
	description?: string;
	technologies?: string[];
	githubLink?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
	id,
	title,
	description,
	technologies,
	githubLink,
}) => {
	return (
		<div className='p-1'>
			<Card>
				<CardContent className='flex items-center justify-between p-6'>
					<span className='text-3xl font-semibold'>{id}</span>
					{title && (
						<>
							<h2 className='font-bold text-lg'>{title}</h2>
							<Button variant='outline' size='sm'>
								More Info
							</Button>
						</>
					)}
				</CardContent>

				<Dialog>
					<DialogContent className='max-w-[80%]'>
						<DialogHeader>
							<DialogTitle>{title}</DialogTitle>
							{description && (
								<DialogDescription>{description}</DialogDescription>
							)}
							{technologies && (
								<div>
									<h3>Technologies Used:</h3>
									<ul>
										{technologies.map((tech, index) => (
											<li key={index}>{tech}</li>
										))}
									</ul>
								</div>
							)}
							{githubLink && (
								<>
									<a
										href={githubLink}
										target='_blank'
										rel='noopener noreferrer'>
										<Button variant='outline'>View on GitHub</Button>
									</a>
									<DialogTrigger asChild>
										<span className='ml-4 text-sm'>(or visit directly)</span>
									</DialogTrigger>
								</>
							)}
						</DialogHeader>
					</DialogContent>
				</Dialog>
			</Card>
		</div>
	);
};

export default ProjectCard;
