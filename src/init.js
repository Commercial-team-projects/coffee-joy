import fs from 'fs';
import path from 'path';

const sectionName = [
                        "header", 
                        "hero",
                        "welcome",
                        "quality",
                        "expirience",
                        "subscribe",
                        "testimonials", 
                        "location",
                        "footer",
                        "mobile-menu",
                        "modal-success",
                    ]
const partials = './partials/';
const css = './css/';

// fs.readdir(partials, (err, files) => {
//     if (err) {
//       console.error('Ошибка чтения папки:', err);
//       return;
//     }
  
//     files.forEach(file => {
//       const filePath = path.join(partials, file);
//       // Проверяем, что это файл, а не подпапка (если нужно удалять только файлы)
//       fs.stat(filePath, (statErr, stats) => {
//         if (statErr) {
//           console.error(`Ошибка получения статистики файла ${filePath}:`, statErr);
//           return;
//         }
//         if (stats.isFile()) {
//           fs.rm(filePath, (rmErr) => {
//             if (rmErr) {
//               console.error(`Ошибка при удалении файла ${filePath}:`, rmErr);
//             } else {
//               console.log(`Файл ${filePath} успешно удален.`);
//             }
//           });
//         }
//       });
//     });
//   });

//   fs.readdir(css, (err, files) => {
//     if (err) {
//       console.error('Ошибка чтения папки:', err);
//       return;
//     }
  
//     files.forEach(file => {
//       const filePath = path.join(css, file);
//       // Проверяем, что это файл, а не подпапка (если нужно удалять только файлы)
//       fs.stat(filePath, (statErr, stats) => {
//         if (statErr) {
//           console.error(`Ошибка получения статистики файла ${filePath}:`, statErr);
//           return;
//         }
//         if (stats.isFile()) {
//           fs.rm(filePath, (rmErr) => {
//             if (rmErr) {
//               console.error(`Ошибка при удалении файла ${filePath}:`, rmErr);
//             } else {
//               console.log(`Файл ${filePath} успешно удален.`);
//             }
//           });
//         }
//       });
//     });
//   });

// sectionName.forEach((section)=> {
//     if(section==="header"){
//         fs.writeFile(path.join(partials, `${section}.html`), 
//     `<header class="section"><div class="container"></div></header>`, (err) => {
//         if (err) {
//         console.error('Error:', err);
//         return;
//         }
//         console.log('File created successfuly!');
//     });
//     }

//     if(section==="footer"){
//         fs.writeFile(path.join(partials, `${section}.html`), 
//     `<footer class="section"><div class="container"></div></footer>`, (err) => {
//         if (err) {
//         console.error('Error:', err);
//         return;
//         }
//         console.log('File created successfuly!');
//     });
//     }
//     fs.writeFile(path.join(partials, `${section}.html`), 
//     `<section class="section"><div class="container"></div></section>`, (err) => {
//         if (err) {
//         console.error('Error:', err);
//         return;
//         }
//         console.log('File created successfuly!');
//     });
// });

// sectionName.forEach((section)=> {
//     fs.writeFile(path.join(css, `${section}.css`), 
//     `/*Styles for section ${section}*/ `, (err) => {
//         if (err) {
//         console.error('Error:', err);
//         return;
//         }
//         console.log('File created successfuly!');
//     });
// });
// fs.writeFile(path.join(css, `reset.css`), 
//     `/*Reset styles*/
// h1,
// h2,
// h3,
// h4,
// h5,
// h6,
// p {
//   margin: 0;
// }

// p:last-child {
//   margin-bottom: 0;
// }

// ul {
//   margin: 0;
//   padding: 0;
//   list-style: none;
// }

// a {
//   color: currentColor;
//   text-decoration: none;
// }

// button {
//   cursor: pointer;
// }

// img {
//   display: block;
//   max-width: 100%;
//   height: auto;
// }`, (err) => {
//         if (err) {
//         console.error('Error:', err);
//         return;
//         }
//         console.log('File created successfuly!');
// });
// fs.writeFile(path.join(css, `base.css`), 
//     `/*Base styles*/ 
// :root {}
// body {}`, (err) => {
//         if (err) {
//         console.error('Error:', err);
//         return;
//         }
//         console.log('File created successfuly!');
// });
// fs.writeFile(path.join(css, `container.css`), 
//     `/* Styles for Mobile devices */
//     .container {
//       min-width: 320px;
//       max-width: 375px;
//       margin: 0 auto;
//       padding: 0 16px;
//     }
//     /* Styles for Tablet devices */
//     @media only screen and (min-width: 768px) {
//       .container {
//         max-width: 768px;
//       }
//     }
//     /* Styles for Desktop devices */
//     @media only screen and (min-width: 1200px) {
//       .container {
//         max-width: 1200px;
//       }
//     }`, (err) => {
//         if (err) {
//         console.error('Error:', err);
//         return;
//         }
//         console.log('File created successfuly!');
// });


fs.readdir(css, (err, files) => {
      if (err) {
        console.error('Ошибка при чтении директории:', err); // Обработка ошибки
        return;
      }
      files.forEach(file => {
        if(file!=='styles.css' || file!=='style.css')
            fs.appendFile(path.join(css, `styles.css`), 
            `@import url('./${file}');\n`, (err) => {
                if (err) {
                console.error('Error:', err);
                return;
                }
                console.log(`File ${file} imported successfuly!`);
            });
        //console.log(file); // Выводим имя каждого файла
      });
    });

    fs.readdir(css, (err, files) => {
      if (err) {
        console.error('Ошибка при чтении директории:', err); // Обработка ошибки
        return;
      }
      files.forEach(file => {
        
            fs.writeFile(path.join(partials, `index.html`), 
            `<!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="UTF-8" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Coffee Joy</title>
                <link rel="stylesheet" href="./css/styles.css" />
              </head>
              <body>
                <load src="./partials/header.html" />
            
                <main>
                  <load src="./partials/${file}" />
                  <load src="./partials/welcome.html" />
                  <load src="./partials/quality.html" />
                  <load src="./partials/expirience.html" />
                  <load src="./partials/subscribe.html" />
                  <load src="./partials/testimonials.html" />
                  <load src="./partials/location.html" />
                  <load src="./partials/mobile-menu.html" />
                  <load src="./partials/modal-success.html" />
                </main>
            
                <load src="./partials/footer.html" />
            
                <script type="module" src="./main.js"></script>
              </body>
            </html>`, 
            (err) => {
                if (err) {
                console.error('Error:', err);
                return;
                }
                console.log(`File ${file} imported successfuly!`);
            });
        //console.log(file); // Выводим имя каждого файла
      });
    });

console.log("Thanks! I'm alive!");