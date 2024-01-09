import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";


export function buildDevServer(options: BuildOptions): DevServerConfiguration {

  return {
    port: 3033,
    open: true,
    // если раздавать статику через nginx То надо делать проксирование на Index.html
    historyApiFallback: true
  }
}
