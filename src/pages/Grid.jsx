import { CardData } from "../data/data";
import Card from "../components/Card";

export default function GridPage() {
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
    </>
  );
}
