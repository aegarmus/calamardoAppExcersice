import './header.css'
import logo from '../../assets/img/calamardoFace.jpg'

export const Header = () => {
    return(
        <>
            <div className="header">
                <div>
                    <img src={logo} alt="Calamardo Face" />
                </div>
            </div>
        </>
    )
}