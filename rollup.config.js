import css from 'rollup-plugin-import-css';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { liveServer } from 'rollup-plugin-live-server';

export default {
    input: "src/app.js",
    output: {
        dir: "dist",
        // entryFileNames: app.js,
        format: 'iife',
        name: 'MyBundle',
        assetFileNames: 'bundle.css',
    },
    plugins: [css(), nodeResolve(), liveServer()]

}