import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "astro-typesafe-routes/link/react";
import type { RouteId } from "astro-typesafe-routes/path";
import { MenuIcon, XCircleIcon } from "lucide-react";
import { useState } from "react";

const navlinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact-us" },
];

export default function MobileNav({ pathname }: { pathname: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size={"icon-lg"}
          aria-label="Toggle Navigation Menu"
          className="lg:hidden"
        >
          {isOpen ? <XCircleIcon /> : <MenuIcon />}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <img
              src={"/logo.png"}
              alt="Sunrisers Digital Hub Logo"
              className={"w-auto h-12"}
            />
          </SheetTitle>
          <SheetDescription>
            Navigate through the website using the links below.
          </SheetDescription>
        </SheetHeader>
        <div className={"px-4"}>
          <ul className={"flex flex-col gap-4"}>
            {navlinks.map((link) => {
              const isHomePage = link.href === "/";

              return (
                <li>
                  <Link
                    key={link.name}
                    to={link.href as RouteId}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-muted-foreground font-medium hover:text-primary transition-colors",
                      {
                        "text-primary border-primary border-b-2 pb-0.5 font-bold":
                          (pathname === "/" && isHomePage) ||
                          pathname === link.href.split("/")[1],
                      },
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
