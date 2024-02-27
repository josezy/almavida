
const Menu = () => {
    const pdfURL = '/almavida-menu-v2.pdf'
    const iframeStyle = { width: '100vw', height: '100vh' }
    return <iframe src={pdfURL} style={iframeStyle} />
}

export default Menu
