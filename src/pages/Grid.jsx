import { CardData } from "../data/data";
import Card from "../components/Card";

export default function GridPage() {
  const cards = [
    {
      id: 1,
      title: "Card Title 1",
      description: "This is a description of the card content.",
      url: "#",
      img: "/public/img1.jpg",
    },
    {
      id: 2,
      title: "Card Title 2",
      description: "This is a description of the card content.",
      url: "#",
      img: "/public/img2.webp",
    },
    {
      id: 3,
      title: "Card Title 3",
      description: "This is a description of the card content.",
      url: "#",
      img: "/public/img3.jpg",
    },
  ];
  return (
    <>
      <section className="bg-gray-50 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 max-md:justify-items-center gap-4 min-h-screen lg:p-30 max-md:pt-30 p-4 ">
        {/* card */}
        {CardData.map((card) => {
          return (
            <Card
              key={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
              url={card.url}
              color={card.color}
            />
          );
        })}
      </section>

      <section className="md:grid grid-cols-2 gap-4 p-4 w-full">
        {cards.map((item, i) => {
          return (
            <div key={i} className="flex gap-4 w-full mx-auto max-w-7xl mt-10 max-md:flex-col rounded-md overflow-hidden bg-white p-6 border border-gray-200">
              <div className=" overflow-hidden rounded-md min-h-20 max-md:w-full w-1/2">
                <img
                  src={item.img}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-600 mb-10 ">
                  {item.description}
                </p>
                
                <a href={item.url} className="rounded-full uppercase px-6 py-3  bg-blue-600 text-white ">
                  Click me
                </a>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
