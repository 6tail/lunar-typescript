import {defineBuildConfig} from "unbuild";
import {readFileSync} from "node:fs";
import {join} from "node:path";

const pkg = JSON.parse(readFileSync(join(process.cwd(), "package.json"), "utf-8"));

export default defineBuildConfig({
    entries: [
        "src/lib/index",
    ],
    clean: true,
    declaration: true,
    rollup: {
        emitCJS: true,
        output: {
            banner: `/*! ${pkg.name} v${pkg.version} */`,
        },
    },
});
