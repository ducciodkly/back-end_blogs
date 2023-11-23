// const express = require('express');
// const app = express();
// const path = require('path');

// const router = express.Router();
// const ResizeImange = require('../app/controllers/uploadMiddleware')

// const upload = require('../app/controllers/uploadMiddleware');
// const Resize = require('../config/resize/Resize');


// router.get('/',ResizeImange.show());

// router.post('/post', upload.single('image'), async function (req, res) {
//     // folder upload
//     const imagePath = path.join(__dirname, '/public/images');
//     // call class Resize
//     const fileUpload = new Resize(imagePath);
//     if (!req.file) {
//         res.status(401).json({error: 'Please provide an image'});
//     }
//     const filename = await fileUpload.save(req.file.buffer);
    
//     return res.status(200).json({ name: filename });
// });

// module.exports = router;