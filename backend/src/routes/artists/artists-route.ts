import { ReqRefDefaults, ServerRoute } from "@hapi/hapi";
import { ArtistsController } from "./controller";
import joi from "joi";

export const artistRoutes: ServerRoute<ReqRefDefaults>[] = [
  {
    method: "GET",
    path: "/artists",
    options: {
      tags: ["api"],
      validate: {},
    },
    handler: new ArtistsController().getAll,
  },
  {
    method: "POST",
    path: "/artists",
    options: {
      tags: ["api"],
      validate: {},
    },
    handler: new ArtistsController().addNew,
  },
  {
    method: "GET",
    path: "/artists/{id}",
    options: {
      tags: ["api"],
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
      validate: {
        params: joi.object({
          id: joi.number(),
        }),
      },
    },
    handler: new ArtistsController().deleteById,
  },
];