import PropTypes from "prop-types";
import Feature from "./Feature";



const PriceOption = ({ option }) => {
    let { name, price, features } = option
    return (
        <div className="bg-blue-300 rounded-md  text-white">
       

                <h2 className="text-center">
                    <span className="text-7xl font-extrabold">{price}</span>
                    <span className="text-7xl">/mon</span>
                </h2>

                <h4 className="text-4xl text-center my-8">
                    {name}
                </h4>

                {
                    features.map((feature,index) => <Feature key={index} feature={feature}></Feature> )
                }

                <button className="mt-12 bg-green-600 w-full py-5 font-bold text-black
                 rounded-lg hover:bg-yellow-100 ">Buy Now</button>
   

        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object

}
export default PriceOption;