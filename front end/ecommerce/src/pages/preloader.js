const Preloader = () => {
    const iconPath = process.env.PUBLIC_URL + '/assets/images/';
    return(
        <div className="page-preloader">
    <img className="preloader-logo" src={`${iconPath}favicon.png`} width="120" />
    <div className="preloader-preview-area">
        <div className="ball-pulse">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</div>
    )
}
export default Preloader;