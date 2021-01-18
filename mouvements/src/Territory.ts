import { Player } from "./Player";

export interface Territory {
	img: string,
	map: number,
	name: string,
	color: string,
	fight: "inline" | "hidden",
	mapdl: string,
	players: Player[],
	description: string,
}