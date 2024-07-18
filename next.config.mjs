/** @type {import('next').NextConfig} */

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(`${__dirname}/src`, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zaplanujwypad-s3.fra1.digitaloceanspaces.com",
      },
    ],
  },
};

export default nextConfig;
