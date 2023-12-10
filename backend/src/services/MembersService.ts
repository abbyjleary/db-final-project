import { Member } from "../../../types";
import knex from "../../knex";

export async function selectAllMembers(): Promise<Member[]> {
  const res = await knex<Member>("MEMBER");
  return res;
}

export async function createMember(newMember: Member): Promise<number> {
  const id = await knex.insert(newMember).into("MEMBER");
  return id[0];
}

// Return everything from Member joined with id and name from other tables
export async function selectSingleMember(targetId: number): Promise<Member[]> {
  let res: Member[] = [];

  // Get just single Member (if it has no child elements)
  res = await knex<Member>("MEMBER").where({ memberID: targetId });

  return res;
}

export async function deleteMember(targetId: number): Promise<void> {
  await knex<Member>("MEMBER")
    .where({
      memberID: targetId,
    })
    .del();
}