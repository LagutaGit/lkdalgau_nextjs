// data/eventsData.ts

// Определяем интерфейс для базовой структуры мероприятия
export interface EventItem {
    id: number;
    title: string;
    date: string;
    imageUrl: string;
    description?: string; // Опциональное поле
    location?: string;    // Опциональное поле
    time?: string;        // Опциональное поле
  }
  
  // Массив данных о мероприятиях
  export const eventsData: EventItem[] = [
    { 
      id: 1, 
      title: "Дальневосточный ГАУ приглашает школьников и выпускников СПО на День открытых дверей!", 
      date: "2025-09-02", 
      imageUrl: "https://dalgau.ru/upload/iblock/780/vqlao9esmog4kaxft2cpmg92x6w3qu7f/WhatsApp_Image_2025_04_30_at_14.11.02_1_.jpeg",
      description: "День открытых дверей — это возможность познакомиться с университетом, его преподавателями, узнать о специальностях и условиях поступления в 2026 году.",
      location: "г. Благовещенск, ул. Политехническая, 86",
      time: "10:00 - 15:00"
    },
    { 
      id: 2, 
      title: "Название 2", 
      date: "2025-07-15", 
      imageUrl: "https://dalgau.ru/upload/iblock/b67/22gqqa2l47wzrvh40vejd4jekmdez46n/IMG_8332.JPG",
      description: "Описание второго мероприятия. Подробности о программе и спикерах. Участники получат сертификаты.",
      location: "г. Благовещенск, пр. Главный, 5",
      time: "14:00 - 19:00"
    },
    { 
      id: 3, 
      title: "Название 3", 
      date: "2025-08-15", 
      imageUrl: "https://dalgau.ru/upload/iblock/b67/22gqqa2l47wzrvh40vejd4jekmdez46n/IMG_8332.JPG",
      description: "Описание третьего мероприятия. Будут рассмотрены новые тренды и технологии.",
      location: "г. Благовещенск, ул. Студенческая, 15",
      time: "09:00 - 18:00"
    },
    { 
      id: 4, 
      title: "Название 4", 
      date: "2025-07-20", 
      imageUrl: "https://dalgau.ru/upload/iblock/b67/22gqqa2l47wzrvh40vejd4jekmdez46n/IMG_8332.JPG",
      description: "Описание четвёртого мероприятия. Практическая часть с акцентом на навыки.",
      location: "г. Благовещенск, пр. Победителей, 20",
      time: "13:00 - 16:00"
    },
    { 
      id: 5, 
      title: "Название 5", 
      date: "2025-08-01", 
      imageUrl: "https://dalgau.ru/upload/iblock/b67/22gqqa2l47wzrvh40vejd4jekmdez46n/IMG_8332.JPG",
      description: "Описание пятого мероприятия. Интерактивный формат с участием аудитории.",
      location: "г. Благовещенск, ул. Горская, 7",
      time: "11:00 - 15:00"
    },
  ];