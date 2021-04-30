const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === "1";

  const env = {
    buildHash: require("child_process")
      .execSync("git rev-parse HEAD")
      .toString()
      .trim(),
    buildDate: Date.now(),
    isDev,
    isProd,
    isStaging,
  };

  return {
    env,
    webpack: (config) => {
      config.module.rules.push({
        test: /\.md$/,
        use: "raw-loader",
      });

      return config;
    },
  };
};
