import cors from "cors";
import { Application } from "express";
import sourceRoutes from "@src/routes";
import constantMessageValue from "@src/constants/stringnummisc";

const bodyParser = require("body-parser");

export default async (app: Application) => {
  app.use(
    cors({
      credentials: true,
    }),
  );

  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

  // source routes
  app.use(sourceRoutes);

  // catch-all routes
  app.get(constantMessageValue.api_main_slash, (req, res) => {
    res
      .status(constantMessageValue.http_ok_code)
      .send(constantMessageValue.api_root_response);
  });

  app.all(constantMessageValue.api_all, (req, res) => {
    res
      .status(constantMessageValue.not_found)
      .send(constantMessageValue.non_existing_endpoint);
  });

  app.use((req, res) => {
    res
      .status(constantMessageValue.internal_server_error_code)
      .send(constantMessageValue.something_went_wrong);
  });

  return app;
};
