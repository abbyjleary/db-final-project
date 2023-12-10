import { Request, ResponseToolkit, ResponseObject } from "@hapi/hapi";
import { AlbumVersion } from "../../../../types";
import * as AlbumVersionsService from "../../services/AlbumVersionService";

export class AlbumVersionsController {
  async getAll(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    try {
      const res = await AlbumVersionsService.selectAllAlbumVersions();
      return h.response(res).code(200);
    } catch (error) {
      return h.response((error as Error).message).code(400);
    }
  }

  async addNew(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    try {
      const newAlbumVersion = request.payload as AlbumVersion;
      const id = await AlbumVersionsService.createAlbumVersion(newAlbumVersion);

      return h.response({ id: id }).code(200);
    } catch (error) {
      return h.response((error as Error).message).code(400);
    }
  }

  async getById(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    try {
      const versionID = request.params['id'];
      const res = await AlbumVersionsService.selectSingleAlbumVersion(versionID);
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
      const versionID = request.params['id'];
      await AlbumVersionsService.deleteAlbumVersion(versionID);
      return h
        .response({ message: `Successfully deleted record: ${versionID}` })
        .code(200);
    } catch (error) {
      return h.response((error as Error).message).code(400);
    }
  }
}