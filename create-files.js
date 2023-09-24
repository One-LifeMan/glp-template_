
const fs = require('fs');
const path = require('path');




const folderHtml        = path.join(__dirname, 'src', 'html');
const folderScss        = path.join(__dirname, 'src', 'scss');
const folderScssMedia   = path.join(__dirname, 'src', 'scss', 'media');
const folderJs          = path.join(__dirname, 'src', 'js');

const filename = process.argv[2];

const htmlTitle = filename[0].toUpperCase() + filename.substring(1);

const filePathHtml       = path.join(folderHtml, filename + '.html');
const filePathScss       = path.join(folderScss, filename + '-styles.scss');
const filePathScssMedia  = path.join(folderScssMedia, filename + '-media.scss');
const filePathJs         = path.join(folderJs, filename + '-script.js');


const contentHtml = `<!DOCTYPE html>
@@include('blocks/_lang.html')
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Lorem ipsum dolor sit amet." />

        @@include('blocks/_favicon.html')

        <title>${htmlTitle}</title>

        @@include('blocks/_google-fonts.html')
        
        <link rel="stylesheet" href="./css/styles.css">
        <link rel="stylesheet" href="./css/${filename}-styles.css">
        <link rel="stylesheet" href="./css/dark-mode.css">
    </head>
    <body>
        
        @@include('blocks/header.html')
        
        <div class="wrapper">
            <main class="main">

                

            </main>

            @@include('blocks/footer.html')
        </div>
        
        
        
        <script src="./js/script.bundle.js"></script>
        <script src="./js/${filename}-script.bundle.js"></script>
    </body>
</html>`;
const contentScss = `@import "./base/vars";
// BASE
@import "./blocks/${filename}*.scss";
// BLOCKS
// ================================================= START styles





// ================================================= END styles
// ================================================= START media

@import "./media/${filename}-media.scss";`;
const contentScssMedia = `@media screen and (max-width: $laptop-size) {
}
// ------------------------------------------------------------ 1199px

@media screen and (max-width: $tablet-size) {
}
// ------------------------------------------------------------ 959px

@media screen and (max-width: $mobile-size) {
}
// ------------------------------------------------------------ 599px

@media screen and (max-width: 320px) {
}
// ------------------------------------------------------------ 320px`;
const contentJs = `"use strict"

//модулі підключати якщо потрібно
// import "./modules/swiper";

import {
    
} from "./constants/constants";

console.log("${filename} script");`;

fs.writeFileSync(filePathHtml, contentHtml);
fs.writeFileSync(filePathScss, contentScss);
fs.writeFileSync(filePathScssMedia, contentScssMedia);
fs.writeFileSync(filePathJs, contentJs);
