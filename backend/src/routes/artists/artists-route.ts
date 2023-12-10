import { ReqRefDefaults, ServerRoute } from "@hapi/hapi";
import { ArtistsController } from "./controller";
import joi from "joi";

export const artistRoutes: ServerRoute<ReqRefDefaults>[] = [
  {
    method: "GET",
    path: "/artists",
    options: {
      tags: ["api"],
      description: "Return all source books",
      validate: {},
    },
    handler: new ArtistsController().getAll,
  },
  {
    method: "PUT",
    path: "/artists",
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
    handler: new ArtistsController().addNew,
  },
  {
    method: "GET",
    path: "/artists/{id}",
    options: {
      tags: ["api"],
      description: "Get source book by id",
      validate: {
        params: joi.object({
          id: joi.number(),
        }),
      },
    },
    handler: new ArtistsController().getById,
  },
  {
    method: "DELETE",
    path: "/artists/{id}",
    options: {
      tags: ["api"],
      description: "Delete source book by id",
      validate: {
        params: joi.object({
          id: joi.number(),
        }),
      },
    },
    handler: new ArtistsController().deleteById,
  },
];