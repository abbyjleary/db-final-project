import { Request, ResponseToolkit, ResponseObject } from "@hapi/hapi";
import { Photocard } from "../../../../types";
import * as PhotocardService from "../../services/PhotocardService";

export class PhotocardsController {
  async getAll(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    try {
      const res = await PhotocardService.selectAllPhotocards();
      return h.response(res).code(200);
    } catch (error) {
      return h.response((error as Error).message).code(400);
    }
  }

  async addNew(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    try {
      const newPhotocard = request.payload as Photocard;
      const id = await PhotocardService.createPhotocard(newPhotocard);

      return h.response({ id: id }).code(200);
    } catch (error) {
      return h.response((error as Error).message).code(400);
    }
  }

  async getById(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    try {
      const pcID = request.params['id'];
      const res = await PhotocardService.selectSinglePhotocard(pcID);
      return h.response(res).code(200);
    } catch (error) {
      return h.response((error as Error).message).code(400);
    }
  }

  async getByAlbum(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    try {
      const albID = request.params['id'];
      const res = await PhotocardService.selectPhotocardByAlbum(albID);
      return h.response(res).code(200);
    } catch (error) {
      return h.response((error as Error).message).code(400);
    }
  }

  async getByArtist(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    try {
      const artID = request.params['id'];
      const res = await PhotocardService.selectPhotocardByArtist(artID);
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
      const pcID = request.params['id'];
      await PhotocardService.deletePhotocard(pcID);
      return h
        .response({ message: `Successfully deleted record: ${pcID}` })
        .code(200);
    } catch (error) {
      return h.response((error as Error).message).code(400);
    }
  }
}