
import "../styles/projectSimilar.css"
import MaxLengthText from "./MaxLengthText.jsx";
import DynamicTruncatedText from "./DynamicTruncatedText.jsx";
const ProjectSimilar = ({project}) => {
    function formatNumberWithCommas(value) {
        value = (Number(value)/3.16).toFixed(0).toString()
        return value.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return(
        <div className="project-similar" style={{ height: '100%' }} onClick={() => window.location.href = `/project/${project._id}`}>
            <div className="image-container"
                 style={{
                     background: `linear-gradient(0deg, #000 -58.46%, rgba(0, 0, 0, 0.00) 96.51%), url(${project.imageSrcMain}) lightgray 50% / cover no-repeat`,
                 }}
            >

            </div>
            <div className="project-details">
                <div className="general-info">
                    <div className="name">
                      <DynamicTruncatedText text={project.projectName}
                      customBreakpoints={{
                          1920:15,
                          1350:12,
                          1199:50,
                          910:12,
                          767:50
                      }}/>
                    </div>
                    <div className="developer">
                        <DynamicTruncatedText text={project.developer}
                                              customBreakpoints={{
                                                  1920:20,
                                                  1199:50,
                                                  767:50
                                              }}/>
                    </div>
                </div>
                <div className="price-info">
                    <div className="price"><span>from</span> ${formatNumberWithCommas(project.priceFrom)}</div>
                    <div className="price-m2">$ {(Number(project.priceFrom)/3.16 / Number(project.sizeFrom)).toFixed(0)} for m²</div>
                </div>
            </div>

        </div>
    )
}
export default ProjectSimilar