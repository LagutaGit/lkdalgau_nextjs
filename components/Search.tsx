"use client"

import { Button } from "./ui/button"
import { Input } from "./ui/input"

const Search = () => {
    return (
      <div className="flex w-full items-center space-x-2">
       
        <Input type="text" className="lg:min-w-4xl min-w-0" placeholder="Поиск мероприятия" />
        <Button className="bg-green-800 text-white" type="submit">Поиск</Button>
    </div>
    )
  }
  
export default Search