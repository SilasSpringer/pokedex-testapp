import { Link } from "react-router-dom";
export default function NavButton(props){
    var text = props.text;
    if(text === undefined){
        text = "Home";
    }
    var to = props.to;
    if(to === undefined){
        to = "/";
    }
    return(
        <Link to={to} className="Link">
          <button className='Button'>
            {text}
          </button>
        </Link>
    )
  }