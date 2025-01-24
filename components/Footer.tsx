import { Separator } from "./ui/separator";


const Footer = () => {
    return (
        <>
            <Separator className="bg-gray-700" />
            <footer className="py-10 bg-opacity-50 backdrop-blur-sm">
                <div className="pt-5 flex flex-col items-center justify-center">
                    <p>&copy; 2025 LQC. All rights reserved.</p>
                </div>
            </footer>
        </>

    );
}

export default Footer;