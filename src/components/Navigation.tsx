
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation(){
    const pathname = usePathname()

    const routes = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "Characters",
        href: "/characters"
    },
    {
        label: "Create New Character",
        href: "/create"
    }]


    const checkActivePath = (path: string) => {
        return path === pathname
      }

    return(
        <nav className="bg-blue-500 py-2 px-4 text-white flex justify-between items-center">
            {routes.map((route)=>(
                <Link
                key={route.href} 
                href={route.href} 
                className={`${checkActivePath(route.href) ? "underline text-xl font-bold" : ""} hover:text-yellow-300`}>
                    {route.label}
                </Link>
            ))}
            
        </nav>
    )
}