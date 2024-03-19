import { db, Video } from 'astro:db';

export default async function () {
	await db.insert(Video).values([
		{
			id: '1',
			title: 'Quiet Days',
			slug: 'quiet-days',
			url: 'https://res.cloudinary.com/jlengstorf/video/upload/f_auto,q_auto/v1710866655/lwj/code/quiet-days-small.mp4',
			thumbnail:
				'https://res.cloudinary.com/jlengstorf/image/upload/f_auto,q_auto/v1710867170/lwj/code/mar-15-quiet-days.jpg',
		},
		{
			id: '2',
			title: 'The Good Parts',
			slug: 'good-parts',
			url: 'https://res.cloudinary.com/jlengstorf/video/upload/f_auto,q_auto/v1710866958/lwj/code/the-good-parts-small.mp4',
			thumbnail:
				'https://res.cloudinary.com/jlengstorf/image/upload/f_auto,q_auto/v1710867172/lwj/code/mar-18-the-good-parts.jpg',
		},
	]);
}
