"use client"

import Image from "next/image"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import Link from "next/link"

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
            <div >
                <Link href="/news_inner" className="events-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 pt-5">
                    <Card className="p-1.5 border-green-900 hover:shadow-2xl/30 transition-shadow">
                        <CardHeader className="p-0 rounded-2xl ">
                            <Image width={470} height={350} alt={'ivent-image'} className="rounded-sm" src="https://dalgau.ru/upload/iblock/780/vqlao9esmog4kaxft2cpmg92x6w3qu7f/WhatsApp_Image_2025_04_30_at_14.11.02_1_.jpeg"/>
                        </CardHeader>
                        <CardContent className="flex flex-col items-end">
                            <div className="date-card text-green-900 font-bold">
                                <p>2 Сентября</p>
                            </div>
                        
                            <div className="text cursor-pointer">
                                Дальневосточный ГАУ приглашает школьников и выпускников СПО на День открытых дверей!
                            </div>
                            
                        </CardContent>
                        <CardFooter className="flex justify-center">
                            
                                <Button className="bg-green-800 text-white cursor-pointer">
                                    Подать заявку
                                </Button>
                          
                            
                        </CardFooter>
                        
                    </Card>
                </Link>
            </div>
        </div>
      </div>
    )
  }
  
export default Events