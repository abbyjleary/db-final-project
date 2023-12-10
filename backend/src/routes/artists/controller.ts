import { Request, ResponseToolkit, ResponseObject } from "@hapi/hapi";
import { Artist } from "../../../../types";
import * as ArtistsService from "../../services/ArtistsService";

export class ArtistsController {
  async getAll(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    try {
      const res = await ArtistsService.selectAllArtists();
      return h.response(res).code(200);
    } catch (error) {
      return h.response((error as Error).message).code(400);
    }
  }

  async addNew(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    try {
      const newArtist = request.payload as Artist;
      const id = await ArtistsService.createArtist(newArtist);

      return h.response({ id: id }).code(200);
    } catch (error) {
      return h.response((error as Error).message).code(400);
    }
  }

  async getById(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    try {
      const artID = request.params['id'];
      const res = await ArtistsService.selectSingleArtist(artID);
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
      const artID = request.params['id'];
      await ArtistsService.deleteArtist(artID);
      return h
        .response({ message: `Successfully deleted record: ${artID}` })
        .code(200);
    } catch (error) {
      return h.response((error as Error).message).code(400);
    }
  }
}