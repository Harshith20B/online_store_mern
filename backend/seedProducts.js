import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Product from './models/productModel.js'

dotenv.config()

const sampleProducts = [
  // Men
  {
    name: "Men's Casual Denim Jacket",
    price: 2499,
    description: "Classic denim jacket for men. Perfect for casual outings.",
    category: ["Men", "Clothing", "Casual"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=500",
      "https://images.unsplash.com/photo-1542060743-01d11e53f71e?w=500"
    ],
    countInStock: 25,
    rating: 4.3,
    numReviews: 12,
    user: new mongoose.Types.ObjectId(),
    reviews: []
  },
  {
    name: "Men's Formal Blazer",
    price: 3999,
    description: "Elegant formal blazer tailored for men.",
    category: ["Men", "Clothing", "Formal"],
    sizes: ["M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500",
      "https://images.unsplash.com/photo-1520975922203-1743b7d44f5c?w=500"
    ],
    countInStock: 18,
    rating: 4.5,
    numReviews: 8,
    user: new mongoose.Types.ObjectId(),
    reviews: []
  },
  {
    name: "Men's Graphic T-Shirt",
    price: 799,
    description: "Comfortable cotton t-shirt with graphic print.",
    category: ["Men", "Clothing", "Casual"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500",
      "https://images.unsplash.com/photo-1593032465171-8b062102f971?w=500"
    ],
    countInStock: 40,
    rating: 4.2,
    numReviews: 14,
    user: new mongoose.Types.ObjectId(),
    reviews: []
  },
  {
    name: "Men's Hooded Sweatshirt",
    price: 1599,
    description: "Warm hoodie for men, ideal for winters.",
    category: ["Men", "Clothing", "Casual"],
    sizes: ["M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1559070643-2fc54fc9fdb0?w=500",
      "https://images.unsplash.com/photo-1600180758890-6f7cbd08e366?w=500"
    ],
    countInStock: 30,
    rating: 4.4,
    numReviews: 10,
    user: new mongoose.Types.ObjectId(),
    reviews: []
  },
  {
    name: "Men's Slim Fit Chinos",
    price: 1899,
    description: "Versatile slim-fit chinos for men.",
    category: ["Men", "Clothing", "Casual"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1521336575826-6c1e1b6ab60a?w=500",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500"
    ],
    countInStock: 22,
    rating: 4.1,
    numReviews: 9,
    user: new mongoose.Types.ObjectId(),
    reviews: []
  },

  // Women
  {
    name: "Women's Ethnic Kurta",
    price: 1299,
    description: "Elegant ethnic kurta for festive occasions.",
    category: ["Women", "Clothing", "Ethnic"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1559561854-95e9b7f5a0eb?w=500",
      "https://images.unsplash.com/photo-1562183241-b937a2056f88?w=500"
    ],
    countInStock: 28,
    rating: 4.5,
    numReviews: 13,
    user: new mongoose.Types.ObjectId(),
    reviews: []
  },
  {
    name: "Women's Casual Top",
    price: 899,
    description: "Soft cotton top perfect for daily wear.",
    category: ["Women", "Clothing", "Casual"],
    sizes: ["S", "M", "L"],
    images: [
      "https://images.unsplash.com/photo-1514996937319-344454492b37?w=500",
      "https://images.unsplash.com/photo-1520975922203-1743b7d44f5c?w=500"
    ],
    countInStock: 35,
    rating: 4.3,
    numReviews: 11,
    user: new mongoose.Types.ObjectId(),
    reviews: []
  },
  {
    name: "Women's Formal Blazer",
    price: 2799,
    description: "Stylish blazer suitable for office wear.",
    category: ["Women", "Clothing", "Formal"],
    sizes: ["S", "M", "L"],
    images: [
      "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=500",
      "https://images.unsplash.com/photo-1516822003754-cca485356ecb?w=500"
    ],
    countInStock: 20,
    rating: 4.4,
    numReviews: 7,
    user: new mongoose.Types.ObjectId(),
    reviews: []
  },
  {
    name: "Women's Maxi Dress",
    price: 1999,
    description: "Flowy maxi dress with floral print.",
    category: ["Women", "Clothing", "Casual"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1559561854-95e9b7f5a0eb?w=500",
      "https://images.unsplash.com/photo-1562183241-b937a2056f88?w=500"
    ],
    countInStock: 32,
    rating: 4.6,
    numReviews: 15,
    user: new mongoose.Types.ObjectId(),
    reviews: []
  },
  {
    name: "Women's Winter Jacket",
    price: 3499,
    description: "Warm insulated jacket for winter seasons.",
    category: ["Women", "Clothing", "Winter"],
    sizes: ["M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1582738418881-cd7371c76090?w=500",
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500"
    ],
    countInStock: 15,
    rating: 4.7,
    numReviews: 10,
    user: new mongoose.Types.ObjectId(),
    reviews: []
  },

  // Bag
  {
    name: "Leather Office Bag",
    price: 3499,
    description: "Spacious leather office bag with laptop compartment.",
    category: ["Bag", "Accessories"],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1582738418881-cd7371c76090?w=500",
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500"
    ],
    countInStock: 12,
    rating: 4.6,
    numReviews: 16,
    user: new mongoose.Types.ObjectId(),
    reviews: []
  },
  {
    name: "Women's Tote Bag",
    price: 1799,
    description: "Stylish tote bag for daily essentials.",
    category: ["Bag", "Accessories", "Women"],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1571680990947-c24e17ee3a7b?w=500",
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500"
    ],
    countInStock: 20,
    rating: 4.5,
    numReviews: 12,
    user: new mongoose.Types.ObjectId(),
    reviews: []
  },
  {
    name: "Men's Messenger Bag",
    price: 2499,
    description: "Compact messenger bag ideal for travel.",
    category: ["Bag", "Men"],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1600180758890-6f7cbd08e366?w=500",
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500"
    ],
    countInStock: 18,
    rating: 4.4,
    numReviews: 9,
    user: new mongoose.Types.ObjectId(),
    reviews: []
  },
  {
    name: "Canvas Backpack",
    price: 1499,
    description: "Durable canvas backpack for everyday use.",
    category: ["Bag", "Accessories"],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
      "https://images.unsplash.com/photo-1600180758890-6f7cbd08e366?w=500"
    ],
    countInStock: 22,
    rating: 4.3,
    numReviews: 11,
    user: new mongoose.Types.ObjectId(),
    reviews: []
  },
  {
    name: "Travel Duffel Bag",
    price: 2299,
    description: "Spacious duffel bag perfect for short trips.",
    category: ["Bag", "Travel"],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1571680990947-c24e17ee3a7b?w=500",
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500"
    ],
    countInStock: 10,
    rating: 4.6,
    numReviews: 14,
    user: new mongoose.Types.ObjectId(),
    reviews: []
  },

  // Accessories
  {
    name: "Leather Wallet",
    price: 799,
    description: "Premium leather wallet with multiple card slots.",
    category: ["Accessories", "Men"],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1582738418881-cd7371c76090?w=500",
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500"
    ],
    countInStock: 25,
    rating: 4.5,
    numReviews: 20,
    user: new mongoose.Types.ObjectId(),
    reviews: []
  },
  {
    name: "Sunglasses",
    price: 1199,
    description: "Stylish unisex sunglasses with UV protection.",
    category: ["Accessories", "Unisex"],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1571680990947-c24e17ee3a7b?w=500",
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500"
    ],
    countInStock: 30,
    rating: 4.6,
    numReviews: 18,
    user: new mongoose.Types.ObjectId(),
    reviews: []
  },
  {
    name: "Women's Scarf",
    price: 499,
    description: "Lightweight printed scarf for women.",
    category: ["Accessories", "Women"],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1559561854-95e9b7f5a0eb?w=500",
      "https://images.unsplash.com/photo-1562183241-b937a2056f88?w=500"
    ],
    countInStock: 40,
    rating: 4.4,
    numReviews: 15,
    user: new mongoose.Types.ObjectId(),
    reviews: []
  },
  {
    name: "Leather Belt",
    price: 699,
    description: "Classic leather belt for formal wear.",
    category: ["Accessories", "Men"],
    sizes: ["M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500",
      "https://images.unsplash.com/photo-1593032465171-8b062102f971?w=500"
    ],
    countInStock: 35,
    rating: 4.3,
    numReviews: 12,
    user: new mongoose.Types.ObjectId(),
    reviews: []
  },
  {
    name: "Knitted Beanie",
    price: 599,
    description: "Warm knitted beanie for winter.",
    category: ["Accessories", "Unisex"],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=500",
      "https://images.unsplash.com/photo-1516822003754-cca485356ecb?w=500"
    ],
    countInStock: 20,
    rating: 4.2,
    numReviews: 9,
    user: new mongoose.Types.ObjectId(),
    reviews: []
  },

  // Watches
  {
    name: "Men's Chronograph Watch",
    price: 5999,
    description: "Elegant men's chronograph watch with stainless steel strap.",
    category: ["Watches", "Men", "Accessories"],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500",
      "https://images.unsplash.com/photo-1549480017-d76466a4b7a9?w=500"
    ],
        countInStock: 15,
    rating: 4.8,
    numReviews: 30,
    user: new mongoose.Types.ObjectId(),
    reviews: []
  },
  {
    name: "Women's Designer Watch",
    price: 4999,
    description: "Stylish women's watch with leather strap and minimalist dial.",
    category: ["Watches", "Women", "Accessories"],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1516822003754-cca485356ecb?w=500",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500"
    ],
    countInStock: 18,
    rating: 4.5,
    numReviews: 17,
    user: new mongoose.Types.ObjectId(),
    reviews: []
  },
  {
    name: "Unisex Digital Sports Watch",
    price: 1999,
    description: "Durable digital sports watch with water resistance.",
    category: ["Watches", "Accessories", "Unisex"],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1549480017-d76466a4b7a9?w=500",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500"
    ],
    countInStock: 20,
    rating: 4.6,
    numReviews: 14,
    user: new mongoose.Types.ObjectId(),
    reviews: []
  },
  {
    name: "Men's Luxury Automatic Watch",
    price: 8999,
    description: "Premium automatic watch with sapphire glass.",
    category: ["Watches", "Men", "Accessories"],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500",
      "https://images.unsplash.com/photo-1549480017-d76466a4b7a9?w=500"
    ],
    countInStock: 10,
    rating: 4.9,
    numReviews: 25,
    user: new mongoose.Types.ObjectId(),
    reviews: []
  },
  {
    name: "Women's Elegant Bracelet Watch",
    price: 4499,
    description: "Elegant women's watch with bracelet-style strap.",
    category: ["Watches", "Women", "Accessories"],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1516822003754-cca485356ecb?w=500",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500"
    ],
    countInStock: 12,
    rating: 4.7,
    numReviews: 18,
    user: new mongoose.Types.ObjectId(),
    reviews: []
  },

  // Shoes
  {
    name: "Men's Running Sports Shoes",
    price: 2999,
    description: "Lightweight and durable sports shoes for running and training.",
    category: ["Shoes", "Men", "Sports"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500"
    ],
    countInStock: 28,
    rating: 4.6,
    numReviews: 21,
    user: new mongoose.Types.ObjectId(),
    reviews: []
  },
  {
    name: "Women's Casual Sneakers",
    price: 2499,
    description: "Comfortable everyday sneakers for women.",
    category: ["Shoes", "Women", "Casual"],
    sizes: ["5", "6", "7", "8", "9"],
    images: [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500",
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=500"
    ],
    countInStock: 24,
    rating: 4.5,
    numReviews: 16,
    user: new mongoose.Types.ObjectId(),
    reviews: []
  },
  {
    name: "Men's Formal Leather Shoes",
    price: 3499,
    description: "Premium leather shoes for formal occasions.",
    category: ["Shoes", "Men", "Formal"],
    sizes: ["7", "8", "9", "10", "11"],
    images: [
      "https://images.unsplash.com/photo-1571680990947-c24e17ee3a7b?w=500",
      "https://images.unsplash.com/photo-1600180758890-6f7cbd08e366?w=500"
    ],
    countInStock: 20,
    rating: 4.7,
    numReviews: 14,
    user: new mongoose.Types.ObjectId(),
    reviews: []
  },
  {
    name: "Women's Ethnic Juttis",
    price: 1599,
    description: "Traditional handcrafted ethnic juttis for women.",
    category: ["Shoes", "Women", "Ethnic"],
    sizes: ["5", "6", "7", "8", "9"],
    images: [
      "https://images.unsplash.com/photo-1559561854-95e9b7f5a0eb?w=500",
      "https://images.unsplash.com/photo-1562183241-b937a2056f88?w=500"
    ],
    countInStock: 18,
    rating: 4.6,
    numReviews: 11,
    user: new mongoose.Types.ObjectId(),
    reviews: []
  },
  {
    name: "Unisex Flip Flops",
    price: 599,
    description: "Comfortable flip flops for everyday use.",
    category: ["Shoes", "Unisex", "Casual"],
    sizes: ["6", "7", "8", "9", "10", "11"],
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
      "https://images.unsplash.com/photo-1600180758890-6f7cbd08e366?w=500"
    ],
    countInStock: 35,
    rating: 4.4,
    numReviews: 12,
    user: new mongoose.Types.ObjectId(),
    reviews: []
  }
]

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/your-database-name')
    console.log('Connected to MongoDB')

    await Product.deleteMany({})
    console.log('Cleared existing products')

    const insertedProducts = await Product.insertMany(sampleProducts)
    console.log(`${insertedProducts.length} products inserted successfully`)

    insertedProducts.forEach((product, index) => {
      console.log(`${index + 1}. ${product.name} - ₹${product.price}`)
    })

  } catch (error) {
    console.error('Error seeding database:', error)
  } finally {
    await mongoose.connection.close()
    console.log('Database connection closed')
    process.exit()
  }
}

seedDatabase()

