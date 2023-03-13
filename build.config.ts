import {defineBuildConfig} from 'unbuild'

export default defineBuildConfig({
    entries: [
        'src/lib/index',
        {
            builder: 'mkdist',
            input: './src',
            outDir: './dist'
        },
    ],
    clean: true,
    declaration: true,
    rollup: {
        emitCJS: true,
    },
})
