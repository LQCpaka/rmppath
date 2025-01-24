import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "./Icons";
import { Separator } from "./ui/separator";
import NavItems from "./NavItems";
import { HEADER_CATEGORY } from "../app/config"; // Import HEADER_CATEGORY

const Navbar = () => {
    return (
        <div className="bg-opacity-50 sticky top-0 z-50 inset-x-0 h-16 backdrop-blur-sm">
            <header className="relative">
                <div>
                    <MaxWidthWrapper>
                        {/* PC navbar */}
                        <div className="flex h-16 items-center">
                            <div className="ml-4 flex lg:ml-0">
                                <Link href="/">
                                    <Icons.logo className="h-10 w-10" />
                                </Link>
                            </div>
                            <div className="block z-50 lg:ml-8 lg:block lg:self-stretch">
                                <NavItems category={HEADER_CATEGORY} /> {/* Truyền HEADER_CATEGORY */}
                            </div>
                        </div>
                        {/* Mobile Navbar */}
                        <div className="hidden ml-auto md:block ">

                        </div>
                    </MaxWidthWrapper>
                    <Separator className="bg-gray-700" />
                </div>
            </header>
        </div>
    );
};

export default Navbar;
