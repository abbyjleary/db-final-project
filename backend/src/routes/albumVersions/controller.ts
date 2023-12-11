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

  async getByArtist(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    try {
      const artID = request.params['id'];
      const res = await AlbumVersionsService.selectAlbumVersionByArtist(artID);
      return h.response(res).code(200);
    } catch (error) {
      return h.response((error as Error).message).code(400);
    }
  }

  async getByFilter(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    try {
      const owned = request.query['owned'];
      const onTheWay = request.query['onTheWay'];
      const artIDs = request.query['artID'];  // Use artIDs instead of artID
      const albumIDs = request.query['albumID'];  // Use albumIDs instead of albumID
  
      // Convert to arrays if they are provided as strings
      const artists = typeof artIDs === 'string' ? [artIDs] : artIDs;
      const albums = typeof albumIDs === 'string' ? [albumIDs] : albumIDs;
  
      const res = await AlbumVersionsService.selectAlbumVersionsByFilter(owned, onTheWay, artists, albums);
      return h.response(res).code(200);
    } catch (error) {
      return h.response((error as Error).message).code(400);
    }
  }

  async updateStatus(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    try {
      console.log("controller");
      const versionID = request.params['id'];
      const statusID = request.query['statusID'];
      await AlbumVersionsService.updateAlbumVersionStatus(versionID, statusID);
      return h.response({ message: `Successfully updated record: ${versionID}` }).code(200);
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