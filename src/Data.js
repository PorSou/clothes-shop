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
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/white-cotton-t-shirt-on-model-UuVAioy77EsslMwCodHuuU2tNzPBWv.jpg",
    isFavorite: false,
  },
  {
    id: 2,
    name: "Slim Fit Denim Jeans",
    category: "Women",
    price: 79.99,
    image:
      "https://i.pinimg.com/736x/9d/af/75/9daf75de9fd198cd622c51f78d58cd71.jpg",
    isFavorite: false,
  },
  {
    id: 3,
    name: "Elegant Summer Dress",
    category: "Women",
    price: 89.99,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/elegant-summer-dress-on-model-ltOQb6iIqnBHy8xdmqugMSp3p3q8tM.jpg",
    isFavorite: false,
  },
  {
    id: 4,
    name: "Leather Jacket",
    category: "Men",
    price: 199.99,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/black-leather-jacket-on-model-Efda0PZjtR4u4EZvdAU4K2XIgq7byh.jpg",
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
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/white-cotton-t-shirt-on-model-UuVAioy77EsslMwCodHuuU2tNzPBWv.jpg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/white-cotton-t-shirt-on-model-UuVAioy77EsslMwCodHuuU2tNzPBWv.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/white-cotton-t-shirt-on-model-UuVAioy77EsslMwCodHuuU2tNzPBWv.jpg",
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
      "https://i.pinimg.com/736x/9d/af/75/9daf75de9fd198cd622c51f78d58cd71.jpg",
    images: [
      "https://i.pinimg.com/736x/9d/af/75/9daf75de9fd198cd622c51f78d58cd71.jpg",
      "https://i.pinimg.com/736x/9d/af/75/9daf75de9fd198cd622c51f78d58cd71.jpg",
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
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/elegant-summer-dress-on-model-ltOQb6iIqnBHy8xdmqugMSp3p3q8tM.jpg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/elegant-summer-dress-on-model-ltOQb6iIqnBHy8xdmqugMSp3p3q8tM.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/elegant-summer-dress-on-model-ltOQb6iIqnBHy8xdmqugMSp3p3q8tM.jpg",
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
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/black-leather-jacket-on-model-Efda0PZjtR4u4EZvdAU4K2XIgq7byh.jpg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/black-leather-jacket-on-model-Efda0PZjtR4u4EZvdAU4K2XIgq7byh.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/black-leather-jacket-on-model-Efda0PZjtR4u4EZvdAU4K2XIgq7byh.jpg",
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
    name: "Classic White Oxford Shirt",
    category: "Men",
    color: "White",
    price: 79.99,
    image:
      "https://i.pinimg.com/1200x/2a/2a/b0/2a2ab06deb7046a04d1f1da9424f64d4.jpg",
    isFavorite: false,
  },

  // 2. WOMEN
  {
    id: 2,
    name: "Summer Floral Dress",
    category: "Women",
    color: "Red",
    price: 84.99,
    image:
      "https://i.pinimg.com/736x/91/53/1c/91531cb498a48319494a45d5f23d092f.jpg",
    isFavorite: false,
  },

  // 3. KIDS
  {
    id: 3,
    name: "Cozy Kids Hoodie",
    category: "Kids",
    color: "Yellow",
    price: 39.99,
    image:
      "https://i.pinimg.com/1200x/24/5a/e8/245ae80cb1e3324daba8bb1a294b1df1.jpg",
    isFavorite: false,
  },

  // 4. MEN
  {
    id: 4,
    name: "Dark Wash Denim Jeans",
    category: "Men",
    color: "Blue",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
    isFavorite: false,
  },

  // 5. WOMEN
  {
    id: 5,
    name: "Vintage Denim Jacket",
    category: "Women",
    color: "Gray",
    price: 94.99,
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&h=400&fit=crop",
    isFavorite: false,
  },

  // 6. KIDS
  {
    id: 6,
    name: "Fun Striped Tee",
    category: "Kids",
    color: "Green",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
    isFavorite: false,
  },

  // 7. MEN
  {
    id: 7,
    name: "Casual Linen Shirt",
    category: "Men",
    color: "Brown",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    isFavorite: false,
  },

  // 8. WOMEN
  {
    id: 8,
    name: "Elegant Silk Blouse",
    category: "Women",
    color: "Pink",
    price: 74.99,
    image:
      "https://i.pinimg.com/1200x/20/6f/3a/206f3a22ebeeecf01e95633cca3f56bd.jpg",
    isFavorite: false,
  },

  // 9. KIDS
  {
    id: 9,
    name: "Summer Denim Shorts",
    category: "Kids",
    color: "Blue",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop",
    isFavorite: false,
  },

  // 10. MEN
  {
    id: 10,
    name: "Premium Leather Jacket",
    category: "Men",
    color: "Black",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    isFavorite: false,
  },

  // 11. WOMEN
  {
    id: 11,
    name: "Office Pencil Skirt",
    category: "Women",
    color: "Gray",
    price: 64.99,
    image:
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=400&fit=crop",
    isFavorite: false,
  },

  // 12. KIDS
  {
    id: 12,
    name: "Colorful Kids Cargo Pants",
    category: "Kids",
    color: "Yellow",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
    isFavorite: false,
  },

  // 13. MEN
  {
    id: 13,
    name: "Navy Cotton Polo",
    category: "Men",
    color: "Blue",
    price: 45.99,
    image:
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop",
    isFavorite: false,
  },

  // 14. WOMEN
  {
    id: 14,
    name: "Wool Blend Trench Coat",
    category: "Women",
    color: "Brown",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400&h=400&fit=crop",
    isFavorite: false,
  },

  // 15. KIDS
  {
    id: 15,
    name: "Comfy Sleep Set",
    category: "Kids",
    color: "Pink",
    price: 39.99,
    image:
      "https://i.pinimg.com/1200x/a3/73/fe/a373fe54ba4049827ac3905d79a81c21.jpg",
    isFavorite: false,
  },

  // 16. MEN
  {
    id: 16,
    name: "Slim Fit Chinos",
    category: "Men",
    color: "Gray",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop",
    isFavorite: false,
  },

  // 17. WOMEN
  {
    id: 17,
    name: "Soft Cotton Tee",
    category: "Women",
    color: "Red",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    isFavorite: false,
  },

  // 18. KIDS
  {
    id: 18,
    name: "Graphic Print Sweatshirt",
    category: "Kids",
    color: "Green",
    price: 44.99,
    image:
      "https://i.pinimg.com/1200x/08/ca/33/08ca33d244a28babb8613257f3dfbae7.jpg",
    isFavorite: false,
  },

  // 19. MEN
  {
    id: 19,
    name: "Performance Track Pants",
    category: "Men",
    color: "Black",
    price: 119.99,
    image:
      "https://i.pinimg.com/1200x/c5/6f/e2/c56fe2c2cb62ef25d5e44fed20269889.jpg",
    isFavorite: false,
  },

  // 20. WOMEN
  {
    id: 20,
    name: "High-Waist Yoga Leggings",
    category: "Women",
    color: "Gray",
    price: 54.99,
    image:
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=400&fit=crop",
    isFavorite: false,
  },

  // 21. KIDS
  {
    id: 21,
    name: "Playful Graphic Tee",
    category: "Kids",
    color: "Yellow",
    price: 27.99,
    image:
      "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?w=400&h=400&fit=crop",
    isFavorite: false,
  },

  // 22. MEN
  {
    id: 22,
    name: "Wool Sweater",
    category: "Men",
    color: "Brown",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop",
    isFavorite: false,
  },

  // 23. WOMEN
  {
    id: 23,
    name: "Casual Midi Skirt",
    category: "Women",
    color: "Pink",
    price: 67.99,
    image:
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=400&fit=crop",
    isFavorite: false,
  },

  // 24. KIDS
  {
    id: 24,
    name: "Winter Puffer Jacket",
    category: "Kids",
    color: "Green",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=400&h=400&fit=crop",
    isFavorite: false,
  },

  // 25. MEN
  {
    id: 25,
    name: "Athletic Track Pants",
    category: "Men",
    color: "Black",
    price: 54.99,
    image:
      "https://i.pinimg.com/736x/4c/82/25/4c8225760ab40862070a5f0fd32c51fb.jpg",
    isFavorite: false,
  },

  // 26. WOMEN
  {
    id: 26,
    name: "Knit Cardigan",
    category: "Women",
    color: "White",
    price: 72.99,
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop",
    isFavorite: false,
  },
];

// products detail for card
// DataDetail.js (or add to your Data.js)
export const productDetails = [
  {
    id: 1,
    name: "Classic White Oxford Shirt",
    category: "Men",
    price: 79.99,
    images: [
      "https://i.pinimg.com/1200x/2a/2a/b0/2a2ab06deb7046a04d1f1da9424f64d4.jpg",
      "https://i.pinimg.com/1200x/2a/2a/b0/2a2ab06deb7046a04d1f1da9424f64d4.jpg",
      "https://i.pinimg.com/1200x/2a/2a/b0/2a2ab06deb7046a04d1f1da9424f64d4.jpg",
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
      "A crisp Oxford shirt crafted from breathable cotton — versatile for office or casual wear.",
    isFavorite: false,
  },
  {
    id: 2,
    name: "Summer Floral Dress",
    category: "Women",
    price: 84.99,
    images: [
      "https://i.pinimg.com/736x/91/53/1c/91531cb498a48319494a45d5f23d092f.jpg",
      "https://i.pinimg.com/736x/91/53/1c/91531cb498a48319494a45d5f23d092f.jpg",
      "https://i.pinimg.com/736x/91/53/1c/91531cb498a48319494a45d5f23d092f.jpg",
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
      "Flowing summer dress perfect for any occasion. Lightweight fabric and flattering cut.",
    isFavorite: false,
  },
  {
    id: 3,
    name: "Cozy Kids Hoodie",
    category: "Kids",
    price: 39.99,
    images: [
      "https://i.pinimg.com/1200x/24/5a/e8/245ae80cb1e3324daba8bb1a294b1df1.jpg",
      "https://i.pinimg.com/1200x/24/5a/e8/245ae80cb1e3324daba8bb1a294b1df1.jpg",
      "https://i.pinimg.com/1200x/24/5a/e8/245ae80cb1e3324daba8bb1a294b1df1.jpg",
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
      "Soft, cozy hoodie for kids — warm, durable, and machine washable.",
    isFavorite: false,
  },
  {
    id: 4,
    name: "Dark Wash Denim Jeans",
    category: "Men",
    price: 89.99,
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
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
    description: "Classic dark-wash jeans with a comfortable straight fit.",
    isFavorite: false,
  },
  {
    id: 5,
    name: "Vintage Denim Jacket",
    category: "Women",
    price: 94.99,
    images: [
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&h=400&fit=crop",
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
    description: "Retro-style denim jacket with a soft, worn-in feel.",
    isFavorite: false,
  },
  {
    id: 6,
    name: "Fun Striped Tee",
    category: "Kids",
    price: 24.99,
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
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
      "Playful striped tee for kids — soft cotton, everyday comfort.",
    isFavorite: false,
  },
  {
    id: 7,
    name: "Casual Linen Shirt",
    category: "Men",
    price: 59.99,
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
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
      "Lightweight linen shirt — breathable and ideal for warm weather.",
    isFavorite: false,
  },
  {
    id: 8,
    name: "Elegant Silk Blouse",
    category: "Women",
    price: 74.99,
    images: [
      "https://i.pinimg.com/1200x/20/6f/3a/206f3a22ebeeecf01e95633cca3f56bd.jpg",
      "https://i.pinimg.com/1200x/20/6f/3a/206f3a22ebeeecf01e95633cca3f56bd.jpg",
      "https://i.pinimg.com/1200x/20/6f/3a/206f3a22ebeeecf01e95633cca3f56bd.jpg",
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
      "Smooth silk-like blouse that pairs well with skirts and trousers.",
    isFavorite: false,
  },
  {
    id: 9,
    name: "Summer Denim Shorts",
    category: "Kids",
    price: 34.99,
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop",
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
      "Durable denim shorts for active kids with a comfortable waistband.",
    isFavorite: false,
  },
  {
    id: 10,
    name: "Premium Leather Jacket",
    category: "Men",
    price: 199.99,
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
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
      "High-quality leather jacket with a sleek, classic silhouette.",
    isFavorite: false,
  },
  {
    id: 11,
    name: "Office Pencil Skirt",
    category: "Women",
    price: 64.99,
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=400&fit=crop",
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
      "Tailored pencil skirt for the office — flattering and professional.",
    isFavorite: false,
  },
  {
    id: 12,
    name: "Colorful Kids Cargo Pants",
    category: "Kids",
    price: 49.99,
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
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
      "Practical cargo pants with pockets — tough enough for playtime.",
    isFavorite: false,
  },
  {
    id: 13,
    name: "Navy Cotton Polo",
    category: "Men",
    price: 45.99,
    images: [
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop",
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
    description: "Breathable cotton polo with a smart, casual look.",
    isFavorite: false,
  },
  {
    id: 14,
    name: "Wool Blend Trench Coat",
    category: "Women",
    price: 149.99,
    images: [
      "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400&h=400&fit=crop",
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
    description: "Warm wool-blend trench coat — elegant for colder days.",
    isFavorite: false,
  },
  {
    id: 15,
    name: "Comfy Sleep Set",
    category: "Kids",
    price: 39.99,
    images: [
      "https://i.pinimg.com/1200x/a3/73/fe/a373fe54ba4049827ac3905d79a81c21.jpg",
      "https://i.pinimg.com/1200x/a3/73/fe/a373fe54ba4049827ac3905d79a81c21.jpg",
      "https://i.pinimg.com/1200x/a3/73/fe/a373fe54ba4049827ac3905d79a81c21.jpg",
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
    description: "Soft two-piece sleep set for kids — cozy for bedtime.",
    isFavorite: false,
  },
  {
    id: 16,
    name: "Slim Fit Chinos",
    category: "Men",
    price: 69.99,
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop",
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
    description: "Versatile slim-fit chinos — great for smart-casual outfits.",
    isFavorite: false,
  },
  {
    id: 17,
    name: "Soft Cotton Tee",
    category: "Women",
    price: 29.99,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
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
    description: "Everyday cotton tee with a soft hand-feel and classic fit.",
    isFavorite: false,
  },
  {
    id: 18,
    name: "Graphic Print Sweatshirt",
    category: "Kids",
    price: 44.99,
    images: [
      "https://i.pinimg.com/1200x/08/ca/33/08ca33d244a28babb8613257f3dfbae7.jpg",
      "https://i.pinimg.com/1200x/08/ca/33/08ca33d244a28babb8613257f3dfbae7.jpg",
      "https://i.pinimg.com/1200x/08/ca/33/08ca33d244a28babb8613257f3dfbae7.jpg",
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
    description: "Bold graphic sweatshirt kids love — warm and comfy.",
    isFavorite: false,
  },
  {
    id: 19,
    name: "Performance Track Pants",
    category: "Men",
    price: 119.99,
    images: [
      "https://i.pinimg.com/1200x/c5/6f/e2/c56fe2c2cb62ef25d5e44fed20269889.jpg",
      "https://i.pinimg.com/1200x/c5/6f/e2/c56fe2c2cb62ef25d5e44fed20269889.jpg",
      "https://i.pinimg.com/1200x/c5/6f/e2/c56fe2c2cb62ef25d5e44fed20269889.jpg",
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
    description: "High-performance track pants with moisture-wicking fabric.",
    isFavorite: false,
  },
  {
    id: 20,
    name: "High-Waist Yoga Leggings",
    category: "Women",
    price: 54.99,
    images: [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=400&fit=crop",
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
    description: "Supportive high-waist leggings for yoga and everyday wear.",
    isFavorite: false,
  },
  {
    id: 21,
    name: "Playful Graphic Tee",
    category: "Kids",
    price: 27.99,
    images: [
      "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?w=400&h=400&fit=crop",
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
    description: "Bright graphic tee that makes playtime fun and comfy.",
    isFavorite: false,
  },
  {
    id: 22,
    name: "Wool Sweater",
    category: "Men",
    price: 79.99,
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop",
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
    description: "Cozy wool-blend sweater for cooler days and layered looks.",
    isFavorite: false,
  },
  {
    id: 23,
    name: "Casual Midi Skirt",
    category: "Women",
    price: 67.99,
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=400&fit=crop",
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
      "Easy midi skirt — breezy and comfortable for everyday styling.",
    isFavorite: false,
  },
  {
    id: 24,
    name: "Winter Puffer Jacket",
    category: "Kids",
    price: 69.99,
    images: [
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=400&h=400&fit=crop",
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
    description: "Insulated puffer jacket to keep kids warm during winter.",
    isFavorite: false,
  },
  {
    id: 25,
    name: "Athletic Track Pants",
    category: "Men",
    price: 54.99,
    images: [
      "https://i.pinimg.com/736x/4c/82/25/4c8225760ab40862070a5f0fd32c51fb.jpg",
      "https://i.pinimg.com/736x/4c/82/25/4c8225760ab40862070a5f0fd32c51fb.jpg",
      "https://i.pinimg.com/736x/4c/82/25/4c8225760ab40862070a5f0fd32c51fb.jpg",
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
      "Comfortable athletic pants with stretch for workouts or lounging.",
    isFavorite: false,
  },
  {
    id: 26,
    name: "Knit Cardigan",
    category: "Women",
    price: 72.99,
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop",
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
    description: "Cozy knit cardigan that layers nicely over tees and dresses.",
    isFavorite: false,
  },
];
