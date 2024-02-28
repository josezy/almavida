import PDFObject from 'pdfobject'

const Menu = () => {
    const pdfURL = '/almavida-menu-v2.pdf'
    if(!PDFObject.supportsPDFs){
        window.location.href = pdfURL
    }
    const options = {
        fallbackLink: "<p>Tu navegador no soporta PDFs. Por favor descarga el archivo: <a href='[url]'>Descargar menú</a></p>",
    }
    PDFObject.embed(pdfURL, document.body, options)
    return null;
}

export default Menu
