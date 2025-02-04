import './ButtonTitleResponsive.css'

export default function ButtonTitleResponsive({myButtonText,icon}) {
    return (
        <>
        <button className="ys-btn-responsive-title">
          <img src={icon}></img>
          {myButtonText}
          </button>
        </>
    )}