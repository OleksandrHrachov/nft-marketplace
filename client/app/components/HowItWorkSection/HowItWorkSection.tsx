import "./HowItWorkSection.scss";
import { HowItWorkCard } from "./HowItWorkCard";
import { BASE_URL } from "@/app/utils/endpoint";
import { getCards } from "./helper";

export default async function HowItWorkSection() {
  const cards = await getCards();

  return (
    <section className="container how-it-work">
      <div className="how-it-work__header">
        <div className="how-it-work__header-text">
          <h3 className="how-it-work__header-title">How it works</h3>
          <div className="how-it-work__header-description">
            Find out how to get started
          </div>
        </div>
      </div>
      {cards.length > 0 ? (
        <div className="how-it-work__list">
          {cards.map((card) => {
            return (
              <HowItWorkCard
                key={card._id}
                imageSrc={`${BASE_URL}/${card.imgUrl}`}
                altText={card.title}
                title={card.title}
                description={card.description}
              />
            );
          })}
        </div>
      ) : (
        <div className="how-it-work__list-empty-list">
          Sorry, there was some error, so the list of description is not available.
        </div>
      )}
    </section>
  );
}
