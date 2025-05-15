export interface NewsItem {
    id: number;
    date: string;
    text: string;
    imageUrl: string;
  }
  
  export const newsData: NewsItem[] = [
    {
      id: 1,
      date: "06.05.2025",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
      imageUrl: "https://dalgau.ru/upload/iblock/97c/uuziu2szsk1djq38u8oul1euaqx1jzs1/na-sayt-drony.jpg",
    },
    {
      id: 2,
      date: "06.05.2025",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
      imageUrl: "https://dalgau.ru/upload/iblock/415/zc576nnlx022z8wvu1wanak7jtqjcaym/Banner.jpg",
    },
    {
      id: 3,
      date: "06.05.2025",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
      imageUrl: "https://dalgau.ru/upload/iblock/772/9lgx7q6b8re7x95qj3fny38x854ohy00/botanikus.jpg",
    },
    {
      id: 4,
      date: "06.05.2025",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
      imageUrl: "https://dalgau.ru/upload/iblock/fae/sglnpzt9mrm5ef7ra4w8goz3b0yndh4t/geroi-pobedy.jpg",
    },
  ];