import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { newsData } from "@/data/newsData";

const News = () => {
  return (
    <div className="pt-5">
      <h2 className="text-5xl text-green-900">Новости</h2>
      <div className="events-inner">
        <div className="news-wrapper">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="news lg:flex lg:h-60 my-5 hover:shadow-2xl/30 transition-shadow rounded-2xl"
            >
              <Image
                src={news.imageUrl}
                alt="Новость"
                className="lg:w-[800px] lg:h-60 object-cover rounded-2xl"
                width={1200}
                height={400}
              />
              <div className="news-text lg:pl-4 flex flex-col justify-between">
                <div className="date-news pt-1">{news.date}</div>
                <div className="text-news line-clamp-3 mt-2">{news.text}</div>
                <Link href={`/event/news/${news.id}`}>
                  <Button
                    className="bg-green-800 text-white cursor-pointer mt-2"
                    aria-label="Подать заявку на новость"
                  >
                    Подать заявку
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;