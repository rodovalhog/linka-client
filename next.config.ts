import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "http2.mlstatic.com",
        pathname: "/**",
      },
    ],
  },

};

export default nextConfig;


// // next.config.ts
// import type { NextConfig } from "next";
// import path from "path";

// const empty = (p: string) => path.resolve(__dirname, p);

// const nextConfig: NextConfig = {
//   // Nova chave (substitui experimental.serverComponentsExternalPackages)
//   serverExternalPackages: ["@wppconnect-team/wppconnect"],

//   // Libera dominios remotos para next/image
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "http2.mlstatic.com",
//         pathname: "/**",
//       },
//     ],
//   },

//   // Config específica do Turbopack
//   turbopack: {
//     // Stubs para módulos opcionais que não existem no ambiente (electron, fs, etc.)
//     resolveAlias: {
//       electron: empty("stubs/empty.cjs"),
//       "original-fs": empty("stubs/empty.cjs"),
//       fs: empty("stubs/empty.cjs"),
//       net: empty("stubs/empty.cjs"),
//       tls: empty("stubs/empty.cjs"),
//       dns: empty("stubs/empty.cjs"),
//       child_process: empty("stubs/empty.cjs"),
//     },
//   },
// };

// export default nextConfig;
