// babel-preset-taro 更多选项和默认值：
// https://docs.taro.zone/docs/next/babel-config
module.exports = {
  presets: [
    [
      "taro",
      {
        framework: "react",
        ts: true,
        compiler: "webpack5",
        useBuiltIns: process.env.TARO_ENV === "h5" ? "usage" : false,
      },
    ],
  ],
  plugins: [
    [
      "import",
      {
        libraryName: "@antmjs/vantui",
        libraryDirectory: "es",
        style: true,
      },
      "@antmjs/vantui",
    ],
  ],
  // plugins: [
  //   [
  //     "import",
  //     {
  //       libraryName: "@antmjs/vantui",
  //       libraryDirectory: "es",
  //       style: (name) => `${name}/style/less`,
  //     },
  //     "@antmjs/vantui",
  //   ],
  // ],
};
