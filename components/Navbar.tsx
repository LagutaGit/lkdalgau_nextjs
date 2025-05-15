'use client'

import { LogOut, Moon, Settings, Sun, User } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"
import { useTheme } from "next-themes"
import { SidebarTrigger } from "./ui/sidebar"
import Search from "./Search"
import { useUser } from "@/context/UserContext" // Импортируем контекст

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const { user } = useUser(); // Получаем данные пользователя из контекста

    return (
      <nav className="p-4 flex items-center justify-between">
        {/*LEFT*/}
        <SidebarTrigger/>
        {/*RIGHT*/}
        <div className="w-full flex items-center gap-4">
           {/*<Link href='/'>Dashboard</Link>*/}
           <Search/>
           {/*User menu*/}
           <div className="user-menu flex items-center gap-4">
           <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                    Светлая
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Темная
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                    Системная
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>           
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar>
                        <AvatarImage src={user.avatarUrl || "https://github.com/shadcn.png"} />
                        <AvatarFallback>{user.fullName ? user.fullName[0] : "CN"}</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent sideOffset={10}>
                    <DropdownMenuLabel>Мой аккаунт</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <User className="h-[1.2rem] w-[1.2rem] mr-2"/>
                        <Link href={"/lk"}>
                        Профиль
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem variant="destructive">
                        <LogOut className="h-[1.2rem] w-[1.2rem] mr-2"/>
                        Выйти
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
           </div>
        </div>
      </nav>
    )
}

export default Navbar