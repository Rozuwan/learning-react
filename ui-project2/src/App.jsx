import CardPage from "./components/CardPage"

const App = () => {
  const mountains = [
  {
    id: 1,
    name: "Mount Everest",
    location: "Solukhumbu, Nepal",
    description:
      "The world's highest mountain and the ultimate destination for mountaineers, located on the Nepal–China border in the Himalayas.",
    distance: "138 km from Kathmandu",
    elevation: "8,848.86 m",
    image:
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "K2",
    location: "Gilgit-Baltistan, Pakistan",
    description:
      "The second-highest mountain on Earth, renowned for its extreme difficulty and unpredictable weather conditions.",
    distance: "690 km from Islamabad",
    elevation: "8,611 m",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Kangchenjunga",
    location: "Taplejung, Nepal",
    description:
      "The world's third-highest mountain, famous for its five majestic peaks and deep cultural significance.",
    distance: "520 km from Kathmandu",
    elevation: "8,586 m",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Lhotse",
    location: "Khumbu, Nepal",
    description:
      "Connected to Mount Everest, Lhotse is known for its dramatic south face and technical climbing routes.",
    distance: "140 km from Kathmandu",
    elevation: "8,516 m",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Makalu",
    location: "Sankhuwasabha, Nepal",
    description:
      "A spectacular pyramid-shaped peak located southeast of Everest, admired for its steep ridges.",
    distance: "165 km from Kathmandu",
    elevation: "8,485 m",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Cho Oyu",
    location: "Khumbu, Nepal",
    description:
      "Often considered one of the most accessible 8,000-meter peaks for experienced climbers.",
    distance: "155 km from Kathmandu",
    elevation: "8,188 m",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Dhaulagiri I",
    location: "Myagdi, Nepal",
    description:
      "A striking standalone Himalayan giant surrounded by deep valleys and dramatic landscapes.",
    distance: "270 km from Kathmandu",
    elevation: "8,167 m",
    image:
      "https://images.unsplash.com/photo-1465189684280-6a8fa9b19a7a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Manaslu",
    location: "Gorkha, Nepal",
    description:
      "The eighth-highest mountain in the world and a favorite destination for trekking and alpine expeditions.",
    distance: "126 km from Kathmandu",
    elevation: "8,163 m",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 9,
    name: "Nanga Parbat",
    location: "Gilgit-Baltistan, Pakistan",
    description:
      "Known as the 'Killer Mountain,' it features one of the tallest mountain faces on Earth.",
    distance: "340 km from Islamabad",
    elevation: "8,126 m",
    image:
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 10,
    name: "Annapurna I",
    location: "Kaski, Nepal",
    description:
      "A legendary Himalayan peak famous for its breathtaking scenery and challenging climbing routes.",
    distance: "160 km from Kathmandu",
    elevation: "8,091 m",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
  },
];
  return (
    <div>
      <CardPage mountains={mountains} />
    </div>
  )
}

export default App
