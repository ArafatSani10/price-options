import PriceOption from "./PriceOption";


const PriceOptions = () => {
    let PriceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
                "Access to gym facilities",
                "Free fitness assessment",
                "Group classes (limited)"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 49.99,
            "features": [
                "Access to gym facilities",
                "Free fitness assessment",
                "Unlimited group classes",
                "1 personal training session per month"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 69.99,
            "features": [
                "Access to gym facilities",
                "Free fitness assessment",
                "Unlimited group classes",
                "3 personal training sessions per month",
                "Access to premium equipment",
                "Nutrition consultation"
            ]
        }
        
    ]

    return (
        <div className="m-12">
            <h2 className="text-7xl">Best Prices in the Town</h2>
            <div className="grid md:grid-cols-3 gap-12">
                {
                    PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }

            </div>
        </div>
    );
};

export default PriceOptions; ``