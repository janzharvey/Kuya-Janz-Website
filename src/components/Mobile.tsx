import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Mobile = () => {
  return (
    <div className="d-flex align-items-center w-100 vh-100 bg-midnight-gray">
        <div style={{ width: '90vw'}} className="d-flex flex-column align-items-center justify-content-center mx-auto text-center">
            <FontAwesomeIcon style={{ width: '100px', height: '100px'}} className="color-charcoal" icon={faScrewdriverWrench}></FontAwesomeIcon>
            <span className="d-flex flex-column mt-4">
                <span style={{fontSize: '24px'}} className="fw-semibold color-charcoal">Sorry Mobile View is currently Unavailable. </span>
                <span style={{fontSize: '16px'}} className="color-charcoal">If you want to proceed. Please use your Desktop browser.</span>
            </span>
        </div>
    </div>
  )
}

export default Mobile;