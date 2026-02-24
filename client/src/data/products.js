const products = [
  {
    id: 1,
    name: "Premium Dark Chocolate",
    price: 150,
    weight: "100gm",
    description: "Premium dark chocolate with rich cocoa flavor.",
    media: [
      { type: "image", url: "/dark-chocolate.jpg" },
      { type: "video", url: "/dark-chocolate.mp4" }
    ]
  },
  {
    id: 2,
    name: "Premium Milk Chocolate",
    price: 100,
    weight: "100gm",
    description: "Creamy milk chocolate with roasted almonds.",
    media: [
      { type: "image", url: "/milk-chocolate.jpg" },
      { type: "video", url: "/milk-chocolate.mp4" }
    ]
  },
  {
    id: 3,
    name: "Premium Kunafa Chocolate",
    price: 200,
    weight: "100gm",
    description: "Premium chocolate filled with crispy roasted kunafa and almonds.",
    media: [
      { type: "image", url: "/kunafa-chocolate.jpg" },
      { type: "video", url: "/kunafa-chocolate.mp4" }
    ]
  },
  {
    id: 4,
    name: "Trial Combo Pack",
    price: 90,
    weight: "60gm",
    description: "Premium chocolate filled with crispy roasted kunafa and almonds.",
    media: [
      { type: "image", url: "/combo-pack1.jpg" },
      { type: "image", url: "/combo-pack2.jpg" },
      { type: "image", url: "/combo-pack3.jpg" },
      { type: "image", url: "/combo-pack4.jpg" }
    ]
  }
];

export default products;