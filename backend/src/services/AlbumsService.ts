import { Album } from "../../../types";
import knex from "../../knex";

export async function selectAllAlbums(): Promise<Album[]> {
  const res = await knex<Album>("Album");
  return res;
}

export async function createAlbum(newAlbum: Album): Promise<number> {
  const id = await knex.insert(newAlbum).into("Album");
  return id[0];
}

// Return everything from Album joined with id and name from other tables
export async function selectSingleAlbum(targetId: number): Promise<Album[]> {
  let res: Album[] = [];

  // Get just single Album (if it has no child elements)
  res = await knex<Album>("Album").where({ albumID: targetId });

  return res;
}

export async function deleteAlbum(targetId: number): Promise<void> {
  await knex<Album>("Album")
    .where({
      albumID: targetId,
    })
    .del();
}