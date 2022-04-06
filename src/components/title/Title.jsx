const Title = ({subtitle, title}) => {
    return ( 
        <div className="title-section">
            <h5 className="subtitle">{subtitle}</h5>
            <h2 className="title">{title}</h2>
        </div>
    );
}
 
export default Title;