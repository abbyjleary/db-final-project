import { ReqRefDefaults, ServerRoute } from "@hapi/hapi";
import { PhotocardsController } from "./controller";
import joi from "joi";

export const photocardsRoutes: ServerRoute<ReqRefDefaults>[] = [
  {
    method: "GET",
    path: "/photocards",
    options: {
      tags: ["api"],
      validate: {},
    },
    handler: new PhotocardsController().getAll,
  },
  {
    method: "POST",
    path: "/photocards",
    options: {
      tags: ["api"],
      validate: {},
    },
    handler: new PhotocardsController().addNew,
  },
  {
    method: "GET",
    path: "/photocards/{id}",
    options: {
      tags: ["api"],
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
      validate: {},
    },
    handler: new PhotocardsController().getByFilter,
  },
  {
    method: "PUT",
    path: "/photocards/{id}",
    options: {
      tags: ["api"],
      validate: {},
    },
    handler: new PhotocardsController().updateStatus,
  },
  {
    method: "DELETE",
    path: "/photocards/{id}",
    options: {
      tags: ["api"],
      validate: {
        params: joi.object({
          id: joi.number(),
        }),
      },
    },
    handler: new PhotocardsController().deleteById,
  },
];