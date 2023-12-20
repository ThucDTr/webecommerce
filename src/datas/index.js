import images from "../assets/users/images"

export const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export const products = [
    {
        id: 1, 
        name: 'Áo khoác', 
        price: 200000, 
        description: 'Áo Gió Nam, Nữ ELNIDO 2 Lớp Chất Liệu Cao Cấp Tráng Bạc, Chống Nước, Cản Gió Tốt', 
        img: `${images.card}`
    },
    {
        id: 2, 
        name: 'Áo sơ mi tay dài', 
        price: 200000, 
        description: 'Primary Premium White Shirt - áo sơ mi trắng oversized vạt đuôi tôm cúc xà cừ tag vải', 
        img: `${images.card1}`
    },
    {
        id: 3, 
        name: 'Giày', 
        price: 200000, 
        description: 'Primary Premium White Shirt - áo sơ mi trắng oversized vạt đuôi tôm cúc xà cừ tag vải', 
        img: `${images.card2}`
    },
    {
        id: 4, 
        name: 'Áo bomber', 
        price: 200000, 
        description: 'Primary Premium White Shirt - áo sơ mi trắng oversized vạt đuôi tôm cúc xà cừ tag vải', 
        img: `${images.card3}`
    },
    {
        id: 5, 
        name: 'Áo thun', 
        price: 200000, 
        description: 'Primary Premium White Shirt - áo sơ mi trắng oversized vạt đuôi tôm cúc xà cừ tag vải', 
        img: `${images.card4}`
    }
]

export const featProduct = {
  all: {
    title:"All",
    products: [
      {
        id: 1, 
        name: 'Áo khoác', 
        price: 200000, 
        description: 'Áo Gió Nam, Nữ ELNIDO 2 Lớp Chất Liệu Cao Cấp Tráng Bạc, Chống Nước, Cản Gió Tốt', 
        img: `${images.card}`
    },
    {
        id: 2, 
        name: 'Áo sơ mi tay dài', 
        price: 200000, 
        description: 'Primary Premium White Shirt - áo sơ mi trắng oversized vạt đuôi tôm cúc xà cừ tag vải', 
        img: `${images.card1}`
    },
    {
        id: 3, 
        name: 'Giày', 
        price: 200000, 
        description: 'Primary Premium White Shirt - áo sơ mi trắng oversized vạt đuôi tôm cúc xà cừ tag vải', 
        img: `${images.card2}`
    },
    {
        id: 4, 
        name: 'Áo bomber', 
        price: 200000, 
        description: 'Primary Premium White Shirt - áo sơ mi trắng oversized vạt đuôi tôm cúc xà cừ tag vải', 
        img: `${images.card3}`
    },
    {
        id: 5, 
        name: 'Áo thun', 
        price: 200000, 
        description: 'Primary Premium White Shirt - áo sơ mi trắng oversized vạt đuôi tôm cúc xà cừ tag vải', 
        img: `${images.card4}`
    }
    ]
  },
  shirt: {
    title: "áo",
    products: [
      {
        id: 2, 
        name: 'Áo sơ mi tay dài', 
        price: 200000, 
        description: 'Primary Premium White Shirt - áo sơ mi trắng oversized vạt đuôi tôm cúc xà cừ tag vải', 
        img: `${images.card1}`
    },
    {
      id: 5, 
      name: 'Áo thun', 
      price: 200000, 
      description: 'Primary Premium White Shirt - áo sơ mi trắng oversized vạt đuôi tôm cúc xà cừ tag vải', 
      img: `${images.card4}`
     }
    ]
  },
  pant:{
    title: "quần",
    products: [
      {
        id: 3, 
        name: 'Quần', 
        price: 200000, 
        description: 'Primary Premium White Shirt - áo sơ mi trắng oversized vạt đuôi tôm cúc xà cừ tag vải', 
        img: `${images.card2}`
    },
    ]
  },
  bomber:{
    title: "áo khoác",
    products: [
      {
        id: 1, 
        name: 'Áo khoác', 
        price: 200000, 
        description: 'Áo Gió Nam, Nữ ELNIDO 2 Lớp Chất Liệu Cao Cấp Tráng Bạc, Chống Nước, Cản Gió Tốt', 
        img: `${images.card}`
    },
    {
      id: 4, 
      name: 'Áo bomber', 
      price: 200000, 
      description: 'Primary Premium White Shirt - áo sơ mi trắng oversized vạt đuôi tôm cúc xà cừ tag vải', 
      img: `${images.card3}`
  },
    ]
  }

}