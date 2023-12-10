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