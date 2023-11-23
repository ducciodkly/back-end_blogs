// const sharp = require('sharp');
// const uuidv4 = require('uuid/v4');
// const path = require('path');

// class uploadResize {
//     async show (req, res) {
//         await res.render('index')
//     }

//     upload (req,res) {
//       upload.single('image'), async function (req, res) {
//         // folder upload
//         const imagePath = path.join(__dirname, '/public/images');
//         // call class Resize
//         const fileUpload = new Resize(imagePath);
//         if (!req.file) {
//             res.status(401).json({error: 'Please provide an image'});
//         }
//         const filename = await fileUpload.save(req.file.buffer);
        
//         return res.status(200).json({ name: filename });
//     }
//   }
// }


// class Resize {
//   constructor(folder) {
//     this.folder = folder;
//   }
//   async save(buffer) {
//     const filename = Resize.filename();
//     const filepath = this.filepath(filename);

//     await sharp(buffer)
//       .resize(300, 300, { 
//         fit: sharp.fit.inside,
//         withoutEnlargement: true
//       })
//       .toFile(filepath);
    
//     return filename;
//   }
//   static filename() {
//     return `${uuidv4()}.png`;
//   }
//   filepath(filename) {
//     return path.resolve(`${this.folder}/${filename}`)
//   }
// }


// module.exports = new uploadResize ();
// module.exports = new Resize();
