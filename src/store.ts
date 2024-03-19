import { atom } from 'nanostores';

export const $video = atom();

export function updateVideo(video: any) {
	$video.set(video);
}
