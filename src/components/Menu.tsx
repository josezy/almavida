
const Menu = () => {
    const pdfURL = '/almavida-menu-v2.pdf'
    const iframeStyle = { width: '100svw', height: '100svh' }
    return <iframe src={pdfURL} style={iframeStyle} />
}

export default Menu
