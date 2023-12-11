import { Photocard, PhotocardFull } from "../../../types";
import knex from "../../knex";

export async function selectAllPhotocards(): Promise<PhotocardFull[]> {
  const res = await knex<PhotocardFull>("PHOTOCARD")
  .join("ALBUM", "ALBUM.albumID", "=", "PHOTOCARD.albumID")
  .join("MEMBER", "MEMBER.memberID", "=", "PHOTOCARD.memberID")
  .join("ARTIST", "ARTIST.artID", "=", "ALBUM.artID");
  return res;
}

export async function createPhotocard(newPhotocard: Photocard): Promise<number> {
  const id = await knex.insert(newPhotocard).into("PHOTOCARD");
  return id[0];
}

// Return everything from Photocard joined with id and name from other tables
export async function selectSinglePhotocard(targetId: number): Promise<Photocard[]> {
  let res: Photocard[] = [];

  // Get just single Photocard (if it has no child elements)
  res = await knex<Photocard>("PHOTOCARD").where({ pcID: targetId });

  return res;
}

export async function selectPhotocardByAlbum(targetId: number): Promise<PhotocardFull[]> {
  let res: PhotocardFull[] = [];

  // Get just single Photocard (if it has no child elements)
  res = await knex<PhotocardFull>("PHOTOCARD")
  .join("ALBUM", "ALBUM.albumID", "=", "PHOTOCARD.albumID")
  .join("MEMBER", "MEMBER.memberID", "=", "PHOTOCARD.memberID")
  .join("ARTIST", "ARTIST.artID", "=", "ALBUM.artID")
    .where({ "ALBUM.albumID": targetId });

  return res;

}

export async function selectPhotocardByArtist(targetId: number): Promise<PhotocardFull[]> {
  let res: PhotocardFull[] = [];

  // Get just single Photocard (if it has no child elements)
  res = await knex<PhotocardFull>("PHOTOCARD")
  .join("ALBUM", "ALBUM.albumID", "=", "PHOTOCARD.albumID")
  .join("MEMBER", "MEMBER.memberID", "=", "PHOTOCARD.memberID")
  .join("ARTIST", "ARTIST.artID", "=", "ALBUM.artID")
    .where({ "ARTIST.artID": targetId });

  return res;

}

export async function selectPhotocardByFilter(pcOwned?: boolean, pcOnTheWay?: boolean, artIDs?: number[], memberIDs?: number[], albumIDs?: number[]): Promise<PhotocardFull[]> {
  let res: PhotocardFull[] = [];

  try {
    let query = knex<PhotocardFull>("PHOTOCARD")
      .join("ALBUM", "ALBUM.albumID", "=", "PHOTOCARD.albumID")
      .join("MEMBER", "MEMBER.memberID", "=", "PHOTOCARD.memberID")
      .join("ARTIST", "ARTIST.artID", "=", "ALBUM.artID");

    // Apply filters based on user input
    if (pcOwned !== undefined) {
      query = query.andWhere({ "PHOTOCARD.pcOwned": pcOwned });
    }

    if (pcOnTheWay !== undefined) {
      query = query.andWhere({ "PHOTOCARD.pcOnTheWay": pcOnTheWay });
    }

    if (artIDs !== undefined) {
      query = query.whereIn("ARTIST.artID", artIDs);
    }

    if (memberIDs !== undefined) {
      query = query.whereIn("MEMBER.memberID", memberIDs);
    }

    if (albumIDs !== undefined) {
      query = query.whereIn("ALBUM.albumID", albumIDs);
    }

    res = await query;
  } catch (error) {
    console.error(error);
  }

  return res;
}


export async function deletePhotocard(targetId: number): Promise<void> {
  await knex<Photocard>("PHOTOCARD")
    .where({
      pcID: targetId,
    })
    .del();
}