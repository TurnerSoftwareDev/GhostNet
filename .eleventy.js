const { EleventyRenderPlugin } = require("@11ty/eleventy");
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {

    eleventyConfig.addPlugin(EleventyRenderPlugin);

    const md = new markdownIt({
        html: true
    });

    eleventyConfig.addPairedShortcode("markdown", (content) => {
        return md.render(content);
    })

    const passThroughCopyOptions = {
        filter: [
            '**/*.css',
            '**/*.gif',
            '**/*.jpg',
            '**/*.jpeg',
            '**/*.js',
            '**/*.md',
            '**/*.pdf',
            '**/*.png',
            '**/*.svg',
            '**/*.tff',
            '**/*.ts',
            '**/*.woff2'
        ]
    };

    // Passes files through to the output directory.
    eleventyConfig.addPassthroughCopy('./src/assets', passThroughCopyOptions);

    return {
        dir: {
            input: 'src',
            output: '_site',
            includes: '_includes',
            data: '_data',
        }
    }
}
