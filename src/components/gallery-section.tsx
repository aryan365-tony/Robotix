export const dynamic = 'force-dynamic';

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getGalleryImages } from "@/lib/google-sheets";

type GallerySectionProps = {
  summary?: boolean;
};

export default async function GallerySection({ summary = false }: GallerySectionProps) {
  const allGalleryImages = await getGalleryImages();
  const galleryImages = summary ? allGalleryImages.slice(0, 5) : allGalleryImages;
  
  return (
    <section id="gallery" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        {!summary && (
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Club Moments</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A collection of snapshots from our events, workshops, and late-night build sessions.
            </p>
          </div>
        </div>
        )}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-sm sm:max-w-xl md:max-w-4xl mx-auto"
        >
          <CarouselContent>
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <Card className="overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                    <CardContent className="flex aspect-square items-center justify-center p-0">
                      <Image
                        src={image.src || "https://placehold.co/800x600.png"}
                        alt={image.alt}
                        width={400}
                        height={400}
                        className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                        data-ai-hint={image.hint}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
