import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";

const allProjects = [
  {
    title: "Quadruped Robot",
    description: "An advanced four-legged robot designed for stable locomotion and maneuverability across complex terrains, inspired by biological movement.",
    image: "https://placehold.co/600x400.png",
    hint: "quadruped robot"
  }
];

type ProjectsSectionProps = {
  summary?: boolean;
};

export default function ProjectsSection({ summary = false }: ProjectsSectionProps) {
  const projects = summary ? allProjects.slice(0, 3) : allProjects;
  
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50 backdrop-blur-sm rounded-lg">
      <div className="container px-4 md:px-6">
        {!summary && (
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Our Flagship Projects</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From international competitions to innovative in-house creations, here's a glimpse of what we build.
              </p>
            </div>
          </div>
        )}
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:gap-12 lg:max-w-none lg:grid-cols-1">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={`Image of ${project.title}`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-48 transition-transform duration-500 ease-in-out group-hover:scale-105"
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
