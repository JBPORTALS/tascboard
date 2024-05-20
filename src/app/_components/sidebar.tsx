"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bike, ChevronRight, LayoutGrid,Settings, Square, Wallet } from "lucide-react";
import { MdOutlinePlaylistAddCheck, MdTask } from "react-icons/md";



import Sidebar, {
    SidebarBody,
    SidebarItem,
} from "./side-bar";
import { ComboboxDemo } from "./combobox";



export default function SidebarClient() {
    const pathname = usePathname();
    return (
        <Sidebar iconItem={undefined}>
            < div className="flex w-full items-center justify-between gap-1">
                <ComboboxDemo />
            </div>
            <SidebarBody>

                <hr  className="w-full"/>

                <Link href={"/"} className="w-full">
                    <SidebarItem isActive={pathname === "/"}>
                        <LayoutGrid /> Dashboard
                    </SidebarItem>
                </Link>



                <Link href={"/projectSettings"}>
                    <SidebarItem isActive={pathname === "/projectSettings"}>
                        <Settings /> Project settings
                    </SidebarItem>
                </Link>

                <hr />


                <Link href={"/epic"}>
                    <SidebarItem isActive={pathname === "/epic"} className="justify-between">
                        <div className="flex gap-3">
                            <Square />  Epic </div>
                        <ChevronRight />
                    </SidebarItem>
                    
                </Link>




                <Link href={"/task"}>
                    <SidebarItem isActive={pathname === "/task"}className="justify-between">
                    <div className="flex gap-3">
                    <MdTask size={24} /> Task </div>
                        <ChevronRight />
                    </SidebarItem>
                </Link>




                <Link href={"/sprint"}>
                    <SidebarItem isActive={pathname === "/sprint"}className="justify-between">
                        <div className="flex gap-3">
                        <Wallet /> Sprint</div>
                        <ChevronRight />
                    </SidebarItem>
                </Link>

                <hr />

                <Link href={"/backlog"}>
                    <SidebarItem isActive={pathname === "/backlog"}className="justify-between">
                    
                    <div className="flex gap-3">
                    <MdOutlinePlaylistAddCheck size={24}/>backlog</div>
                        <ChevronRight />
                    </SidebarItem>
                </Link>

            </SidebarBody>

        </Sidebar>
    );
}
