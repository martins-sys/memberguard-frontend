import { FaCheck } from "react-icons/fa"

interface CardProps {
    category: string;
    title: string;
    values: string[];
  }

export default function Card(object: CardProps) {
    return (
        <div className="flex flex-col justify-center items-center mt-2">
            <div className="bg-[#0e0d0d] border border-[#212121] w-11/12 rounded-3xl" data-aos="fade-up" data-aos-anchor="card-anchor">
                <div className="p-8">
                    <p className="font-montserrat text-xl font-medium uppercase">{object.category}</p>
                    <p className="text-4xl mt-5 font-bold">{object.title}</p>
                    
                    <ul className="mt-5">
                        {object.values.map((value, index) => (
                            <div key={index} className="text-lg mt-2 flex items-center">
                                <FaCheck color="#3b82f6 " />
                                <span className="ml-2 font-semibold">{value}</span>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
