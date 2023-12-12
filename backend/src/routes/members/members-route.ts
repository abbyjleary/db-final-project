import { ReqRefDefaults, ServerRoute } from "@hapi/hapi";
import { MembersController } from "./controller";
import joi from "joi";

export const memberRoutes: ServerRoute<ReqRefDefaults>[] = [
    {
        method: "GET",
        path: "/members",
        options: {
        tags: ["api"],
        validate: {},
        },
        handler: new MembersController().getAll,
    },
    {
        method: "POST",
        path: "/members",
        options: {
        tags: ["api"],
        validate: {},
        },
        handler: new MembersController().addNew,
    },
    {
        method: "GET",
        path: "/members/{id}",
        options: {
        tags: ["api"],
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
        validate: {
            params: joi.object({
            id: joi.number(),
            }),
        },
        },
        handler: new MembersController().deleteById,
    },
    ];