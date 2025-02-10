"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

function ContactForm() {
	const [state, handleSubmit] = useForm("xqkawgnb");
	if (state.succeeded) {
		return <p>Thanks for reaching out!</p>;
	}
	return (
		<form onSubmit={handleSubmit} className='space-y-8'>
			<div className='space-y-8'>
				<div className='border-b border-gray-900/10'>
					<p className='text-base/7 font-semibold text-gray-900 text-3xl font-semibold tracking-tight first:mt-0'>
						Let&apos;s Connect!
					</p>
				</div>

				<div className='sm:col-span-4'>
					<Label
						htmlFor='email'
						className='block text-sm/6 font-medium text-gray-900'>
						Email Address
					</Label>
					<div className='mt-2'>
						<div className='flex items-center rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600'>
							<Input
								id='email'
								type='email'
								name='email'
								placeholder='Email'
								className='block min-w-0 grow py-1.5 pr-3 pl-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6'
							/>
						</div>
						<ValidationError
							prefix='Email'
							field='email'
							errors={state.errors}
						/>
					</div>
				</div>
			</div>

			<div className='col-span-full'>
				<Label
					htmlFor='message'
					className='block text-sm/6 font-medium text-gray-900'>
					Message
				</Label>
				<div className='mt-2'>
					<Textarea
						id='message'
						name='message'
						rows={3}
						className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
						defaultValue={""}
					/>
					<ValidationError
						prefix='Message'
						field='message'
						errors={state.errors}
					/>
				</div>
			</div>
			<div className='mt-6 flex items-center justify-end gap-x-6'>
				<Button
					type='submit'
					className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
					disabled={state.submitting}>
					Submit
				</Button>
			</div>
		</form>
	);
}

function App() {
	return <ContactForm />;
}

export default App;
