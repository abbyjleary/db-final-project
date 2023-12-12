import { Console } from "console";
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

export async function selectSinglePhotocard(targetId: number): Promise<Photocard[]> {
  let res: Photocard[] = [];

  res = await knex<Photocard>("PHOTOCARD").where({ pcID: targetId });

  return res;
}

export async function selectPhotocardByAlbum(targetId: number): Promise<PhotocardFull[]> {
  let res: PhotocardFull[] = [];

  res = await knex<PhotocardFull>("PHOTOCARD")
    .join("ALBUM", "ALBUM.albumID", "=", "PHOTOCARD.albumID")
    .join("MEMBER", "MEMBER.memberID", "=", "PHOTOCARD.memberID")
    .join("ARTIST", "ARTIST.artID", "=", "ALBUM.artID")
    .where({ "ALBUM.albumID": targetId });

  return res;

}

export async function selectPhotocardByArtist(targetId: number): Promise<PhotocardFull[]> {
  let res: PhotocardFull[] = [];

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

export async function updatePhotocardStatus(targetId: number, statusID: number): Promise<void> {
  if (statusID == 0) {
    await knex<Photocard>("PHOTOCARD")
      .where({
        pcID: targetId,
      })
      .update({ pcOwned: true, pcOnTheWay: false });
  }

  else if (statusID == 1) {
    await knex<Photocard>("PHOTOCARD")
      .where({
        pcID: targetId,
      })
      .update({ pcOwned: false, pcOnTheWay: true });

  }

  else {
    await knex<Photocard>("PHOTOCARD")
      .where({
        pcID: targetId,
      })
      .update({ pcOwned: false, pcOnTheWay: false });
  }

}


export async function deletePhotocard(targetId: number): Promise<void> {
  await knex<Photocard>("PHOTOCARD")
    .where({
      pcID: targetId,
    })
    .del();
}