import { ReqRefDefaults, ServerRoute } from "@hapi/hapi";
import { AlbumsController } from "./controller";
import joi from "joi";

export const AlbumRoutes: ServerRoute<ReqRefDefaults>[] = [
  {
    method: "GET",
    path: "/albums",
    options: {
      tags: ["api"],
      validate: {},
    },
    handler: new AlbumsController().getAll,
  },
  {
    method: "POST",
    path: "/albums",
    options: {
      tags: ["api"],
      validate: {},
    },
    handler: new AlbumsController().addNew,
  },
  {
    method: "GET",
    path: "/albums/{id}",
    options: {
      tags: ["api"],
      validate: {
        params: joi.object({
          id: joi.number(),
        }),
      },
    },
    handler: new AlbumsController().getById,
  },
  {
    method: "GET",
    path: "/albums/artist/{id}",
    options: {
      tags: ["api"],
      validate: {
        params: joi.object({
          id: joi.number(),
        }),
      },
    },
    handler: new AlbumsController().getByArtist,
  },
  {
    method: "DELETE",
    path: "/albums/{id}",
    options: {
      tags: ["api"],
      validate: {
        params: joi.object({
          id: joi.number(),
        }),
      },
    },
    handler: new AlbumsController().deleteById,
  },
];