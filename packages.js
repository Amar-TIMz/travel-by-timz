const packages = [
  {
    "title": "Turkiye",
    "summary": "Dari masjid berkubah Istanbul, perjalanan merentas Anatolia menuju rumah batu Cappadocia dan teres putih Pamukkale sebelum kembali melalui Bursa.",
    "places": [
      "Istanbul",
      "Ankara",
      "Cappadocia",
      "Konya",
      "Pamukkale",
      "Bursa",
      "Bosphorus",
      "Uchisar Castle",
      "Hierapolis",
      "Hagia Sophia"
    ],
    "duration": "9H7M",
    "start": 6,
    "end": 7,
    "region": "Eropah"
  },
  {
    "title": "Turkiye + Mt. Erciyes",
    "summary": "Lihat bentuk muka bumi Turkiye dari dua sudut. Naik kereta kabel di Erciyes, kemudian kenali kota bawah tanah Cappadocia dan kolam bertingkat Pamukkale.",
    "places": [
      "Istanbul",
      "Ankara",
      "Cappadocia",
      "Mount Erciyes",
      "Konya",
      "Pamukkale",
      "Bursa",
      "Hagia Sophia"
    ],
    "duration": "9H7M",
    "start": 8,
    "end": 9,
    "region": "Eropah"
  },
  {
    "title": "Klasik Eropah 4 Negara",
    "summary": "Singgah di Buckingham Palace, bermalam dalam pelayaran dari England dan susuri terusan Amsterdam sebelum menamatkan perjalanan di Paris.",
    "places": [
      "London",
      "Harwich",
      "Hook of Holland",
      "Amsterdam",
      "Brussels",
      "Paris",
      "Buckingham Palace",
      "Eiffel Tower"
    ],
    "duration": "7H5M",
    "start": 10,
    "end": 11,
    "region": "Eropah"
  },
  {
    "title": "Eropah 5 Negara + Mt. Titlis",
    "summary": "Kincir angin Zaanse Schans dan dataran Grand Place menjadi persinggahan sebelum laluan panorama di Titlis membawa anda ke pergunungan Switzerland.",
    "places": [
      "Paris",
      "Brussels",
      "Amsterdam",
      "Cologne",
      "Frankfurt",
      "Lucerne",
      "Mount Titlis",
      "Louvre Museum",
      "Zaanse Schans",
      "Grand Place Brussels"
    ],
    "duration": "9H7M",
    "start": 12,
    "end": 13,
    "region": "Eropah"
  },
  {
    "title": "Eropah Timur 5 Negara",
    "summary": "Nikmati pemandangan tasik Hallstatt dari pelantar tinggi, telusuri kawasan istana Prague dan lihat Budapest dari Sungai Danube.",
    "places": [
      "Vienna",
      "Hallstatt",
      "Salzburg",
      "Schwangau",
      "Munich",
      "Prague",
      "Bratislava",
      "Budapest",
      "Prague Castle",
      "Prague Astronomical Clock",
      "Welterbeblick Hallstatt",
      "Danube Budapest"
    ],
    "duration": "9H7M",
    "start": 14,
    "end": 15,
    "region": "Eropah"
  },
  {
    "title": "Itali + Swiss + Mt. Jungfraujoch",
    "summary": "Selepas Venice dan Milan, laluan beralih ke perkampungan Alps di Zermatt dan Lauterbrunnen serta perjalanan Eiger Express menuju Jungfraujoch.",
    "places": [
      "Venice",
      "Milan",
      "Zermatt",
      "Interlaken",
      "Grindelwald",
      "Jungfraujoch",
      "Lauterbrunnen",
      "Lucerne",
      "Zurich"
    ],
    "duration": "8H6M",
    "start": 16,
    "end": 17,
    "region": "Eropah"
  },
  {
    "title": "Balkans 5 Negara",
    "summary": "Dari tasik Plitvice ke kota lama Dubrovnik, perjalanan ini menghubungkan kawasan air terjun, pesisir Adriatik dan kubu lama Skopje.",
    "places": [
      "Zagreb",
      "Bihac",
      "Sarajevo",
      "Mostar",
      "Dubrovnik",
      "Trebinje",
      "Kotor",
      "Shkoder",
      "Ohrid",
      "Skopje",
      "Plitvice Lakes National Park",
      "Pliva Waterfall",
      "Skopje Fortress"
    ],
    "duration": "9H7M",
    "start": 18,
    "end": 19,
    "region": "Eropah"
  },
  {
    "title": "Spain + Portugal + Morocco",
    "summary": "Telusuri jejak Andalusia di Córdoba dan Alhambra. Perjalanan tiga negara ini turut membawa anda ke Portugal dan kawasan bersejarah Kasbah of the Udayas di Maghribi.",
    "places": [
      "Madrid",
      "Lisbon",
      "Ecija",
      "Cordoba",
      "Granada",
      "Rabat",
      "Alhambra",
      "Mezquita de Córdoba",
      "Las Rozas Village",
      "Kasbah of the Udayas"
    ],
    "duration": "11H9M",
    "start": 20,
    "end": 21,
    "region": "Eropah"
  },
  {
    "title": "Scandinavia 4 Negara",
    "summary": "Susuri laluan kereta api Flåm yang menghadap air terjun Kjosfossen, kunjungi istana diraja Sweden dan nikmati suasana pelabuhan Nyhavn di Copenhagen.",
    "places": [
      "Helsinki",
      "Stockholm",
      "Oslo",
      "Bygdøy",
      "Geilo",
      "Flåm",
      "Copenhagen",
      "Nyhavn",
      "Drottningholm Palace",
      "Kjosfossen"
    ],
    "duration": "10H8M",
    "start": 22,
    "end": 23,
    "region": "Eropah"
  },
  {
    "title": "Korea Saranghaeyo",
    "summary": "Gabungkan lawatan istana Joseon dengan lorong rumah hanok, suasana pasar Myeongdong dan pemandangan Seoul dari Haneul Park.",
    "places": [
      "Incheon",
      "Chuncheon",
      "Seoul",
      "Nami Island",
      "Myeongdong Market",
      "Gyeongbokgung Palace",
      "Haneul Park",
      "Bukchon Hanok Village"
    ],
    "duration": "6H4M",
    "start": 24,
    "end": 25,
    "region": "Asia Timur"
  },
  {
    "title": "Korea Saranghaeyo + Brunei",
    "summary": "Singgahan Brunei melengkapkan perjalanan ke Korea yang merangkumi Pulau Nami, kediaman tradisional hanok dan Istana Gyeongbokgung.",
    "places": [
      "Bandar Seri Begawan",
      "Incheon",
      "Seoul",
      "Nami Island",
      "Gyeongbokgung Palace",
      "Haneul Park",
      "Bukchon Hanok Village"
    ],
    "duration": "7H4M",
    "start": 26,
    "end": 27,
    "region": "Asia Timur"
  },
  {
    "title": "Korea + Everland Theme Park",
    "summary": "Luangkan masa di Everland dan Pulau Nami. Di Seoul, sudut rak buku Starfield Library dan taman Haneul melengkapkan lawatan.",
    "places": [
      "Incheon",
      "Seoul",
      "Nami Island",
      "Everland",
      "Haneul Park",
      "Starfield Library Seoul"
    ],
    "duration": "6H4M",
    "start": 28,
    "end": 29,
    "region": "Asia Timur"
  },
  {
    "title": "Korea + Jeju Island",
    "summary": "Gabungkan landskap gunung berapi Seongsan Ilchulbong di Jeju dengan kunjungan ke Masjid Pusat Seoul dan kawasan beli-belah Myeongdong.",
    "places": [
      "Seoul",
      "Jeju Island",
      "Seongsan Ilchulbong",
      "Myeongdong Market",
      "Seoul Central Mosque"
    ],
    "duration": "6H4M",
    "start": 30,
    "end": 31,
    "region": "Asia Timur"
  },
  {
    "title": "Jeju + Udo Islands",
    "summary": "Seberang ke Pulau Udo untuk mengenali tradisi penyelam haenyeo, kemudian lihat jambatan Yongyeon dan kawah Sunrise Peak di Jeju.",
    "places": [
      "Jeju Island",
      "Udo Island",
      "Yongyeon Bridge",
      "Seongsan Ilchulbong"
    ],
    "duration": "6H4M",
    "start": 32,
    "end": 33,
    "region": "Asia Timur"
  },
  {
    "title": "Busan + Daegu dengan Kereta Api Laju",
    "summary": "Ikuti laluan kereta api pesisir di Haeundae, singgah di kejiranan berwarna-warni Gamcheon dan lihat seni bina lama di Inheung.",
    "places": [
      "Seoul",
      "Busan",
      "Daegu",
      "Haeundae Blueline Park",
      "Gamcheon Culture Village",
      "Inheung Village",
      "Bukchon Hanok Village"
    ],
    "duration": "6H4M",
    "start": 34,
    "end": 35,
    "region": "Asia Timur"
  },
  {
    "title": "Osaka + Kyoto + Mt. Fuji + Tokyo",
    "summary": "Perjalanan merentas Jepun ini bermula dengan istana Osaka dan rusa di Nara, kemudian beralih ke kolam jernih Oshino Hakkai dan gerbang Asakusa di Tokyo.",
    "places": [
      "Osaka",
      "Kyoto",
      "Nara",
      "Mount Fuji",
      "Tokyo",
      "Nara Park",
      "Osaka Castle",
      "Asakusa",
      "Oshino Hakkai"
    ],
    "duration": "8 atau 9 hari · 6 malam",
    "start": 37,
    "end": 39,
    "region": "Asia Timur"
  },
  {
    "title": "Osaka + Kyoto + Nara",
    "summary": "Lihat tiga wajah Kansai melalui istana Osaka, laluan buluh Arashiyama, deretan gerbang Fushimi Inari dan taman rusa Nara.",
    "places": [
      "Osaka",
      "Kyoto",
      "Nara",
      "Nara Park",
      "Osaka Castle",
      "Arashiyama Bamboo Grove",
      "Fushimi Inari Taisha"
    ],
    "duration": "6H4M",
    "start": 40,
    "end": 41,
    "region": "Asia Timur"
  },
  {
    "title": "Tokyo + Mt. Fuji",
    "summary": "Beralih dari persimpangan sibuk Shibuya dan gerbang Asakusa ke suasana perkampungan Oshino Hakkai di kaki Fuji.",
    "places": [
      "Tokyo",
      "Mount Fuji",
      "Oshino Hakkai",
      "Asakusa",
      "Shibuya"
    ],
    "duration": "6 atau 7 hari · 4 malam",
    "start": 42,
    "end": 43,
    "region": "Asia Timur"
  },
  {
    "title": "Tokyo + Mt. Fuji + Snow Resort",
    "summary": "Luangkan masa bermain salji di kawasan Fuji, singgah di Oshino Hakkai dan terokai dua kejiranan Tokyo yang berbeza, Asakusa dan Shibuya.",
    "places": [
      "Tokyo",
      "Mount Fuji",
      "Fujiyama Snow Resort",
      "Oshino Hakkai",
      "Asakusa",
      "Shibuya"
    ],
    "duration": "7H4M",
    "start": 44,
    "end": 45,
    "region": "Asia Timur"
  },
  {
    "title": "Shanghai + Disneyland",
    "summary": "Peruntukkan masa untuk dunia Disney sebelum menelusuri Nanjing Road dan melihat pertemuan seni bina lama dan moden di tebing The Bund.",
    "places": [
      "Shanghai",
      "Shanghai Disneyland",
      "Nanjing Road Shanghai",
      "Jin Mao Tower",
      "The Bund"
    ],
    "duration": "5H4M",
    "start": 46,
    "end": 47,
    "region": "China"
  },
  {
    "title": "Beijing + Universal Studios",
    "summary": "Gabungkan tarikan bertema filem di Universal Studios dengan sejarah istana Forbidden City, Masjid Niujie dan persembahan akrobatik Beijing.",
    "places": [
      "Beijing",
      "Universal Studios Beijing",
      "Niujie Mosque",
      "Forbidden City"
    ],
    "duration": "5 atau 6 hari · 4 malam",
    "start": 48,
    "end": 49,
    "region": "China"
  },
  {
    "title": "Beijing",
    "summary": "Ikuti jejak sejarah Beijing dari kediaman diraja Forbidden City dan taman Summer Palace hingga ke Tembok Besar dan Masjid Niujie.",
    "places": [
      "Beijing",
      "Forbidden City",
      "Great Wall of China Beijing",
      "Summer Palace",
      "Niujie Mosque"
    ],
    "duration": "5 atau 6 hari · 4 malam",
    "start": 50,
    "end": 51,
    "region": "China"
  },
  {
    "title": "Beijing + Inner Mongolia",
    "summary": "Selepas melihat Stadium Sarang Burung di Beijing, kenali suasana padang rumput Mongolia Dalam dengan pengalaman bermalam di yurt dan aktiviti di kawasan pasir.",
    "places": [
      "Beijing",
      "Inner Mongolia",
      "Beijing National Stadium"
    ],
    "duration": "8H6M",
    "start": 52,
    "end": 53,
    "region": "China"
  },
  {
    "title": "Inner Mongolia + Ningxia",
    "summary": "Bandingkan padang rumput Xilamuren dengan bukit pasir Whistling Dune Bay, kemudian lihat warna tersendiri Tasik Wulan.",
    "places": [
      "Inner Mongolia",
      "Ningxia",
      "Wulan Lake",
      "Xilamuren Grassland",
      "Whistling Dune Bay"
    ],
    "duration": "9H7M",
    "start": 54,
    "end": 55,
    "region": "China"
  },
  {
    "title": "Xi’an Muslim Heritage",
    "summary": "Kenali warisan Muslim Xi’an di lorong pasar lama, lihat tentera terracotta dan singgah di kediaman keluarga Gao untuk persembahan wayang bayang.",
    "places": [
      "Xi'an",
      "Emperor Qinshihuang's Mausoleum Site Museum",
      "Xi'an Muslim Quarter",
      "Gao Family Courtyard",
      "Xi'an City Wall"
    ],
    "duration": "6H4M",
    "start": 56,
    "end": 57,
    "region": "China"
  },
  {
    "title": "Chengdu + Ski Resort + Jiuzhaigou",
    "summary": "Dari pusat panda Chengdu, teruskan ke bandar lama Songpan, kawasan ski Zhegu dan tasik pergunungan Jiuzhaigou. Tajuk itinerari menyatakan 6H4M, manakala indeks menyenaraikan 6H5M.",
    "places": [
      "Chengdu",
      "Songpan Ancient Town",
      "Chengdu Research Base of Giant Panda Breeding",
      "Jiuzhaigou Valley",
      "Zhegu Mountain Ski Resort"
    ],
    "duration": "6H4M*",
    "start": 58,
    "end": 59,
    "region": "China"
  },
  {
    "title": "Chengdu + Jiuzhaigou + Chongqing",
    "summary": "Tiga perjalanan kereta api laju menghubungkan pengalaman melihat panda di Chongqing, membeli-belah di Chengdu dan menikmati lembah Jiuzhaigou.",
    "places": [
      "Chengdu",
      "Jiuzhaigou Valley",
      "Chongqing",
      "Chongqing Zoo",
      "Chengdu Lotus Pond Market"
    ],
    "duration": "6H5M",
    "start": 60,
    "end": 61,
    "region": "China"
  },
  {
    "title": "Land of Avatar · Zhangjiajie",
    "summary": "Lihat bentuk batu yang menjulang di Zhangjiajie melalui Bailong Elevator dan jambatan kaca, kemudian berjalan di kota lama Fenghuang.",
    "places": [
      "Zhangjiajie",
      "Tianmen Mountain",
      "Bailong Elevator",
      "Fenghuang Ancient Town",
      "Zhangjiajie Glass Bridge"
    ],
    "duration": "7H5M",
    "start": 62,
    "end": 64,
    "region": "China"
  },
  {
    "title": "Fantasy Avatar World · Zhangjiajie",
    "summary": "Lawati perkampungan Hui di Changde dan bandar air terjun Furong sebelum menyelami landskap hutan batu Zhangjiajie.",
    "places": [
      "Zhangjiajie",
      "Changde Hui Village",
      "Gaoshan Street Changde",
      "Furong Ancient Town",
      "Zhangjiajie National Forest Park"
    ],
    "duration": "8H6M",
    "start": 65,
    "end": 67,
    "region": "China"
  },
  {
    "title": "Zhangjiajie + Three Gorges + Fenghuang",
    "summary": "Pelayaran menyusuri kawasan empangan Three Gorges digandingkan dengan suasana kota lama Fenghuang dan gaung Zhangjiajie.",
    "places": [
      "Zhangjiajie",
      "Three Gorges Dam",
      "Yichang",
      "Fenghuang Ancient Town",
      "Zhangjiajie Grand Canyon"
    ],
    "duration": "8H6M",
    "start": 68,
    "end": 70,
    "region": "China"
  },
  {
    "title": "Hidden Muslim Gems of Yunnan",
    "summary": "Kenali Yunnan melalui masakan tradisi Muslim, pembuatan dumpling dan tembikar ungu Jianshui. Laluan turut merangkumi taman glasier di kawasan pergunungan Lijiang.",
    "places": [
      "Yunnan",
      "Jianshui",
      "Lijiang",
      "Jade Dragon Snow Mountain"
    ],
    "duration": "9H7M",
    "start": 71,
    "end": 73,
    "region": "China"
  },
  {
    "title": "Enchanting Yunnan & Shangri-La",
    "summary": "Temui warisan masyarakat Hui dan suasana kota Tibet Dukezong, kemudian nikmati tasik tanah tinggi Napahai dan landskap glasier.",
    "places": [
      "Yunnan",
      "Shangri-La",
      "Dukezong Ancient Town",
      "Napahai Lake",
      "Lijiang",
      "Jade Dragon Snow Mountain"
    ],
    "duration": "9H7M",
    "start": 74,
    "end": 76,
    "region": "China"
  },
  {
    "title": "Yunnan Golden Route",
    "summary": "Terokai bentuk batu unik Yunnan, lorong kota lama Lijiang serta aliran sungai dan tasik berwarna biru di Blue Moon Valley.",
    "places": [
      "Yunnan",
      "Stone Forest Kunming",
      "Lijiang Ancient Town",
      "Jade Dragon Snow Mountain",
      "White Water River Lijiang",
      "Blue Moon Valley"
    ],
    "duration": "8 atau 9 hari · 7 malam",
    "start": 77,
    "end": 79,
    "region": "China"
  },
  {
    "title": "Pesona Guizhou + Magical Chongqing",
    "summary": "Lihat ladang teh Guizhou, seni bina tradisional Wujiang dan pemandangan jambatan Huajiang dalam perjalanan yang turut meliputi Chongqing.",
    "places": [
      "Guiyang",
      "Chongqing",
      "Guiyang White Palace",
      "China Tea Sea",
      "Wujiang Village",
      "Huajiang Grand Canyon Bridge"
    ],
    "duration": "8H7M",
    "start": 80,
    "end": 81,
    "region": "China"
  },
  {
    "title": "Guilin + Guangzhou",
    "summary": "Bandingkan bukit batu kapur dan gua Reed Flute di Guilin dengan latar bandar moden Guangzhou dan Canton Tower.",
    "places": [
      "Guilin",
      "Guangzhou",
      "Elephant Trunk Hill",
      "Shangri-La Yangshuo",
      "Canton Tower",
      "Reed Flute Cave"
    ],
    "duration": "6H5M",
    "start": 82,
    "end": 83,
    "region": "China"
  },
  {
    "title": "Pulau Hainan",
    "summary": "Gabungkan kunjungan ke lembah mawar Yalong Bay dengan pesisir Haikou dan suasana pasar malam Sanya.",
    "places": [
      "Hainan",
      "Haikou",
      "Sanya",
      "Yalong Bay Rose Valley",
      "Haikou Waterfront Center",
      "Sanya Night Market"
    ],
    "duration": "5H4M",
    "start": 84,
    "end": 85,
    "region": "China"
  },
  {
    "title": "Harbin + Snow Village",
    "summary": "Bermula dengan seni bina bercitra Rusia di Volga Manor, lawatan diteruskan dengan ukiran salji Sun Island serta suasana perkampungan Snow Town.",
    "places": [
      "Harbin",
      "China Snow Town",
      "Volga Manor",
      "Sun Island Harbin",
      "Harbin Ice and Snow World"
    ],
    "duration": "7H6M",
    "start": 86,
    "end": 87,
    "region": "China"
  },
  {
    "title": "Harbin Ice Festival",
    "summary": "Lihat istana era Manchukuo dan warisan Rusia sebelum menerokai arca salji Sun Island dan binaan ais bercahaya di Harbin.",
    "places": [
      "Harbin",
      "Changchun",
      "Museum of the Imperial Palace of Manchukuo",
      "Volga Manor",
      "Sun Island Harbin",
      "Harbin Ice and Snow World"
    ],
    "duration": "7H6M",
    "start": 88,
    "end": 89,
    "region": "China"
  },
  {
    "title": "Wonders of Guizhou",
    "summary": "Susuri kawasan Tasik Wanfeng, lihat tebing Maling River Canyon dan singgah untuk bergambar di Jambatan Huajiang.",
    "places": [
      "Guizhou",
      "Wanfeng Lake",
      "Maling River Canyon",
      "Yelang Valley",
      "Huajiang Grand Canyon Bridge"
    ],
    "duration": "8H7M",
    "start": 90,
    "end": 91,
    "region": "China"
  },
  {
    "title": "Taipei + Alishan + Sun Moon Lake",
    "summary": "Kereta api klasik Alishan dan perjalanan di Sun Moon Lake membawa anda keluar dari kota, sebelum menyusuri lorong Jiufen dan formasi batu Yehliu.",
    "places": [
      "Taipei",
      "Alishan National Forest Recreation Area",
      "Sun Moon Lake",
      "Jiufen Old Street",
      "Yehliu Geopark"
    ],
    "duration": "5 atau 6 hari · 4 malam",
    "start": 92,
    "end": 93,
    "region": "China"
  },
  {
    "title": "Hong Kong + 3 Bandar + Ocean Kingdom",
    "summary": "Empat bandar di selatan China menggabungkan panorama Victoria Peak, kawasan borong Guangzhou dan tarikan marin Chimelong di Zhuhai.",
    "places": [
      "Hong Kong",
      "Shenzhen",
      "Guangzhou",
      "Zhuhai",
      "Zhuhai Fisher Girl",
      "Baiyun Leather Market",
      "Chimelong Ocean Kingdom",
      "Victoria Peak"
    ],
    "duration": "5H4M",
    "start": 94,
    "end": 95,
    "region": "China"
  },
  {
    "title": "Bangkok + Kanchanaburi",
    "summary": "Lihat pasar yang dibina di sisi landasan Maeklong, singgah di pasar terapung Damnoen Saduak dan pandang Sungai Kwai dari skywalk.",
    "places": [
      "Bangkok",
      "Kanchanaburi",
      "Safari Park Kanchanaburi",
      "Maeklong Railway Market",
      "Damnoen Saduak Floating Market",
      "Kanchanaburi Skywalk"
    ],
    "duration": "5H4M",
    "start": 96,
    "end": 97,
    "region": "ASEAN"
  },
  {
    "title": "Dalat + Mui Ne + Ho Chi Minh",
    "summary": "Dari air terjun Datanla di tanah tinggi Dalat, perjalanan turun ke bukit pasir Mui Ne dan berakhir di kota Ho Chi Minh. Mekong Delta disenaraikan sebagai pilihan tambahan.",
    "places": [
      "Da Lat",
      "Mui Ne",
      "Ho Chi Minh City",
      "Mongo Land Dalat",
      "Datanla Waterfall",
      "Mui Ne Sand Dunes",
      "Mekong Delta"
    ],
    "duration": "5H4M",
    "start": 98,
    "end": 99,
    "region": "ASEAN"
  },
  {
    "title": "Da Nang + Hoi An + Ba Na Hills",
    "summary": "Singgah di Jambatan Naga Da Nang, naik ke Ba Na Hills untuk Fantasy Park dan kenali budaya perahu bakul di sekitar Hoi An.",
    "places": [
      "Da Nang",
      "Hoi An",
      "Ba Na Hills",
      "Dragon Bridge Da Nang",
      "Fantasy Park Ba Na Hills"
    ],
    "duration": "4H3M",
    "start": 100,
    "end": 101,
    "region": "ASEAN"
  },
  {
    "title": "Hanoi + Sapa + Mt. Fansipan",
    "summary": "Nikmati pemandangan pergunungan dari kereta kabel Fansipan dan singgah di Sun Plaza, sebelum meneroka kawasan Opera House serta pasar malam kota lama Hanoi.",
    "places": [
      "Hanoi",
      "Sa Pa",
      "Fansipan",
      "Sun Plaza Sapa",
      "Hanoi Opera House",
      "Hanoi Old Quarter"
    ],
    "duration": "5H4M",
    "start": 102,
    "end": 103,
    "region": "ASEAN"
  },
  {
    "title": "Hanoi + Sapa + Mt. Fansipan + Halong Bay",
    "summary": "Kenali perkampungan Y Linh Ho dan Cat Cat di kawasan Sapa, kemudian lihat pemandangan laut Ha Long. Tajuk itinerari dan indeks berbeza tentang tempoh, jadi sahkan tarikh pilihan.",
    "places": [
      "Hanoi",
      "Sa Pa",
      "Fansipan",
      "Y Linh Ho Village",
      "Cat Cat Village",
      "Ha Long Bay"
    ],
    "duration": "5H4M / 6H5M*",
    "start": 104,
    "end": 105,
    "region": "ASEAN"
  },
  {
    "title": "Phu Quoc",
    "summary": "Lihat pulau-pulau dari kereta kabel Hon Thom, berjalan di sekitar Grand World dan terokai tarikan VinWonders serta Roman Square.",
    "places": [
      "Phu Quoc",
      "Hon Thom Cable Car",
      "VinWonders Phu Quoc",
      "Grand World Phu Quoc",
      "Roman Square Phu Quoc"
    ],
    "duration": "4H3M",
    "start": 106,
    "end": 107,
    "region": "ASEAN"
  },
  {
    "title": "Jakarta + Bandung",
    "summary": "Naik kereta api laju Whoosh dalam laluan antara Jakarta dan Bandung. Persinggahan merangkumi Monas, kawasan beli-belah Thamrin City dan tasik kawah Ciwidey.",
    "places": [
      "Jakarta",
      "Bandung",
      "Monumen Nasional Jakarta",
      "Kawah Putih Ciwidey",
      "Thamrin City"
    ],
    "duration": "4H3M",
    "start": 108,
    "end": 109,
    "region": "ASEAN"
  },
  {
    "title": "Surabaya + Bromo",
    "summary": "Lihat panorama gunung berapi Bromo sebelum mengenali Surabaya melalui muzium kapal selam, kawasan Sunan Ampel dan Tunjungan Plaza.",
    "places": [
      "Surabaya",
      "Mount Bromo",
      "Monumen Kapal Selam Surabaya",
      "Tunjungan Plaza",
      "Makam Sunan Ampel"
    ],
    "duration": "4H3M",
    "start": 110,
    "end": 111,
    "region": "ASEAN"
  },
  {
    "title": "Medan + Samosir + Berastagi",
    "summary": "Bertolak ke Tasik Toba dan Pulau Samosir, singgah di air terjun Sipiso-piso dan akhiri perjalanan dengan warisan Istana Maimun serta Masjid Raya Medan.",
    "places": [
      "Medan",
      "Samosir",
      "Berastagi",
      "Lake Toba",
      "Sipiso-piso Waterfall",
      "Maimun Palace",
      "Great Mosque of Medan"
    ],
    "duration": "4H3M",
    "start": 112,
    "end": 113,
    "region": "ASEAN"
  },
  {
    "title": "3TAN · Uzbekistan + Kazakhstan + Kyrgyzstan",
    "summary": "Dataran Registan dan kompleks Imam al-Bukhari memperkenalkan warisan Uzbekistan. Di Kazakhstan dan Kyrgyzstan, tumpuan beralih ke Charyn Canyon dan Taman Negara Ala Archa.",
    "places": [
      "Samarkand",
      "Almaty",
      "Bishkek",
      "Charyn Canyon",
      "Ala Archa National Park",
      "Registan Square",
      "Imam Bukhari Complex"
    ],
    "duration": "11H9M",
    "start": 115,
    "end": 117,
    "region": "Eksotik"
  },
  {
    "title": "Uzbekistan 4 Kota",
    "summary": "Ikuti jejak kota-kota Jalan Sutera dari Khiva ke Bukhara dan Samarkand, termasuk Registan, bazar Siab dan kawasan pergunungan Chimgan.",
    "places": [
      "Tashkent",
      "Urgench",
      "Khiva",
      "Bukhara",
      "Gijduvan",
      "Samarkand",
      "Chimgan",
      "Imam Bukhari Complex",
      "Registan Square",
      "Siab Bazaar",
      "Tashkent Magic City"
    ],
    "duration": "8H6M",
    "start": 118,
    "end": 119,
    "region": "Eksotik"
  },
  {
    "title": "Kashmir + Agra + Delhi",
    "summary": "Rasai kehidupan tasik dari rumah bot dan sampan shikara di Srinagar, lihat pergunungan Gulmarg dan singgah di Taj Mahal di Agra.",
    "places": [
      "Srinagar",
      "Gulmarg",
      "Agra",
      "Delhi",
      "Taj Mahal",
      "Dal Lake",
      "Gulmarg Gondola"
    ],
    "duration": "8H6M",
    "start": 120,
    "end": 121,
    "region": "Eksotik"
  },
  {
    "title": "Sri Lanka",
    "summary": "Landskap Sri Lanka berubah daripada kawasan pemuliharaan gajah Pinnawala ke ladang teh Nuwara Eliya. Laluan kereta api melalui tanah tinggi menjadi salah satu sorotan.",
    "places": [
      "Pinnawala Elephant Orphanage",
      "Kandy",
      "Ella",
      "Nuwara Eliya"
    ],
    "duration": "6H4M",
    "start": 122,
    "end": 123,
    "region": "Eksotik"
  },
  {
    "title": "Korea Flexi",
    "summary": "Gunakan pakej Flexi untuk menggabungkan pengalaman Pulau Nami dengan istana Seoul, beli-belah Myeongdong dan perpustakaan Starfield.",
    "places": [
      "Seoul",
      "Incheon",
      "Nami Island",
      "Gyeongbokgung Palace",
      "Myeongdong Market",
      "Starfield Library Seoul"
    ],
    "duration": "6H4M",
    "start": 124,
    "end": 125,
    "region": "Flexi"
  },
  {
    "title": "Osaka + Kyoto Flexi",
    "summary": "Jelajah Kansai mengikut susunan Flexi yang menampilkan rusa Nara, istana Osaka, rimba buluh Arashiyama dan gerbang merah Fushimi Inari.",
    "places": [
      "Osaka",
      "Kyoto",
      "Nara",
      "Nara Park",
      "Osaka Castle",
      "Arashiyama Bamboo Grove",
      "Fushimi Inari Taisha"
    ],
    "duration": "6H4M",
    "start": 126,
    "end": 127,
    "region": "Flexi"
  },
  {
    "title": "Tokyo Flexi",
    "summary": "Kenali kawasan tradisional Asakusa, persimpangan Shibuya dan perkampungan Oshino Hakkai dalam pilihan Flexi untuk Tokyo serta kawasan Fuji.",
    "places": [
      "Tokyo",
      "Mount Fuji",
      "Oshino Hakkai",
      "Asakusa",
      "Shibuya"
    ],
    "duration": "6H4M",
    "start": 128,
    "end": 129,
    "region": "Flexi"
  },
  {
    "title": "Salam Taiwan Flexi",
    "summary": "Telusuri lorong Shifen dan Jiufen, lihat latar Taipei 101 dan singgah di Sun Moon Lake. Indeks turut menyenaraikan variasi enam hari.",
    "places": [
      "Taipei",
      "Shifen Old Street",
      "Sun Moon Lake",
      "Jiufen Old Street",
      "Taipei 101"
    ],
    "duration": "5H4M / 6H4M*",
    "start": 130,
    "end": 131,
    "region": "Flexi"
  },
  {
    "title": "Hong Kong Flexi",
    "summary": "Lihat pelabuhan dari Avenue of Stars, singgah di Masjid Kowloon dan kenali kawasan muzium seni di West Kowloon.",
    "places": [
      "Hong Kong",
      "Avenue of Stars Hong Kong",
      "M+ Museum",
      "Hong Kong Palace Museum",
      "Kowloon Mosque",
      "West Kowloon Cultural District"
    ],
    "duration": "4H3M",
    "start": 132,
    "end": 133,
    "region": "Flexi"
  }
];
