import { AlbumVersion } from "../../../types";
import knex from "../../knex";

export async function selectAllAlbumVersions(): Promise<AlbumVersion[]> {
  const res = await knex<AlbumVersion>("ALBUMVERSION");
  return res;
}

export async function createAlbumVersion(newAlbumVersion: AlbumVersion): Promise<number> {
  const id = await knex.insert(newAlbumVersion).into("ALBUMVERSION");
  return id[0];
}

// Return everything from AlbumVersion joined with id and name from other tables
export async function selectSingleAlbumVersion(targetId: number): Promise<AlbumVersion[]> {
  let res: AlbumVersion[] = [];

  // Get just single AlbumVersion (if it has no child elements)
  res = await knex<AlbumVersion>("ALBUMVERSION").where({ versionID: targetId });

  return res;
}

export async function deleteAlbumVersion(targetId: number): Promise<void> {
  await knex<AlbumVersion>("ALBUMVERSION")
    .where({
      versionID: targetId,
    })
    .del();
}