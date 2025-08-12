import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t bg-secondary">
      <div className="container py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
           <Image
              src="https://robotix-iith.github.io/Robotix/Images/hello.png"
              alt="Robotix Club Logo"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Robotix Club, IITH. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="GitHub">
              <Github className="h-6 w-6 transition-transform duration-300 hover:scale-125" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 transition-transform duration-300 hover:scale-125" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-6 w-6 transition-transform duration-300 hover:scale-125" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
