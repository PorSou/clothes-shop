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
    link: "/kid",
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

// shop page (store all project category and i want to have feature sorting and fitering)
export const allProducts = [
  // Alternating: MEN → WOMEN → KIDS pattern

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
    color: "Blue",
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
    color: "Blue",
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
    color: "Beige",
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
    color: "White",
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
    color: "Black",
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
    color: "Khaki",
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
    color: "Navy",
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
    color: "Khaki",
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
    color: "Pink",
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
    color: "Gray",
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
    color: "Orange",
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
    color: "Charcoal",
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
    color: "Olive",
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
    color: "Navy",
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
    color: "Cream",
    price: 72.99,
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop",
    isFavorite: false,
  },
];
