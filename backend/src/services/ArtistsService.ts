import { Artist } from "../../../types";
import knex from "../../knex";

export async function selectAllArtists(): Promise<Artist[]> {
  const res = await knex<Artist>("ARTIST");
  return res;
}

export async function createArtist(newArtist: Artist): Promise<number> {
  const id = await knex.insert(newArtist).into("ARTIST");
  return id[0];
}

export async function selectSingleArtist(targetId: number): Promise<Artist[]> {
  let res: Artist[] = [];

  res = await knex<Artist>("ARTIST").where({ artID: targetId });

  return res;
}

export async function deleteArtist(targetId: number): Promise<void> {
  await knex<Artist>("ARTIST")
    .where({
      artID: targetId,
    })
    .del();
}