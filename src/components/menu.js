import { Link } from "react-router-dom";
const Languageoption = (props) => {
    return (
        <>
            {/* NavigationBar */}
                <ul className="nav justify-content-center " >
                    <li className="nav-item" >
                        <Link className="nav-link active" aria-current="page" to="/" style={{ color: 'black' }} ><b>Home</b></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/aboutus" style={{ color: 'black' }}><b>About</b></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contactus" style={{ color: 'black' }} ><b>Contact</b></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="*" style={{ color: 'black' }} ></Link>
                    </li>
                    <select onChange={props.onChange}>
                        <option>Select Language</option>
                        <option value={'en'}>English</option>
                        <option value={'chi'}>Chinese</option>
                        <option value={'hi'}>Hindi</option>
                    </select>
                </ul>
        </>
    )
}
export default Languageoption;