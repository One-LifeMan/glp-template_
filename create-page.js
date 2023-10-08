// node create-page.js FILENAME //

const fs = require('fs');
const path = require('path');



// шляхи де повинні бути створені файли
const folderHtml        = './src/html';
const folderScss        = './src/scss';
const folderScssMedia   = './src/scss/media';
const folderJs          = './src/js';

// отримуємо значення з команди
const filename          = process.argv[2];

// це title для html файлів
const htmlTitle = filename[0].toUpperCase() + filename.substring(1);

// шляхи та назви створених файлів
const filePathHtml       = path.join(folderHtml, filename + '.html');
const filePathScss       = path.join(folderScss, filename + '-styles.scss');
const filePathScssMedia  = path.join(folderScssMedia, filename + '-media.scss');
const filePathJs         = path.join(folderJs, filename + '-script.js');

// контент кожного файлу
const contentHtml = `@@include('./modules/doc.html', {
    "description": "Lorem ipsum dolor sit amet.",
    "title": "${htmlTitle}",
    "selfStyle": "./css/${filename}-styles.css"
})
<body>
    @@include('./modules/loader.html')
    <div class="wrapper">

        @@include('./modules/header.html')

        <main class="main">



        </main>

        @@include('./modules/footer.html')

    </div>

    <script src="./js/${filename}-script.js"></script>
</body>
</html>`;
const contentScss = `
@import "./styles.scss";
@import "./modules/*.scss";
@import "./modules/${filename}/*.scss";




// стилі писати ТУТ







@import "./media/modules/*scss";
@import "./media/modules/${filename}/*.scss";
@import "./media/${filename}-media.scss";`;
const contentScssMedia = `@import "./media.scss";

@media screen and (max-width: 1199px) {
}

@media screen and (max-width: 959px) {
}

@media screen and (max-width: 599px) {
}

@media screen and (max-width: 320px) {
}`;
const contentJs = `"use strict"

import "./script.js";

//import "./modules/${filename}/${filename}-FILENAME-script.js";

// import "./classes/FILENAME.js";

import {
    
} from "./constants/constants";


console.log("${filename} script");`;

// створення файлів
try {
    fs.writeFileSync(filePathHtml, contentHtml);
    console.log(`Файл "${filename + '.html'}" створено в "${folderHtml}"`);
} catch (err) {
    console.log(err);
}
try {
    fs.writeFileSync(filePathScss, contentScss);
    console.log(`Файл "${filename + '-styles.scss'}" створено в "${folderScss}"`);
} catch (err) {
    console.log(err);
}
try {
    fs.writeFileSync(filePathScssMedia, contentScssMedia);
    console.log(`Файл "${filename + '-media.scss'}" створено в "${folderScssMedia}"`);
} catch (err) {
    console.log(err);
}
try {
    fs.writeFileSync(filePathJs, contentJs);
    console.log(`Файл "${filename + '-script.js'}" створено в "${folderJs}"`);
} catch (err) {
    console.log(err);
}

//==================================================
//============ створення папок для модулів =========
//==================================================

const htmlModulesFolderPath         = `${folderHtml}/modules/${filename}`;
const scssModulesFolderPath         = `${folderScss}/modules/${filename}`;
const scssMediaModulesFolderPath    = `${folderScssMedia}/modules/${filename}`;
const jsModulesFolderPath           = `${folderJs}/modules/${filename}`;

try {
    fs.mkdirSync(htmlModulesFolderPath);
    console.log(`Папка "${filename}" створена за шляхом:, "${htmlModulesFolderPath}"`);
} catch (err) {
    console.log(err);
}
try {
    fs.mkdirSync(scssModulesFolderPath);
    console.log(`Папка "${filename}" створена за шляхом:, "${scssModulesFolderPath}"`);
} catch (err) {
    console.log(err);
}
try {
    fs.mkdirSync(scssMediaModulesFolderPath);
    console.log(`Папка "${filename}" створена за шляхом:, "${scssMediaModulesFolderPath}"`);
} catch (err) {
    console.log(err);
}
try {
    fs.mkdirSync(jsModulesFolderPath);
    console.log(`Папка "${filename}" створена за шляхом:, "${jsModulesFolderPath}"`);
} catch (err) {
    console.log(err);
}