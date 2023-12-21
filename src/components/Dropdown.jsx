import {useState} from "react";
import "../styles/dropdownLanguage.css"
import * as i18n from "i18next";
import i18next from "i18next";
const Dropdown = () => {
    const [currentLanguage,serCurrentLanguage] = useState(i18next.language)
    const[visible,setVisible] = useState(true)

    function handleChangeLanguage(en) {
        setVisible(false)
        i18n.changeLanguage(en)
        serCurrentLanguage(en)
    }

    return(<div className={"dropdown-language"}>
        <div onClick={()=>setVisible(true)} className={"dropdown-visible"}>
            {currentLanguage}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 16L6 10H18L12 16Z" fill="#191C38"/>
            </svg>
        </div>

        {visible&&
        <div className="hiden-element">
            <div className="option" onClick={()=>handleChangeLanguage("en")}>EN</div>
            <div className="option" onClick={()=>handleChangeLanguage("ru")}>RU</div>
            <div className="option" onClick={()=>handleChangeLanguage("ua")}>UA</div>
        </div>}
    </div>)
}
export default Dropdown