import { ReqRefDefaults, ServerRoute } from "@hapi/hapi";
import { AlbumVersionsController } from "./controller";
import joi from "joi";

export const albumVersionRoutes: ServerRoute<ReqRefDefaults>[] = [
  {
    method: "GET",
    path: "/albumVersions",
    options: {
      tags: ["api"],
      description: "Return all source books",
      validate: {},
    },
    handler: new AlbumVersionsController().getAll,
  },
  {
    method: "PUT",
    path: "/albumVersions",
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
    handler: new AlbumVersionsController().addNew,
  },
  {
    method: "GET",
    path: "/albumVersions/{id}",
    options: {
      tags: ["api"],
      description: "Get source book by id",
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
      description: "Update source book by id",
      validate: {
        // params: joi.object({
        //   id: joi.number(),
        // }),
        // payload: joi.object({
        //   name: joi.string(),
        //   publisher: joi.string().optional(),
        //   date: joi.string().optional(),
        //   photo_url: joi.string().optional(),
        // }),
      },
    },
    handler: new AlbumVersionsController().updateStatus,
  },
  {
    method: "GET",
    path: "/albumVersions/artist/{id}",
    options: {
      tags: ["api"],
      description: "Get source book by artist id",
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
      description: "Get source book by filter",
      validate: {
        // query: joi.object({
        //   owned: joi.boolean().optional(),
        //   onTheWay: joi.boolean().optional(),
        //   artID: joi.number().optional(),
        //   albumID: joi.number().optional(),
        // }),
      },
    },
    handler: new AlbumVersionsController().getByFilter,
  },
  {
    method: "DELETE",
    path: "/albumVersions/{id}",
    options: {
      tags: ["api"],
      description: "Delete source book by id",
      validate: {
        params: joi.object({
          id: joi.number(),
        }),
      },
    },
    handler: new AlbumVersionsController().deleteById,
  },
];