"use client";

import * as React from "react"
import { cn } from "@/lib/utils"
import { HEADER_CATEGORY } from "../app/config";
import { toast } from 'sonner'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuContent,

} from "@/components/ui/navigation-menu";

type Category = typeof HEADER_CATEGORY[number];

interface NavItemsProps {
    category: Category[];
}

const NavItems = ({ category }: NavItemsProps) => {
    return (
        <div className="flex gap-4 h-full">
            <NavigationMenu>
                <NavigationMenuList>
                    {category.map((item) => (
                        <NavigationMenuItem key={item.label}>
                            <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">
                                {item.label}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[300px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">

                                    {item.type.map((subItem) => (
                                        <ListItem 
                                            key={subItem.title}
                                            title={subItem.title}
                                            href="#"     
                                            onClick={() => toast.warning('Hiện tại đường dẫn này chưa được cập nhật')}
                                        >
                                            
                                            {subItem.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
};
const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export default NavItems;
