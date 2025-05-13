import Link from "next/link"
import Image from "next/image"
import { Calendar, ChevronUp, Home, User, Inbox, Search, Settings, User2 } from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator } from "./ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"

const items = [
  {
    title: "Личный кабинет",
    url: "/lk",
    icon: User,
  },
  {
    title: "Мероприятия",
    url: "/events",
    icon: Home,
  },
  {
    title: "Портфолио",
    url: "/portfolio",
    icon: Inbox,
  },
  {
    title: "Календарь",
    url: "/calendar",
    icon: Calendar,
  },

  {
    title: "Настройки",
    url: "/settings",
    icon: Settings,
  },
]

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="h-15" asChild>
              <Link href="/">
                <Image className="pb-0" src="/images/logoDalgau.svg" alt="logo" width={20} height={20} />
                <span className="pl-5">Личный кабинет <br /> абитуриента</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Главная</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} aria-label={`Перейти к разделу ${item.title}`}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="pb-0">
                <SidebarMenuButton>
                  <User2 /> Иван Иванов <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Аккаунт</DropdownMenuItem>
                <DropdownMenuItem>Настройки</DropdownMenuItem>
                <DropdownMenuItem variant="destructive">Выход</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;