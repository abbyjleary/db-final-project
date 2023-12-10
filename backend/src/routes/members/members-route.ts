import { ReqRefDefaults, ServerRoute } from "@hapi/hapi";
import { MembersController } from "./controller";
import joi from "joi";

export const memberRoutes: ServerRoute<ReqRefDefaults>[] = [
    {
        method: "GET",
        path: "/members",
        options: {
        tags: ["api"],
        description: "Return all source books",
        validate: {},
        },
        handler: new MembersController().getAll,
    },
    {
        method: "PUT",
        path: "/members",
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
        handler: new MembersController().addNew,
    },
    {
        method: "GET",
        path: "/members/{id}",
        options: {
        tags: ["api"],
        description: "Get source book by id",
        validate: {
            params: joi.object({
            id: joi.number(),
            }),
        },
        },
        handler: new MembersController().getById,
    },
    {
        method: "DELETE",
        path: "/members/{id}",
        options: {
        tags: ["api"],
        description: "Delete source book by id",
        validate: {
            params: joi.object({
            id: joi.number(),
            }),
        },
        },
        handler: new MembersController().deleteById,
    },
    ];