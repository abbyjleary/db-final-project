import { Server } from "@hapi/hapi";
import { artistRoutes } from "../routes/artists/artists-route";
import { Boom } from "@hapi/boom";
import { AlbumRoutes } from "../routes/albums/albums-route";
import { albumVersionRoutes } from "../routes/albumVersions/albumVersions-route";
import { memberRoutes } from "../routes/members/members-route";
import { photocardsRoutes } from "../routes/photocards/photocards-route";

export async function init() {
  const server = new Server({
    port: 3000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(artistRoutes);
  server.route(AlbumRoutes);
  server.route(albumVersionRoutes);
  server.route(memberRoutes);
  server.route(photocardsRoutes);

  preResponse(server);

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
}

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

function preResponse(server: Server): void {
  server.ext("onPreResponse", (request, h) => {
    const response = request.response;
    if (response instanceof Boom) {
      console.log(
        `Error response for ${request.method.toUpperCase()} ${request.url}: ${
          response.message
        } (Status Code: ${response.output.statusCode})`
      );
    } else {
      console.log(
        `${request.method.toUpperCase()} ${request.url} (${
          response.statusCode
        })`
      );
    }
    return h.continue;
  });
}