import type { NextConfig } from "next";

const config: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: [
      { key: "Link", value: '</llms.txt>; rel="describedby"' },
    ] }];
  },
};

export default config;
