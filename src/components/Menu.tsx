import PDFObject from 'pdfobject'

const Menu = () => {
    const pdfURL = '/almavida-menu-v2.pdf'
    if(!PDFObject.supportsPDFs){
        window.location.href = pdfURL
    }
    PDFObject.embed(pdfURL)
    return null;
}

export default Menu
