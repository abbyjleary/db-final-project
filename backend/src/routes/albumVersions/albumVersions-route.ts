import { ReqRefDefaults, ServerRoute } from "@hapi/hapi";
import { AlbumVersionsController } from "./controller";
import joi from "joi";

export const albumVersionRoutes: ServerRoute<ReqRefDefaults>[] = [
  {
    method: "GET",
    path: "/albumVersions",
    options: {
      tags: ["api"],
      validate: {},
    },
    handler: new AlbumVersionsController().getAll,
  },
  {
    method: "POST",
    path: "/albumVersions",
    options: {
      tags: ["api"],
      validate: {},
    },
    handler: new AlbumVersionsController().addNew,
  },
  {
    method: "GET",
    path: "/albumVersions/{id}",
    options: {
      tags: ["api"],
      validate: {
        params: joi.object({
          id: joi.number(),
        }),
      },
    },
    handler: new AlbumVersionsController().getById,
  },
  {
    method: "PUT",
    path: "/albumVersions/{id}",
    options: {
      tags: ["api"],
      validate: {},
    },
    handler: new AlbumVersionsController().updateStatus,
  },
  {
    method: "GET",
    path: "/albumVersions/artist/{id}",
    options: {
      tags: ["api"],
      validate: {
        params: joi.object({
          id: joi.number(),
        }),
      },
    },
    handler: new AlbumVersionsController().getByArtist,
  },
  {
    method: "GET",
    path: "/albumVersions/filter",
    options: {
      tags: ["api"],
      validate: {},
    },
    handler: new AlbumVersionsController().getByFilter,
  },
  {
    method: "GET",
    path: "/albumVersions/album/{id}",
    options: {
      tags: ["api"],
      validate: {
        params: joi.object({
          id: joi.number(),
        }),
      },
    },
    handler: new AlbumVersionsController().getByAlbum,
  },
  {
    method: "DELETE",
    path: "/albumVersions/{id}",
    options: {
      tags: ["api"],
      validate: {
        params: joi.object({
          id: joi.number(),
        }),
      },
    },
    handler: new AlbumVersionsController().deleteById,
  },
];