'use client';
import { X } from 'lucide-react';
import { FC } from 'react';

type IModal = {
	open: boolean;
	setOpen: (state: boolean) => void;
};

export const Modal: FC<IModal> = ({ open, setOpen }) => {
	return (
		<div className={`relative z-10 open-nav ${open ? 'block' : 'hidden'}`}>
			<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>

			<div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
				<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
					<div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
						<div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
							<div className='flex justify-end mb-2'>
								<X
									className='cursor-pointer'
									onClick={() => setOpen(false)}
								/>
							</div>
							<textarea
								name='tweet'
								cols={30}
								rows={2}
								className='w-full border rounded-lg mb-2 p-4'
								placeholder='What is happening'
							/>
							<div className='flex justify-end'>
								<button className='py-1 px-4 rounded-lg text-white bg-zinc-800 hover:bg-zinc-900'>
									Update
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
