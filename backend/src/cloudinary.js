const cloudinary = require('cloudinary').v2

// * Configuracion
cloudinary.config({
    cloud_name: 'proyect1',
    api_key: '951874597583875',
    api_secret: 'hoBceweCR6gjWy5KJB8lJ6RXaIc',
    secure: true
})

// !--------------------------------
const uploadImage = async (filePath) => {
    console.log(filePath)
    return await cloudinary.uploader.upload(filePath, { // * cuando suba la imagen que lo guarde en la carpeta products
        folder: 'products'
    })
}

module.exports = {
    uploadImage
}