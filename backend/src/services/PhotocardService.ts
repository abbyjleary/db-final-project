import { Photocard } from "../../../types";
import knex from "../../knex";

export async function selectAllPhotocards(): Promise<Photocard[]> {
  const res = await knex<Photocard>("PHOTOCARD");
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

export async function deletePhotocard(targetId: number): Promise<void> {
  await knex<Photocard>("PHOTOCARD")
    .where({
      pcID: targetId,
    })
    .del();
}