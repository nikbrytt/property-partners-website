import "../styles/filter.css"
const Filter = () => {

    return(<div className={"filter"}>
        <div className="search">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="#09121F"/>
            </svg>
            <input placeholder={"Search on map..."} type="text"/>
        </div>
        <div className="dropdown">
            Price
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 14L8 10H16L12 14Z" fill="#09121F"/>
        </svg>
        </div>
        <div className="dropdown">
            Size
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 14L8 10H16L12 14Z" fill="#09121F"/>
            </svg>
        </div>
        <div className="dropdown">
            Bedrooms
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 14L8 10H16L12 14Z" fill="#09121F"/>
            </svg>
        </div>
        <div className="dropdown">
            Location
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 14L8 10H16L12 14Z" fill="#09121F"/>
            </svg>
        </div>
        <div className="dropdown">
            Handover
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 14L8 10H16L12 14Z" fill="#09121F"/>
            </svg>
        </div>
        <div className="dropdown">
            Property type
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 14L8 10H16L12 14Z" fill="#09121F"/>
            </svg>
        </div>

    </div>)
}
export default Filter