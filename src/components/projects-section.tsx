import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";

const projects = [
  {
    title: "Autonomous Navigation Drone",
    description: "A quadcopter equipped with computer vision and SLAM algorithms for fully autonomous flight and mapping in unknown environments.",
    image: "https://placehold.co/600x400.png",
    hint: "drone circuit"
  },
  {
    title: "AI-Powered Robotic Arm",
    description: "A 6-axis robotic arm that uses machine learning to identify, sort, and manipulate objects with high precision.",
    image: "https://placehold.co/600x400.png",
    hint: "robotic arm"
  },
  {
    title: "All-Terrain Rescue Bot",
    description: "A rugged, tracked robot designed for search and rescue operations in challenging terrains, featuring thermal imaging and remote control.",
    image: "https://placehold.co/600x400.png",
    hint: "robot wheels"
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Our Flagship Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From international competitions to innovative in-house creations, here's a glimpse of what we build.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 pt-12">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={`Image of ${project.title}`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-48"
                  data-ai-hint={project.hint}
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="mt-2">{project.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
