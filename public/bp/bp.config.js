self.__uv$config = {
  prefix: "/bp/service/",
  bare: [
    "https://uv.radon.games/",
    "https://uv.holyubofficial.net/",
    "https://tomp.app/",
    "https://flow-os.liquid.is-a.dev/bare/"
  ],
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/bp/bp.handler.js",
  client: "/bp/bp.client.js",
  bundle: "/bp/bp.bundle.js",
  config: "/bp/bp.config.js",
  sw: "/bp/bp.sw.js",
};
