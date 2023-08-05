import { appConfig } from "$app/config/index.js";
import { mongodb } from "$app/connections/index.js";

import app from "./app/index.js";

mongodb.on("open", () => {
  app.listen(appConfig.port, () => {
    console.log(`App is running on ${appConfig.port}`);
  });
});
