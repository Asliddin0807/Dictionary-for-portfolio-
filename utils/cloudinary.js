const cloudinary = require('cloudinary')
require('dotenv').config()


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

const upload = async(fileToUploadImage) => {
    return new Promise((resolve) => {
        cloudinary.uploader.upload(fileToUploadImage, (result) => {
            resolve({
                url: result.secure_url
            },
            {
                resource_type: "auto"
                
            }
            )
        })
    })
}



module.exports = upload