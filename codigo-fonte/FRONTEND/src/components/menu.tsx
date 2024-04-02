import { Menu, Home, UserRoundPlus, Bell, User, FilePlus } from 'lucide-react';
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTrigger,
} from "./ui/drawer"


export function HeaderMenu() {

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

                        <Button variant={"link"} className="justify-start" >
                            <Home />
                            <span className="text-black pl-3 pt-1 font-normal">Home</span>
                        </Button>

                        <Button variant={"link"} className="justify-start">
                            <User />
                            <span className="text-black pl-3 pt-1 font-normal">Perfil</span>
                        </Button>

                        <Button variant={"link"} className="justify-start">
                            <FilePlus />
                            <span className="text-black pl-3 pt-1 font-normal">Nova consulta</span>
                        </Button>

                        <Button variant={"link"} className="justify-start">
                            <UserRoundPlus />
                            <span className="text-black pl-3 pt-1 font-normal">Novo cliente</span>
                        </Button>

                        <Button variant={"link"} className="justify-start">
                            <Bell />
                            <span className="text-black pl-3 pt-1 font-normal">Novas fichas recebidas</span>
                        </Button>

                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
