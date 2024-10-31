import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa";

const Feature = ({feature}) => {
    return (
        <div >

            <p className="flex items-center gap-3"> <FaCheck className=""></FaCheck>{feature}</p>
            
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string

}
export default Feature;