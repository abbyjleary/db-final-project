import { Album, AlbumFull, AlbumVersion } from "../../../types";
import knex from "../../knex";

export async function selectAllAlbumVersions(): Promise<AlbumVersion[]> {
  const res = await knex<AlbumFull>("ALBUMVERSION")
  .join("ALBUM", "ALBUM.albumID", "=", "ALBUMVERSION.albumID")
  .join("ARTIST", "ARTIST.artID", "=", "ALBUM.artID");
  return res;
}

export async function createAlbumVersion(newAlbumVersion: AlbumVersion): Promise<number> {
  const id = await knex.insert(newAlbumVersion).into("ALBUMVERSION");
  return id[0];
}

export async function selectSingleAlbumVersion(targetId: number): Promise<AlbumVersion[]> {
  let res: AlbumVersion[] = [];

  res = await knex<AlbumVersion>("ALBUMVERSION").where({ versionID: targetId });

  return res;
}

export async function selectAlbumVersionByArtist(targetId: number): Promise<AlbumFull[]> {
  let res: AlbumFull[] = [];

  res = await knex<AlbumFull>("ALBUMVERSION")
    .join("ALBUM", "ALBUM.albumID", "=", "ALBUMVERSION.albumID")
    .join("ARTIST", "ARTIST.artID", "=", "ALBUM.artID")
    .where({ "ARTIST.artID": targetId });

  return res;
}

export async function selectAlbumVersionByAlbum(targetId: number): Promise<AlbumFull[]> {
  let res: AlbumFull[] = [];

  res = await knex<AlbumFull>("ALBUMVERSION")
    .join("ALBUM", "ALBUM.albumID", "=", "ALBUMVERSION.albumID")
    .join("ARTIST", "ARTIST.artID", "=", "ALBUM.artID")
    .where({ "ALBUM.albumID": targetId });

  return res;
}

export async function selectAlbumVersionsByFilter(owned?: boolean, onTheWay?: boolean, artIDs?: number[], albumIDs?: number[]): Promise<AlbumFull[]> {
  let res: AlbumFull[] = [];

  try {
    let query = knex<AlbumFull>("ALBUMVERSION")
      .join("ALBUM", "ALBUM.albumID", "=", "ALBUMVERSION.albumID")
      .join("ARTIST", "ARTIST.artID", "=", "ALBUM.artID");

    if (owned !== undefined) {
      query = query.andWhere({ "ALBUMVERSION.owned": owned });
    }

    if (onTheWay !== undefined) {
      query = query.andWhere({ "ALBUMVERSION.onTheWay": onTheWay });
    }

    if (artIDs !== undefined) {
      query = query.whereIn("ARTIST.artID", artIDs);
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

export async function updateAlbumVersionStatus(targetId: number, statusID: number): Promise<void> {
  if (statusID == 0) {
    await knex<AlbumVersion>("ALBUMVERSION")
      .where({
        versionID: targetId,
      })
      .update({ owned: true, onTheWay: false });
  }
  else if (statusID == 1) {
    await knex<AlbumVersion>("ALBUMVERSION")
      .where({
        versionID: targetId,
      })
      .update({ owned: false, onTheWay: true });
    }
  else {
    await knex<AlbumVersion>("ALBUMVERSION")
      .where({
        versionID: targetId,
      })
      .update({ owned: false, onTheWay: false });
  }
}

export async function deleteAlbumVersion(targetId: number): Promise<void> {
  await knex<AlbumVersion>("ALBUMVERSION")
    .where({
      versionID: targetId,
    })
    .del();
}