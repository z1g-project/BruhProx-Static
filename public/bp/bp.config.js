self.__uv$config = {
  prefix: "/bp/service/",
  bare: [
    "http://sodium.onrender.com/bare/",
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
