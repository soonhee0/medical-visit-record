module.exports = {
  // jitモードは必要に応じてスタイルを反映するモード（厳密には、コンパイラ）　ビルド時間を短縮できる効果がある
  mode: "jit",
  darkMode: false, // 'media' or 'class'
  // ビルド生成時の未使用のスタイルを除外し、パフォーマンスの最適化を行える
  purge: {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      // https://purgecss.com/safelisting.html#patterns
      safelist: {
        standard: [/^bg-/, /^text-/],
      },
    },
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
