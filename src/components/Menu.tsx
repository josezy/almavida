
const Menu = () => {
    const pdfURL = '/almavida-menu-v2.pdf';
    return (
        <iframe src={pdfURL} style={{width: '100vw', height: '100vh'}} />
    );
};
export default Menu;
