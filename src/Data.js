// Category Shop
export const categories = [
  {
    id: 1,
    name: "Men",
    link: "/men",
    image:
      "https://i.pinimg.com/736x/c1/bb/bb/c1bbbb28ddbad94e5f4808c23a1019be.jpg",
  },
  {
    id: 2,
    name: "Kids",
    link: "/kids",
    image:
      "https://i.pinimg.com/1200x/bd/cb/82/bdcb8293597f28fbeb5ee1529428c510.jpg",
  },
  {
    id: 3,
    name: "Women",
    link: "/women",
    image:
      "https://i.pinimg.com/736x/51/12/3d/51123d0af1821d6df2c4a64d2ff453a3.jpg",
  },
];

//  Feature Shop
export const products = [
  {
    id: 1,
    name: "Classic Cotton T-Shirt",
    category: "Men",
    price: 29.99,
    image:
      "https://i.pinimg.com/1200x/0e/c5/e2/0ec5e2bcc16b143e956c0b5cd67b3fea.jpg",
    isFavorite: false,
  },
  {
    id: 2,
    name: "Slim Fit Denim Jeans",
    category: "Women",
    price: 79.99,
    image:
      "https://i.pinimg.com/1200x/88/6d/6a/886d6a6e58f33360398ad91f53824deb.jpg",
    isFavorite: false,
  },
  {
    id: 3,
    name: "Elegant Summer Dress",
    category: "Women",
    price: 89.99,
    image:
      "https://i.pinimg.com/736x/25/ad/58/25ad58a43eefcdd1513d712e56772bc4.jpg",
    isFavorite: false,
  },
  {
    id: 4,
    name: "Leather Jacket",
    category: "Men",
    price: 199.99,
    image:
      "https://i.pinimg.com/1200x/14/1f/52/141f520455f7d1a260b5b1c2ac47b61f.jpg",
    isFavorite: false,
  },
];

// Feature Shop Detail for only 4 cards
export const productFea = [
  {
    id: 1,
    name: "Classic Cotton T-Shirt",
    category: "Men",
    price: 29.99,
    image:
      "https://i.pinimg.com/1200x/0e/c5/e2/0ec5e2bcc16b143e956c0b5cd67b3fea.jpg",
    images: [
      "https://i.pinimg.com/1200x/0e/c5/e2/0ec5e2bcc16b143e956c0b5cd67b3fea.jpg",
      "https://i.pinimg.com/1200x/0e/c5/e2/0ec5e2bcc16b143e956c0b5cd67b3fea.jpg",
    ],
    description:
      "Soft and breathable cotton t-shirt perfect for everyday wear.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    isFavorite: false,
  },
  {
    id: 2,
    name: "Slim Fit Denim Jeans",
    category: "Women",
    price: 79.99,
    image:
      "https://i.pinimg.com/1200x/88/6d/6a/886d6a6e58f33360398ad91f53824deb.jpg",
    images: [
      "https://i.pinimg.com/1200x/88/6d/6a/886d6a6e58f33360398ad91f53824deb.jpg",
      "https://i.pinimg.com/1200x/88/6d/6a/886d6a6e58f33360398ad91f53824deb.jpg",
    ],
    description: "Stylish slim-fit jeans with stretch for maximum comfort.",
    sizes: ["28", "30", "32", "34"],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    isFavorite: false,
  },
  {
    id: 3,
    name: "Elegant Summer Dress",
    category: "Women",
    price: 89.99,
    image:
      "https://i.pinimg.com/736x/25/ad/58/25ad58a43eefcdd1513d712e56772bc4.jpg",
    images: [
      "https://i.pinimg.com/736x/25/ad/58/25ad58a43eefcdd1513d712e56772bc4.jpg",
      "https://i.pinimg.com/736x/25/ad/58/25ad58a43eefcdd1513d712e56772bc4.jpg",
    ],
    description: "Light and airy summer dress perfect for outdoor events.",
    sizes: ["S", "M", "L"],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    isFavorite: false,
  },
  {
    id: 4,
    name: "Leather Jacket",
    category: "Men",
    price: 199.99,
    image:
      "https://i.pinimg.com/1200x/14/1f/52/141f520455f7d1a260b5b1c2ac47b61f.jpg",
    images: [
      "https://i.pinimg.com/1200x/14/1f/52/141f520455f7d1a260b5b1c2ac47b61f.jpg",
      "https://i.pinimg.com/1200x/14/1f/52/141f520455f7d1a260b5b1c2ac47b61f.jpg",
    ],
    description: "Premium genuine leather jacket with a sleek design.",
    sizes: ["M", "L", "XL"],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    isFavorite: false,
  },
];

// shop page (store all project category and i want to have feature sorting and fitering)
export const allProducts = [
  // 1. MEN
  {
    id: 1,
    name: "Rose Pink Polo",
    category: "Men",
    color: "Pink",
    price: 69.99,
    image:
      "https://i.pinimg.com/1200x/48/68/41/4868415d9f7e7a346716a7177337fc87.jpg",
    isFavorite: false,
  },
  // 2. WOMEN
  {
    id: 2,
    name: "Forest Green Blouse",
    category: "Women",
    color: "Green",
    price: 64.99,
    image:
      "https://i.pinimg.com/1200x/7a/a8/88/7aa88806f69ff4375b3be980538b619c.jpg",
    isFavorite: false,
  },
  // 3. KIDS
  {
    id: 3,
    name: "Sunny Yellow Kids Dress",
    category: "Kids",
    color: "Yellow",
    price: 37.99,
    image:
      "https://i.pinimg.com/736x/62/74/ad/6274ad778aa8d4a69458033780ca96ec.jpg",
    isFavorite: false,
  },
  // 4. MEN
  {
    id: 4,
    name: "Classic White Dress Shirt",
    category: "Men",
    color: "White",
    price: 89.99,
    image:
      "https://i.pinimg.com/1200x/01/f3/10/01f3102c38f104f0c7f9b49134c01910.jpg",
    isFavorite: false,
  },
  // 5. WOMEN
  {
    id: 5,
    name: "Burgundy Red Dress",
    category: "Women",
    color: "Red",
    price: 104.99,
    image:
      "https://i.pinimg.com/1200x/dd/17/2f/dd172f78f1ec7a29d3a1a46aecd7d74b.jpg",
    isFavorite: false,
  },
  // 6. KIDS
  {
    id: 6,
    name: "Ocean Blue Kids Ensemble",
    category: "Kids",
    color: "Blue",
    price: 45.99,
    image:
      "https://i.pinimg.com/1200x/b1/ad/f7/b1adf74da0183f1bb0c0474b2150b3d7.jpg",
    isFavorite: false,
  },
  // 7. MEN
  {
    id: 7,
    name: "Chocolate Brown Polo",
    category: "Men",
    color: "Brown",
    price: 72.99,
    image:
      "https://i.pinimg.com/736x/93/db/23/93db23e6847c8758cbc5fe6a148dca56.jpg",
    isFavorite: false,
  },
  // 8. WOMEN
  {
    id: 8,
    name: "White Summer Maxi Dress",
    category: "Women",
    color: "White",
    price: 99.99,
    image:
      "https://i.pinimg.com/1200x/db/bb/b7/dbbbb758834221884cee03d84659d80a.jpg",
    isFavorite: false,
  },
  // 9. KIDS
  {
    id: 9,
    name: "Bold Red Kids Ensemble",
    category: "Kids",
    color: "Red",
    price: 44.99,
    image:
      "https://i.pinimg.com/736x/2e/ea/44/2eea44e191dce53cc3ec46d6207fcafd.jpg",
    isFavorite: false,
  },
  // 10. MEN
  {
    id: 10,
    name: "Navy Blue Dress Shirt",
    category: "Men",
    color: "Blue",
    price: 84.99,
    image:
      "https://i.pinimg.com/1200x/63/07/b5/6307b5e6027276823b84e6e5eefb5564.jpg",
    isFavorite: false,
  },
  // 11. WOMEN
  {
    id: 11,
    name: "Yellow Floral Blouse",
    category: "Women",
    color: "Yellow",
    price: 54.99,
    image:
      "https://i.pinimg.com/1200x/6a/62/85/6a6285745464c7140107b9f49469a794.jpg",
    isFavorite: false,
  },
  // 12. KIDS
  {
    id: 12,
    name: "Modern Grey Kids Outfit",
    category: "Kids",
    color: "Grey",
    price: 43.99,
    image:
      "https://i.pinimg.com/1200x/32/71/48/327148929b679daa4b624be4b06d959e.jpg",
    isFavorite: false,
  },
  // 13. MEN
  {
    id: 13,
    name: "Forest Green Button-Down",
    category: "Men",
    color: "Green",
    price: 72.99,
    image:
      "https://i.pinimg.com/1200x/d6/c8/65/d6c865473469ba87adc3480af464aad5.jpg",
    isFavorite: false,
  },
  // 14. WOMEN
  {
    id: 14,
    name: "Classic Black Blazer",
    category: "Women",
    color: "Black",
    price: 89.99,
    image:
      "https://i.pinimg.com/736x/45/b8/58/45b8580275af5db8d9168d695a37e47e.jpg",
    isFavorite: false,
  },
  // 15. KIDS
  {
    id: 15,
    name: "Sweet Pink Kids Outfit",
    category: "Kids",
    color: "Pink",
    price: 39.99,
    image:
      "https://i.pinimg.com/736x/a6/fa/fd/a6fafd8f359831937ded841071ec835a.jpg",
    isFavorite: false,
  },
  // 16. MEN
  {
    id: 16,
    name: "Scarlet Red Summer Shirt",
    category: "Men",
    color: "Red",
    price: 66.99,
    image:
      "https://i.pinimg.com/1200x/ec/2e/65/ec2e65dc24fcdef2af2f4374ad1255ee.jpg",
    isFavorite: false,
  },
  // 17. WOMEN
  {
    id: 17,
    name: "Denim Blue Jacket",
    category: "Women",
    color: "Blue",
    price: 84.99,
    image:
      "https://i.pinimg.com/736x/e6/31/1c/e6311c5856afb21769ab09604d21cfe9.jpg",
    isFavorite: false,
  },
  // 18. KIDS
  {
    id: 18,
    name: "Chocolate Brown Kids Outfit",
    category: "Kids",
    color: "Brown",
    price: 42.99,
    image:
      "https://i.pinimg.com/736x/74/17/25/741725aeb55514c769b407890e7ae19b.jpg",
    isFavorite: false,
  },
  // 19. MEN
  {
    id: 19,
    name: "Sunny Yellow Casual Shirt",
    category: "Men",
    color: "Yellow",
    price: 62.99,
    image:
      "https://i.pinimg.com/1200x/fc/ae/d6/fcaed6b8646790c9807bc9a47e49155a.jpg",
    isFavorite: false,
  },
  // 20. WOMEN
  {
    id: 20,
    name: "Hot Pink Blazer",
    category: "Women",
    color: "Pink",
    price: 109.99,
    image:
      "https://i.pinimg.com/1200x/1a/2d/fe/1a2dfeda03835d56a5d795777c5e1c0f.jpg",
    isFavorite: false,
  },
  // 21. KIDS
  {
    id: 21,
    name: "Adorable White Kids Outfit",
    category: "Kids",
    color: "White",
    price: 36.99,
    image:
      "https://i.pinimg.com/1200x/6b/30/ac/6b30ac4b8e373f64fe9c867bcd7bd4e1.jpg",
    isFavorite: false,
  },
  // 22. MEN
  {
    id: 22,
    name: "Classic Black Suit",
    category: "Men",
    color: "Black",
    price: 299.99,
    image:
      "https://i.pinimg.com/1200x/77/4d/f1/774df17af25fb9e6fbec1e76f234e93e.jpg",
    isFavorite: false,
  },
  // 23. WOMEN
  {
    id: 23,
    name: "Gray Knit Dress",
    category: "Women",
    color: "Gray",
    price: 79.99,
    image:
      "https://i.pinimg.com/1200x/67/0b/ed/670bed64686704c683603dedec745e42.jpg",
    isFavorite: false,
  },
  // 24. KIDS
  {
    id: 24,
    name: "Fresh Green Kids Outfit",
    category: "Kids",
    color: "Green",
    price: 40.99,
    image:
      "https://i.pinimg.com/736x/a1/32/11/a132111cb617f307e3506f1b54864574.jpg",
    isFavorite: false,
  },
  // 25. MEN
  {
    id: 25,
    name: "Light Gray Casual Shirt",
    category: "Men",
    color: "Gray",
    price: 63.99,
    image:
      "https://i.pinimg.com/1200x/9d/92/6c/9d926c7da96384b5da389817938d2ec3.jpg",
    isFavorite: false,
  },
  // 26. WOMEN
  {
    id: 26,
    name: "Tan Brown Jacket",
    category: "Women",
    color: "Brown",
    price: 119.99,
    image:
      "https://i.pinimg.com/736x/9b/f7/97/9bf79736ed8dfea5d0a8a3d736a7045d.jpg",
    isFavorite: false,
  },
  // 27. KIDS
  {
    id: 27,
    name: "Vibrant Red Kids Dress",
    category: "Kids",
    color: "Red",
    price: 42.99,
    image:
      "https://i.pinimg.com/1200x/a5/50/af/a550af8b18026b8db4fd96628530eafd.jpg",
    isFavorite: false,
  },
  // 28. MEN
  {
    id: 28,
    name: "Fuchsia Pink Button-Down",
    category: "Men",
    color: "Pink",
    price: 72.99,
    image:
      "https://i.pinimg.com/736x/87/af/bc/87afbc56c5949467e9fdc35ef5029d17.jpg",
    isFavorite: false,
  },
  // 29. WOMEN
  {
    id: 29,
    name: "Emerald Green Dress",
    category: "Women",
    color: "Green",
    price: 114.99,
    image:
      "https://i.pinimg.com/1200x/45/d0/8b/45d08b854d66ae475b66bedcdd655d5d.jpg",
    isFavorite: false,
  },
  // 30. KIDS
  {
    id: 30,
    name: "Sky Blue Kids Dress",
    category: "Kids",
    color: "Blue",
    price: 39.99,
    image:
      "https://i.pinimg.com/736x/a9/bc/12/a9bc1268dfc1c9ffba548c8dc5316aa4.jpg",
    isFavorite: false,
  },
  // 31. MEN
  {
    id: 31,
    name: "Coffee Brown Button-Down",
    category: "Men",
    color: "Brown",
    price: 68.99,
    image:
      "https://i.pinimg.com/1200x/fb/1f/2e/fb1f2ee68e6ef77ef7d516662b9f3a73.jpg",
    isFavorite: false,
  },
  // 32. WOMEN
  {
    id: 32,
    name: "White Linen Blouse",
    category: "Women",
    color: "White",
    price: 54.99,
    image:
      "https://i.pinimg.com/1200x/a8/19/f8/a819f8fa6022246be8865a0e7aaf45d4.jpg",
    isFavorite: false,
  },
  // 33. KIDS
  {
    id: 33,
    name: "Golden Yellow Kids Ensemble",
    category: "Kids",
    color: "Yellow",
    price: 44.99,
    image:
      "https://i.pinimg.com/1200x/ac/a4/49/aca44950854bfbec36f5974ae0852d0f.jpg",
    isFavorite: false,
  },
  // 34. MEN
  {
    id: 34,
    name: "Casual Blue Button-Down",
    category: "Men",
    color: "Blue",
    price: 69.99,
    image:
      "https://i.pinimg.com/736x/60/71/7e/60717ef34d8eea7c135cb0cde1e1238c.jpg",
    isFavorite: false,
  },
  // 35. WOMEN
  {
    id: 35,
    name: "Red Silk Blouse",
    category: "Women",
    color: "Red",
    price: 79.99,
    image:
      "https://i.pinimg.com/1200x/2a/eb/ee/2aebeecc65607b1ed74312ab462715e6.jpg",
    isFavorite: false,
  },
  // 36. KIDS
  {
    id: 36,
    name: "Pretty Pink Kids Dress",
    category: "Kids",
    color: "Pink",
    price: 42.99,
    image:
      "https://i.pinimg.com/736x/5d/ca/05/5dca055051d9ba15ff149bcb8bcc2b09.jpg",
    isFavorite: false,
  },
  // 37. MEN
  {
    id: 37,
    name: "Lime Green Summer Shirt",
    category: "Men",
    color: "Green",
    price: 67.99,
    image:
      "https://i.pinimg.com/1200x/28/8d/2a/288d2ab1e25eee40b5b7cc23b6555f6b.jpg",
    isFavorite: false,
  },
  // 38. WOMEN
  {
    id: 38,
    name: "Charcoal Gray Blazer",
    category: "Women",
    color: "Gray",
    price: 99.99,
    image:
      "https://i.pinimg.com/736x/ba/fc/79/bafc793dc3f0089560932549f8922313.jpg",
    isFavorite: false,
  },
  // 39. KIDS
  {
    id: 39,
    name: "Classic Black Kids Jacket",
    category: "Kids",
    color: "Black",
    price: 45.99,
    image:
      "https://i.pinimg.com/1200x/80/11/69/8011690be952e0abf1f2dcc2e23be80d.jpg",
    isFavorite: false,
  },
  // 40. MEN
  {
    id: 40,
    name: "Mustard Yellow Button-Down",
    category: "Men",
    color: "Yellow",
    price: 65.99,
    image:
      "https://i.pinimg.com/1200x/3b/d4/42/3bd44248df7f8b111bf6d0db830f990b.jpg",
    isFavorite: false,
  },
  // 41. WOMEN
  {
    id: 41,
    name: "Sleek Black Jumpsuit",
    category: "Women",
    color: "Black",
    price: 94.99,
    image:
      "https://i.pinimg.com/1200x/3a/4e/cc/3a4ecc226579a08c9e7985d2216fd885.jpg",
    isFavorite: false,
  },
  // 42. KIDS
  {
    id: 42,
    name: "Warm Brown Kids Dress",
    category: "Kids",
    color: "Brown",
    price: 40.99,
    image:
      "https://i.pinimg.com/736x/75/0c/a8/750ca8cb77f4083ecdbb1c14b3a6e914.jpg",
    isFavorite: false,
  },
  // 43. MEN
  {
    id: 43,
    name: "Sleek Black Turtleneck",
    category: "Men",
    color: "Black",
    price: 79.99,
    image:
      "https://i.pinimg.com/736x/da/09/d8/da09d861775e3cf78174c0ab54da92a0.jpg",
    isFavorite: false,
  },
  // 44. WOMEN
  {
    id: 44,
    name: "Navy Blue Blazer",
    category: "Women",
    color: "Blue",
    price: 129.99,
    image:
      "https://i.pinimg.com/1200x/02/ac/48/02ac488d89349a0cb2fe0273700332fb.jpg",
    isFavorite: false,
  },
  // 45. KIDS
  {
    id: 45,
    name: "Emerald Green Kids Ensemble",
    category: "Kids",
    color: "Green",
    price: 46.99,
    image:
      "https://i.pinimg.com/1200x/04/bb/28/04bb28fb608f9c714a441b4034fa7beb.jpg",
    isFavorite: false,
  },
  // 46. MEN
  {
    id: 46,
    name: "Premium White Oxford Shirt",
    category: "Men",
    color: "White",
    price: 79.99,
    image:
      "https://i.pinimg.com/736x/41/23/9f/41239f45aa101e61484bee4627045f78.jpg",
    isFavorite: false,
  },
  // 47. WOMEN
  {
    id: 47,
    name: "Rose Pink Sweater",
    category: "Women",
    color: "Pink",
    price: 59.99,
    image:
      "https://i.pinimg.com/1200x/eb/67/83/eb6783d82242cc489f66f596ab8853bd.jpg",
    isFavorite: false,
  },
  // 48. KIDS
  {
    id: 48,
    name: "Bright Yellow Kids Outfit",
    category: "Kids",
    color: "Yellow",
    price: 41.99,
    image:
      "https://i.pinimg.com/1200x/4e/31/b7/4e31b76968a72967422a2e00cd37bf1a.jpg",
    isFavorite: false,
  },
  // 49. MEN
  {
    id: 49,
    name: "Charcoal Gray Polo",
    category: "Men",
    color: "Gray",
    price: 66.99,
    image:
      "https://i.pinimg.com/736x/38/69/58/386958355fd2347b60389b38c466fc8d.jpg",
    isFavorite: false,
  },
  // 50. WOMEN
  {
    id: 50,
    name: "Sunny Yellow Dress",
    category: "Women",
    color: "Yellow",
    price: 84.99,
    image:
      "https://i.pinimg.com/1200x/ff/66/9c/ff669cfeff2d4cbd99fe86a965f4e847.jpg",
    isFavorite: false,
  },
  // 51. KIDS
  {
    id: 51,
    name: "Cherry Red Kids Outfit",
    category: "Kids",
    color: "Red",
    price: 38.99,
    image:
      "https://i.pinimg.com/736x/e6/f5/90/e6f59044eb78a091bfb10bdd8e23e25a.jpg",
    isFavorite: false,
  },
  // 52. MEN
  {
    id: 52,
    name: "Ruby Red Polo",
    category: "Men",
    color: "Red",
    price: 74.99,
    image:
      "https://i.pinimg.com/1200x/c7/e9/d0/c7e9d03f844585951dd43c75ce24a72f.jpg",
    isFavorite: false,
  },
  // 53. WOMEN
  {
    id: 53,
    name: "Brown Leather Jacket",
    category: "Women",
    color: "Brown",
    price: 179.99,
    image:
      "https://i.pinimg.com/736x/66/fa/bc/66fabcc35823da2cbbbdc91506aa538f.jpg",
    isFavorite: false,
  },
  // 54. KIDS
  {
    id: 54,
    name: "Charcoal Grey Kids Dress",
    category: "Kids",
    color: "Grey",
    price: 41.99,
    image:
      "https://i.pinimg.com/736x/5b/1d/c3/5b1dc352f93b9c82dcee344fb2f9eb97.jpg",
    isFavorite: false,
  },
  // 55. MEN
  {
    id: 55,
    name: "Mint Green Polo",
    category: "Men",
    color: "Green",
    price: 59.99,
    image:
      "https://i.pinimg.com/1200x/bf/a5/95/bfa5951abc5e01ad466db88390be2422.jpg",
    isFavorite: false,
  },
  // 56. WOMEN
  {
    id: 56,
    name: "Elegant Black Evening Dress",
    category: "Women",
    color: "Black",
    price: 124.99,
    image:
      "https://i.pinimg.com/1200x/70/3c/58/703c58381ca9588172039f00f1c6042a.jpg",
    isFavorite: false,
  },
  // 57. KIDS
  {
    id: 57,
    name: "Pure White Kids Dress",
    category: "Kids",
    color: "White",
    price: 41.99,
    image:
      "https://i.pinimg.com/1200x/4a/3e/29/4a3e29b77a4f0809757bfeb7964df915.jpg",
    isFavorite: false,
  },
  // 58. MEN
  {
    id: 58,
    name: "Dark Brown Summer Shirt",
    category: "Men",
    color: "Brown",
    price: 71.99,
    image:
      "https://i.pinimg.com/1200x/d1/f2/03/d1f203bc769661d08cea0d7e55085b15.jpg",
    isFavorite: false,
  },
  // 59. WOMEN
  {
    id: 59,
    name: "Crisp White Shirt Dress",
    category: "Women",
    color: "White",
    price: 79.99,
    image:
      "https://i.pinimg.com/736x/38/83/16/3883162c004d1f28494a957b42368919.jpg",
    isFavorite: false,
  },
  // 60. KIDS
  {
    id: 60,
    name: "Blush Pink Kids Ensemble",
    category: "Kids",
    color: "Pink",
    price: 45.99,
    image:
      "https://i.pinimg.com/1200x/fd/77/53/fd7753ab0801ddef261e49374ac85b29.jpg",
    isFavorite: false,
  },
  // 61. MEN
  {
    id: 61,
    name: "Olive Green Casual Shirt",
    category: "Men",
    color: "Green",
    price: 64.99,
    image:
      "https://i.pinimg.com/736x/49/a0/62/49a0623084d43aa2777c8bb697ba2206.jpg",
    isFavorite: false,
  },
  // 62. WOMEN
  {
    id: 62,
    name: "Pink Floral Dress",
    category: "Women",
    color: "Pink",
    price: 74.99,
    image:
      "https://i.pinimg.com/1200x/6f/5b/55/6f5b551fa09434900aeaf343098b193a.jpg",
    isFavorite: false,
  },
  // 63. KIDS
  {
    id: 63,
    name: "Denim Blue Kids Outfit",
    category: "Kids",
    color: "Blue",
    price: 40.99,
    image:
      "https://i.pinimg.com/736x/88/d6/47/88d647f237948573e98b43a854dd2aee.jpg",
    isFavorite: false,
  },
  // 64. MEN
  {
    id: 64,
    name: "Soft Pink Casual Shirt",
    category: "Men",
    color: "Pink",
    price: 67.99,
    image:
      "https://i.pinimg.com/1200x/24/7f/cf/247fcf78eb37ac37981b60c940db7a30.jpg",
    isFavorite: false,
  },
  // 65. WOMEN
  {
    id: 65,
    name: "Mustard Yellow Sweater",
    category: "Women",
    color: "Yellow",
    price: 64.99,
    image:
      "https://i.pinimg.com/1200x/23/3c/53/233c534db5accf921bcb6ec7f59653cc.jpg",
    isFavorite: false,
  },
  // 66. KIDS
  {
    id: 66,
    name: "Stylish Black Kids Outfit",
    category: "Kids",
    color: "Black",
    price: 39.99,
    image:
      "https://i.pinimg.com/1200x/a5/c6/6d/a5c66d54d23769debde359cc25d6a88e.jpg",
    isFavorite: false,
  },
  // 67. MEN
  {
    id: 67,
    name: "Classic Blue Denim Shirt",
    category: "Men",
    color: "Blue",
    price: 79.99,
    image:
      "https://i.pinimg.com/1200x/00/b8/60/00b860e0b367f932d03d4c61153c8a48.jpg",
    isFavorite: false,
  },
  // 68. WOMEN
  {
    id: 68,
    name: "Red Evening Gown",
    category: "Women",
    color: "Red",
    price: 149.99,
    image:
      "https://i.pinimg.com/1200x/33/31/7e/33317edaf47f69ccb7d5f8efae5aa433.jpg",
    isFavorite: false,
  },
  // 69. KIDS
  {
    id: 69,
    name: "Mint Green Kids Dress",
    category: "Kids",
    color: "Green",
    price: 43.99,
    image:
      "https://i.pinimg.com/1200x/f7/71/4b/f7714b3d96ed429f2d601027b9974fde.jpg",
    isFavorite: false,
  },
  // 70. MEN
  {
    id: 70,
    name: "Light Brown Casual Shirt",
    category: "Men",
    color: "Brown",
    price: 70.99,
    image:
      "https://i.pinimg.com/1200x/b6/07/f1/b607f18ac62d5fae3c069efdd09dfa98.jpg",
    isFavorite: false,
  },
  // 71. WOMEN
  {
    id: 71,
    name: "Olive Green Jacket",
    category: "Women",
    color: "Green",
    price: 89.99,
    image:
      "https://i.pinimg.com/736x/d2/69/57/d269570587a07b3a784e68e1648457b3.jpg",
    isFavorite: false,
  },
  // 72. KIDS
  {
    id: 72,
    name: "Rose Pink Kids Dress",
    category: "Kids",
    color: "Pink",
    price: 40.99,
    image:
      "https://i.pinimg.com/1200x/d1/60/cf/d160cf3f1e02b3b802a82622082bbb44.jpg",
    isFavorite: false,
  },
  // 73. MEN
  {
    id: 73,
    name: "Cherry Red Button-Down",
    category: "Men",
    color: "Red",
    price: 68.99,
    image:
      "https://i.pinimg.com/1200x/8e/27/e1/8e27e112fd899cc390ca46dbbc406864.jpg",
    isFavorite: false,
  },
  // 74. WOMEN
  {
    id: 74,
    name: "Light Gray Sweater",
    category: "Women",
    color: "Gray",
    price: 54.99,
    image:
      "https://i.pinimg.com/736x/b0/13/c5/b013c590ed02f6bdab297178656cdbcb.jpg",
    isFavorite: false,
  },
  // 75. KIDS
  {
    id: 75,
    name: "Bright Blue Kids Dress",
    category: "Kids",
    color: "Blue",
    price: 43.99,
    image:
      "https://i.pinimg.com/1200x/80/7c/92/807c92ac62d219a02f0c6cf4b3e95431.jpg",
    isFavorite: false,
  },
  // 76. MEN
  {
    id: 76,
    name: "Hot Pink Summer Shirt",
    category: "Men",
    color: "Pink",
    price: 68.99,
    image:
      "https://i.pinimg.com/1200x/03/bb/30/03bb30d74b17b4b0d18d1509421f7377.jpg",
    isFavorite: false,
  },
  // 77. WOMEN
  {
    id: 77,
    name: "White Cotton Blazer",
    category: "Women",
    color: "White",
    price: 119.99,
    image:
      "https://i.pinimg.com/1200x/16/4d/5e/164d5e18da0ddb316f6faf75819e7551.jpg",
    isFavorite: false,
  },
  // 78. KIDS
  {
    id: 78,
    name: "Caramel Brown Kids Ensemble",
    category: "Kids",
    color: "Brown",
    price: 45.99,
    image:
      "https://i.pinimg.com/1200x/9f/9e/b8/9f9eb8c1a4e834104a4cc090f0f23d54.jpg",
    isFavorite: false,
  },
  // 79. MEN
  {
    id: 79,
    name: "Bright Yellow Summer Shirt",
    category: "Men",
    color: "Yellow",
    price: 64.99,
    image:
      "https://i.pinimg.com/1200x/cf/bc/3f/cfbc3f50103077ee93e9012e6fcd3dca.jpg",
    isFavorite: false,
  },
  // 80. WOMEN
  {
    id: 80,
    name: "Black Leather Jacket",
    category: "Women",
    color: "Black",
    price: 159.99,
    image:
      "https://i.pinimg.com/1200x/b2/7c/0d/b27c0d77c658e2281761249b2647a1b0.jpg",
    isFavorite: false,
  },
  // 81. KIDS
  {
    id: 81,
    name: "Sweet White Kids Outfit",
    category: "Kids",
    color: "White",
    price: 37.99,
    image:
      "https://i.pinimg.com/736x/51/c1/fa/51c1fa858a22fa36474ca596cd0c04c5.jpg",
    isFavorite: false,
  },
  // 82. MEN
  {
    id: 82,
    name: "Modern Black Blazer",
    category: "Men",
    color: "Black",
    price: 189.99,
    image:
      "https://i.pinimg.com/736x/52/43/06/5243063d61e61988699dc278897e0fd5.jpg",
    isFavorite: false,
  },
  // 83. WOMEN
  {
    id: 83,
    name: "Blush Pink Dress",
    category: "Women",
    color: "Pink",
    price: 89.99,
    image:
      "https://i.pinimg.com/1200x/5d/1e/52/5d1e526ab3eab92e465f24a67d0a42c5.jpg",
    isFavorite: false,
  },
  // 84. KIDS
  {
    id: 84,
    name: "Silver Grey Kids Ensemble",
    category: "Kids",
    color: "Grey",
    price: 44.99,
    image:
      "https://i.pinimg.com/1200x/02/88/03/0288031ea7721f226554ebe6f32bfd58.jpg",
    isFavorite: false,
  },
  // 85. MEN
  {
    id: 85,
    name: "Slate Gray Button-Down",
    category: "Men",
    color: "Gray",
    price: 67.99,
    image:
      "https://i.pinimg.com/1200x/26/7d/6f/267d6fb1d3440ab5235a32307d64fbe5.jpg",
    isFavorite: false,
  },
  // 86. WOMEN
  {
    id: 86,
    name: "Blue Floral Dress",
    category: "Women",
    color: "Blue",
    price: 74.99,
    image:
      "https://i.pinimg.com/736x/4b/b8/13/4bb813eb97097928c2a2909e9a46efb2.jpg",
    isFavorite: false,
  },
  // 87. KIDS
  {
    id: 87,
    name: "Classic Red Kids Dress",
    category: "Kids",
    color: "Red",
    price: 41.99,
    image:
      "https://i.pinimg.com/1200x/2b/f2/77/2bf27789d72b3620f3b59ca5f190c991.jpg",
    isFavorite: false,
  },
  // 88. MEN
  {
    id: 88,
    name: "Crimson Casual Shirt",
    category: "Men",
    color: "Red",
    price: 69.99,
    image:
      "https://i.pinimg.com/736x/58/eb/b5/58ebb57ece226be415114bdcac48c488.jpg",
    isFavorite: false,
  },
  // 89. WOMEN
  {
    id: 89,
    name: "Yellow Summer Maxi",
    category: "Women",
    color: "Yellow",
    price: 94.99,
    image:
      "https://i.pinimg.com/1200x/35/8c/70/358c7054c131bb6d7fb4907b970de6ba.jpg",
    isFavorite: false,
  },
  // 90. KIDS
  {
    id: 90,
    name: "Cool Black Kids Ensemble",
    category: "Kids",
    color: "Black",
    price: 42.99,
    image:
      "https://i.pinimg.com/1200x/ab/b8/92/abb8924964480507dd128c5a2715d775.jpg",
    isFavorite: false,
  },
  // 91. MEN
  {
    id: 91,
    name: "Golden Yellow Polo",
    category: "Men",
    color: "Yellow",
    price: 61.99,
    image:
      "https://i.pinimg.com/1200x/bd/f2/cc/bdf2ccc82ebdf1eb04ff4e27a12420fe.jpg",
    isFavorite: false,
  },
  // 92. WOMEN
  {
    id: 92,
    name: "Chocolate Brown Dress",
    category: "Women",
    color: "Brown",
    price: 89.99,
    image:
      "https://i.pinimg.com/1200x/0d/b8/13/0db813cc591ddc2a63cf81326863a0f9.jpg",
    isFavorite: false,
  },
  // 93. KIDS
  {
    id: 93,
    name: "Elegant White Kids Ensemble",
    category: "Kids",
    color: "White",
    price: 44.99,
    image:
      "https://i.pinimg.com/1200x/6d/64/7b/6d647b66e6b9d8b23fa0a2beb58c8f2f.jpg",
    isFavorite: false,
  },
  // 94. MEN
  {
    id: 94,
    name: "Dark Gray Summer Shirt",
    category: "Men",
    color: "Gray",
    price: 65.99,
    image:
      "https://i.pinimg.com/736x/3e/ff/98/3eff989eda71032a4b1e2a2f4a8e0bd5.jpg",
    isFavorite: false,
  },
  // 95. WOMEN
  {
    id: 95,
    name: "Mint Green Summer Top",
    category: "Women",
    color: "Green",
    price: 39.99,
    image:
      "https://i.pinimg.com/736x/05/d2/0b/05d20b47ffc0ca8a1e64e3d130fccd1a.jpg",
    isFavorite: false,
  },
  // 96. KIDS
  {
    id: 96,
    name: "Trendy Black Kids Dress",
    category: "Kids",
    color: "Black",
    price: 38.99,
    image:
      "https://i.pinimg.com/1200x/6a/41/b4/6a41b4baae9c96f97c31f389ec38c966.jpg",
    isFavorite: false,
  },
  // 97. WOMEN
  {
    id: 97,
    name: "Sky Blue Summer Dress",
    category: "Women",
    color: "Blue",
    price: 69.99,
    image:
      "https://i.pinimg.com/1200x/ae/e1/ed/aee1edbee8c00a2b4ca911ca6e305788.jpg",
    isFavorite: false,
  },
  // 98. KIDS
  {
    id: 98,
    name: "Nature Green Kids Outfit",
    category: "Kids",
    color: "Green",
    price: 39.99,
    image:
      "https://i.pinimg.com/1200x/bf/2a/c9/bf2ac913ffea80c27b92758f9399f322.jpg",
    isFavorite: false,
  },
  // 99. WOMEN
  {
    id: 99,
    name: "Red Wrap Dress",
    category: "Women",
    color: "Red",
    price: 89.99,
    image:
      "https://i.pinimg.com/1200x/eb/86/df/eb86df32f91522d82f8dc2647024dbb6.jpg",
    isFavorite: false,
  },
  // 100. KIDS
  {
    id: 100,
    name: "Cheerful Yellow Kids Dress",
    category: "Kids",
    color: "Yellow",
    price: 38.99,
    image:
      "https://i.pinimg.com/1200x/34/d7/76/34d776b2bc9ad725b3416e4069e92094.jpg",
    isFavorite: false,
  },
  // 101. WOMEN
  {
    id: 101,
    name: "Caramel Brown Sweater",
    category: "Women",
    color: "Brown",
    price: 64.99,
    image:
      "https://i.pinimg.com/1200x/71/bb/8e/71bb8e3e2e495cd81c3719ad83579cfa.jpg",
    isFavorite: false,
  },
  // 102. KIDS
  {
    id: 102,
    name: "Soft Grey Kids Outfit",
    category: "Kids",
    color: "Grey",
    price: 38.99,
    image:
      "https://i.pinimg.com/1200x/3a/51/21/3a5121004c1727cec4d42470c700a5dc.jpg",
    isFavorite: false,
  },
  // 103. WOMEN
  {
    id: 103,
    name: "Gray Wool Coat",
    category: "Women",
    color: "Gray",
    price: 169.99,
    image:
      "https://i.pinimg.com/736x/1b/c2/b0/1bc2b06f2006381f89220f1de02b18d7.jpg",
    isFavorite: false,
  },
  // 104. KIDS
  {
    id: 104,
    name: "Earthy Brown Kids Dress",
    category: "Kids",
    color: "Brown",
    price: 39.99,
    image:
      "https://i.pinimg.com/736x/1a/f7/54/1af7547a30ed191023bee83cedf828b8.jpg",
    isFavorite: false,
  },
  {
    id: 105,
    name: "Classic Cotton T-Shirt",
    category: "Men",
    color: "White",
    price: 29.99,
    image:
      "https://i.pinimg.com/1200x/0e/c5/e2/0ec5e2bcc16b143e956c0b5cd67b3fea.jpg",
    isFavorite: false,
  },
  {
    id: 106,
    name: "Classic Casual Shirt",
    category: "Men",
    color: "White",
    price: 29.99,
    image:
      "https://i.pinimg.com/1200x/8a/47/13/8a47134c71a25f208255268df7bafa9d.jpg",
    isFavorite: false,
  },
  {
    id: 107,
    name: "Longsleeve Sweather",
    category: "Men",
    color: "Blue",
    price: 19.99,
    image:
      "https://i.pinimg.com/1200x/f4/e6/31/f4e6311b0a02ee0db97d46d92106efcc.jpg",
    isFavorite: false,
  },
];

// products detail for card
// DataDetail.js (or add to your Data.js)
export const productDetails = [
  // 1. MEN
  {
    id: 1,
    name: "Rose Pink Polo",
    category: "Men",
    price: 69.99,
    images: [
      "https://i.pinimg.com/1200x/48/68/41/4868415d9f7e7a346716a7177337fc87.jpg",
      "https://i.pinimg.com/1200x/48/68/41/4868415d9f7e7a346716a7177337fc87.jpg",
      "https://i.pinimg.com/1200x/48/68/41/4868415d9f7e7a346716a7177337fc87.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A stylish rose pink polo shirt perfect for casual outings and everyday wear.",
    isFavorite: false,
  },
  // 2. WOMEN
  {
    id: 2,
    name: "Forest Green Blouse",
    category: "Women",
    price: 64.99,
    images: [
      "https://i.pinimg.com/1200x/7a/a8/88/7aa88806f69ff4375b3be980538b619c.jpg",
      "https://i.pinimg.com/1200x/7a/a8/88/7aa88806f69ff4375b3be980538b619c.jpg",
      "https://i.pinimg.com/1200x/7a/a8/88/7aa88806f69ff4375b3be980538b619c.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "An elegant forest green blouse that adds sophistication to any outfit.",
    isFavorite: false,
  },
  // 3. KIDS
  {
    id: 3,
    name: "Sunny Yellow Kids Dress",
    category: "Kids",
    price: 37.99,
    images: [
      "https://i.pinimg.com/736x/62/74/ad/6274ad778aa8d4a69458033780ca96ec.jpg",
      "https://i.pinimg.com/736x/62/74/ad/6274ad778aa8d4a69458033780ca96ec.jpg",
      "https://i.pinimg.com/736x/62/74/ad/6274ad778aa8d4a69458033780ca96ec.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description:
      "A cheerful sunny yellow dress perfect for playtime and special occasions.",
    isFavorite: false,
  },
  // 4. MEN
  {
    id: 4,
    name: "Classic White Dress Shirt",
    category: "Men",
    price: 89.99,
    images: [
      "https://i.pinimg.com/1200x/01/f3/10/01f3102c38f104f0c7f9b49134c01910.jpg",
      "https://i.pinimg.com/1200x/01/f3/10/01f3102c38f104f0c7f9b49134c01910.jpg",
      "https://i.pinimg.com/1200x/01/f3/10/01f3102c38f104f0c7f9b49134c01910.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A timeless white dress shirt essential for formal and business occasions.",
    isFavorite: false,
  },
  // 5. WOMEN
  {
    id: 5,
    name: "Burgundy Red Dress",
    category: "Women",
    price: 104.99,
    images: [
      "https://i.pinimg.com/1200x/dd/17/2f/dd172f78f1ec7a29d3a1a46aecd7d74b.jpg",
      "https://i.pinimg.com/1200x/dd/17/2f/dd172f78f1ec7a29d3a1a46aecd7d74b.jpg",
      "https://i.pinimg.com/1200x/dd/17/2f/dd172f78f1ec7a29d3a1a46aecd7d74b.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A stunning burgundy red dress that exudes elegance and confidence.",
    isFavorite: false,
  },
  // 6. KIDS
  {
    id: 6,
    name: "Ocean Blue Kids Ensemble",
    category: "Kids",
    price: 45.99,
    images: [
      "https://i.pinimg.com/1200x/b1/ad/f7/b1adf74da0183f1bb0c0474b2150b3d7.jpg",
      "https://i.pinimg.com/1200x/b1/ad/f7/b1adf74da0183f1bb0c0474b2150b3d7.jpg",
      "https://i.pinimg.com/1200x/b1/ad/f7/b1adf74da0183f1bb0c0474b2150b3d7.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description:
      "A vibrant ocean blue ensemble perfect for active kids on the go.",
    isFavorite: false,
  },
  // 7. MEN
  {
    id: 7,
    name: "Chocolate Brown Polo",
    category: "Men",
    price: 72.99,
    images: [
      "https://i.pinimg.com/736x/93/db/23/93db23e6847c8758cbc5fe6a148dca56.jpg",
      "https://i.pinimg.com/736x/93/db/23/93db23e6847c8758cbc5fe6a148dca56.jpg",
      "https://i.pinimg.com/736x/93/db/23/93db23e6847c8758cbc5fe6a148dca56.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A rich chocolate brown polo that combines comfort with sophisticated style.",
    isFavorite: false,
  },
  // 8. WOMEN
  {
    id: 8,
    name: "White Summer Maxi Dress",
    category: "Women",
    price: 99.99,
    images: [
      "https://i.pinimg.com/1200x/db/bb/b7/dbbbb758834221884cee03d84659d80a.jpg",
      "https://i.pinimg.com/1200x/db/bb/b7/dbbbb758834221884cee03d84659d80a.jpg",
      "https://i.pinimg.com/1200x/db/bb/b7/dbbbb758834221884cee03d84659d80a.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A flowing white maxi dress ideal for summer days and beach getaways.",
    isFavorite: false,
  },
  // 9. KIDS
  {
    id: 9,
    name: "Bold Red Kids Ensemble",
    category: "Kids",
    price: 44.99,
    images: [
      "https://i.pinimg.com/736x/2e/ea/44/2eea44e191dce53cc3ec46d6207fcafd.jpg",
      "https://i.pinimg.com/736x/2e/ea/44/2eea44e191dce53cc3ec46d6207fcafd.jpg",
      "https://i.pinimg.com/736x/2e/ea/44/2eea44e191dce53cc3ec46d6207fcafd.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description:
      "A bold red ensemble that makes a confident statement for any occasion.",
    isFavorite: false,
  },
  // 10. MEN
  {
    id: 10,
    name: "Navy Blue Dress Shirt",
    category: "Men",
    price: 84.99,
    images: [
      "https://i.pinimg.com/1200x/63/07/b5/6307b5e6027276823b84e6e5eefb5564.jpg",
      "https://i.pinimg.com/1200x/63/07/b5/6307b5e6027276823b84e6e5eefb5564.jpg",
      "https://i.pinimg.com/1200x/63/07/b5/6307b5e6027276823b84e6e5eefb5564.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A sophisticated navy blue dress shirt perfect for professional settings.",
    isFavorite: false,
  },
  // 11. WOMEN
  {
    id: 11,
    name: "Yellow Floral Blouse",
    category: "Women",
    price: 54.99,
    images: [
      "https://i.pinimg.com/1200x/6a/62/85/6a6285745464c7140107b9f49469a794.jpg",
      "https://i.pinimg.com/1200x/6a/62/85/6a6285745464c7140107b9f49469a794.jpg",
      "https://i.pinimg.com/1200x/6a/62/85/6a6285745464c7140107b9f49469a794.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A beautiful yellow floral blouse that brings brightness to your wardrobe.",
    isFavorite: false,
  },
  // 12. KIDS
  {
    id: 12,
    name: "Modern Grey Kids Outfit",
    category: "Kids",
    price: 43.99,
    images: [
      "https://i.pinimg.com/1200x/32/71/48/327148929b679daa4b624be4b06d959e.jpg",
      "https://i.pinimg.com/1200x/32/71/48/327148929b679daa4b624be4b06d959e.jpg",
      "https://i.pinimg.com/1200x/32/71/48/327148929b679daa4b624be4b06d959e.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description:
      "A modern grey outfit with contemporary styling for fashion-forward kids.",
    isFavorite: false,
  },
  // 13. MEN
  {
    id: 13,
    name: "Forest Green Button-Down",
    category: "Men",
    price: 72.99,
    images: [
      "https://i.pinimg.com/1200x/d6/c8/65/d6c865473469ba87adc3480af464aad5.jpg",
      "https://i.pinimg.com/1200x/d6/c8/65/d6c865473469ba87adc3480af464aad5.jpg",
      "https://i.pinimg.com/1200x/d6/c8/65/d6c865473469ba87adc3480af464aad5.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A forest green button-down shirt that adds natural elegance to any look.",
    isFavorite: false,
  },
  // 14. WOMEN
  {
    id: 14,
    name: "Classic Black Blazer",
    category: "Women",
    price: 89.99,
    images: [
      "https://i.pinimg.com/736x/45/b8/58/45b8580275af5db8d9168d695a37e47e.jpg",
      "https://i.pinimg.com/736x/45/b8/58/45b8580275af5db8d9168d695a37e47e.jpg",
      "https://i.pinimg.com/736x/45/b8/58/45b8580275af5db8d9168d695a37e47e.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A classic black blazer that's essential for every professional wardrobe.",
    isFavorite: false,
  },
  // 15. KIDS
  {
    id: 15,
    name: "Sweet Pink Kids Outfit",
    category: "Kids",
    price: 39.99,
    images: [
      "https://i.pinimg.com/736x/a6/fa/fd/a6fafd8f359831937ded841071ec835a.jpg",
      "https://i.pinimg.com/736x/a6/fa/fd/a6fafd8f359831937ded841071ec835a.jpg",
      "https://i.pinimg.com/736x/a6/fa/fd/a6fafd8f359831937ded841071ec835a.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description:
      "A sweet pink outfit that's adorable and comfortable for everyday wear.",
    isFavorite: false,
  },
  // 16. MEN
  {
    id: 16,
    name: "Scarlet Red Summer Shirt",
    category: "Men",
    price: 66.99,
    images: [
      "https://i.pinimg.com/1200x/ec/2e/65/ec2e65dc24fcdef2af2f4374ad1255ee.jpg",
      "https://i.pinimg.com/1200x/ec/2e/65/ec2e65dc24fcdef2af2f4374ad1255ee.jpg",
      "https://i.pinimg.com/1200x/ec/2e/65/ec2e65dc24fcdef2af2f4374ad1255ee.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A vibrant scarlet red summer shirt perfect for warm weather adventures.",
    isFavorite: false,
  },
  // 17. WOMEN
  {
    id: 17,
    name: "Denim Blue Jacket",
    category: "Women",
    price: 84.99,
    images: [
      "https://i.pinimg.com/736x/e6/31/1c/e6311c5856afb21769ab09604d21cfe9.jpg",
      "https://i.pinimg.com/736x/e6/31/1c/e6311c5856afb21769ab09604d21cfe9.jpg",
      "https://i.pinimg.com/736x/e6/31/1c/e6311c5856afb21769ab09604d21cfe9.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A versatile denim blue jacket that's a wardrobe staple for all seasons.",
    isFavorite: false,
  },
  // 18. KIDS
  {
    id: 18,
    name: "Chocolate Brown Kids Outfit",
    category: "Kids",
    price: 42.99,
    images: [
      "https://i.pinimg.com/736x/74/17/25/741725aeb55514c769b407890e7ae19b.jpg",
      "https://i.pinimg.com/736x/74/17/25/741725aeb55514c769b407890e7ae19b.jpg",
      "https://i.pinimg.com/736x/74/17/25/741725aeb55514c769b407890e7ae19b.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description:
      "A chocolate brown outfit that's both stylish and practical for active play.",
    isFavorite: false,
  },
  // 19. MEN
  {
    id: 19,
    name: "Sunny Yellow Casual Shirt",
    category: "Men",
    price: 62.99,
    images: [
      "https://i.pinimg.com/1200x/fc/ae/d6/fcaed6b8646790c9807bc9a47e49155a.jpg",
      "https://i.pinimg.com/1200x/fc/ae/d6/fcaed6b8646790c9807bc9a47e49155a.jpg",
      "https://i.pinimg.com/1200x/fc/ae/d6/fcaed6b8646790c9807bc9a47e49155a.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A sunny yellow casual shirt that brings positive energy to your day.",
    isFavorite: false,
  },
  // 20. WOMEN
  {
    id: 20,
    name: "Hot Pink Blazer",
    category: "Women",
    price: 109.99,
    images: [
      "https://i.pinimg.com/1200x/1a/2d/fe/1a2dfeda03835d56a5d795777c5e1c0f.jpg",
      "https://i.pinimg.com/1200x/1a/2d/fe/1a2dfeda03835d56a5d795777c5e1c0f.jpg",
      "https://i.pinimg.com/1200x/1a/2d/fe/1a2dfeda03835d56a5d795777c5e1c0f.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A bold hot pink blazer that makes a powerful fashion statement.",
    isFavorite: false,
  },
  // 21. KIDS
  {
    id: 21,
    name: "Adorable White Kids Outfit",
    category: "Kids",
    price: 36.99,
    images: [
      "https://i.pinimg.com/1200x/6b/30/ac/6b30ac4b8e373f64fe9c867bcd7bd4e1.jpg",
      "https://i.pinimg.com/1200x/6b/30/ac/6b30ac4b8e373f64fe9c867bcd7bd4e1.jpg",
      "https://i.pinimg.com/1200x/6b/30/ac/6b30ac4b8e373f64fe9c867bcd7bd4e1.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description:
      "An adorable white outfit perfect for special occasions and portraits.",
    isFavorite: false,
  },
  // 22. MEN
  {
    id: 22,
    name: "Classic Black Suit",
    category: "Men",
    price: 299.99,
    images: [
      "https://i.pinimg.com/1200x/77/4d/f1/774df17af25fb9e6fbec1e76f234e93e.jpg",
      "https://i.pinimg.com/1200x/77/4d/f1/774df17af25fb9e6fbec1e76f234e93e.jpg",
      "https://i.pinimg.com/1200x/77/4d/f1/774df17af25fb9e6fbec1e76f234e93e.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A classic black suit crafted for elegance and sophistication at formal events.",
    isFavorite: false,
  },
  // 23. WOMEN
  {
    id: 23,
    name: "Gray Knit Dress",
    category: "Women",
    price: 79.99,
    images: [
      "https://i.pinimg.com/1200x/67/0b/ed/670bed64686704c683603dedec745e42.jpg",
      "https://i.pinimg.com/1200x/67/0b/ed/670bed64686704c683603dedec745e42.jpg",
      "https://i.pinimg.com/1200x/67/0b/ed/670bed64686704c683603dedec745e42.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A cozy gray knit dress that combines comfort with understated elegance.",
    isFavorite: false,
  },
  // 24. KIDS
  {
    id: 24,
    name: "Fresh Green Kids Outfit",
    category: "Kids",
    price: 40.99,
    images: [
      "https://i.pinimg.com/736x/a1/32/11/a132111cb617f307e3506f1b54864574.jpg",
      "https://i.pinimg.com/736x/a1/32/11/a132111cb617f307e3506f1b54864574.jpg",
      "https://i.pinimg.com/736x/a1/32/11/a132111cb617f307e3506f1b54864574.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description:
      "A fresh green outfit that brings natural vibrancy to your child's wardrobe.",
    isFavorite: false,
  },
  // 25. MEN
  {
    id: 25,
    name: "Light Gray Casual Shirt",
    category: "Men",
    price: 63.99,
    images: [
      "https://i.pinimg.com/1200x/9d/92/6c/9d926c7da96384b5da389817938d2ec3.jpg",
      "https://i.pinimg.com/1200x/9d/92/6c/9d926c7da96384b5da389817938d2ec3.jpg",
      "https://i.pinimg.com/1200x/9d/92/6c/9d926c7da96384b5da389817938d2ec3.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A light gray casual shirt perfect for relaxed weekends and everyday comfort.",
    isFavorite: false,
  },
  // 26. WOMEN
  {
    id: 26,
    name: "Tan Brown Jacket",
    category: "Women",
    price: 119.99,
    images: [
      "https://i.pinimg.com/736x/9b/f7/97/9bf79736ed8dfea5d0a8a3d736a7045d.jpg",
      "https://i.pinimg.com/736x/9b/f7/97/9bf79736ed8dfea5d0a8a3d736a7045d.jpg",
      "https://i.pinimg.com/736x/9b/f7/97/9bf79736ed8dfea5d0a8a3d736a7045d.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A tan brown jacket that adds warmth and sophistication to any ensemble.",
    isFavorite: false,
  },
  // 27. KIDS
  {
    id: 27,
    name: "Vibrant Red Kids Dress",
    category: "Kids",
    price: 42.99,
    images: [
      "https://i.pinimg.com/1200x/a5/50/af/a550af8b18026b8db4fd96628530eafd.jpg",
      "https://i.pinimg.com/1200x/a5/50/af/a550af8b18026b8db4fd96628530eafd.jpg",
      "https://i.pinimg.com/1200x/a5/50/af/a550af8b18026b8db4fd96628530eafd.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description:
      "A vibrant red dress that makes your little one stand out at any celebration.",
    isFavorite: false,
  },
  // 28. MEN
  {
    id: 28,
    name: "Fuchsia Pink Button-Down",
    category: "Men",
    price: 72.99,
    images: [
      "https://i.pinimg.com/736x/87/af/bc/87afbc56c5949467e9fdc35ef5029d17.jpg",
      "https://i.pinimg.com/736x/87/af/bc/87afbc56c5949467e9fdc35ef5029d17.jpg",
      "https://i.pinimg.com/736x/87/af/bc/87afbc56c5949467e9fdc35ef5029d17.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A bold fuchsia pink button-down shirt for the fashion-forward gentleman.",
    isFavorite: false,
  },
  // 29. WOMEN
  {
    id: 29,
    name: "Emerald Green Dress",
    category: "Women",
    price: 114.99,
    images: [
      "https://i.pinimg.com/1200x/45/d0/8b/45d08b854d66ae475b66bedcdd655d5d.jpg",
      "https://i.pinimg.com/1200x/45/d0/8b/45d08b854d66ae475b66bedcdd655d5d.jpg",
      "https://i.pinimg.com/1200x/45/d0/8b/45d08b854d66ae475b66bedcdd655d5d.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "An emerald green dress that radiates luxury and timeless beauty.",
    isFavorite: false,
  },
  // 30. KIDS
  {
    id: 30,
    name: "Sky Blue Kids Dress",
    category: "Kids",
    price: 39.99,
    images: [
      "https://i.pinimg.com/736x/a9/bc/12/a9bc1268dfc1c9ffba548c8dc5316aa4.jpg",
      "https://i.pinimg.com/736x/a9/bc/12/a9bc1268dfc1c9ffba548c8dc5316aa4.jpg",
      "https://i.pinimg.com/736x/a9/bc/12/a9bc1268dfc1c9ffba548c8dc5316aa4.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description:
      "A sky blue dress as light and breezy as a perfect summer day.",
    isFavorite: false,
  },
  // 31. MEN
  {
    id: 31,
    name: "Coffee Brown Button-Down",
    category: "Men",
    price: 68.99,
    images: [
      "https://i.pinimg.com/1200x/fb/1f/2e/fb1f2ee68e6ef77ef7d516662b9f3a73.jpg",
      "https://i.pinimg.com/1200x/fb/1f/2e/fb1f2ee68e6ef77ef7d516662b9f3a73.jpg",
      "https://i.pinimg.com/1200x/fb/1f/2e/fb1f2ee68e6ef77ef7d516662b9f3a73.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A coffee brown button-down that brings warmth and versatility to your wardrobe.",
    isFavorite: false,
  },
  // 32. WOMEN
  {
    id: 32,
    name: "White Linen Blouse",
    category: "Women",
    price: 54.99,
    images: [
      "https://i.pinimg.com/1200x/a8/19/f8/a819f8fa6022246be8865a0e7aaf45d4.jpg",
      "https://i.pinimg.com/1200x/a8/19/f8/a819f8fa6022246be8865a0e7aaf45d4.jpg",
      "https://i.pinimg.com/1200x/a8/19/f8/a819f8fa6022246be8865a0e7aaf45d4.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A white linen blouse that's breathable and perfect for warm weather.",
    isFavorite: false,
  },
  // 33. KIDS
  {
    id: 33,
    name: "Golden Yellow Kids Ensemble",
    category: "Kids",
    price: 44.99,
    images: [
      "https://i.pinimg.com/1200x/ac/a4/49/aca44950854bfbec36f5974ae0852d0f.jpg",
      "https://i.pinimg.com/1200x/ac/a4/49/aca44950854bfbec36f5974ae0852d0f.jpg",
      "https://i.pinimg.com/1200x/ac/a4/49/aca44950854bfbec36f5974ae0852d0f.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description:
      "A golden yellow ensemble that shines with cheerful energy and style.",
    isFavorite: false,
  },
  // 34. MEN
  {
    id: 34,
    name: "Casual Blue Button-Down",
    category: "Men",
    price: 69.99,
    images: [
      "https://i.pinimg.com/736x/60/71/7e/60717ef34d8eea7c135cb0cde1e1238c.jpg",
      "https://i.pinimg.com/736x/60/71/7e/60717ef34d8eea7c135cb0cde1e1238c.jpg",
      "https://i.pinimg.com/736x/60/71/7e/60717ef34d8eea7c135cb0cde1e1238c.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A casual blue button-down ideal for laid-back style and everyday comfort.",
    isFavorite: false,
  },
  // 35. WOMEN
  {
    id: 35,
    name: "Red Silk Blouse",
    category: "Women",
    price: 79.99,
    images: [
      "https://i.pinimg.com/1200x/2a/eb/ee/2aebeecc65607b1ed74312ab462715e6.jpg",
      "https://i.pinimg.com/1200x/2a/eb/ee/2aebeecc65607b1ed74312ab462715e6.jpg",
      "https://i.pinimg.com/1200x/2a/eb/ee/2aebeecc65607b1ed74312ab462715e6.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A luxurious red silk blouse that adds elegance to any outfit.",
    isFavorite: false,
  },
  // 36. KIDS
  {
    id: 36,
    name: "Pretty Pink Kids Dress",
    category: "Kids",
    price: 42.99,
    images: [
      "https://i.pinimg.com/736x/5d/ca/05/5dca055051d9ba15ff149bcb8bcc2b09.jpg",
      "https://i.pinimg.com/736x/5d/ca/05/5dca055051d9ba15ff149bcb8bcc2b09.jpg",
      "https://i.pinimg.com/736x/5d/ca/05/5dca055051d9ba15ff149bcb8bcc2b09.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description:
      "A pretty pink dress that's delightful for parties and playdates.",
    isFavorite: false,
  },
  // 37. MEN
  {
    id: 37,
    name: "Lime Green Summer Shirt",
    category: "Men",
    price: 67.99,
    images: [
      "https://i.pinimg.com/1200x/28/8d/2a/288d2ab1e25eee40b5b7cc23b6555f6b.jpg",
      "https://i.pinimg.com/1200x/28/8d/2a/288d2ab1e25eee40b5b7cc23b6555f6b.jpg",
      "https://i.pinimg.com/1200x/28/8d/2a/288d2ab1e25eee40b5b7cc23b6555f6b.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A lime green summer shirt that brings fresh, energetic vibes to your look.",
    isFavorite: false,
  },
  // 38. WOMEN
  {
    id: 38,
    name: "Charcoal Gray Blazer",
    category: "Women",
    price: 99.99,
    images: [
      "https://i.pinimg.com/736x/ba/fc/79/bafc793dc3f0089560932549f8922313.jpg",
      "https://i.pinimg.com/736x/ba/fc/79/bafc793dc3f0089560932549f8922313.jpg",
      "https://i.pinimg.com/736x/ba/fc/79/bafc793dc3f0089560932549f8922313.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A charcoal gray blazer that's sophisticated and perfect for the office.",
    isFavorite: false,
  },
  // 39. KIDS
  {
    id: 39,
    name: "Classic Black Kids Jacket",
    category: "Kids",
    price: 45.99,
    images: [
      "https://i.pinimg.com/1200x/80/11/69/8011690be952e0abf1f2dcc2e23be80d.jpg",
      "https://i.pinimg.com/1200x/80/11/69/8011690be952e0abf1f2dcc2e23be80d.jpg",
      "https://i.pinimg.com/1200x/80/11/69/8011690be952e0abf1f2dcc2e23be80d.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description:
      "A classic black jacket that's timeless and versatile for any occasion.",
    isFavorite: false,
  },
  // 40. MEN
  {
    id: 40,
    name: "Mustard Yellow Button-Down",
    category: "Men",
    price: 65.99,
    images: [
      "https://i.pinimg.com/1200x/3b/d4/42/3bd44248df7f8b111bf6d0db830f990b.jpg",
      "https://i.pinimg.com/1200x/3b/d4/42/3bd44248df7f8b111bf6d0db830f990b.jpg",
      "https://i.pinimg.com/1200x/3b/d4/42/3bd44248df7f8b111bf6d0db830f990b.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A mustard yellow button-down with vintage charm and modern appeal.",
    isFavorite: false,
  },
  // 41. WOMEN
  {
    id: 41,
    name: "Sleek Black Jumpsuit",
    category: "Women",
    price: 94.99,
    images: [
      "https://i.pinimg.com/1200x/3a/4e/cc/3a4ecc226579a08c9e7985d2216fd885.jpg",
      "https://i.pinimg.com/1200x/3a/4e/cc/3a4ecc226579a08c9e7985d2216fd885.jpg",
      "https://i.pinimg.com/1200x/3a/4e/cc/3a4ecc226579a08c9e7985d2216fd885.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A sleek black jumpsuit that's effortlessly chic and ready for any event.",
    isFavorite: false,
  },
  // 42. KIDS
  {
    id: 42,
    name: "Warm Brown Kids Dress",
    category: "Kids",
    price: 40.99,
    images: [
      "https://i.pinimg.com/736x/75/0c/a8/750ca8cb77f4083ecdbb1c14b3a6e914.jpg",
      "https://i.pinimg.com/736x/75/0c/a8/750ca8cb77f4083ecdbb1c14b3a6e914.jpg",
      "https://i.pinimg.com/736x/75/0c/a8/750ca8cb77f4083ecdbb1c14b3a6e914.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description:
      "A warm brown dress with earthy tones perfect for autumn adventures.",
    isFavorite: false,
  },
  // 43. MEN
  {
    id: 43,
    name: "Sleek Black Turtleneck",
    category: "Men",
    price: 79.99,
    images: [
      "https://i.pinimg.com/736x/da/09/d8/da09d861775e3cf78174c0ab54da92a0.jpg",
      "https://i.pinimg.com/736x/da/09/d8/da09d861775e3cf78174c0ab54da92a0.jpg",
      "https://i.pinimg.com/736x/da/09/d8/da09d861775e3cf78174c0ab54da92a0.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A sleek black turtleneck that's sophisticated and perfect for cooler weather.",
    isFavorite: false,
  },
  // 44. WOMEN
  {
    id: 44,
    name: "Navy Blue Blazer",
    category: "Women",
    price: 129.99,
    images: [
      "https://i.pinimg.com/1200x/02/ac/48/02ac488d89349a0cb2fe0273700332fb.jpg",
      "https://i.pinimg.com/1200x/02/ac/48/02ac488d89349a0cb2fe0273700332fb.jpg",
      "https://i.pinimg.com/1200x/02/ac/48/02ac488d89349a0cb2fe0273700332fb.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A navy blue blazer that's professional and polished for business settings.",
    isFavorite: false,
  },
  // 45. KIDS
  {
    id: 45,
    name: "Emerald Green Kids Ensemble",
    category: "Kids",
    price: 46.99,
    images: [
      "https://i.pinimg.com/1200x/04/bb/28/04bb28fb608f9c714a441b4034fa7beb.jpg",
      "https://i.pinimg.com/1200x/04/bb/28/04bb28fb608f9c714a441b4034fa7beb.jpg",
      "https://i.pinimg.com/1200x/04/bb/28/04bb28fb608f9c714a441b4034fa7beb.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description:
      "An emerald green ensemble that brings rich color to your child's collection.",
    isFavorite: false,
  },
  // 46. MEN
  {
    id: 46,
    name: "Premium White Oxford Shirt",
    category: "Men",
    price: 79.99,
    images: [
      "https://i.pinimg.com/736x/41/23/9f/41239f45aa101e61484bee4627045f78.jpg",
      "https://i.pinimg.com/736x/41/23/9f/41239f45aa101e61484bee4627045f78.jpg",
      "https://i.pinimg.com/736x/41/23/9f/41239f45aa101e61484bee4627045f78.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A premium white Oxford shirt that's crisp, classic, and essential.",
    isFavorite: false,
  },
  // 47. WOMEN
  {
    id: 47,
    name: "Rose Pink Sweater",
    category: "Women",
    price: 59.99,
    images: [
      "https://i.pinimg.com/1200x/eb/67/83/eb6783d82242cc489f66f596ab8853bd.jpg",
      "https://i.pinimg.com/1200x/eb/67/83/eb6783d82242cc489f66f596ab8853bd.jpg",
      "https://i.pinimg.com/1200x/eb/67/83/eb6783d82242cc489f66f596ab8853bd.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description: "A rose pink sweater that's soft, cozy, and feminine.",
    isFavorite: false,
  },
  // 48. KIDS
  {
    id: 48,
    name: "Bright Yellow Kids Outfit",
    category: "Kids",
    price: 41.99,
    images: [
      "https://i.pinimg.com/1200x/4e/31/b7/4e31b76968a72967422a2e00cd37bf1a.jpg",
      "https://i.pinimg.com/1200x/4e/31/b7/4e31b76968a72967422a2e00cd37bf1a.jpg",
      "https://i.pinimg.com/1200x/4e/31/b7/4e31b76968a72967422a2e00cd37bf1a.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description: "A bright yellow outfit that radiates joy and playfulness.",
    isFavorite: false,
  },
  // 49. MEN
  {
    id: 49,
    name: "Charcoal Gray Polo",
    category: "Men",
    price: 66.99,
    images: [
      "https://i.pinimg.com/736x/38/69/58/386958355fd2347b60389b38c466fc8d.jpg",
      "https://i.pinimg.com/736x/38/69/58/386958355fd2347b60389b38c466fc8d.jpg",
      "https://i.pinimg.com/736x/38/69/58/386958355fd2347b60389b38c466fc8d.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A charcoal gray polo that balances comfort with sophisticated style.",
    isFavorite: false,
  },
  // 50. WOMEN
  {
    id: 50,
    name: "Sunny Yellow Dress",
    category: "Women",
    price: 84.99,
    images: [
      "https://i.pinimg.com/1200x/ff/66/9c/ff669cfeff2d4cbd99fe86a965f4e847.jpg",
      "https://i.pinimg.com/1200x/ff/66/9c/ff669cfeff2d4cbd99fe86a965f4e847.jpg",
      "https://i.pinimg.com/1200x/ff/66/9c/ff669cfeff2d4cbd99fe86a965f4e847.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A sunny yellow dress that brightens every moment and occasion.",
    isFavorite: false,
  },
  // 51. KIDS
  {
    id: 51,
    name: "Cherry Red Kids Outfit",
    category: "Kids",
    price: 38.99,
    images: [
      "https://i.pinimg.com/736x/e6/f5/90/e6f59044eb78a091bfb10bdd8e23e25a.jpg",
      "https://i.pinimg.com/736x/e6/f5/90/e6f59044eb78a091bfb10bdd8e23e25a.jpg",
      "https://i.pinimg.com/736x/e6/f5/90/e6f59044eb78a091bfb10bdd8e23e25a.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description:
      "A cherry red outfit with vibrant color and comfortable design.",
    isFavorite: false,
  },
  // 52. MEN
  {
    id: 52,
    name: "Ruby Red Polo",
    category: "Men",
    price: 74.99,
    images: [
      "https://i.pinimg.com/1200x/c7/e9/d0/c7e9d03f844585951dd43c75ce24a72f.jpg",
      "https://i.pinimg.com/1200x/c7/e9/d0/c7e9d03f844585951dd43c75ce24a72f.jpg",
      "https://i.pinimg.com/1200x/c7/e9/d0/c7e9d03f844585951dd43c75ce24a72f.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A ruby red polo that makes a bold statement with refined elegance.",
    isFavorite: false,
  },
  // 53. WOMEN
  {
    id: 53,
    name: "Brown Leather Jacket",
    category: "Women",
    price: 179.99,
    images: [
      "https://i.pinimg.com/736x/66/fa/bc/66fabcc35823da2cbbbdc91506aa538f.jpg",
      "https://i.pinimg.com/736x/66/fa/bc/66fabcc35823da2cbbbdc91506aa538f.jpg",
      "https://i.pinimg.com/736x/66/fa/bc/66fabcc35823da2cbbbdc91506aa538f.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A brown leather jacket with classic styling and premium quality.",
    isFavorite: false,
  },
  // 54. KIDS
  {
    id: 54,
    name: "Charcoal Grey Kids Dress",
    category: "Kids",
    price: 41.99,
    images: [
      "https://i.pinimg.com/736x/5b/1d/c3/5b1dc352f93b9c82dcee344fb2f9eb97.jpg",
      "https://i.pinimg.com/736x/5b/1d/c3/5b1dc352f93b9c82dcee344fb2f9eb97.jpg",
      "https://i.pinimg.com/736x/5b/1d/c3/5b1dc352f93b9c82dcee344fb2f9eb97.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description:
      "A charcoal grey dress with timeless appeal and versatile styling.",
    isFavorite: false,
  },
  // 55. MEN
  {
    id: 55,
    name: "Mint Green Polo",
    category: "Men",
    price: 59.99,
    images: [
      "https://i.pinimg.com/1200x/bf/a5/95/bfa5951abc5e01ad466db88390be2422.jpg",
      "https://i.pinimg.com/1200x/bf/a5/95/bfa5951abc5e01ad466db88390be2422.jpg",
      "https://i.pinimg.com/1200x/bf/a5/95/bfa5951abc5e01ad466db88390be2422.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description: "A mint green polo with refreshing color and comfortable fit.",
    isFavorite: false,
  },
  // 56. WOMEN
  {
    id: 56,
    name: "Elegant Black Evening Dress",
    category: "Women",
    price: 124.99,
    images: [
      "https://i.pinimg.com/1200x/70/3c/58/703c58381ca9588172039f00f1c6042a.jpg",
      "https://i.pinimg.com/1200x/70/3c/58/703c58381ca9588172039f00f1c6042a.jpg",
      "https://i.pinimg.com/1200x/70/3c/58/703c58381ca9588172039f00f1c6042a.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "An elegant black evening dress perfect for formal occasions and galas.",
    isFavorite: false,
  },
  // 57. KIDS
  {
    id: 57,
    name: "Pure White Kids Dress",
    category: "Kids",
    price: 41.99,
    images: [
      "https://i.pinimg.com/1200x/4a/3e/29/4a3e29b77a4f0809757bfeb7964df915.jpg",
      "https://i.pinimg.com/1200x/4a/3e/29/4a3e29b77a4f0809757bfeb7964df915.jpg",
      "https://i.pinimg.com/1200x/4a/3e/29/4a3e29b77a4f0809757bfeb7964df915.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description:
      "A pure white dress ideal for special events and celebrations.",
    isFavorite: false,
  },
  // 58. MEN
  {
    id: 58,
    name: "Dark Brown Summer Shirt",
    category: "Men",
    price: 71.99,
    images: [
      "https://i.pinimg.com/1200x/d1/f2/03/d1f203bc769661d08cea0d7e55085b15.jpg",
      "https://i.pinimg.com/1200x/d1/f2/03/d1f203bc769661d08cea0d7e55085b15.jpg",
      "https://i.pinimg.com/1200x/d1/f2/03/d1f203bc769661d08cea0d7e55085b15.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A dark brown summer shirt with rich tones and relaxed comfort.",
    isFavorite: false,
  },
  // 59. WOMEN
  {
    id: 59,
    name: "Crisp White Shirt Dress",
    category: "Women",
    price: 79.99,
    images: [
      "https://i.pinimg.com/736x/38/83/16/3883162c004d1f28494a957b42368919.jpg",
      "https://i.pinimg.com/736x/38/83/16/3883162c004d1f28494a957b42368919.jpg",
      "https://i.pinimg.com/736x/38/83/16/3883162c004d1f28494a957b42368919.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A crisp white shirt dress that's clean, classic, and versatile.",
    isFavorite: false,
  },
  // 60. KIDS
  {
    id: 60,
    name: "Blush Pink Kids Ensemble",
    category: "Kids",
    price: 45.99,
    images: [
      "https://i.pinimg.com/1200x/fd/77/53/fd7753ab0801ddef261e49374ac85b29.jpg",
      "https://i.pinimg.com/1200x/fd/77/53/fd7753ab0801ddef261e49374ac85b29.jpg",
      "https://i.pinimg.com/1200x/fd/77/53/fd7753ab0801ddef261e49374ac85b29.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description: "A blush pink ensemble with soft colors and delicate styling.",
    isFavorite: false,
  },
  // 61. MEN
  {
    id: 61,
    name: "Olive Green Casual Shirt",
    category: "Men",
    price: 64.99,
    images: [
      "https://i.pinimg.com/736x/49/a0/62/49a0623084d43aa2777c8bb697ba2206.jpg",
      "https://i.pinimg.com/736x/49/a0/62/49a0623084d43aa2777c8bb697ba2206.jpg",
      "https://i.pinimg.com/736x/49/a0/62/49a0623084d43aa2777c8bb697ba2206.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "An olive green casual shirt with military-inspired styling and comfort.",
    isFavorite: false,
  },
  // 62. WOMEN
  {
    id: 62,
    name: "Pink Floral Dress",
    category: "Women",
    price: 74.99,
    images: [
      "https://i.pinimg.com/1200x/6f/5b/55/6f5b551fa09434900aeaf343098b193a.jpg",
      "https://i.pinimg.com/1200x/6f/5b/55/6f5b551fa09434900aeaf343098b193a.jpg",
      "https://i.pinimg.com/1200x/6f/5b/55/6f5b551fa09434900aeaf343098b193a.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A pink floral dress with romantic patterns and feminine charm.",
    isFavorite: false,
  },
  // 63. KIDS
  {
    id: 63,
    name: "Denim Blue Kids Outfit",
    category: "Kids",
    price: 40.99,
    images: [
      "https://i.pinimg.com/736x/88/d6/47/88d647f237948573e98b43a854dd2aee.jpg",
      "https://i.pinimg.com/736x/88/d6/47/88d647f237948573e98b43a854dd2aee.jpg",
      "https://i.pinimg.com/736x/88/d6/47/88d647f237948573e98b43a854dd2aee.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description:
      "A denim blue outfit with classic styling and durable construction.",
    isFavorite: false,
  },
  // 64. MEN
  {
    id: 64,
    name: "Soft Pink Casual Shirt",
    category: "Men",
    price: 67.99,
    images: [
      "https://i.pinimg.com/1200x/24/7f/cf/247fcf78eb37ac37981b60c940db7a30.jpg",
      "https://i.pinimg.com/1200x/24/7f/cf/247fcf78eb37ac37981b60c940db7a30.jpg",
      "https://i.pinimg.com/1200x/24/7f/cf/247fcf78eb37ac37981b60c940db7a30.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A soft pink casual shirt that adds a modern touch to your wardrobe.",
    isFavorite: false,
  },
  // 65. WOMEN
  {
    id: 65,
    name: "Mustard Yellow Sweater",
    category: "Women",
    price: 64.99,
    images: [
      "https://i.pinimg.com/1200x/23/3c/53/233c534db5accf921bcb6ec7f59653cc.jpg",
      "https://i.pinimg.com/1200x/23/3c/53/233c534db5accf921bcb6ec7f59653cc.jpg",
      "https://i.pinimg.com/1200x/23/3c/53/233c534db5accf921bcb6ec7f59653cc.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description: "A mustard yellow sweater with cozy warmth and trendy color.",
    isFavorite: false,
  },
  // 66. KIDS
  {
    id: 66,
    name: "Stylish Black Kids Outfit",
    category: "Kids",
    price: 39.99,
    images: [
      "https://i.pinimg.com/1200x/a5/c6/6d/a5c66d54d23769debde359cc25d6a88e.jpg",
      "https://i.pinimg.com/1200x/a5/c6/6d/a5c66d54d23769debde359cc25d6a88e.jpg",
      "https://i.pinimg.com/1200x/a5/c6/6d/a5c66d54d23769debde359cc25d6a88e.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description:
      "A stylish black outfit with modern design and comfortable fit.",
    isFavorite: false,
  },
  // 67. MEN
  {
    id: 67,
    name: "Classic Blue Denim Shirt",
    category: "Men",
    price: 79.99,
    images: [
      "https://i.pinimg.com/1200x/00/b8/60/00b860e0b367f932d03d4c61153c8a48.jpg",
      "https://i.pinimg.com/1200x/00/b8/60/00b860e0b367f932d03d4c61153c8a48.jpg",
      "https://i.pinimg.com/1200x/00/b8/60/00b860e0b367f932d03d4c61153c8a48.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description: "A classic blue denim shirt that's timeless and versatile.",
    isFavorite: false,
  },
  // 68. WOMEN
  {
    id: 68,
    name: "Red Evening Gown",
    category: "Women",
    price: 149.99,
    images: [
      "https://i.pinimg.com/1200x/33/31/7e/33317edaf47f69ccb7d5f8efae5aa433.jpg",
      "https://i.pinimg.com/1200x/33/31/7e/33317edaf47f69ccb7d5f8efae5aa433.jpg",
      "https://i.pinimg.com/1200x/33/31/7e/33317edaf47f69ccb7d5f8efae5aa433.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A red evening gown that commands attention at any formal event.",
    isFavorite: false,
  },
  // 69. KIDS
  {
    id: 69,
    name: "Mint Green Kids Dress",
    category: "Kids",
    price: 43.99,
    images: [
      "https://i.pinimg.com/1200x/f7/71/4b/f7714b3d96ed429f2d601027b9974fde.jpg",
      "https://i.pinimg.com/1200x/f7/71/4b/f7714b3d96ed429f2d601027b9974fde.jpg",
      "https://i.pinimg.com/1200x/f7/71/4b/f7714b3d96ed429f2d601027b9974fde.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description: "A mint green dress with fresh color and sweet styling.",
    isFavorite: false,
  },
  // 70. MEN
  {
    id: 70,
    name: "Light Brown Casual Shirt",
    category: "Men",
    price: 70.99,
    images: [
      "https://i.pinimg.com/1200x/b6/07/f1/b607f18ac62d5fae3c069efdd09dfa98.jpg",
      "https://i.pinimg.com/1200x/b6/07/f1/b607f18ac62d5fae3c069efdd09dfa98.jpg",
      "https://i.pinimg.com/1200x/b6/07/f1/b607f18ac62d5fae3c069efdd09dfa98.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A light brown casual shirt with earthy tones and relaxed fit.",
    isFavorite: false,
  },
  // 71. WOMEN
  {
    id: 71,
    name: "Olive Green Jacket",
    category: "Women",
    price: 89.99,
    images: [
      "https://i.pinimg.com/736x/d2/69/57/d269570587a07b3a784e68e1648457b3.jpg",
      "https://i.pinimg.com/736x/d2/69/57/d269570587a07b3a784e68e1648457b3.jpg",
      "https://i.pinimg.com/736x/d2/69/57/d269570587a07b3a784e68e1648457b3.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "An olive green jacket with utilitarian charm and practical design.",
    isFavorite: false,
  },
  // 72. KIDS
  {
    id: 72,
    name: "Rose Pink Kids Dress",
    category: "Kids",
    price: 40.99,
    images: [
      "https://i.pinimg.com/1200x/d1/60/cf/d160cf3f1e02b3b802a82622082bbb44.jpg",
      "https://i.pinimg.com/1200x/d1/60/cf/d160cf3f1e02b3b802a82622082bbb44.jpg",
      "https://i.pinimg.com/1200x/d1/60/cf/d160cf3f1e02b3b802a82622082bbb44.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description: "A rose pink dress with delicate color and charming details.",
    isFavorite: false,
  },
  // 73. MEN
  {
    id: 73,
    name: "Cherry Red Button-Down",
    category: "Men",
    price: 68.99,
    images: [
      "https://i.pinimg.com/1200x/8e/27/e1/8e27e112fd899cc390ca46dbbc406864.jpg",
      "https://i.pinimg.com/1200x/8e/27/e1/8e27e112fd899cc390ca46dbbc406864.jpg",
      "https://i.pinimg.com/1200x/8e/27/e1/8e27e112fd899cc390ca46dbbc406864.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A cherry red button-down with bold color and classic styling.",
    isFavorite: false,
  },
  // 74. WOMEN
  {
    id: 74,
    name: "Light Gray Sweater",
    category: "Women",
    price: 54.99,
    images: [
      "https://i.pinimg.com/736x/b0/13/c5/b013c590ed02f6bdab297178656cdbcb.jpg",
      "https://i.pinimg.com/736x/b0/13/c5/b013c590ed02f6bdab297178656cdbcb.jpg",
      "https://i.pinimg.com/736x/b0/13/c5/b013c590ed02f6bdab297178656cdbcb.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description: "A light gray sweater with soft texture and versatile appeal.",
    isFavorite: false,
  },
  // 75. KIDS
  {
    id: 75,
    name: "Bright Blue Kids Dress",
    category: "Kids",
    price: 43.99,
    images: [
      "https://i.pinimg.com/1200x/80/7c/92/807c92ac62d219a02f0c6cf4b3e95431.jpg",
      "https://i.pinimg.com/1200x/80/7c/92/807c92ac62d219a02f0c6cf4b3e95431.jpg",
      "https://i.pinimg.com/1200x/80/7c/92/807c92ac62d219a02f0c6cf4b3e95431.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description: "A bright blue dress with vivid color and playful design.",
    isFavorite: false,
  },
  // 76. MEN
  {
    id: 76,
    name: "Hot Pink Summer Shirt",
    category: "Men",
    price: 68.99,
    images: [
      "https://i.pinimg.com/1200x/03/bb/30/03bb30d74b17b4b0d18d1509421f7377.jpg",
      "https://i.pinimg.com/1200x/03/bb/30/03bb30d74b17b4b0d18d1509421f7377.jpg",
      "https://i.pinimg.com/1200x/03/bb/30/03bb30d74b17b4b0d18d1509421f7377.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A hot pink summer shirt that makes a daring fashion statement.",
    isFavorite: false,
  },
  // 77. WOMEN
  {
    id: 77,
    name: "White Cotton Blazer",
    category: "Women",
    price: 119.99,
    images: [
      "https://i.pinimg.com/1200x/16/4d/5e/164d5e18da0ddb316f6faf75819e7551.jpg",
      "https://i.pinimg.com/1200x/16/4d/5e/164d5e18da0ddb316f6faf75819e7551.jpg",
      "https://i.pinimg.com/1200x/16/4d/5e/164d5e18da0ddb316f6faf75819e7551.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A white cotton blazer that's crisp, professional, and elegant.",
    isFavorite: false,
  },
  // 78. KIDS
  {
    id: 78,
    name: "Caramel Brown Kids Ensemble",
    category: "Kids",
    price: 45.99,
    images: [
      "https://i.pinimg.com/1200x/9f/9e/b8/9f9eb8c1a4e834104a4cc090f0f23d54.jpg",
      "https://i.pinimg.com/1200x/9f/9e/b8/9f9eb8c1a4e834104a4cc090f0f23d54.jpg",
      "https://i.pinimg.com/1200x/9f/9e/b8/9f9eb8c1a4e834104a4cc090f0f23d54.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description:
      "A caramel brown ensemble with rich tones and comfortable design.",
    isFavorite: false,
  },
  // 79. MEN
  {
    id: 79,
    name: "Bright Yellow Summer Shirt",
    category: "Men",
    price: 64.99,
    images: [
      "https://i.pinimg.com/1200x/cf/bc/3f/cfbc3f50103077ee93e9012e6fcd3dca.jpg",
      "https://i.pinimg.com/1200x/cf/bc/3f/cfbc3f50103077ee93e9012e6fcd3dca.jpg",
      "https://i.pinimg.com/1200x/cf/bc/3f/cfbc3f50103077ee93e9012e6fcd3dca.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A bright yellow summer shirt that radiates sunshine and positivity.",
    isFavorite: false,
  },
  // 80. WOMEN
  {
    id: 80,
    name: "Black Leather Jacket",
    category: "Women",
    price: 159.99,
    images: [
      "https://i.pinimg.com/1200x/b2/7c/0d/b27c0d77c658e2281761249b2647a1b0.jpg",
      "https://i.pinimg.com/1200x/b2/7c/0d/b27c0d77c658e2281761249b2647a1b0.jpg",
      "https://i.pinimg.com/1200x/b2/7c/0d/b27c0d77c658e2281761249b2647a1b0.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A black leather jacket with edgy style and premium craftsmanship.",
    isFavorite: false,
  },
  // 81. KIDS
  {
    id: 81,
    name: "Sweet White Kids Outfit",
    category: "Kids",
    price: 37.99,
    images: [
      "https://i.pinimg.com/736x/51/c1/fa/51c1fa858a22fa36474ca596cd0c04c5.jpg",
      "https://i.pinimg.com/736x/51/c1/fa/51c1fa858a22fa36474ca596cd0c04c5.jpg",
      "https://i.pinimg.com/736x/51/c1/fa/51c1fa858a22fa36474ca596cd0c04c5.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description:
      "A sweet white outfit perfect for photo sessions and special moments.",
    isFavorite: false,
  },
  // 82. MEN
  {
    id: 82,
    name: "Modern Black Blazer",
    category: "Men",
    price: 189.99,
    images: [
      "https://i.pinimg.com/736x/52/43/06/5243063d61e61988699dc278897e0fd5.jpg",
      "https://i.pinimg.com/736x/52/43/06/5243063d61e61988699dc278897e0fd5.jpg",
      "https://i.pinimg.com/736x/52/43/06/5243063d61e61988699dc278897e0fd5.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A modern black blazer with contemporary cut and refined details.",
    isFavorite: false,
  },
  // 83. WOMEN
  {
    id: 83,
    name: "Blush Pink Dress",
    category: "Women",
    price: 89.99,
    images: [
      "https://i.pinimg.com/1200x/5d/1e/52/5d1e526ab3eab92e465f24a67d0a42c5.jpg",
      "https://i.pinimg.com/1200x/5d/1e/52/5d1e526ab3eab92e465f24a67d0a42c5.jpg",
      "https://i.pinimg.com/1200x/5d/1e/52/5d1e526ab3eab92e465f24a67d0a42c5.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A blush pink dress with romantic appeal and graceful silhouette.",
    isFavorite: false,
  },
  // 84. KIDS
  {
    id: 84,
    name: "Silver Grey Kids Ensemble",
    category: "Kids",
    price: 44.99,
    images: [
      "https://i.pinimg.com/1200x/02/88/03/0288031ea7721f226554ebe6f32bfd58.jpg",
      "https://i.pinimg.com/1200x/02/88/03/0288031ea7721f226554ebe6f32bfd58.jpg",
      "https://i.pinimg.com/1200x/02/88/03/0288031ea7721f226554ebe6f32bfd58.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description:
      "A silver grey ensemble with metallic sheen and stylish appearance.",
    isFavorite: false,
  },
  // 85. MEN
  {
    id: 85,
    name: "Slate Gray Button-Down",
    category: "Men",
    price: 67.99,
    images: [
      "https://i.pinimg.com/1200x/26/7d/6f/267d6fb1d3440ab5235a32307d64fbe5.jpg",
      "https://i.pinimg.com/1200x/26/7d/6f/267d6fb1d3440ab5235a32307d64fbe5.jpg",
      "https://i.pinimg.com/1200x/26/7d/6f/267d6fb1d3440ab5235a32307d64fbe5.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A slate gray button-down with sophisticated color and versatile styling.",
    isFavorite: false,
  },
  // 86. WOMEN
  {
    id: 86,
    name: "Blue Floral Dress",
    category: "Women",
    price: 74.99,
    images: [
      "https://i.pinimg.com/736x/4b/b8/13/4bb813eb97097928c2a2909e9a46efb2.jpg",
      "https://i.pinimg.com/736x/4b/b8/13/4bb813eb97097928c2a2909e9a46efb2.jpg",
      "https://i.pinimg.com/736x/4b/b8/13/4bb813eb97097928c2a2909e9a46efb2.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A blue floral dress with beautiful patterns and flowing fabric.",
    isFavorite: false,
  },
  // 87. KIDS
  {
    id: 87,
    name: "Classic Red Kids Dress",
    category: "Kids",
    price: 41.99,
    images: [
      "https://i.pinimg.com/1200x/2b/f2/77/2bf27789d72b3620f3b59ca5f190c991.jpg",
      "https://i.pinimg.com/1200x/2b/f2/77/2bf27789d72b3620f3b59ca5f190c991.jpg",
      "https://i.pinimg.com/1200x/2b/f2/77/2bf27789d72b3620f3b59ca5f190c991.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description:
      "A classic red dress with timeless style for special occasions.",
    isFavorite: false,
  },
  // 88. MEN
  {
    id: 88,
    name: "Crimson Casual Shirt",
    category: "Men",
    price: 69.99,
    images: [
      "https://i.pinimg.com/736x/58/eb/b5/58ebb57ece226be415114bdcac48c488.jpg",
      "https://i.pinimg.com/736x/58/eb/b5/58ebb57ece226be415114bdcac48c488.jpg",
      "https://i.pinimg.com/736x/58/eb/b5/58ebb57ece226be415114bdcac48c488.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A crimson casual shirt with deep red color and comfortable fit.",
    isFavorite: false,
  },
  // 89. WOMEN
  {
    id: 89,
    name: "Yellow Summer Maxi",
    category: "Women",
    price: 94.99,
    images: [
      "https://i.pinimg.com/1200x/35/8c/70/358c7054c131bb6d7fb4907b970de6ba.jpg",
      "https://i.pinimg.com/1200x/35/8c/70/358c7054c131bb6d7fb4907b970de6ba.jpg",
      "https://i.pinimg.com/1200x/35/8c/70/358c7054c131bb6d7fb4907b970de6ba.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A yellow summer maxi that flows beautifully and catches every eye.",
    isFavorite: false,
  },
  // 90. KIDS
  {
    id: 90,
    name: "Cool Black Kids Ensemble",
    category: "Kids",
    price: 42.99,
    images: [
      "https://i.pinimg.com/1200x/ab/b8/92/abb8924964480507dd128c5a2715d775.jpg",
      "https://i.pinimg.com/1200x/ab/b8/92/abb8924964480507dd128c5a2715d775.jpg",
      "https://i.pinimg.com/1200x/ab/b8/92/abb8924964480507dd128c5a2715d775.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description: "A cool black ensemble with edgy styling and modern design.",
    isFavorite: false,
  },
  // 91. MEN
  {
    id: 91,
    name: "Golden Yellow Polo",
    category: "Men",
    price: 61.99,
    images: [
      "https://i.pinimg.com/1200x/bd/f2/cc/bdf2ccc82ebdf1eb04ff4e27a12420fe.jpg",
      "https://i.pinimg.com/1200x/bd/f2/cc/bdf2ccc82ebdf1eb04ff4e27a12420fe.jpg",
      "https://i.pinimg.com/1200x/bd/f2/cc/bdf2ccc82ebdf1eb04ff4e27a12420fe.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A golden yellow polo with luxurious color and comfortable fabric.",
    isFavorite: false,
  },
  // 92. WOMEN
  {
    id: 92,
    name: "Chocolate Brown Dress",
    category: "Women",
    price: 89.99,
    images: [
      "https://i.pinimg.com/1200x/0d/b8/13/0db813cc591ddc2a63cf81326863a0f9.jpg",
      "https://i.pinimg.com/1200x/0d/b8/13/0db813cc591ddc2a63cf81326863a0f9.jpg",
      "https://i.pinimg.com/1200x/0d/b8/13/0db813cc591ddc2a63cf81326863a0f9.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description: "A chocolate brown dress with rich color and elegant design.",
    isFavorite: false,
  },
  // 93. KIDS
  {
    id: 93,
    name: "Elegant White Kids Ensemble",
    category: "Kids",
    price: 44.99,
    images: [
      "https://i.pinimg.com/1200x/6d/64/7b/6d647b66e6b9d8b23fa0a2beb58c8f2f.jpg",
      "https://i.pinimg.com/1200x/6d/64/7b/6d647b66e6b9d8b23fa0a2beb58c8f2f.jpg",
      "https://i.pinimg.com/1200x/6d/64/7b/6d647b66e6b9d8b23fa0a2beb58c8f2f.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description:
      "An elegant white ensemble perfect for formal events and ceremonies.",
    isFavorite: false,
  },
  // 94. MEN
  {
    id: 94,
    name: "Dark Gray Summer Shirt",
    category: "Men",
    price: 65.99,
    images: [
      "https://i.pinimg.com/736x/3e/ff/98/3eff989eda71032a4b1e2a2f4a8e0bd5.jpg",
      "https://i.pinimg.com/736x/3e/ff/98/3eff989eda71032a4b1e2a2f4a8e0bd5.jpg",
      "https://i.pinimg.com/736x/3e/ff/98/3eff989eda71032a4b1e2a2f4a8e0bd5.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A dark gray summer shirt with cool tones and breathable fabric.",
    isFavorite: false,
  },
  // 95. WOMEN
  {
    id: 95,
    name: "Mint Green Summer Top",
    category: "Women",
    price: 39.99,
    images: [
      "https://i.pinimg.com/736x/05/d2/0b/05d20b47ffc0ca8a1e64e3d130fccd1a.jpg",
      "https://i.pinimg.com/736x/05/d2/0b/05d20b47ffc0ca8a1e64e3d130fccd1a.jpg",
      "https://i.pinimg.com/736x/05/d2/0b/05d20b47ffc0ca8a1e64e3d130fccd1a.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A mint green summer top that's fresh, light, and perfect for warm days.",
    isFavorite: false,
  },
  // 96. KIDS
  {
    id: 96,
    name: "Trendy Black Kids Dress",
    category: "Kids",
    price: 38.99,
    images: [
      "https://i.pinimg.com/1200x/6a/41/b4/6a41b4baae9c96f97c31f389ec38c966.jpg",
      "https://i.pinimg.com/1200x/6a/41/b4/6a41b4baae9c96f97c31f389ec38c966.jpg",
      "https://i.pinimg.com/1200x/6a/41/b4/6a41b4baae9c96f97c31f389ec38c966.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description:
      "A trendy black dress with contemporary styling for fashion-forward kids.",
    isFavorite: false,
  },
  // 97. WOMEN
  {
    id: 97,
    name: "Sky Blue Summer Dress",
    category: "Women",
    price: 69.99,
    images: [
      "https://i.pinimg.com/1200x/ae/e1/ed/aee1edbee8c00a2b4ca911ca6e305788.jpg",
      "https://i.pinimg.com/1200x/ae/e1/ed/aee1edbee8c00a2b4ca911ca6e305788.jpg",
      "https://i.pinimg.com/1200x/ae/e1/ed/aee1edbee8c00a2b4ca911ca6e305788.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A sky blue summer dress that captures the essence of clear skies.",
    isFavorite: false,
  },
  // 98. KIDS
  {
    id: 98,
    name: "Nature Green Kids Outfit",
    category: "Kids",
    price: 39.99,
    images: [
      "https://i.pinimg.com/1200x/bf/2a/c9/bf2ac913ffea80c27b92758f9399f322.jpg",
      "https://i.pinimg.com/1200x/bf/2a/c9/bf2ac913ffea80c27b92758f9399f322.jpg",
      "https://i.pinimg.com/1200x/bf/2a/c9/bf2ac913ffea80c27b92758f9399f322.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description:
      "A nature green outfit inspired by the outdoors and natural beauty.",
    isFavorite: false,
  },
  // 99. WOMEN
  {
    id: 99,
    name: "Red Wrap Dress",
    category: "Women",
    price: 89.99,
    images: [
      "https://i.pinimg.com/1200x/eb/86/df/eb86df32f91522d82f8dc2647024dbb6.jpg",
      "https://i.pinimg.com/1200x/eb/86/df/eb86df32f91522d82f8dc2647024dbb6.jpg",
      "https://i.pinimg.com/1200x/eb/86/df/eb86df32f91522d82f8dc2647024dbb6.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A red wrap dress with flattering silhouette and versatile styling.",
    isFavorite: false,
  },
  // 100. KIDS
  {
    id: 100,
    name: "Cheerful Yellow Kids Dress",
    category: "Kids",
    price: 38.99,
    images: [
      "https://i.pinimg.com/1200x/34/d7/76/34d776b2bc9ad725b3416e4069e92094.jpg",
      "https://i.pinimg.com/1200x/34/d7/76/34d776b2bc9ad725b3416e4069e92094.jpg",
      "https://i.pinimg.com/1200x/34/d7/76/34d776b2bc9ad725b3416e4069e92094.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description:
      "A cheerful yellow dress that spreads happiness wherever they go.",
    isFavorite: false,
  },
  // 101. WOMEN
  {
    id: 101,
    name: "Caramel Brown Sweater",
    category: "Women",
    price: 64.99,
    images: [
      "https://i.pinimg.com/1200x/71/bb/8e/71bb8e3e2e495cd81c3719ad83579cfa.jpg",
      "https://i.pinimg.com/1200x/71/bb/8e/71bb8e3e2e495cd81c3719ad83579cfa.jpg",
      "https://i.pinimg.com/1200x/71/bb/8e/71bb8e3e2e495cd81c3719ad83579cfa.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description: "A caramel brown sweater with sweet color and cozy warmth.",
    isFavorite: false,
  },
  // 102. KIDS
  {
    id: 102,
    name: "Soft Grey Kids Outfit",
    category: "Kids",
    price: 38.99,
    images: [
      "https://i.pinimg.com/1200x/3a/51/21/3a5121004c1727cec4d42470c700a5dc.jpg",
      "https://i.pinimg.com/1200x/3a/51/21/3a5121004c1727cec4d42470c700a5dc.jpg",
      "https://i.pinimg.com/1200x/3a/51/21/3a5121004c1727cec4d42470c700a5dc.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description:
      "A soft grey outfit with gentle tones and comfortable construction.",
    isFavorite: false,
  },
  // 103. WOMEN
  {
    id: 103,
    name: "Gray Wool Coat",
    category: "Women",
    price: 169.99,
    images: [
      "https://i.pinimg.com/736x/1b/c2/b0/1bc2b06f2006381f89220f1de02b18d7.jpg",
      "https://i.pinimg.com/736x/1b/c2/b0/1bc2b06f2006381f89220f1de02b18d7.jpg",
      "https://i.pinimg.com/736x/1b/c2/b0/1bc2b06f2006381f89220f1de02b18d7.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A gray wool coat with luxurious warmth and timeless elegance.",
    isFavorite: false,
  },
  // 104. KIDS
  {
    id: 104,
    name: "Earthy Brown Kids Dress",
    category: "Kids",
    price: 39.99,
    images: [
      "https://i.pinimg.com/736x/1a/f7/54/1af7547a30ed191023bee83cedf828b8.jpg",
      "https://i.pinimg.com/736x/1a/f7/54/1af7547a30ed191023bee83cedf828b8.jpg",
      "https://i.pinimg.com/736x/1a/f7/54/1af7547a30ed191023bee83cedf828b8.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["2T", "3T", "4T", "5T"],
    description:
      "An earthy brown dress with natural tones and organic styling.",
    isFavorite: false,
  },
  {
    id: 105,
    name: "Classic Cotton T-Shirt",
    category: "Men",
    price: 29.99,
    images: [
      "https://i.pinimg.com/1200x/0e/c5/e2/0ec5e2bcc16b143e956c0b5cd67b3fea.jpg",
      "https://i.pinimg.com/1200x/0e/c5/e2/0ec5e2bcc16b143e956c0b5cd67b3fea.jpg",
      "https://i.pinimg.com/1200x/0e/c5/e2/0ec5e2bcc16b143e956c0b5cd67b3fea.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Soft and breathable cotton t-shirt perfect for everyday wear.",
    isFavorite: false,
  },
  {
    id: 106,
    name: "Classic Casual Shirt",
    category: "Men",
    price: 29.99,
    images: [
      "https://i.pinimg.com/1200x/8a/47/13/8a47134c71a25f208255268df7bafa9d.jpg",
      "https://i.pinimg.com/1200x/8a/47/13/8a47134c71a25f208255268df7bafa9d.jpg",
      "https://i.pinimg.com/1200x/8a/47/13/8a47134c71a25f208255268df7bafa9d.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "An earthy brown dress with natural tones and organic styling.",
    isFavorite: false,
  },
  {
    id: 107,
    name: "Longsleeve Sweather",
    category: "Kids",
    price: 19.99,
    images: [
      "https://i.pinimg.com/1200x/f4/e6/31/f4e6311b0a02ee0db97d46d92106efcc.jpg",
      "https://i.pinimg.com/1200x/f4/e6/31/f4e6311b0a02ee0db97d46d92106efcc.jpg",
      "https://i.pinimg.com/1200x/f4/e6/31/f4e6311b0a02ee0db97d46d92106efcc.jpg",
    ],
    colors: [
      "Black",
      "White",
      "Blue",
      "Red",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
      "Brown",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "An earthy brown dress with natural tones and organic styling.",
    isFavorite: false,
  },
];
