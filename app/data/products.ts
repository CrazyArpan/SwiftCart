export const products = [
  {
    id: 1,
    name: 'Smartphone',
    image: 'https://contentstatic.techgig.com/thumb/msid-102312951,width-800,resizemode-4/Upcoming-smartphone-launches-in-August-2023-details-inside.jpg?44244',
    description: 'Stay connected with our latest smartphones featuring cutting-edge technology and sleek designs.',
    subcategories: [
      { id: 101, name: 'iPhone 16 Pro Max', price: 1199.99, image: 'https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/121032-iphone-16-pro-max.png', description: 'Experience the power of Apples latest iPhone with its stunning camera and powerful A18 Pro Bionic chip.' },
      { id: 102, name: 'Samsung Galaxy S24 Ultra', price: 1099.99, image: 'https://www.mobigyaan.com/wp-content/uploads/2024/01/Samsung-Galaxy-S24-Ultra.jpg', description: 'Featuring a pro-grade camera and 8K video, the Galaxy S24 Ultra is designed for those who want the best Android experience.' },
      { id: 103, name: 'Google Pixel 9', price: 699.99, image: 'https://lh3.googleusercontent.com/quNDafQWKif7_RmksFOSDkwLUZSJX4UdhcMhv89lZ6U_H9WLRx6ev28p4x00HA77FrB8UyE3Gwd_G02-cG_DbwNtklTSaAn_RQ=s0', description: 'With its custom-built Tensor chip and advanced camera features, the Pixel 9 delivers a uniquely helpful experience.' },
    ],
  },
  {
    id: 2,
    name: 'Laptop',
    image: 'https://www.atulhost.com/wp-content/uploads/2024/07/best-laptop-brands.jpg',
    description: 'Boost your productivity with our range of powerful and portable laptops.',
    subcategories: [
      { id: 201, name: 'MacBook Air M3', price: 1009.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbEpOkUF9pyOkMlUoYZb-k47x-edGi-qcmyw&s', description: 'Incredibly thin and light, the MacBook Air is powered by the Apple M3 chip for exceptional performance and battery life.' },
      { id: 202, name: 'Dell XPS 13', price: 1199.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3HYwTmY0aMu6bybf1Gz0qWuC26YdZj4oEVw&s', description: 'With its InfinityEdge display and powerful Intel processors, the XPS 13 is the ultimate Windows ultrabook.' },
      { id: 203, name: 'Lenovo ThinkPad X1', price: 1399.99, image: 'https://cdn.cs.1worldsync.com/b4/7c/b47cc676-28d6-4b6d-9e88-4245c33c142b.jpg', description: 'Built for business, the ThinkPad X1 offers military-grade durability and top-notch security features.' },
    ],
  },
  {
    id: 3,
    name: 'Wireless Earbuds',
    image: 'https://hips.hearstapps.com/hmg-prod/images/wireless-earbuds-1661183784.jpg?resize=1200:*',
    description: 'Enjoy your music wirelessly with our selection of high-quality earbuds.',
    subcategories: [
      { id: 301, name: 'AirPods Pro', price: 249.99, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-pro-compare-202409_FMT_WHH?wid=286&hei=324&fmt=jpeg&qlt=90&.v=1723594294397', description: 'Featuring active noise cancellation and a customizable fit, AirPods Pro deliver an unparalleled listening experience.' },
      { id: 302, name: 'Sony WF-1000XM4', price: 279.99, image: 'https://i.rtings.com/assets/products/9032v8gK/sony-wf-1000xm4-truly-wireless/design-medium.jpg?format=auto', description: 'Industry-leading noise cancellation and exceptional sound quality make these earbuds perfect for audiophiles.' },
      { id: 303, name: 'Jabra Elite 75t', price: 149.99, image: 'https://images.tokopedia.net/img/cache/700/OJWluG/2022/6/15/5516fd38-fd61-47f2-8f47-36bb3bf1ac85.jpg', description: 'With their compact design and long battery life, the Elite 75t are perfect for all-day use.' },
    ],
  },
  {
    id: 4,
    name: 'Smartwatch',
    image: 'https://djd1xqjx2kdnv.cloudfront.net/photos/36/68/488276_28177_XXL.jpg',
    description: 'Stay connected and track your fitness with our advanced smartwatches.',
    subcategories: [
      { id: 401, name: 'Apple Watch Series 10', price: 429.99, image: '/placeholder.svg?height=300&width=300', description: 'With its larger, always-on Retina display, the Apple Watch Series 10 makes it easier than ever to stay connected.' },
      { id: 402, name: 'Samsung Galaxy Watch 4', price: 249.99, image: '/placeholder.svg?height=300&width=300', description: 'Featuring body composition analysis and advanced sleep tracking, the Galaxy Watch 4 is your perfect health companion.' },
      { id: 403, name: 'Fitbit Sense', price: 299.99, image: '/placeholder.svg?height=300&width=300', description: 'With its EDA sensor for stress management and ECG app, the Fitbit Sense takes health tracking to the next level.' },
    ],
  },
  {
    id: 5,
    name: 'Tablet',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHLEU8y6OhNTWnWRGc0KuXXlkySZrkDKZEYg&s',
    description: 'Combine the power of a computer with the portability of a smartphone with our tablets.',
    subcategories: [
      { id: 501, name: 'iPad Air', price: 599.99, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/42-cell-titanium-gold-milanese-gold-s10?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1724549387086', description: 'Powered by the A14 Bionic chip, the iPad Air offers pro features at a more affordable price.' },
      { id: 502, name: 'Samsung Galaxy Tab S7', price: 649.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ16JNHg-dIm6W198aMFqXozcZ9Sp0MRf4jEA&s', description: 'With its 120Hz display and included S Pen, the Tab S7 is perfect for both work and play.' },
      { id: 503, name: 'Microsoft Surface Go 3', price: 399.99, image: 'https://bsmedia.business-standard.com/_media/bs/img/article/2023-12/26/full/1703564008-8531.jpg', description: 'The most portable Surface touchscreen 2-in-1, perfect for daily tasks, homework, and play.' },
    ],
  },
  {
    id: 6,
    name: 'Bluetooth Speaker',
    image: 'https://avstore.in/cdn/shop/files/1.AVStore-JBL-PartyBox-Encore-Essential-Portable-Bluetooth-Speaker-With-Light-Display-Front-Angled-View-Hero.jpg?v=1682414405&width=1200',
    description: 'Fill your space with rich, clear sound from our range of Bluetooth speakers.',
    subcategories: [
      { id: 601, name: 'Sonos Move', price: 399.99, image: 'https://www.audioshop.in/wp-content/uploads/a7d7720a7724e855d25a1b5f368dc1966eaf8b76-2132x2664-1.jpg', description: 'A durable, battery-powered smart speaker for outdoor and indoor listening.' },
      { id: 602, name: 'JBL Flip 5', price: 119.99, image: 'https://m.media-amazon.com/images/I/71ZH-r88sVL.jpg', description: 'A portable waterproof speaker that delivers surprisingly powerful sound.' },
      { id: 603, name: 'Bose SoundLink Revolve+', price: 299.99, image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/25918004/2023/12/5/4d04a181-b6db-4e4f-9126-730475c7e84a1701760800184-BOSE-SoundLink-Revolve-Series-II-Portable-Bluetooth-Speaker--1.jpg', description: 'Delivers deep, loud, and immersive sound in every direction.' },
    ],
  },
  {
    id: 7,
    name: 'Gaming Console',
    image: 'https://hips.hearstapps.com/hmg-prod/images/gh-index-gamingconsoles-052-print-preview-1659705142.jpg',
    description: 'Experience the latest in gaming technology with our selection of gaming consoles.',
    subcategories: [
      { id: 701, name: 'PlayStation 5', price: 499.99, image: 'https://m.media-amazon.com/images/I/51QKZfyi-dL._SL1465_.jpg', description: 'The PS5 offers lightning-fast loading, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio.' },
      { id: 702, name: 'Xbox Series X', price: 499.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPYuac6SrrIXGn1l2rDdF5MEU3zkeOneDDmg&s', description: 'The most powerful Xbox ever, featuring true 4K gaming and up to 120 frames per second.' },
      { id: 703, name: 'Nintendo Switch OLED', price: 349.99, image: 'https://rukminim2.flixcart.com/image/850/1000/kuipea80/gamingconsole/l/t/v/64-switch-oled-console-with-white-joy-con-nintendo-no-original-imag7mpascrk2cyy.jpeg?q=90&crop=false', description: 'Featuring a vibrant 7-inch OLED screen, the Nintendo Switch offers gaming fun at home or on-the-go.' },
    ],
  },
];

