import React from "react";
import { ArrowUpRight, Heart } from "lucide-react";
import { FaMapMarkerAlt, FaShoppingCart} from "react-icons/fa";

const products = [
  {
    id: 1,
    title: "Fender Player Stratocaster",
    location: "Los Angeles, CA",
    price: "$899",
    type: "buy",
    tag: "Great Deal",
    tagColor: "bg-[#17B26A] text-[#FAFAFA]",
    badge: "Shop",
    img: "https://res.cloudinary.com/dtjfophkh/image/upload/v1757465310/dbad36bf7064040596aff92f52a050a8b387bf4b_ojewgh.jpg",
  },
  {
    id: 2,
    title: "Gibson Les Paul Standard",
    location: "Los Angeles, CA",
    price: "$50",
    day: "/day",
    type: "rent",
    tag: "Hot Deal",
    tagColor: "bg-[#F04438] text-[#FAFAFA]",
    img: "https://res.cloudinary.com/dtjfophkh/image/upload/v1757465314/a85165fd0d53fa394db7beab3e97856584d8a68b_qxqczf.jpg",
  },
  {
    id: 3,
    title: "Ibanez RG550",
    location: "Los Angeles, CA",
    price: "$899",
    type: "buy",
    tag: "Fair Price",
    tagColor: "bg-[#2B7FFF] text-[#FAFAFA]",
    badge: "Shop",
    img: "https://res.cloudinary.com/dtjfophkh/image/upload/v1757465852/53ef2880f4fe11b736e4a059bfd7107e7421908f_loxuue.jpg",
  },
  {
    id: 4,
    title: "Yamaha Pacifica 112V",
    location: "Los Angeles, CA",
    price: "$50",
    day: "/day",
    type: "rent",
    tag: "Hot Deal",
    tagColor: "bg-[#F04438] text-[#FAFAFA]",
    img: "https://res.cloudinary.com/dtjfophkh/image/upload/v1757465316/04afa641d4bd7aee4233861512955d3f9da25ed1_zkn1jb.jpg",
  },
  {
    id: 5,
    title: "PRS SE Custom 24",
    location: "Los Angeles, CA",
    price: "$799",
    type: "buy",
    tag: "Fair Price",
    tagColor: "bg-[#2B7FFF] text-[#FAFAFA]",
    img: "https://res.cloudinary.com/dtjfophkh/image/upload/v1757465313/270358fb413ce41e986985917e12cb2c888dba7e_r1p59k.jpg",
  },
  {
    id: 6,
    title: "Fender Jazzmaster",
    location: "Los Angeles, CA",
    price: "$60",
    day: "/day",
    type: "rent",
    tag: "Fair Price",
    tagColor: "bg-[#2B7FFF] text-[#FAFAFA]",
    img: "https://res.cloudinary.com/dtjfophkh/image/upload/v1757465312/6e6e62c2404d5c52364cc0d364b33914149db345_yyem5b.jpg",
  },
  {
    id: 7,
    title: "Epiphone Les Paul Studio",
    location: "Los Angeles, CA",
    price: "$100",
    day: "/day",
    type: "rent",
    tag: "Great Deal",
    tagColor: "bg-[#17B26A] text-[#FAFAFA]",
    badge: "Shop",
    img: "https://res.cloudinary.com/dtjfophkh/image/upload/v1757465316/ecf28e20014e87ad834722b6dd236deda7388f83_e5osff.jpg",
  },
  {
    id: 8,
    title: "Jackson Dinky DK2",
    location: "Los Angeles, CA",
    price: "$799",
    type: "buy",
    tag: "Fair Price",
    tagColor: "bg-[#2B7FFF] text-[#FAFAFA]",
    badge: "Shop",
    img: "https://res.cloudinary.com/dtjfophkh/image/upload/v1757465312/48450c05ab5f4b002cbf9fb184d4d919a36a6dbf_hnnvzu.jpg",
  },
];

const TrendingProducts = () => {
  return (
    <section className="max-w-7xl mx-auto py-12">
      <div className="max-w-11/12 mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#101828] tracking-tight">Trending Now</h2>
              <p className="mt-2 text-lg text-[#4A5565]">Hot deals that musicians are loving</p>
            </div>
            <button className="mt-4 sm:mt-0 whitespace-nowrap text-sm font-semibold text-[#A67C52] border border-[#A67C52] rounded-full px-5 py-2 transition-colors flex items-center gap-2">
                See all
                <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((item) => (
              <div
                key={item.id}
                className="bg-[#FFFFFF] border-[#E5E7EB] rounded-xl shadow hover:shadow-lg transition p-3 flex flex-col"
              >
                <div className="relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  {item.badge && (
                    <span className="absolute top-2 left-2 bg-[#F6F2EE] text-[#A67C52] text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                      {item.badge} <img src="https://res.cloudinary.com/dtjfophkh/image/upload/v1757466634/tick_m5bccj.png" alt="" />
                    </span>
                  )}
                  <span
                    className={`absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-full ${item.tagColor}`}
                  >
                    {item.tag}
                  </span>
                </div>

                <div className="mt-3 flex flex-col flex-grow">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="flex items-center text-sm text-[#6A7282]">
                    <FaMapMarkerAlt className="mr-1" /> {item.location}
                  </p>
                  <p className="mt-1 text-[#666666]"><span className="font-bold text-[#101828]">{item.price}</span>{item.day}</p>

                  <div className="flex items-center justify-between mt-3">
                    {item.type === "buy" ? (
                      <button className="flex-1 bg-[#A67C52] text-[#FFFFFF] py-2 rounded-lg flex items-center justify-center gap-2 transition">
                        <FaShoppingCart /> Buy Now
                      </button>
                    ) : (
                      <button className="flex-1 bg-[#A67C52] text-[#FFFFFF] py-2 rounded-lg flex items-center justify-center gap-2 transition">
                        <img className="h-5 w-4" src="https://res.cloudinary.com/dtjfophkh/image/upload/v1757467761/rent_hihaq8.png" alt="" /> Rent now
                      </button>
                    )}

                    <button className="ml-4 text-[#4A5565]">
                      <Heart />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default TrendingProducts;