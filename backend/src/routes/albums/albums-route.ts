import { ReqRefDefaults, ServerRoute } from "@hapi/hapi";
import { AlbumsController } from "./controller";
import joi from "joi";

export const AlbumRoutes: ServerRoute<ReqRefDefaults>[] = [
  {
    method: "GET",
    path: "/albums",
    options: {
      tags: ["api"],
      description: "Return all source books",
      validate: {},
    },
    handler: new AlbumsController().getAll,
  },
  {
    method: "PUT",
    path: "/albums",
    options: {
      tags: ["api"],
      description: "Add new source book",
      validate: {
        // payload: joi.object({
        //   name: joi.string(),
        //   publisher: joi.string().optional(),
        //   date: joi.string().optional(),
        //   photo_url: joi.string().optional(),
        // }),
      },
    },
    handler: new AlbumsController().addNew,
  },
  {
    method: "GET",
    path: "/albums/{id}",
    options: {
      tags: ["api"],
      description: "Get source book by id",
      validate: {
        params: joi.object({
          id: joi.number(),
        }),
      },
    },
    handler: new AlbumsController().getById,
  },
  {
    method: "DELETE",
    path: "/albums/{id}",
    options: {
      tags: ["api"],
      description: "Delete source book by id",
      validate: {
        params: joi.object({
          id: joi.number(),
        }),
      },
    },
    handler: new AlbumsController().deleteById,
  },
];