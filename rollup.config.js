import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/HiTable',
  moduleName: 'HiTable',
  external: ['react', 'react-dom', '@hi-ui/hiui', 'axios'],
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  output: [
    {
      format: 'es',
      file: 'es/hi-table.js',
      indent: false
    },
    { file: 'lib/hi-table.js', format: 'cjs', indent: false }
  ],
  plugins: [
    resolve({ extensions: ['.jsx', '.js'] }),
    babel({
      exclude: '**/node_modules/**',
      runtimeHelpers: true
    }),
    commonjs(),
    postcss({
      use: ['sass']
    })
  ]
}
