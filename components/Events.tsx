import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"

const Events = () => {
    return (
      <div className="pt-5">
        <h2 className="text-5xl text-green-900">Мероприятия</h2>
        <div className="events-inner pl-30 pt-5">
            <div className="buttons-event">
                <Button className="text-white bg-amber-300">
                    Мои заявки
                </Button>
                <Button className="text-white bg-green-900 ml-5">
                    Показать все
                </Button>
            </div>
            <div className="events-cards grid grid-cols-3 grid-rows-2 gap-4 pt-5">
                <Card className="h-75 p-0">
                    <CardHeader className="p-0 h-34">
                        <img src="https://dalgau.ru/upload/iblock/780/vqlao9esmog4kaxft2cpmg92x6w3qu7f/WhatsApp_Image_2025_04_30_at_14.11.02_1_.jpeg"/>
                    </CardHeader>
                    <CardContent className="flex flex-col items-end">
                        <div className="date-card">
                            <p>2 Сентября</p>
                        </div>
                        <div className="text-card">
                            <p>Дальневосточный ГАУ приглашает школьников и выпускников СПО на День открытых дверей!</p>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                        <Button className="bg-green-800 text-white ">
                            Подать заявку
                        </Button>
                    </CardFooter>
                     
                </Card>
                <Card>
                    Карточка 
                </Card>
                <Card>
                    Карточка 
                </Card>
                <Card>
                    Карточка 
                </Card>
                <Card>
                    Карточка 
                </Card>
                <Card>
                    Карточка 
                </Card>
            </div>
        </div>
      </div>
    )
  }
  
export default Events