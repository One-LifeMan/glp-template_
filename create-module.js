// node create-module.js slider index //

const fs    = require('fs');
const path  = require('path');

// шляхи де повинні бути створені файли
const folderHtmlModules        = './src/html/modules';
const folderScssModules        = './src/scss/modules';
const folderScssMediaModules   = './src/scss/media/modules';
const folderJsModules          = './src/js/modules';

// отримуємо значення з команди
const fatherModule = process.argv[3];

let moduleName = "";

function createModuleName(father) {
    if (father) {
        moduleName = `${father}-${process.argv[2]}`;
    } else {
        moduleName = `${process.argv[2]}`;
    };
};
createModuleName(fatherModule);

// шляхи та назви створених файлів
let filePathHtml       = "";
let filePathScss       = "";
let filePathScssMedia  = "";
let filePathJs         = "";

function createModulePath(father) {
    if (father) {
        filePathHtml       = path.join(folderHtmlModules, father, moduleName + '.html');
        filePathScss       = path.join(folderScssModules, father, moduleName + '-styles.scss');
        filePathScssMedia  = path.join(folderScssMediaModules, father, moduleName + '-media.scss');
        filePathJs         = path.join(folderJsModules, father, moduleName + '-script.js');
    } else {
        filePathHtml       = path.join(folderHtmlModules, moduleName + '.html');
        filePathScss       = path.join(folderScssModules, moduleName + '-styles.scss');
        filePathScssMedia  = path.join(folderScssMediaModules, moduleName + '-media.scss');
        filePathJs         = path.join(folderJsModules, moduleName + '-script.js');
    };
};
createModulePath(fatherModule);



// контент кожного файлу
const contentHtml = ``;
const contentScss = ``;
const contentScssMedia = `@media screen and (max-width: 1199px) {
}

@media screen and (max-width: 959px) {
}

@media screen and (max-width: 599px) {
}

@media screen and (max-width: 320px) {
}`;
let contentJs;
if (fatherModule) {
    contentJs = `console.log("${fatherModule}-${moduleName}-script");`;
} else {
    contentJs = `console.log("${moduleName}-script");`;
}

// створення файлів
try {
    fs.writeFileSync(filePathHtml, contentHtml);
    if (fatherModule) {
        console.log(`Файл "${moduleName + '.html'}" створено в "${folderHtmlModules + fatherModule}"`);
    } else {
        console.log(`Файл "${moduleName + '.html'}" створено в "${folderHtmlModules}"`);
    }
} catch (err) {
    console.log(err);
}

try {
    fs.writeFileSync(filePathScss, contentScss);
    if (fatherModule) {
        console.log(`Файл "${moduleName + '-styles.scss'}" створено в "${folderScssModules + fatherModule}"`);
    } else {
        console.log(`Файл "${moduleName + '-styles.scss'}" створено в "${folderScssModules}"`);
    }
} catch (err) {
    console.log(err);
}

try {
    fs.writeFileSync(filePathScssMedia, contentScssMedia);
    if (fatherModule) {
        console.log(`Файл "${moduleName + '-media.scss'}" створено в "${folderScssMediaModules + fatherModule}"`);
    } else {
        console.log(`Файл "${moduleName + '-media.scss'}" створено в "${folderScssMediaModules}"`);
    }
} catch (err) {
    console.log(err);
}

try {
    fs.writeFileSync(filePathJs, contentJs);
    if (fatherModule) {
        console.log(`Файл "${moduleName + '-script.js'}" створено в "${folderJsModules + fatherModule}"`);
    } else {
        console.log(`Файл "${moduleName + '-script.js'}" створено в "${folderJsModules}"`);
    }
} catch (err) {
    console.log(err);
}
