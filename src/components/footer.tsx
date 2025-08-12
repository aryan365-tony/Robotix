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
        <div className="flex items-center gap-8">
          <Link href="#" aria-label="GitHub" className="flex flex-col items-center gap-2 text-muted-foreground transition-transform duration-300 hover:text-primary hover:scale-110">
            <Github className="h-7 w-7" />
            <span className="text-sm font-medium">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/company/robotix-iith/" aria-label="LinkedIn" className="flex flex-col items-center gap-2 text-muted-foreground transition-transform duration-300 hover:text-primary hover:scale-110">
            <Linkedin className="h-7 w-7" />
            <span className="text-sm font-medium">LinkedIn</span>
          </Link>
          <Link href="https://www.instagram.com/robotix.iith?igsh=MWg1bDR0cWt0YjB2cA==" aria-label="Instagram" className="flex flex-col items-center gap-2 text-muted-foreground transition-transform duration-300 hover:text-primary hover:scale-110">
            <Instagram className="h-7 w-7" />
            <span className="text-sm font-medium">Instagram</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
