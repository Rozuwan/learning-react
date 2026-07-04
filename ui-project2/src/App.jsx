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
      "https://plus.unsplash.com/premium_photo-1673264933061-f1ea43b13032?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1724159609417-0b84ff619e7c?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://plus.unsplash.com/premium_photo-1697729961187-c70c5f520227?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1584395631446-e41b0fc3f68d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1745677617575-62b14956f2d1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1678213193578-d667ccc3e7b8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1611872110600-b619b39fa69d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1653163517210-2e3b56190680?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
  return (
    <div>
      <CardPage mountains={mountains} />
    </div>
  )
}

export default App
