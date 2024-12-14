import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: {
    file: pkg.main,
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    terser(),
    postcss({
      extract: false,
      modules: false,
      minimize: true,
    }),
    // nodeResolve({
    //   extensions: ['.js'],
    // }),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    babel({
      presets: ['@babel/preset-react'],
      exclude: ['node_modules/**'],
    }),
    commonjs({
      extensions: ['.jsx', '.js'],
    }),
  ],
};
