import Image from "next/image";
import New from "../../assets/new.png"

const PricingCard = ({ title, price, features, isNew }) => {
    return (
      <div className={`${
        isNew === "Y" 
          ? "bg-gray-900 h-[500px] relative"
          : "bg-[#E8E8E8] h-[450px]"
      } flex flex-col justify-between items-center rounded-xl p-6 ${isNew === "Y" ? "text-white" : "text-black"}`}>
        <div className="flex flex-col items-center flex-grow pt-6">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="text-3xl font-bold mt-4 flex items-start">
            <span className="text-xl">$</span>
            <span>{price}</span>
          </div>
          <ul className="flex flex-col items-center mt-12 space-y-3">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <button className={`w-full font-bold ${isNew === "Y" ? "bg-[#E1FF2D] text-black hover:bg-[#dfff2dd3]" : "bg-white text-[#E1FF2D] hover:bg-[#ffffffb0] hover:text-black"}  py-3 rounded-full`}>
          Buy Now
        </button>
        <Image 
          src={New}
          alt="New"
          className={`absolute top-28 left-10 ${isNew === "Y" ? "block" : "hidden"}`}
        />
      </div>
    );
  };

  const Pricing = () => {
    const packages = [
      {
        title: "DEVELOPMENT",
        price: "10",
        features: ["1 Module Javascript", "1 Module Human Resources"],
        isNew: "N"
      },
      {
        title: "IT & SOFTWARE",
        price: "30",
        features: ["1 Module Javascript", "1 Module Human Resources", "2 Module Sales Teams", "Pack Marketing Skills", "5 Module Study Case"],
        isNew: "Y"
      },
      {
        title: "IT & SOFTWARE",
        price: "30",
        features: ["1 Module Javascript", "1 Module Human Resources", "2 Module Sales Teams"],
        isNew: "N"
      },
    ];
  
    return (
      <div className="px-4 py-12 bg-white">
        <h2 className="text-3xl font-bold text-center">
          Choose your package
        </h2>
        <div className="text-center text-xl pt-8 pb-14">
          <span>We provide various types of packages just for you</span>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <PricingCard key={index} {...pkg} />
          ))}
        </div>
      </div>
    );
  };

  export default Pricing;