import Header from "../components/Header.jsx";
import homeMain from "../assets/homeMain.png";
import "../styles/home.css"
import collection1 from "../assets/collection1.jpg";
import collection2 from "../assets/collection2.jpg";
import collection3 from "../assets/collection3.jpg";
import collection4 from "../assets/collection4.jpg";
import mjl from "../assets/mjl.png";
import meraas from "../assets/meraas.png";
import emar from "../assets/emar.png";
import ellington from "../assets/ellington.png";
import danube from "../assets/danube.png";
import damac from "../assets/damac.png";
import sobha from "../assets/sobha.png";
import conciergeMain from "../assets/conciergeMain.jpg";
import whyDubai from "../assets/whyDubai.jpg";
import whyDubaiMain from "../assets/whyDubaiMain.png";
import kindOfProjects from "../assets/kindOfProjects.jpg"
import visa from "../assets/visa.jpg"
import contactHome from "../assets/contactHome.png"
import {useState} from "react";
import Footer from "../components/Footer.jsx";
import alekseiShyianName from "../assets/teams/aleksei-shyian-min.jpg";
import alexLogachevName from "../assets/teams/alex-logachev-min.jpg";
import allaGerassimovaName from "../assets/teams/alla-gerassimova-min.jpg";
import annaHorshunovaName from "../assets/teams/anna-horshunova-min.jpg";
import dmitriyKoltsovName from "../assets/teams/dmitriy-koltsov-min.jpg";
import kristinaSokolovskayaName from "../assets/teams/kristina-sokolovskaya-min.jpg";
import pavelDyninName from "../assets/teams/pavel-dynin-min.jpg";
import tkachenkoNataliiaName from "../assets/teams/tkachenko-nataliia-min.jpg";
import tykhovaTatianaName from "../assets/teams/tykhova-tatiana-min.jpg";

const Home = () => {
    const [activeKind, setActiveKind] = useState(0);
    const [visibleMembers, setVisibleMembers] = useState(4);
    const team = [
        {
            "image": alexLogachevName, "name": "Alex Logachev", "position": "CEO",
            "social": {
                "telegram": "https://t.me/oleksandr_logachev",
                "instagram":"https://www.instagram.com/logachev_alexsandr?igshid=MzRlODBiNWFlZA%3D%3D",
                "whatsapp":"https://api.whatsapp.com/send/?phone=971588395135&text&type=phone_number&app_absent=0",
                "facebook":"https://www.facebook.com/logachev.alexsandr?mibextid=LQQJ4d"
            }
        },
        {
            "image": alekseiShyianName, "name": "Aleksei Shyian", "position": "Business Developer",
            "social": {
                "instagram": "https://www.instagram.com/dubai_oleksii_shyian",
                "telegram": "https://t.me/brodubai"
            }
        },
        {
            "image": tykhovaTatianaName, "name": "Tykhova Tatiana", "position": "Real estate broker",
            "social": {
                "instagram": "https://www.instagram.com/taffeeta",
                "telegram": "https://t.me/+971522419898",
                "whatsapp":"https://api.whatsapp.com/send/?phone=971522419898&text&type=phone_number&app_absent=0"
            }
        }
        ,
        {
            "image": kristinaSokolovskayaName, "name": "Kristina Sokolovskaya", "position": "CEO Kristal Business Experts",
            "social": {
                "telegram": "https://t.me/+971529568%20390",
            }
        },
        {
            "image": pavelDyninName, "name": "Pavel Dynin", "position": "Real estate broker",
            "social": {
                "telegram": "https://t.me/pavel_dynin",
                "instagram":"https://www.instagram.com/pavel.dynin?igshid=OGQ5Z%20Dc2ODk2ZA%3D%3D",
                "whatsapp":"https://api.whatsapp.com/send/?phone=971585622362&text&type=phone_number&app_absent=0",
                "facebook":"https://www.facebook.com/csdus?mibextid=LQQJ%204d"
            }
        },
        {
            "image": annaHorshunovaName, "name": "Anna Horshunova", "position": "Real estate broker",
            "social": {
                facebook:"https://www.facebook.com/annagorshunova?mibextid=LQQJ4d"
            }
        },
        {
            "image": tkachenkoNataliiaName, "name": "Tkachenko Nataliia", "position": "Real estate broker",
            "social": {
                telegram: "https://t.me/+380665228756",
                instagram:"https://www.instagram.com/natali_invest_dubai?igshid=NzZlODBkYWE4Ng%3D%3D",
                whatsapp:"https://api.whatsapp.com/send/?phone=971562453839&text&type=phone_number&app_absent=0",
            }
        },
        {
            "image": allaGerassimovaName, "name": "Alla Gerassimova", "position": "Marketer, content maker",
            "social": {
                "telegram": "https://t.me/alla_gerassimova",
                "instagram":"https://www.instagram.com/a11gep?igshid=NTc4MTIw+NjQ2YQ%3D%3D",
                "whatsapp":"https://api.whatsapp.com/send/?phone=971555728933&text&type=phone_number&app_absent=0",
            }
        },
        {
            "image": dmitriyKoltsovName, "name": "Dmitriy Koltsov", "position": "Real estate broker",
            "social": {
                "telegram": "https://t.me/brokervdubae",
                "instagram":"https://www.instagram.com/brokervdubae",
                "whatsapp":"https://api.whatsapp.com/send/?phone=971585589938&text&type=phone_number&app_absent=0",
            }
        },
    ]
    const displayedMembers = team.slice(0, visibleMembers);

    const handleTypeClick = (kind) => {
        setActiveKind((prevActiveKind) => (prevActiveKind === kind ? null : kind));
    };
    return (<div className={"home-page"}>
        <Header/>
        <div className="home-banner">
            <div className="content">
                <div className="tittle">
                    <div>Your Space, Your Sanctuary</div>
                    <div>Property Partners - Redefining Home Living</div>
                </div>
                <div className="advantages">
                    <div className="advantages-wrapper">
                        <div className="advantage">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M12 0.5L16.226 6.683L23.413 8.792L18.838 14.722L19.053 22.208L12 19.69L4.94698 22.208L5.16198 14.722L0.586975 8.792L7.77398 6.683L12 0.5ZM9.99998 12H7.99998C7.99996 13.0436 8.40776 14.0458 9.13638 14.7929C9.86499 15.54 10.8567 15.9727 11.8999 15.9988C12.9432 16.0249 13.9553 15.6423 14.7203 14.9326C15.4854 14.2228 15.9428 13.2422 15.995 12.2L16 12H14C14.0023 12.519 13.8028 13.0185 13.4436 13.3932C13.0844 13.7678 12.5937 13.9881 12.075 14.0075C11.5564 14.027 11.0505 13.8441 10.6643 13.4975C10.278 13.1509 10.0416 12.6677 10.005 12.15L9.99998 12Z"
                                    fill="white"/>
                            </svg>
                            15 years of experience
                        </div>
                        <div className="advantage">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M14 19.9995V21.9995H2V19.9995H14ZM14.586 0.685547L22.364 8.46355L20.95 9.87955L19.89 9.52555L17.413 11.9995L23.07 17.6565L21.656 19.0705L16 13.4135L13.596 15.8175L13.879 16.9495L12.464 18.3635L4.686 10.5855L6.101 9.17155L7.231 9.45355L13.525 3.16055L13.172 2.10055L14.586 0.685547Z"
                                    fill="white"/>
                            </svg>
                            Legal counseling
                        </div>
                        <div className="advantage">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M15.224 15.5084L13.011 20.1584C12.9691 20.2463 12.9065 20.3227 12.8285 20.381C12.7505 20.4393 12.6594 20.4778 12.5633 20.493C12.4671 20.5083 12.3686 20.4999 12.2764 20.4686C12.1842 20.4373 12.101 20.384 12.034 20.3134L8.49197 16.5744C8.39735 16.4746 8.27131 16.4104 8.13497 16.3924L3.02797 15.7244C2.93149 15.7117 2.83954 15.6757 2.76006 15.6195C2.68058 15.5634 2.61596 15.4887 2.57177 15.402C2.52758 15.3153 2.50514 15.2191 2.5064 15.1218C2.50765 15.0245 2.53256 14.9289 2.57897 14.8434L5.04097 10.3194C5.10642 10.1984 5.12831 10.0586 5.10297 9.9234L4.15997 4.8604C4.14207 4.76456 4.14778 4.66581 4.17662 4.57268C4.20546 4.47956 4.25656 4.39486 4.3255 4.32592C4.39444 4.25699 4.47913 4.20589 4.57226 4.17704C4.66539 4.1482 4.76414 4.14249 4.85997 4.1604L9.92297 5.1034C10.0582 5.12873 10.198 5.10685 10.319 5.0414L14.843 2.5794C14.9286 2.53297 15.0242 2.50808 15.1216 2.50688C15.219 2.50568 15.3152 2.5282 15.4019 2.5725C15.4887 2.61681 15.5633 2.68155 15.6194 2.76115C15.6755 2.84076 15.7114 2.93282 15.724 3.0294L16.392 8.1354C16.4099 8.27174 16.4742 8.39777 16.574 8.4924L20.313 12.0344C20.3836 12.1014 20.4369 12.1846 20.4682 12.2768C20.4995 12.3691 20.5079 12.4675 20.4926 12.5637C20.4774 12.6599 20.4389 12.7509 20.3806 12.8289C20.3223 12.9069 20.2459 12.9695 20.158 13.0114L15.508 15.2244C15.3835 15.2836 15.2832 15.3839 15.224 15.5084ZM16.021 17.4354L17.435 16.0214L21.678 20.2634L20.263 21.6784L16.021 17.4354Z"
                                    fill="white"/>
                            </svg>
                            Individual approach
                        </div>
                        <div className="advantage">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M13 21V23H11V21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V6H22V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H13ZM8 10C7.40666 10 6.82664 10.1759 6.33329 10.5056C5.83994 10.8352 5.45542 11.3038 5.22836 11.8519C5.0013 12.4001 4.94189 13.0033 5.05764 13.5853C5.1734 14.1672 5.45912 14.7018 5.87868 15.1213C6.29824 15.5409 6.83279 15.8266 7.41473 15.9424C7.99667 16.0581 8.59987 15.9987 9.14805 15.7716C9.69623 15.5446 10.1648 15.1601 10.4944 14.6667C10.8241 14.1734 11 13.5933 11 13H8V10ZM13 10V12H19V10H13ZM13 14V16H19V14H13ZM2 3H22V5H2V3Z"
                                    fill="white"/>
                            </svg>
                            Unique Data
                        </div>
                        <div className="advantage">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M14.121 10.4799C13.9335 10.2924 13.6792 10.1871 13.414 10.1871C13.1489 10.1871 12.8945 10.2924 12.707 10.4799L12 11.1859C11.8155 11.3769 11.5948 11.5293 11.3508 11.6341C11.1068 11.7389 10.8444 11.7941 10.5788 11.7964C10.3133 11.7987 10.0499 11.7481 9.80411 11.6475C9.55832 11.5469 9.33502 11.3984 9.14723 11.2107C8.95944 11.0229 8.81094 10.7996 8.71038 10.5538C8.60982 10.308 8.55921 10.0446 8.56152 9.77906C8.56383 9.51351 8.619 9.25107 8.72382 9.00706C8.82864 8.76305 8.981 8.54236 9.17202 8.35787L14.802 2.72587C16.1349 2.42269 17.5295 2.54746 18.7875 3.08244C20.0454 3.61742 21.1027 4.53536 21.8089 5.70576C22.5151 6.87615 22.8344 8.23941 22.7213 9.6017C22.6083 10.964 22.0686 12.2559 21.179 13.2939L19.071 15.4289L14.121 10.4789V10.4799ZM3.16102 4.46787C4.19578 3.43324 5.54924 2.77785 7.00258 2.60763C8.45592 2.43742 9.9242 2.76234 11.17 3.52987L7.75702 6.94387C7.01782 7.68159 6.59645 8.67917 6.58296 9.72343C6.56946 10.7677 6.96491 11.7758 7.6848 12.5324C8.40469 13.289 9.39193 13.734 10.4356 13.7724C11.4792 13.8108 12.4965 13.4395 13.27 12.7379L13.414 12.6009L17.657 16.8429L13.414 21.0859C13.039 21.4608 12.5303 21.6714 12 21.6714C11.4697 21.6714 10.9611 21.4608 10.586 21.0859L3.16002 13.6599C1.94115 12.4409 1.25641 10.7877 1.25641 9.06387C1.25641 7.34005 1.94115 5.68684 3.16002 4.46787H3.16102Z"
                                    fill="white"/>
                            </svg>
                            Assistance in processing transactions
                        </div>
                        <div className="learn-more">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M16.172 10.9997L10.808 5.63568L12.222 4.22168L20 11.9997L12.222 19.7777L10.808 18.3637L16.172 12.9997H4V10.9997H16.172Z"
                                    fill="#191C38"/>
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
            <div className="image">
                <img src={homeMain}/>
            </div>
        </div>
        <div className="home-banner phone">
            <div className="content">
                <div className="tittle">
                    <div>Your Space, Your Sanctuary</div>
                    <div>Property Partners - Redefining Home Living</div>
                </div>
                <div className="image">
                    <img src={homeMain}/>
                </div>
                <div className="advantages">
                    <div className="advantages-wrapper">
                        <div className="advantage">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M12 0.5L16.226 6.683L23.413 8.792L18.838 14.722L19.053 22.208L12 19.69L4.94698 22.208L5.16198 14.722L0.586975 8.792L7.77398 6.683L12 0.5ZM9.99998 12H7.99998C7.99996 13.0436 8.40776 14.0458 9.13638 14.7929C9.86499 15.54 10.8567 15.9727 11.8999 15.9988C12.9432 16.0249 13.9553 15.6423 14.7203 14.9326C15.4854 14.2228 15.9428 13.2422 15.995 12.2L16 12H14C14.0023 12.519 13.8028 13.0185 13.4436 13.3932C13.0844 13.7678 12.5937 13.9881 12.075 14.0075C11.5564 14.027 11.0505 13.8441 10.6643 13.4975C10.278 13.1509 10.0416 12.6677 10.005 12.15L9.99998 12Z"
                                    fill="white"/>
                            </svg>
                            15 years of experience
                        </div>
                        <div className="advantage">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M14 19.9995V21.9995H2V19.9995H14ZM14.586 0.685547L22.364 8.46355L20.95 9.87955L19.89 9.52555L17.413 11.9995L23.07 17.6565L21.656 19.0705L16 13.4135L13.596 15.8175L13.879 16.9495L12.464 18.3635L4.686 10.5855L6.101 9.17155L7.231 9.45355L13.525 3.16055L13.172 2.10055L14.586 0.685547Z"
                                    fill="white"/>
                            </svg>
                            Legal counseling
                        </div>
                        <div className="advantage">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M15.224 15.5084L13.011 20.1584C12.9691 20.2463 12.9065 20.3227 12.8285 20.381C12.7505 20.4393 12.6594 20.4778 12.5633 20.493C12.4671 20.5083 12.3686 20.4999 12.2764 20.4686C12.1842 20.4373 12.101 20.384 12.034 20.3134L8.49197 16.5744C8.39735 16.4746 8.27131 16.4104 8.13497 16.3924L3.02797 15.7244C2.93149 15.7117 2.83954 15.6757 2.76006 15.6195C2.68058 15.5634 2.61596 15.4887 2.57177 15.402C2.52758 15.3153 2.50514 15.2191 2.5064 15.1218C2.50765 15.0245 2.53256 14.9289 2.57897 14.8434L5.04097 10.3194C5.10642 10.1984 5.12831 10.0586 5.10297 9.9234L4.15997 4.8604C4.14207 4.76456 4.14778 4.66581 4.17662 4.57268C4.20546 4.47956 4.25656 4.39486 4.3255 4.32592C4.39444 4.25699 4.47913 4.20589 4.57226 4.17704C4.66539 4.1482 4.76414 4.14249 4.85997 4.1604L9.92297 5.1034C10.0582 5.12873 10.198 5.10685 10.319 5.0414L14.843 2.5794C14.9286 2.53297 15.0242 2.50808 15.1216 2.50688C15.219 2.50568 15.3152 2.5282 15.4019 2.5725C15.4887 2.61681 15.5633 2.68155 15.6194 2.76115C15.6755 2.84076 15.7114 2.93282 15.724 3.0294L16.392 8.1354C16.4099 8.27174 16.4742 8.39777 16.574 8.4924L20.313 12.0344C20.3836 12.1014 20.4369 12.1846 20.4682 12.2768C20.4995 12.3691 20.5079 12.4675 20.4926 12.5637C20.4774 12.6599 20.4389 12.7509 20.3806 12.8289C20.3223 12.9069 20.2459 12.9695 20.158 13.0114L15.508 15.2244C15.3835 15.2836 15.2832 15.3839 15.224 15.5084ZM16.021 17.4354L17.435 16.0214L21.678 20.2634L20.263 21.6784L16.021 17.4354Z"
                                    fill="white"/>
                            </svg>
                            Individual approach
                        </div>
                        <div className="advantage">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M13 21V23H11V21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V6H22V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H13ZM8 10C7.40666 10 6.82664 10.1759 6.33329 10.5056C5.83994 10.8352 5.45542 11.3038 5.22836 11.8519C5.0013 12.4001 4.94189 13.0033 5.05764 13.5853C5.1734 14.1672 5.45912 14.7018 5.87868 15.1213C6.29824 15.5409 6.83279 15.8266 7.41473 15.9424C7.99667 16.0581 8.59987 15.9987 9.14805 15.7716C9.69623 15.5446 10.1648 15.1601 10.4944 14.6667C10.8241 14.1734 11 13.5933 11 13H8V10ZM13 10V12H19V10H13ZM13 14V16H19V14H13ZM2 3H22V5H2V3Z"
                                    fill="white"/>
                            </svg>
                            Unique Data
                        </div>
                        <div className="advantage">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M14.121 10.4799C13.9335 10.2924 13.6792 10.1871 13.414 10.1871C13.1489 10.1871 12.8945 10.2924 12.707 10.4799L12 11.1859C11.8155 11.3769 11.5948 11.5293 11.3508 11.6341C11.1068 11.7389 10.8444 11.7941 10.5788 11.7964C10.3133 11.7987 10.0499 11.7481 9.80411 11.6475C9.55832 11.5469 9.33502 11.3984 9.14723 11.2107C8.95944 11.0229 8.81094 10.7996 8.71038 10.5538C8.60982 10.308 8.55921 10.0446 8.56152 9.77906C8.56383 9.51351 8.619 9.25107 8.72382 9.00706C8.82864 8.76305 8.981 8.54236 9.17202 8.35787L14.802 2.72587C16.1349 2.42269 17.5295 2.54746 18.7875 3.08244C20.0454 3.61742 21.1027 4.53536 21.8089 5.70576C22.5151 6.87615 22.8344 8.23941 22.7213 9.6017C22.6083 10.964 22.0686 12.2559 21.179 13.2939L19.071 15.4289L14.121 10.4789V10.4799ZM3.16102 4.46787C4.19578 3.43324 5.54924 2.77785 7.00258 2.60763C8.45592 2.43742 9.9242 2.76234 11.17 3.52987L7.75702 6.94387C7.01782 7.68159 6.59645 8.67917 6.58296 9.72343C6.56946 10.7677 6.96491 11.7758 7.6848 12.5324C8.40469 13.289 9.39193 13.734 10.4356 13.7724C11.4792 13.8108 12.4965 13.4395 13.27 12.7379L13.414 12.6009L17.657 16.8429L13.414 21.0859C13.039 21.4608 12.5303 21.6714 12 21.6714C11.4697 21.6714 10.9611 21.4608 10.586 21.0859L3.16002 13.6599C1.94115 12.4409 1.25641 10.7877 1.25641 9.06387C1.25641 7.34005 1.94115 5.68684 3.16002 4.46787H3.16102Z"
                                    fill="white"/>
                            </svg>
                            Assistance in processing transactions
                        </div>
                        <div className="learn-more">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M16.172 10.9997L10.808 5.63568L12.222 4.22168L20 11.9997L12.222 19.7777L10.808 18.3637L16.172 12.9997H4V10.9997H16.172Z"
                                    fill="#191C38"/>
                            </svg>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <div id={"collections"} className="collections">
            <div className="tittle">
                <div>Choose the best from the special collection</div>
                <div>We've curated special offers to cater to a variety of preferences. Whether you're in search of budget-friendly apartments or luxurious villas, we have the perfect option for you. Simply choose the one that suits your preferences, and our expert will get in touch with you within 5 minutes. Your convenience and comfort are our top priorities!
                </div>
            </div>
            <div className="content">
                <div className="collection">
                    <div className="image"><img src={collection1}/></div>
                    <div className="content">
                        <div className="collection-info">
                            <div className="tittle">
                                Best for rent
                            </div>
                            <div style={{
                                display:"flex",
                                flexDirection:"column",
                                gap:16
                            }}>
                            <div className="properties">
                                <div className="property">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none">
                                        <rect width="24" height="24" fill="white"/>
                                        <path
                                            d="M12 4H17.4H19.2H20.9C20.9552 4 21 4.04477 21 4.1V11.9C21 11.9552 20.9552 12 20.9 12H17.1C17.0448 12 17 12.0448 17 12.1V16.9C17 16.9552 16.9552 17 16.9 17H12M12 4H3.1C3.04477 4 3 4.04585 3 4.10108C3 7.54839 3 9.28378 3 12M12 4V6.55858C12 6.5851 12.0105 6.61054 12.0293 6.62929L14.25 8.85M8.4 12H11.9C11.9552 12 12 12.0448 12 12.1V17M3 12C3 14.7162 3 16.4516 3 19.8989C3 19.9541 3.04477 20 3.1 20H4.8H6.6M3 12H4.75858C4.7851 12 4.81054 11.9895 4.82929 11.9707L6.6 10.2M8.4 20H11.9C11.9552 20 12 19.9552 12 19.9V17"
                                            stroke="#191C38" stroke-width="2" stroke-linejoin="bevel"/>
                                    </svg>
                                    4 projects
                                </div>
                                <div className="property">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none">
                                        <path
                                            d="M22 7H23V17H22V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V7ZM20 17H14C12.6739 17 11.4021 16.4732 10.4645 15.5355C9.52678 14.5979 9 13.3261 9 12C9 10.6739 9.52678 9.40215 10.4645 8.46447C11.4021 7.52678 12.6739 7 14 7H20V5H4V19H20V17ZM21 15V9H14C13.2044 9 12.4413 9.31607 11.8787 9.87868C11.3161 10.4413 11 11.2044 11 12C11 12.7956 11.3161 13.5587 11.8787 14.1213C12.4413 14.6839 13.2044 15 14 15H21ZM14 11H17V13H14V11Z"
                                            fill="#191C38"/>
                                    </svg>
                                    from $190,000
                                </div>
                            </div>
                            <div className="button">
                                Get the selection
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path
                                        d="M16.172 11.0002L10.808 5.63617L12.222 4.22217L20 12.0002L12.222 19.7782L10.808 18.3642L16.172 13.0002H4V11.0002H16.172Z"
                                        fill="black"/>
                                </svg>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="collection">
                    <div className="image"><img src={collection2}/></div>
                    <div className="content">
                        <div className="collection-info">
                            <div className="tittle">
                                For families
                            </div>
                            <div style={{
                                display:"flex",
                                flexDirection:"column",
                                gap:16
                            }}>
                                <div className="properties">
                                    <div className="property">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                             fill="none">
                                            <rect width="24" height="24" fill="white"/>
                                            <path
                                                d="M12 4H17.4H19.2H20.9C20.9552 4 21 4.04477 21 4.1V11.9C21 11.9552 20.9552 12 20.9 12H17.1C17.0448 12 17 12.0448 17 12.1V16.9C17 16.9552 16.9552 17 16.9 17H12M12 4H3.1C3.04477 4 3 4.04585 3 4.10108C3 7.54839 3 9.28378 3 12M12 4V6.55858C12 6.5851 12.0105 6.61054 12.0293 6.62929L14.25 8.85M8.4 12H11.9C11.9552 12 12 12.0448 12 12.1V17M3 12C3 14.7162 3 16.4516 3 19.8989C3 19.9541 3.04477 20 3.1 20H4.8H6.6M3 12H4.75858C4.7851 12 4.81054 11.9895 4.82929 11.9707L6.6 10.2M8.4 20H11.9C11.9552 20 12 19.9552 12 19.9V17"
                                                stroke="#191C38" stroke-width="2" stroke-linejoin="bevel"/>
                                        </svg>
                                        13 projects
                                    </div>
                                    <div className="property">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                             fill="none">
                                            <path
                                                d="M22 7H23V17H22V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V7ZM20 17H14C12.6739 17 11.4021 16.4732 10.4645 15.5355C9.52678 14.5979 9 13.3261 9 12C9 10.6739 9.52678 9.40215 10.4645 8.46447C11.4021 7.52678 12.6739 7 14 7H20V5H4V19H20V17ZM21 15V9H14C13.2044 9 12.4413 9.31607 11.8787 9.87868C11.3161 10.4413 11 11.2044 11 12C11 12.7956 11.3161 13.5587 11.8787 14.1213C12.4413 14.6839 13.2044 15 14 15H21ZM14 11H17V13H14V11Z"
                                                fill="#191C38"/>
                                        </svg>
                                        from $170,000
                                    </div>
                                </div>
                                <div className="button">
                                    Get the selection
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none">
                                        <path
                                            d="M16.172 11.0002L10.808 5.63617L12.222 4.22217L20 12.0002L12.222 19.7782L10.808 18.3642L16.172 13.0002H4V11.0002H16.172Z"
                                            fill="black"/>
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="collection">
                    <div className="image"><img src={collection3}/></div>
                    <div className="content">
                        <div className="collection-info">
                            <div className="tittle" style={{fontSize:36}}>
                                Villas
                                & Townhouses
                            </div>
                            <div style={{
                                display:"flex",
                                flexDirection:"column",
                                gap:16
                            }}>
                                <div className="properties">
                                    <div className="property">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                             fill="none">
                                            <rect width="24" height="24" fill="white"/>
                                            <path
                                                d="M12 4H17.4H19.2H20.9C20.9552 4 21 4.04477 21 4.1V11.9C21 11.9552 20.9552 12 20.9 12H17.1C17.0448 12 17 12.0448 17 12.1V16.9C17 16.9552 16.9552 17 16.9 17H12M12 4H3.1C3.04477 4 3 4.04585 3 4.10108C3 7.54839 3 9.28378 3 12M12 4V6.55858C12 6.5851 12.0105 6.61054 12.0293 6.62929L14.25 8.85M8.4 12H11.9C11.9552 12 12 12.0448 12 12.1V17M3 12C3 14.7162 3 16.4516 3 19.8989C3 19.9541 3.04477 20 3.1 20H4.8H6.6M3 12H4.75858C4.7851 12 4.81054 11.9895 4.82929 11.9707L6.6 10.2M8.4 20H11.9C11.9552 20 12 19.9552 12 19.9V17"
                                                stroke="#191C38" stroke-width="2" stroke-linejoin="bevel"/>
                                        </svg>
                                        5 projects
                                    </div>
                                    <div className="property">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                             fill="none">
                                            <path
                                                d="M22 7H23V17H22V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V7ZM20 17H14C12.6739 17 11.4021 16.4732 10.4645 15.5355C9.52678 14.5979 9 13.3261 9 12C9 10.6739 9.52678 9.40215 10.4645 8.46447C11.4021 7.52678 12.6739 7 14 7H20V5H4V19H20V17ZM21 15V9H14C13.2044 9 12.4413 9.31607 11.8787 9.87868C11.3161 10.4413 11 11.2044 11 12C11 12.7956 11.3161 13.5587 11.8787 14.1213C12.4413 14.6839 13.2044 15 14 15H21ZM14 11H17V13H14V11Z"
                                                fill="#191C38"/>
                                        </svg>
                                        from $2,100,000
                                    </div>
                                </div>
                                <div className="button">
                                    Get the selection
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none">
                                        <path
                                            d="M16.172 11.0002L10.808 5.63617L12.222 4.22217L20 12.0002L12.222 19.7782L10.808 18.3642L16.172 13.0002H4V11.0002H16.172Z"
                                            fill="black"/>
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="collection">
                    <div className="image"><img src={collection4}/></div>
                    <div className="content">
                        <div className="collection-info">
                            <div className="tittle">
                                For resale
                            </div>
                            <div style={{
                                display:"flex",
                                flexDirection:"column",
                                gap:16
                            }}>

                            <div className="properties">
                                <div className="property">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none">
                                        <rect width="24" height="24" fill="white"/>
                                        <path
                                            d="M12 4H17.4H19.2H20.9C20.9552 4 21 4.04477 21 4.1V11.9C21 11.9552 20.9552 12 20.9 12H17.1C17.0448 12 17 12.0448 17 12.1V16.9C17 16.9552 16.9552 17 16.9 17H12M12 4H3.1C3.04477 4 3 4.04585 3 4.10108C3 7.54839 3 9.28378 3 12M12 4V6.55858C12 6.5851 12.0105 6.61054 12.0293 6.62929L14.25 8.85M8.4 12H11.9C11.9552 12 12 12.0448 12 12.1V17M3 12C3 14.7162 3 16.4516 3 19.8989C3 19.9541 3.04477 20 3.1 20H4.8H6.6M3 12H4.75858C4.7851 12 4.81054 11.9895 4.82929 11.9707L6.6 10.2M8.4 20H11.9C11.9552 20 12 19.9552 12 19.9V17"
                                            stroke="#191C38" stroke-width="2" stroke-linejoin="bevel"/>
                                    </svg>
                                    6 projects
                                </div>
                                <div className="property">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none">
                                        <path
                                            d="M22 7H23V17H22V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V7ZM20 17H14C12.6739 17 11.4021 16.4732 10.4645 15.5355C9.52678 14.5979 9 13.3261 9 12C9 10.6739 9.52678 9.40215 10.4645 8.46447C11.4021 7.52678 12.6739 7 14 7H20V5H4V19H20V17ZM21 15V9H14C13.2044 9 12.4413 9.31607 11.8787 9.87868C11.3161 10.4413 11 11.2044 11 12C11 12.7956 11.3161 13.5587 11.8787 14.1213C12.4413 14.6839 13.2044 15 14 15H21ZM14 11H17V13H14V11Z"
                                            fill="#191C38"/>
                                    </svg>
                                    from $150,000
                                </div>
                            </div>
                            <div className="button">
                                Get the selection
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path
                                        d="M16.172 11.0002L10.808 5.63617L12.222 4.22217L20 12.0002L12.222 19.7782L10.808 18.3642L16.172 13.0002H4V11.0002H16.172Z"
                                        fill="black"/>
                                </svg>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="partners">
            <img src={emar} alt="EMAR Partner"/>

            <img src={meraas} alt="Meraas Partner"/>
            <img src={sobha} alt="Sobha Partner"/>
            <img src={ellington} alt="Ellington Partner"/>
            <img src={danube} alt="Danube Partner"/>

            <img src={mjl} alt="MJL Partner"/>


            <img src={damac} alt="Damac Partner"/>

        </div>
        <div className="why-dubai">
            <div className={"div1"}><img src={whyDubaiMain}/></div>
            <div className={"dark"}>Why Dubai?</div>
            <div className={"light"}>
                <div className="tittle">Profitable real estate</div>
                <div className="description">Real estate is 50% of Dubai's GDP</div>
            </div>
            <div className={"orange"}>
                <div className="tittle">Stability</div>
                <div className="description">Recent years saw a 20-25% surge in property prices, ensuring a stable ROI
                </div>
            </div>
            <div className={"light"}>
                <div className="tittle">Dynamic market</div>
                <div className="description">60-65K annual projects, 3-4% growth</div>
            </div>
            <div className={"image-grid"}><img src={whyDubai}/></div>
            <div className={"light"}>
                <div className="tittle">Stability</div>
                <div className="description">Recent years saw a 20-25% surge in property prices, ensuring a stable ROI
                </div>
            </div>
        </div>
        <div className="kind-of-projects">
            <div className="image">
                <img src={kindOfProjects}/>
            </div>
            <div className="content">
                <div className="tittle">
                    What kind of projects we can tailor to the client
                </div>
                <div className="types">
                    <div className={`type ${activeKind === 0 ? 'active' : ''}`}>
                        <div className="visible-element" onClick={() => handleTypeClick(0)}>
                            <div className="tittle">Primary real estate</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M12 13.1722L16.95 8.22217L18.364 9.63617L12 16.0002L5.63599 9.63617L7.04999 8.22217L12 13.1722Z"
                                    fill="#191C38"/>
                            </svg>
                        </div>
                        <div className="hiden-text">Our partners are Dubai's largest real estate developers, which will
                            allow you to get insider information on new projects.
                        </div>
                    </div>
                    <div className={`type ${activeKind === 1 ? 'active' : ''}`}>
                        <div className="visible-element" onClick={() => handleTypeClick(1)}>
                            <div className="tittle">Secondary real estate</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M12 13.1722L16.95 8.22217L18.364 9.63617L12 16.0002L5.63599 9.63617L7.04999 8.22217L12 13.1722Z"
                                    fill="#191C38"/>
                            </svg>
                        </div>
                        <div className="hiden-text">Our partners are Dubai's largest real estate developers, which will
                            allow you to get insider information on new projects.
                        </div>
                    </div>
                    <div className={`type ${activeKind === 2 ? 'active' : ''}`}>
                        <div className="visible-element" onClick={() => handleTypeClick(2)}>
                            <div className="tittle">Rentals</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M12 13.1722L16.95 8.22217L18.364 9.63617L12 16.0002L5.63599 9.63617L7.04999 8.22217L12 13.1722Z"
                                    fill="#191C38"/>
                            </svg>
                        </div>
                        <div className="hiden-text">Our partners are Dubai's largest real estate developers, which will
                            allow you to get insider information on new projects.
                        </div>
                    </div>
                    <div className={`type ${activeKind === 3 ? 'active' : ''}`}>
                        <div className="visible-element" onClick={() => handleTypeClick(3)}>
                            <div className="tittle">Commercial real estate</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M12 13.1722L16.95 8.22217L18.364 9.63617L12 16.0002L5.63599 9.63617L7.04999 8.22217L12 13.1722Z"
                                    fill="#191C38"/>
                            </svg>
                        </div>
                        <div className="hiden-text">Our partners are Dubai's largest real estate developers, which will
                            allow you to get insider information on new projects.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="consulting">
            <div className="tittle">
                <div>Consulting</div>
                <div>What kind of consulting services do we provide?</div>
            </div>
            <div className="content">
                <div className="image">
                    <img src={visa}/>
                </div>
                <div className="consulting-content">
                    <div className="consult">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z"
                                fill="#C29773"/>
                        </svg>
                        Registration of a local company (LLC)
                    </div>
                    <div className="consult">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z"
                                fill="#C29773"/>
                        </svg>
                        Investor Visa for 22 years or 10 years
                    </div>
                    <div className="consult">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z"
                                fill="#C29773"/>
                        </svg>
                        Issuance of UAE resident visa (employee or freelancer)
                    </div>
                    <div className="consult">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z"
                                fill="#C29773"/>
                        </svg>
                        Registration of a company in a free economic zone
                    </div>
                </div>
            </div>
        </div>
        <div className="our-team">
            <div className="tittle">
                Our team
            </div>
            <div className="team">
                {displayedMembers.map((member, index) => (
                    <div key={index} className="member">
                        <div className="image"><img src={member.image}/></div>
                        <div className="information">
                            <div className="general-info">
                                <div className="name">{member.name}</div>
                                <div className="position">{member.position}</div>
                            </div>
                            <div className="social">

                                {member.social.facebook&&<svg style={{cursor:"pointer"}} onClick={()=>window.open(member.social.facebook)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 21.879V14.89H7.898V12H10.438V9.797C10.438 7.291 11.93 5.907 14.215 5.907C15.309 5.907 16.453 6.102 16.453 6.102V8.562H15.193C13.95 8.562 13.563 9.333 13.563 10.124V12H16.336L15.893 14.89H13.563V21.879C18.343 21.129 22 16.99 22 12C22 6.477 17.523 2 12 2Z"
                                        fill="#191C38"
                                    />
                                </svg>}
                                {member.social.instagram&&
                                    <svg style={{cursor:"pointer"}} onClick={()=>window.open(member.social.instagram)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none">
                                        <path
                                            d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"
                                            fill="#191C38"/>
                                    </svg>}
                                {member.social.whatsapp&&
                                    <svg style={{cursor:"pointer"}} onClick={()=>window.open(member.social.whatsapp)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none">
                                        <path
                                            d="M2.00401 22L3.35601 17.032C2.46515 15.5049 1.99711 13.768 2.00001 12C2.00001 6.477 6.47701 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.2328 22.0029 8.49667 21.5352 6.97001 20.645L2.00401 22ZM8.39101 7.308C8.26188 7.31602 8.13569 7.35003 8.02001 7.408C7.91153 7.46943 7.81251 7.54622 7.72601 7.636C7.60601 7.749 7.53801 7.847 7.46501 7.942C7.09542 8.423 6.89662 9.01342 6.90001 9.62C6.90201 10.11 7.03001 10.587 7.23001 11.033C7.63901 11.935 8.31201 12.89 9.20101 13.775C9.41501 13.988 9.62401 14.202 9.84901 14.401C10.9524 15.3725 12.2673 16.073 13.689 16.447L14.258 16.534C14.443 16.544 14.628 16.53 14.814 16.521C15.1053 16.506 15.3896 16.4271 15.647 16.29C15.813 16.202 15.891 16.158 16.03 16.07C16.03 16.07 16.073 16.042 16.155 15.98C16.29 15.88 16.373 15.809 16.485 15.692C16.568 15.606 16.64 15.505 16.695 15.39C16.773 15.227 16.851 14.916 16.883 14.657C16.907 14.459 16.9 14.351 16.897 14.284C16.893 14.177 16.804 14.066 16.707 14.019L16.125 13.758C16.125 13.758 15.255 13.379 14.724 13.137C14.668 13.1126 14.608 13.0987 14.547 13.096C14.4786 13.089 14.4095 13.0967 14.3443 13.1186C14.2791 13.1405 14.2193 13.1761 14.169 13.223V13.221C14.164 13.221 14.097 13.278 13.374 14.154C13.3325 14.2098 13.2754 14.2519 13.2098 14.2751C13.1443 14.2982 13.0733 14.3013 13.006 14.284C12.9409 14.2666 12.877 14.2445 12.815 14.218C12.691 14.166 12.648 14.146 12.563 14.109L12.558 14.107C11.9859 13.8572 11.4562 13.5198 10.988 13.107C10.862 12.997 10.745 12.877 10.625 12.761C10.2316 12.3842 9.88873 11.958 9.60501 11.493L9.54601 11.398C9.50364 11.3342 9.46937 11.2653 9.44401 11.193C9.40601 11.046 9.50501 10.928 9.50501 10.928C9.50501 10.928 9.74801 10.662 9.86101 10.518C9.9551 10.3983 10.0429 10.2738 10.124 10.145C10.242 9.955 10.279 9.76 10.217 9.609C9.93701 8.925 9.64701 8.244 9.34901 7.568C9.29001 7.434 9.11501 7.338 8.95601 7.319C8.90201 7.313 8.84801 7.307 8.79401 7.303C8.65972 7.29633 8.52515 7.29766 8.39101 7.307V7.308Z"
                                            fill="#191C38"/>
                                    </svg>}
                                {member.social.telegram&&
                                    <svg style={{cursor:"pointer"}} onClick={()=>window.open(member.social.telegram)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none">
                                        <path
                                            d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM8.89 13.17L8.903 13.163L9.773 16.033C9.885 16.344 10.039 16.4 10.226 16.374C10.414 16.349 10.513 16.248 10.636 16.13L11.824 14.982L14.374 16.87C14.84 17.127 15.175 16.994 15.291 16.438L16.948 8.616C17.131 7.888 16.811 7.596 16.246 7.828L6.513 11.588C5.849 11.854 5.853 12.226 6.393 12.391L8.89 13.171V13.17Z"
                                            fill="#191C38"/>
                                    </svg>}

                            </div>

                        </div>
                    </div>
                ))}

            </div>
            {
                visibleMembers<=displayedMembers.length&&

                <div className="show-more" onClick={() => setVisibleMembers(visibleMembers + 4)}>
                    <div className="button">
                        Show more
                    </div>
                </div>
            }
        </div>
        <div className="contact-form">
            <div className="image">
                <img src={contactHome}/>
            </div>
            <div className="contact-form-form">
                <div className="tittle">
                    <div>Would you like to the first to know about the launches of sales of promising projects in
                        Dubai?
                    </div>
                    <div>Text your phone number, and our real estate expert real estate expert will contact you within 5
                        minutes.
                    </div>
                </div>
                <div className="form">
                    <div className="form-input">
                        <input placeholder={"Your name"} type="text"/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M20 22H4V20C4 18.6739 4.52678 17.4021 5.46447 16.4645C6.40215 15.5268 7.67392 15 9 15H15C16.3261 15 17.5979 15.5268 18.5355 16.4645C19.4732 17.4021 20 18.6739 20 20V22ZM12 13C11.2121 13 10.4319 12.8448 9.7039 12.5433C8.97595 12.2417 8.31451 11.7998 7.75736 11.2426C7.20021 10.6855 6.75825 10.0241 6.45672 9.2961C6.15519 8.56815 6 7.78793 6 7C6 6.21207 6.15519 5.43185 6.45672 4.7039C6.75825 3.97595 7.20021 3.31451 7.75736 2.75736C8.31451 2.20021 8.97595 1.75825 9.7039 1.45672C10.4319 1.15519 11.2121 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7C18 8.5913 17.3679 10.1174 16.2426 11.2426C15.1174 12.3679 13.5913 13 12 13Z"
                                fill="#C29773"/>
                        </svg>
                    </div>
                    <div className="form-input">
                        <input placeholder={"Phone number"} type="text"/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M21 16.42V19.956C21.0001 20.2092 20.9042 20.453 20.7316 20.6382C20.559 20.8234 20.3226 20.9363 20.07 20.954C19.633 20.984 19.276 21 19 21C10.163 21 3 13.837 3 5C3 4.724 3.015 4.367 3.046 3.93C3.06372 3.67744 3.17658 3.44101 3.3618 3.26841C3.54703 3.09581 3.79082 2.99989 4.044 3H7.58C7.70404 2.99987 7.8237 3.04586 7.91573 3.12902C8.00776 3.21218 8.0656 3.32658 8.078 3.45C8.101 3.68 8.122 3.863 8.142 4.002C8.34073 5.38892 8.748 6.73783 9.35 8.003C9.445 8.203 9.383 8.442 9.203 8.57L7.045 10.112C8.36445 13.1865 10.8145 15.6365 13.889 16.956L15.429 14.802C15.4919 14.714 15.5838 14.6509 15.6885 14.6237C15.7932 14.5964 15.9042 14.6068 16.002 14.653C17.267 15.2539 18.6156 15.6601 20.002 15.858C20.141 15.878 20.324 15.9 20.552 15.922C20.6752 15.9346 20.7894 15.9926 20.8724 16.0846C20.9553 16.1766 21.0012 16.2961 21.001 16.42H21Z"
                                fill="#C29773"/>
                        </svg>
                    </div>
                    <div className="form-button">Send
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                                fill="white"/>
                        </svg></div>
                    <div className="form-text">By clicking on the button you agree to the terms and conditions of data
                        processing
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>)
}
export default Home