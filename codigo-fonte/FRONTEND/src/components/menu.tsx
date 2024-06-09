import { Menu, Home, UserRoundPlus, Bell, User, FilePlus } from 'lucide-react';
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTrigger,
    DrawerClose
} from "./ui/drawer"
import { useNavigate } from 'react-router-dom';
import { useTitle } from '@/hooks/useTitle';
import { TitleOfPages } from '@/utils/titleOfPages';


export function HeaderMenu() {
    const { setTitle } = useTitle();
    const navigate = useNavigate()

    const navigateUpdatingHeader = (path: string, title: string) => {
        setTitle(title)
        navigate(path)
      }

    return (
        <Drawer>
            <DrawerTrigger>
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 shrink-0 rounded-full"
                >
                    <Menu />
                </Button>
            </DrawerTrigger>
            <DrawerContent className="h-full w-8/12">
                <div className="mx-auto w-full max-w-sm h-full">
                    <DrawerHeader className="mt-3 flex flex-col text-left pb-5">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>FS</AvatarFallback>
                        </Avatar>
                        <span className="font-bold pt-2">Fátima Esteticista</span>
                    </DrawerHeader>

                    <div className="flex flex-col gap-3">

                        <DrawerClose asChild>
                            <Button variant={"link"} className="justify-start" onClick={() => navigateUpdatingHeader('/', TitleOfPages.home)} >
                                <Home />
                                <span className="text-black pl-3 pt-1 font-normal">Home</span>
                            </Button>
                        </DrawerClose>
                        <DrawerClose asChild>
                            <Button variant={"link"} className="justify-start" onClick={() => navigateUpdatingHeader('/perfil/styles', TitleOfPages.perfil)}>
                                <User />
                                <span className="text-black pl-3 pt-1 font-normal">Perfil</span>
                            </Button>
                        </DrawerClose>

                        <DrawerClose asChild>
                            <Button variant={"link"} className="justify-start" onClick={() => navigateUpdatingHeader('/appointment', TitleOfPages.appointment)}>
                                <FilePlus />
                                <span className="text-black pl-3 pt-1 font-normal">Novo tratamento</span>
                            </Button>
                        </DrawerClose>

                        <DrawerClose asChild>
                            <Button variant={"link"} className="justify-start" onClick={() => navigateUpdatingHeader('/register-users', TitleOfPages.newClient)}>
                                <UserRoundPlus />
                                <span className="text-black pl-3 pt-1 font-normal">Novo cliente</span>
                            </Button>
                        </DrawerClose>

                        <DrawerClose asChild>
                            <Button variant={"link"} className="justify-start" onClick={() => navigateUpdatingHeader('/notifications', TitleOfPages.notifications)}>
                                <Bell />
                                <span className="text-black pl-3 pt-1 font-normal">Novas fichas recebidas</span>
                            </Button>
                        </DrawerClose>



                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
