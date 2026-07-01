import Card from "./components/card";

const App = () => {
 const villas = [
  {
    id: 1,
    name: "Santorini Cliffside Villa",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200",
    description:
      "Wake up to breathtaking views of the Aegean Sea from this luxurious whitewashed villa perched on the cliffs of Santorini.",
    tag1: "Guest Favourite",
    tag2: "4 Night Stay",
  },
  {
    id: 2,
    name: "Swiss Alpine Chalet",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200",
    description:
      "A cozy wooden chalet nestled in the Swiss Alps, offering stunning mountain views and a peaceful retreat.",
    tag1: "Top Rated",
    tag2: "3 Night Stay",
  },
  {
    id: 3,
    name: "Bali Jungle Retreat",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
    description:
      "Surrounded by lush tropical greenery, this private villa combines modern comfort with authentic Balinese charm.",
    tag1: "Guest Favourite",
    tag2: "5 Night Stay",
  },
  {
    id: 4,
    name: "Maldives Overwater Villa",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200",
    description:
      "Experience crystal-clear waters and direct ocean access from this luxurious overwater paradise in the Maldives.",
    tag1: "Luxury Pick",
    tag2: "6 Night Stay",
  },
  {
    id: 5,
    name: "Aspen Mountain Cabin",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200",
    description:
      "Escape to a charming cabin in Aspen, featuring rustic interiors, a fireplace, and beautiful forest surroundings.",
    tag1: "Superhost Choice",
    tag2: "2 Night Stay",
  },
  {
    id: 6,
    name: "Kyoto Zen Villa",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
    description:
      "A peaceful Japanese-style villa blending traditional architecture with modern amenities in the heart of Kyoto.",
    tag1: "Guest Favourite",
    tag2: "4 Night Stay",
  },
];
  return (
    <div className="parent">
      {villas.map(function (e, index) {
       return(
        <div key={index}>
          <Card image={e.image} name={e.name} description={e.description} tag1={e.tag1} tag2={e.tag2} />
        </div>
       )
      })}
    </div>
  );
};

export default App;
