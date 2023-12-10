import { Request, ResponseToolkit, ResponseObject } from "@hapi/hapi";
import { Album } from "../../../../types";
import * as AlbumsService from "../../services/AlbumsService";

export class AlbumsController {
    async getAll(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
        try {
            const res = await AlbumsService.selectAllAlbums();
            return h.response(res).code(200);
        } catch (error) {
            return h.response((error as Error).message).code(400);
        }
    }

    async addNew(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
        try {
            const newAlbum = request.payload as Album;
            const id = await AlbumsService.createAlbum(newAlbum);

            return h.response({ id: id }).code(200);
        } catch (error) {
            return h.response((error as Error).message).code(400);
        }
    }

    async getById(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
        try {
            const albumID = request.params['id'];
            const res = await AlbumsService.selectSingleAlbum(albumID);
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
            const albumID = request.params['id'];
            await AlbumsService.deleteAlbum(albumID);
            return h
                .response({ message: `Successfully deleted record: ${albumID}` })
                .code(200);
        } catch (error) {
            return h.response((error as Error).message).code(400);
        }
    }
}