import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"

const News = () => {
    return (
      <div className="pt-5">
        <h2 className="text-5xl text-green-900">Новости</h2>
        <div className="events-inner ">
            <div className="news-wrapper ">
                <div className="news lg:flex lg:justify-between lg:h-60 my-5  hover:shadow-2xl/30 transition-shadow rounded-2xl">
                    <Image
                        src={"/projects/banner-1.jpg"}
                        alt={'news'}
                        className="lg:w-120 lg:h-60 object-cover rounded-2xl"
                        width={1200}
                        height={400}
                    />
                    <div className="news-text lg:pl-4 flex flex-col justify-between">
                        <div className="date-news pt-1">
                            06.05.2025
                        </div>
                        <div className="text-news line-clamp-3 mt-2">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium facilis cumque nobis nemo delectus officia id odio error rerum atque eius 
                            est distinctio, earum, fugiat quo, reprehenderit laboriosam harum recusandae? lorem
                        </div>
                        <Link target="_blank" href="/">
                            <Button className="bg-green-800 text-white cursor-pointer mt-2">
                                Подать заявку
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="news lg:flex lg:justify-between lg:h-60 my-5  hover:shadow-2xl/30 transition-shadow rounded-2xl">
                    <Image
                        src={"/projects/banner-1.jpg"}
                        alt={'news'}
                        className="lg:w-120 lg:h-60 object-cover rounded-2xl"
                        width={1200}
                        height={400}
                    />
                    <div className="news-text lg:pl-4 flex flex-col justify-between">
                        <div className="date-news pt-1">
                            06.05.2025
                        </div>
                        <div className="text-news line-clamp-3 mt-2">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium facilis cumque nobis nemo delectus officia id odio error rerum atque eius 
                            est distinctio, earum, fugiat quo, reprehenderit laboriosam harum recusandae? lorem
                        </div>
                        <Link target="_blank" href="/">
                            <Button className="bg-green-800 text-white cursor-pointer mt-2">
                                Подать заявку
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="news lg:flex lg:justify-between lg:h-60 my-5  hover:shadow-2xl/30 transition-shadow rounded-2xl">
                    <Image
                        src={"/projects/banner-1.jpg"}
                        alt={'news'}
                        className="lg:w-120 lg:h-60 object-cover rounded-2xl"
                        width={1200}
                        height={400}
                    />
                    <div className="news-text lg:pl-4 flex flex-col justify-between">
                        <div className="date-news pt-1">
                            06.05.2025
                        </div>
                        <div className="text-news line-clamp-3 mt-2">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium facilis cumque nobis nemo delectus officia id odio error rerum atque eius 
                            est distinctio, earum, fugiat quo, reprehenderit laboriosam harum recusandae? lorem
                        </div>
                        <Link target="_blank" href="/">
                            <Button className="bg-green-800 text-white cursor-pointer mt-2">
                                Подать заявку
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="news lg:flex lg:justify-between lg:h-60 my-5  hover:shadow-2xl/30 transition-shadow rounded-2xl">
                    <Image
                        src={"/projects/banner-1.jpg"}
                        alt={'news'}
                        className="lg:w-120 lg:h-60 object-cover rounded-2xl"
                        width={1200}
                        height={400}
                    />
                    <div className="news-text lg:pl-4 flex flex-col justify-between">
                        <div className="date-news pt-1">
                            06.05.2025
                        </div>
                        <div className="text-news line-clamp-3 mt-2">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium facilis cumque nobis nemo delectus officia id odio error rerum atque eius 
                            est distinctio, earum, fugiat quo, reprehenderit laboriosam harum recusandae? lorem
                        </div>
                        <Link target="_blank" href="/">
                            <Button className="bg-green-800 text-white cursor-pointer mt-2">
                                Подать заявку
                            </Button>
                        </Link>
                    </div>
                </div>
                
                

                
                
            </div>
            
        </div>
      </div>
      
    )
  }
  
export default News