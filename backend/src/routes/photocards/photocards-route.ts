import { ReqRefDefaults, ServerRoute } from "@hapi/hapi";
import { PhotocardsController } from "./controller";
import joi from "joi";

export const photocardsRoutes: ServerRoute<ReqRefDefaults>[] = [
  {
    method: "GET",
    path: "/photocards",
    options: {
      tags: ["api"],
      description: "Return all source books",
      validate: {},
    },
    handler: new PhotocardsController().getAll,
  },
  {
    method: "PUT",
    path: "/photocards",
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
    handler: new PhotocardsController().addNew,
  },
  {
    method: "GET",
    path: "/photocards/{id}",
    options: {
      tags: ["api"],
      description: "Get source book by id",
      validate: {
        params: joi.object({
          id: joi.number(),
        }),
      },
    },
    handler: new PhotocardsController().getById,
  },
  {
    method: "GET",
    path: "/photocards/album/{id}",
    options: {
      tags: ["api"],
      description: "Get source book by id",
      validate: {
        params: joi.object({
          id: joi.number(),
        }),
      },
    },
    handler: new PhotocardsController().getByAlbum,
  },
  {
    method: "GET",
    path: "/photocards/artist/{id}",
    options: {
      tags: ["api"],
      description: "Get source book by id",
      validate: {
        params: joi.object({
          id: joi.number(),
        }),
      },
    },
    handler: new PhotocardsController().getByArtist,
  },
  {
    method: "GET",
    path: "/photocards/filter",
    options: {
      tags: ["api"],
      description: "Get source book by id",
      validate: {
        // query: joi.object({
        //   owned: joi.boolean().optional(),
        //   onTheWay: joi.boolean().optional(),
        //   artistId: joi.number().optional(),
        //   albumId: joi.number().optional(),
        //   memberId: joi.number().optional(),
        // }),
      },
    },
    handler: new PhotocardsController().getByFilter,
  },
  {
    method: "PUT",
    path: "/photocards/{id}",
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
    handler: new PhotocardsController().updateStatus,
  },
  {
    method: "DELETE",
    path: "/photocards/{id}",
    options: {
      tags: ["api"],
      description: "Delete source book by id",
      validate: {
        params: joi.object({
          id: joi.number(),
        }),
      },
    },
    handler: new PhotocardsController().deleteById,
  },
];