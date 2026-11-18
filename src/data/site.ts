// All page copy lives here so a real client can swap in their own details without touching markup.
// บ้านเมล็ด is a fictional business made for a portfolio demo.

export type Lang = 'th' | 'en'

export const site = {
  name: { th: 'บ้านเมล็ด', en: 'Baan Malet' },
  tagline: { th: 'โรงคั่วกาแฟ · เชียงใหม่', en: 'Coffee Roasters · Chiang Mai' },
  phone: '053-000-000',
  phoneHref: 'tel:053000000',
  email: 'hello@example.com',
  address: {
    th: 'ซอยนิมมานเหมินท์ ต.สุเทพ อ.เมือง เชียงใหม่ 50200',
    en: 'Nimmanhaemin Rd, Suthep, Mueang, Chiang Mai 50200',
  },
  mapQuery: 'Nimmanhaemin Road, Chiang Mai',
  geo: { lat: 18.7999, lng: 98.9679 },
  // Opening hours, Asia/Bangkok. 0 = Sunday. null = closed.
  hours: [
    [8, 18], // Sun
    null, // Mon
    [8, 18],
    [8, 18],
    [8, 18],
    [8, 20], // Fri
    [8, 20], // Sat
  ] as ([number, number] | null)[],
}

export const days = {
  th: ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'],
  en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
}

export type MenuCat = 'coffee' | 'noncoffee' | 'bakery'

export const menu: {
  cat: MenuCat
  name: Record<Lang, string>
  note: Record<Lang, string>
  price: number
  tag?: Record<Lang, string>
}[] = [
  {
    cat: 'coffee',
    name: { th: 'ดอยเย็น', en: 'Doi Yen' },
    note: { th: 'โคลด์บรูว์แช่ 18 ชม. ผสมน้ำผึ้งดอกลำไย เปลือกส้ม', en: '18-hour cold brew, longan honey, orange peel' },
    price: 95,
    tag: { th: 'ขายดี', en: 'Bestseller' },
  },
  {
    cat: 'coffee',
    name: { th: 'ลาเต้มะพร้าวคั่ว', en: 'Toasted Coconut Latte' },
    note: { th: 'เอสเปรสโซเบลนด์บ้าน นมมะพร้าวคั่วหอม', en: 'House espresso, toasted coconut milk' },
    price: 85,
  },
  {
    cat: 'coffee',
    name: { th: 'ดริปซิงเกิลออริจิน', en: 'Single-origin Pour Over' },
    note: { th: 'เลือกเมล็ดได้ 3 ดอย ชงสดทีละแก้ว', en: 'Choose from 3 mountains, brewed to order' },
    price: 110,
  },
  {
    cat: 'coffee',
    name: { th: 'อเมริกาโน่ส้มสายน้ำผึ้ง', en: 'Tangerine Americano' },
    note: { th: 'น้ำส้มสายน้ำผึ้งคั้นสด เอสเปรสโซช็อตคู่', en: 'Fresh Sai Nam Phueng tangerine, double shot' },
    price: 90,
    tag: { th: 'ตามฤดูกาล', en: 'Seasonal' },
  },
  {
    cat: 'noncoffee',
    name: { th: 'ชาไทยใบหม่อน', en: 'Mulberry-leaf Thai Tea' },
    note: { th: 'ชาจากแม่แตง หวานน้อยได้', en: 'Leaves from Mae Taeng, less sweet on request' },
    price: 75,
  },
  {
    cat: 'noncoffee',
    name: { th: 'โกโก้เชียงดาว', en: 'Chiang Dao Cacao' },
    note: { th: 'โกโก้ 70% จากฟาร์มเล็ก ๆ ในเชียงดาว', en: '70% cacao from a small Chiang Dao farm' },
    price: 85,
  },
  {
    cat: 'bakery',
    name: { th: 'ครัวซองต์เนยสด', en: 'Butter Croissant' },
    note: { th: 'อบใหม่ทุกเช้า 7 โมง', en: 'Baked fresh at 7 every morning' },
    price: 65,
  },
  {
    cat: 'bakery',
    name: { th: 'บานอฟฟี่กาแฟคั่ว', en: 'Roasted Coffee Banoffee' },
    note: { th: 'กล้วยหอมทอง คาราเมลกาแฟ วิปครีม', en: 'Gros Michel banana, coffee caramel, cream' },
    price: 120,
    tag: { th: 'ขายดี', en: 'Bestseller' },
  },
]

export const beans: {
  name: Record<Lang, string>
  origin: Record<Lang, string>
  notes: Record<Lang, string>
  roast: 1 | 2 | 3 | 4 | 5
  process: Record<Lang, string>
  price: number
  hue: string
}[] = [
  {
    name: { th: 'ดอยช้าง', en: 'Doi Chang' },
    origin: { th: 'เชียงราย · 1,400 ม.', en: 'Chiang Rai · 1,400 m' },
    notes: { th: 'ช็อกโกแลต · คาราเมล · ถั่วอบ', en: 'Chocolate · caramel · roasted nuts' },
    roast: 4,
    process: { th: 'Washed', en: 'Washed' },
    price: 320,
    hue: '#7a4a2e',
  },
  {
    name: { th: 'ดอยสะเก็ด', en: 'Doi Saket' },
    origin: { th: 'เชียงใหม่ · 1,200 ม.', en: 'Chiang Mai · 1,200 m' },
    notes: { th: 'น้ำผึ้ง · พีช · ชาดำ', en: 'Honey · peach · black tea' },
    roast: 3,
    process: { th: 'Honey', en: 'Honey' },
    price: 360,
    hue: '#b5653a',
  },
  {
    name: { th: 'ปางขอน', en: 'Pang Khon' },
    origin: { th: 'เชียงราย · 1,350 ม.', en: 'Chiang Rai · 1,350 m' },
    notes: { th: 'สตรอว์เบอร์รี · ไวน์แดง · ดอกไม้', en: 'Strawberry · red wine · floral' },
    roast: 2,
    process: { th: 'Natural', en: 'Natural' },
    price: 420,
    hue: '#c0473a',
  },
]

export const reviews: { text: Record<Lang, string>; who: string; src: string }[] = [
  {
    text: {
      th: 'ดอยเย็นคือแก้วที่ต้องกลับมากินซ้ำ หอมน้ำผึ้งลำไยมาก ร้านเงียบเหมาะนั่งทำงาน',
      en: 'The Doi Yen keeps me coming back. Lovely longan honey aroma and a quiet place to work.',
    },
    who: 'พิมพ์ชนก',
    src: 'Google',
  },
  {
    text: {
      th: 'ไปเวิร์กช็อปดริปมา พี่บาริสต้าสอนละเอียด กลับมาชงที่บ้านได้จริง',
      en: 'Joined the pour-over workshop. The barista explains everything, I can actually brew at home now.',
    },
    who: 'Daniel R.',
    src: 'Google',
  },
  {
    text: {
      th: 'ซื้อเมล็ดปางขอนไปฝากเพื่อน เปรี้ยวผลไม้ชัดมาก แพ็กสวยด้วย',
      en: 'Bought Pang Khon beans as a gift. Bright fruit acidity, and beautiful packaging.',
    },
    who: 'ณัฐวุฒิ',
    src: 'Facebook',
  },
]

export const t = {
  th: {
    title: 'บ้านเมล็ด โรงคั่วกาแฟเชียงใหม่ — กาแฟดอย คั่วสดทุกสัปดาห์',
    description:
      'คาเฟ่และโรงคั่วกาแฟย่านนิมมาน เชียงใหม่ กาแฟจากดอยทางเหนือ คั่วสดทุกสัปดาห์ มีเมล็ดขาย และเวิร์กช็อปดริปกาแฟทุกวันเสาร์',
    nav: { menu: 'เมนู', beans: 'เมล็ดกาแฟ', story: 'เรื่องของเรา', workshop: 'เวิร์กช็อป', visit: 'มาที่ร้าน' },
    line: 'ทักไลน์',
    greeting: 'สวัสดีครับ/ค่ะ สอบถามข้อมูลร้านหน่อยครับ/ค่ะ',
    heroKicker: 'โรงคั่วเล็ก ๆ ย่านนิมมาน',
    heroTitle: ['กาแฟจากดอย', 'คั่วสดทุกสัปดาห์'],
    heroLead: 'เราซื้อเมล็ดตรงจากเกษตรกร 3 ดอยทางเหนือ คั่วเองที่หลังร้านทุกวันอังคาร แล้วชงให้คุณในแก้วถัดไป',
    heroCta: 'ดูเมนู',
    heroCta2: 'เส้นทางมาร้าน',
    openNow: 'เปิดอยู่',
    closedNow: 'ปิดอยู่',
    closesAt: 'ปิด',
    opensAt: 'เปิด',
    today: 'วันนี้',
    closed: 'ปิด',
    stats: [
      ['3', 'ดอยที่เราซื้อตรง'],
      ['72 ชม.', 'จากเตาคั่วถึงแก้ว'],
      ['4.8★', 'จาก 600+ รีวิว'],
    ],
    menuTitle: 'เมนูประจำร้าน',
    menuLead: 'ราคาเป็นบาท เปลี่ยนนมเป็นโอ๊ต/อัลมอนด์ +15',
    cats: { all: 'ทั้งหมด', coffee: 'กาแฟ', noncoffee: 'ไม่ใช่กาแฟ', bakery: 'เบเกอรี่' },
    beansTitle: 'เมล็ดกาแฟคั่วสด',
    beansLead: 'ถุงละ 200 กรัม คั่วสัปดาห์ต่อสัปดาห์ บดให้ฟรีตามอุปกรณ์ที่ใช้ ส่งทั่วไทย',
    roast: 'ระดับคั่ว',
    roastScale: ['อ่อน', 'เข้ม'],
    order: 'สั่งผ่านไลน์',
    orderMsg: (name: string) => `สวัสดีครับ/ค่ะ สนใจสั่งเมล็ด ${name} 200 กรัม`,
    storyTitle: 'จากดอย ถึงแก้วของคุณ',
    story: [
      ['เก็บมือบนดอย', 'เกษตรกรเลือกเก็บเฉพาะผลเชอร์รีที่สุกแดง เราไปเยี่ยมฟาร์มทุกฤดูเก็บเกี่ยว และจ่ายราคาสูงกว่าตลาด'],
      ['คั่วทีละน้อย', 'คั่วด้วยเตา 5 กิโลกรัมที่หลังร้าน ทุกวันอังคาร จดโปรไฟล์ทุกล็อตเพื่อให้รสชาติคงที่'],
      ['ชงตรงหน้า', 'บาริสต้าชงทีละแก้ว พักเมล็ดให้ได้ที่ 3–10 วันก่อนใช้ เพื่อความหอมที่สุด'],
    ],
    workshopTitle: 'เวิร์กช็อปดริปกาแฟ',
    workshopLead: 'ทุกวันเสาร์ 10:00–12:00 · รับ 6 คน · 890 บาท รวมเมล็ด 1 ถุงกลับบ้าน',
    workshopPoints: ['ชิมเปรียบเทียบเมล็ด 3 ดอย', 'ฝึกชงดริปด้วยตัวเอง 3 รอบ', 'สูตรชงและตารางอัตราส่วนไปใช้ต่อ'],
    workshopCta: 'จองที่นั่งผ่านไลน์',
    workshopMsg: 'สวัสดีครับ/ค่ะ ขอจองเวิร์กช็อปดริปกาแฟ วันเสาร์ที่ ... จำนวน ... คน',
    reviewsTitle: 'ลูกค้าพูดถึงเรา',
    visitTitle: 'มาที่ร้าน',
    hoursTitle: 'เวลาเปิด',
    parking: 'จอดรถได้ในซอย 4 คัน · ห่างจากเมญ่า 5 นาทีเดิน',
    directions: 'นำทางด้วย Google Maps',
    call: 'โทร',
    mapLoad: 'แตะเพื่อโหลดแผนที่',
    mapNote: 'แผนที่จาก Google จะโหลดเมื่อคุณแตะเท่านั้น',
    footerNote: 'บ้านเมล็ดเป็นธุรกิจสมมติ สร้างขึ้นเพื่อแสดงผลงานออกแบบและพัฒนาเว็บไซต์',
    demoLineTitle: 'ตัวอย่างปุ่มไลน์',
    demoLineBody: 'บนเว็บจริง ปุ่มนี้จะเปิดแชท LINE OA ของร้าน พร้อมพิมพ์ข้อความนี้ให้ลูกค้าอัตโนมัติ:',
    close: 'ปิด',
    switchLang: 'English',
    skip: 'ข้ามไปเนื้อหา',
    infoToday: 'วันนี้',
    infoWhere: 'ที่ตั้งร้าน',
    infoCall: 'โทรหาร้าน',
    infoChat: 'สั่ง / จองผ่านไลน์',
    infoMap: 'ดูแผนที่',
    infoChatSub: 'ตอบไวในเวลาทำการ',
    menuFeatured: 'แก้วที่ลูกค้าสั่งมากที่สุด',
    menuFeaturedCta: 'สั่งล่วงหน้าผ่านไลน์',
    menuFeaturedMsg: 'สวัสดีครับ/ค่ะ ขอสั่ง ดอยเย็น 1 แก้ว รับที่ร้านเวลา ...',
    beansPer: '/ 200 ก.',
    storyKicker: 'กว่าจะเป็นกาแฟหนึ่งแก้ว',
    workshopSeats: 'ที่นั่งเสาร์นี้',
    workshopSeatsLeft: 'เหลือ 2 ที่',
    visitLead: 'ร้านอยู่ในซอยเงียบ ๆ ย่านนิมมาน แวะนั่งพักจิบกาแฟ หรือรับเมล็ดกลับบ้านก็ได้',
    addressLabel: 'ที่อยู่',
    footerExplore: 'ในหน้านี้',
    footerContact: 'ติดต่อเรา',
  },
  en: {
    title: 'Baan Malet Coffee Roasters, Chiang Mai — Northern Thai coffee, roasted weekly',
    description:
      'Café and micro-roastery in Nimman, Chiang Mai. Coffee from northern Thai mountains, roasted every week. Beans to take home and a pour-over workshop every Saturday.',
    nav: { menu: 'Menu', beans: 'Beans', story: 'Our story', workshop: 'Workshop', visit: 'Visit' },
    line: 'Chat on LINE',
    greeting: "Hi! I'd like to ask about the café.",
    heroKicker: 'A tiny roastery in Nimman',
    heroTitle: ['Mountain coffee,', 'roasted every week'],
    heroLead: 'We buy directly from farmers on three northern mountains, roast behind the shop every Tuesday, and brew it into your next cup.',
    heroCta: 'See the menu',
    heroCta2: 'Get directions',
    openNow: 'Open now',
    closedNow: 'Closed now',
    closesAt: 'closes',
    opensAt: 'opens',
    today: 'Today',
    closed: 'Closed',
    stats: [
      ['3', 'farms we buy from directly'],
      ['72 h', 'from roaster to cup'],
      ['4.8★', 'from 600+ reviews'],
    ],
    menuTitle: 'House menu',
    menuLead: 'Prices in THB. Oat or almond milk +15',
    cats: { all: 'All', coffee: 'Coffee', noncoffee: 'Non-coffee', bakery: 'Bakery' },
    beansTitle: 'Freshly roasted beans',
    beansLead: '200 g bags, roasted weekly. Free grinding for your brewer. Shipping across Thailand.',
    roast: 'Roast',
    roastScale: ['Light', 'Dark'],
    order: 'Order on LINE',
    orderMsg: (name: string) => `Hi! I'd like to order ${name} beans, 200 g.`,
    storyTitle: 'From the mountain to your cup',
    story: [
      ['Hand-picked', 'Farmers pick only ripe red cherries. We visit every harvest and pay above market price.'],
      ['Small batches', 'Roasted on a 5 kg roaster behind the shop every Tuesday, with every batch profile logged.'],
      ['Brewed for you', 'Our baristas brew cup by cup, using beans rested 3–10 days for the best aroma.'],
    ],
    workshopTitle: 'Pour-over workshop',
    workshopLead: 'Saturdays 10:00–12:00 · 6 seats · 890 THB, includes a bag of beans',
    workshopPoints: ['Taste beans from three mountains side by side', 'Brew three pour-overs yourself', 'Take home recipes and a ratio chart'],
    workshopCta: 'Book a seat on LINE',
    workshopMsg: "Hi! I'd like to book the pour-over workshop on Saturday ... for ... people.",
    reviewsTitle: 'What guests say',
    visitTitle: 'Visit us',
    hoursTitle: 'Opening hours',
    parking: 'Parking for 4 cars in the soi · 5 min walk from Maya mall',
    directions: 'Directions in Google Maps',
    call: 'Call',
    mapLoad: 'Tap to load the map',
    mapNote: 'The Google map loads only when you tap it',
    footerNote: 'Baan Malet is a fictional business, built to showcase web design and development work.',
    demoLineTitle: 'LINE button demo',
    demoLineBody: "On a real site this opens the shop's LINE Official Account chat with this message already typed:",
    close: 'Close',
    switchLang: 'ภาษาไทย',
    skip: 'Skip to content',
    infoToday: 'Today',
    infoWhere: 'Find us',
    infoCall: 'Call the shop',
    infoChat: 'Order / book on LINE',
    infoMap: 'View map',
    infoChatSub: 'Quick replies during opening hours',
    menuFeatured: 'Our most-ordered cup',
    menuFeaturedCta: 'Pre-order on LINE',
    menuFeaturedMsg: "Hi! I'd like to pre-order 1 Doi Yen for pickup at ...",
    beansPer: '/ 200 g',
    storyKicker: 'What goes into one cup',
    workshopSeats: 'Seats this Saturday',
    workshopSeatsLeft: '2 seats left',
    visitLead: 'Tucked into a quiet soi in Nimman. Stay for a slow cup, or grab a bag of beans to go.',
    addressLabel: 'Address',
    footerExplore: 'On this page',
    footerContact: 'Get in touch',
  },
}
