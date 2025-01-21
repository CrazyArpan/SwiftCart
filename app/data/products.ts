

export const products = [
  {
    
    id: 1,
    name: 'Smartphone',
    image: 'https://contentstatic.techgig.com/thumb/msid-102312951,width-800,resizemode-4/Upcoming-smartphone-launches-in-August-2023-details-inside.jpg?44244',
    description: 'Stay connected with our latest smartphones featuring cutting-edge technology and sleek designs.',
    subcategories: [
      { id: 101, name: 'iPhone 16 Pro Max', price: 1199.99, image: 'https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/121032-iphone-16-pro-max.png', description: 'Experience the power of Apples latest iPhone with its stunning camera and powerful A18 Pro Bionic chip.' },
      { id: 102, name: 'Samsung Galaxy S24 Ultra', price: 1099.99, image: 'https://img-prd-pim.poorvika.com/prodvarval/Samsung-galaxy-s24-ultra-5g-titanium-Black-256gb-12gb-ram-Front-Back-View-Thumbnail.png', description: 'Featuring a pro-grade camera and 8K video, the Galaxy S24 Ultra is designed for those who want the best Android experience.' },
      { id: 103, name: 'Google Pixel 9', price: 699.99, image: 'https://cdn.beebom.com/mobile/2024/01/Google-Pixel-9.png', description: 'With its custom-built Tensor chip and advanced camera features, the Pixel 9 delivers a uniquely helpful experience.' },
    ],
  },
  {
    id: 2,
    name: 'Laptop',
    image: 'https://www.atulhost.com/wp-content/uploads/2024/07/best-laptop-brands.jpg',
    description: 'Boost your productivity with our range of powerful and portable laptops.',
    subcategories: [
      { id: 201, name: 'MacBook Air M3', price: 1009.99, image: 'https://cdsassets.apple.com/live/7WUAS350/images/macbook-air/2024-macbook-air-13in-m3-colors.png', description: 'Incredibly thin and light, the MacBook Air is powered by the Apple M3 chip for exceptional performance and battery life.' },
      { id: 202, name: 'Dell XPS 13', price: 1199.99, image: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9315/media-gallery/notebook-xps-9315-nt-blue-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=575&qlt=100,1&resMode=sharp2&size=575,402&chrss=full', description: 'With its InfinityEdge display and powerful Intel processors, the XPS 13 is the ultimate Windows ultrabook.' },
      { id: 203, name: 'Lenovo ThinkPad X1', price: 1399.99, image: 'https://p1-ofp.static.pub/fes/cms/2023/04/28/iu6t7jqpekoy7o76vbn0c9a9b7rbsb543440.png', description: 'Built for business, the ThinkPad X1 offers military-grade durability and top-notch security features.' },
    ],
  },
  {
    id: 3,
    name: 'Wireless Earbuds',
    image: 'https://hips.hearstapps.com/hmg-prod/images/wireless-earbuds-1661183784.jpg?resize=1200:*',
    description: 'Enjoy your music wirelessly with our selection of high-quality earbuds.',
    subcategories: [
      { id: 301, name: 'AirPods Pro', price: 249.99, image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694672652/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/301165_xzuxl0.png?tr=w-600', description: 'Featuring active noise cancellation and a customizable fit, AirPods Pro deliver an unparalleled listening experience.' },
      { id: 302, name: 'Sony WF-1000XM4', price: 279.99, image: 'https://tekkasstore.com/cdn/shop/products/6462204cv11d_698x700.png?v=1647326048', description: 'Industry-leading noise cancellation and exceptional sound quality make these earbuds perfect for audiophiles.' },
      { id: 303, name: 'Jabra Elite 75t', price: 149.99, image: 'https://assets2.jabra.com/d/6/e/3/d6e3ecab6b180a4494a9dab130ec2c2b2d554ca7_elite75t_titanium_04.png?w=400&h=400&auto=format', description: 'With their compact design and long battery life, the Elite 75t are perfect for all-day use.' },
    ],
  },
  {
    id: 4,
    name: 'Smartwatch',
    image: 'https://djd1xqjx2kdnv.cloudfront.net/photos/36/68/488276_28177_XXL.jpg',
    description: 'Stay connected and track your fitness with our advanced smartwatches.',
    subcategories: [
      { id: 401, name: 'Apple Watch Series 10', price: 429.99, image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=2000&hei=2000&fmt=png-alpha&.v=TnVrdDZWRlZzTURKbHFqOGh0dGpVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzR1UTU4N0MwSS9jYWJEbEpiZWpYQy9pRFJvTk1WL3dkOUtPUHdmeHpVRi90ejJNajZQak9EYzBUOWd3YWlIOHpLQlFVMEJ2bnk4TDV2UWtuV05TbzFPRQ', description: 'With its larger, always-on Retina display, the Apple Watch Series 10 makes it easier than ever to stay connected.' },
      { id: 402, name: 'Samsung Galaxy Watch 6', price: 399.99, image: 'https://samtronixguyana.com/cdn/shop/files/watch6blk.webp?v=1731494946', description: 'Featuring body composition analysis and advanced sleep tracking, the Galaxy Watch 6 is your perfect health companion.' },
      { id: 403, name: 'Fitbit Sense', price: 299.99, image: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/fb2.width-500.format-webp.webp', description: 'With its EDA sensor for stress management and ECG app, the Fitbit Sense takes health tracking to the next level.' },
    ],
  },
  {
    id: 5,
    name: 'Tablet',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHLEU8y6OhNTWnWRGc0KuXXlkySZrkDKZEYg&s',
    description: 'Combine the power of a computer with the portability of a smartphone with our tablets.',
    subcategories: [
      { id: 501, name: 'iPad Air', price: 599.99, image: 'https://www.apple.com/v/ipad-air/x/images/overview/hero/hero_endframe__fvm22b45e5me_large.png', description: 'Powered by the A14 Bionic chip, the iPad Air offers pro features at a more affordable price.' },
      { id: 502, name: 'Samsung Galaxy Tab S7', price: 649.99, image: 'https://images.samsung.com/is/image/samsung/p6pim/nz/sm-t870nzkexnz/gallery/nz-galaxy-tab-s7-wifi-t870-sm-t870nzkexnz-thumb-426768358', description: 'With its 120Hz display and included S Pen, the Tab S7 is perfect for both work and play.' },
      { id: 503, name: 'Microsoft Surface Go 3', price: 399.99, image: 'https://www.teamcomputers.com/images/microsoftsurface/images/surface-go-3/primary-banner-1.png', description: 'The most portable Surface touchscreen 2-in-1, perfect for daily tasks, homework, and play.' },
    ],
  },
  {
    id: 6,
    name: 'Bluetooth Speaker',
    image: 'https://avstore.in/cdn/shop/files/1.AVStore-JBL-PartyBox-Encore-Essential-Portable-Bluetooth-Speaker-With-Light-Display-Front-Angled-View-Hero.jpg?v=1682414405&width=1200',
    description: 'Fill your space with rich, clear sound from our range of Bluetooth speakers.',
    subcategories: [
      { id: 601, name: 'Sonos Move', price: 399.99, image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1730274405/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/246278_0_fown5d.png?tr=w-600', description: 'A durable, battery-powered smart speaker for outdoor and indoor listening.' },
      { id: 602, name: 'JBL Flip 5', price: 119.99, image: 'https://in.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwba5b81b5/JBL_Flip5_Product%20Photo_Side_FiestaRed-1605x1605-DS3.png?sw=535&sh=535', description: 'A portable waterproof speaker that delivers surprisingly powerful sound.' },
      { id: 603, name: 'Bose SoundLink Revolve+', price: 299.99, image: 'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundlink_revolve_plus_ii/product_silo_images/SoundLink_Revolve_Plus_II_Black_Ecom_1.png/_jcr_content/renditions/cq5dam.web.320.320.png', description: 'Delivers deep, loud, and immersive sound in every direction.' },
    ],
  },
  {
    id: 7,
    name: 'Gaming Console',
    image: 'https://hips.hearstapps.com/hmg-prod/images/gh-index-gamingconsoles-052-print-preview-1659705142.jpg',
    description: 'Experience the latest in gaming technology with our selection of gaming consoles.',
    subcategories: [
      { id: 701, name: 'PlayStation 5', price: 499.99, image: 'https://gameoly.com/wp-content/uploads/2023/04/desktop-wallpaper-playstation-5-console-video-games-ps5-controller-neon-PhotoRoom.png-PhotoRoom.png', description: 'The PS5 offers lightning-fast loading, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio.' },
      { id: 702, name: 'Xbox Series X', price: 499.99, image: 'https://png.pngtree.com/png-vector/20220608/ourmid/pngtree-game-console-with-joystick-isolated-on-whte-background-png-image_4890148.png', description: 'The most powerful Xbox ever, featuring true 4K gaming and up to 120 frames per second.' },
      { id: 703, name: 'Nintendo Switch OLED', price: 349.99, image: 'https://hitechgamez.in/wp-content/uploads/2024/12/switch-oled-mario-1-622x800.webp', description: 'Featuring a vibrant 7-inch OLED screen, the Nintendo Switch offers gaming fun at home or on-the-go.' },
    ],
  },
  {
    id: 8,
    name: 'Smart TV',
    image: 'https://www.eliteav.services/wp-content/uploads/2024/08/How-To-Watch-Over-The-Air-TV-On-Multiple-TVs-1024x768.jpg',
    description: 'Experience the latest Smart TV with our selection of Smart TVs .',
    subcategories: [
      { id: 801, name: 'Samsung 80 cm (32 inches) HD Ready Smart LED TV', price: 169.99, image: 'https://static.wixstatic.com/media/94060f_77263b4e41014c37b7201492d889fa73~mv2.png/v1/fill/w_490,h_490,al_c,lg_1,q_85,enc_auto/94060f_77263b4e41014c37b7201492d889fa73~mv2.png', description: 'This Samsung Smart TV give 3D sound effect that drives multichannel audio to deliver a 360° cinematic audio experience with clear Picture Quality.' },
      { id: 802, name: 'Sony BRAVIA 2 Series 108 cm (43 inches) 4K Ultra HD Smart TV', price: 449.99, image: 'https://media.croma.com/image/upload/v1721727525/Croma%20Assets/Entertainment/Television/Images/308025_oea7z1.png', description: 'This SONY Smart TV offers Best Picture Quality with 4K Resolution, HDR, and Wide Color Gamut.' },
      { id: 803, name: 'Acer 139 cm (55 inches) I Pro Series 4K Ultra HD LED Smart TV', price: 439.99, image: 'https://media.croma.com/image/upload/v1722280619/Croma%20Assets/Entertainment/Television/Images/274276_0_tpyepw.png', description: 'This Acer Smart TV offers 4K Resolution, HDR, and Wide Color Gamut for Best Picture Quality.' },
    ],
  },
  {
    id: 9,
    name: 'Neckband Headphone',
    image: 'https://i.rtings.com/assets/pages/pejtEB4U/best-neckband-headphones-20230620-medium.jpg?format=auto',
    description: 'Experience the latest Neckband with our selection of Neckbands.',
    subcategories: [
      { id: 901, name: 'realme Buds Wireless 3 in-Ear Bluetooth Headphones', price: 20.99, image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1730270015/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/275189_0_nh3art.png?tr=w-600', description: 'This Neckband provide 3D & 360 Degree sound effect with 30 DB ANC.' },
      { id: 902, name: 'OnePlus Bullets Wireless Z2 ANC Bluetooth in Ear Earphones', price: 20.99, image: 'https://image01-in.oneplus.net/media/202406/19/703dc812f259ce4cb605f4602ed12301.png', description: 'This Neckband provide 45 DB ANC with superior base boost.' },
      { id: 903, name: 'CMF by Nothing Neckband Pro', price: 21.99, image: 'https://in.cmf.tech/cdn/shop/files/CMF_Neckband_Pro_Orange_Front_2_750x.png?v=1709621380', description: 'This Neckband provide 3D sound effect with 50 DB ANC.' },
    ],
  },
];

