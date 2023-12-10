import { Request, ResponseToolkit, ResponseObject } from "@hapi/hapi";
import { Member } from "../../../../types";
import * as MembersService from "../../services/MembersService";

export class MembersController {
  async getAll(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    try {
      const res = await MembersService.selectAllMembers();
      return h.response(res).code(200);
    } catch (error) {
      return h.response((error as Error).message).code(400);
    }
  }

  async addNew(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    try {
      const newMember = request.payload as Member;
      const id = await MembersService.createMember(newMember);

      return h.response({ id: id }).code(200);
    } catch (error) {
      return h.response((error as Error).message).code(400);
    }
  }

  async getById(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    try {
      const memberID = request.params['id'];
      const res = await MembersService.selectSingleMember(memberID);
      return h.response(res).code(200);
    } catch (error) {
      return h.response((error as Error).message).code(400);
    }
  }

  async deleteById(
    request: Request,
    h: ResponseToolkit
  ): Promise<ResponseObject> {
    try {
      const memberID = request.params['id'];
      await MembersService.deleteMember(memberID);
      return h
        .response({ message: `Successfully deleted record: ${memberID}` })
        .code(200);
    } catch (error) {
      return h.response((error as Error).message).code(400);
    }
  }
}