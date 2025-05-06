import Link from "next/link"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"

const Events = () => {
    return (
      <div className="pt-5">
        <h2 className="text-5xl text-green-900">Мероприятия</h2>
        <div className="events-inner lg:pl-30 pt-5">
            <div className="buttons-event">
                <Button className="text-white bg-amber-300">
                    Мои заявки
                </Button>
                <Button className="text-white bg-green-900 ml-5">
                    Показать все
                </Button>
            </div>
            <div className="events-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 pt-5">
                <Card className="p-1.5 border-green-900">
                    <CardHeader className="p-0 rounded-2xl ">
                        <img src="https://dalgau.ru/upload/iblock/780/vqlao9esmog4kaxft2cpmg92x6w3qu7f/WhatsApp_Image_2025_04_30_at_14.11.02_1_.jpeg"/>
                    </CardHeader>
                    <CardContent className="flex flex-col items-end">
                        <div className="date-card text-green-900 font-bold">
                            <p>2 Сентября</p>
                        </div>
                        <div className="text cursor-pointer">
                            <Link target="_blank" href="/">Дальневосточный ГАУ приглашает школьников и выпускников СПО на День открытых дверей!</Link>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                            <Link target="_blank" href="/">
                                <Button className="bg-green-800 text-white cursor-pointer">
                                    Подать заявку
                                </Button>
                            </Link>
                        
                    </CardFooter>
                     
                </Card>
                

                
            </div>
        </div>
      </div>
    )
  }
  
export default Events