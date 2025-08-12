import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { getProjects } from "@/lib/google-sheets";

type ProjectsSectionProps = {
  summary?: boolean;
};

export default async function ProjectsSection({ summary = false }: ProjectsSectionProps) {
  const allProjects = await getProjects();
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
        <div className="mx-auto grid max-w-4xl items-start gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
          {projects.map((project) => (
            <Card key={project.title} className="group overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 w-full max-w-[250px] sm:max-w-none text-center">
              <div className="flex flex-col items-center">
                <div className="w-full aspect-square">
                  <Image
                    src={project.image || "https://placehold.co/600x400.png"}
                    alt={`Image of ${project.title}`}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                    data-ai-hint={project.hint}
                  />
                </div>
                <div className="w-full">
                  <CardContent className="p-4">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="mt-2 text-sm">{project.description}</CardDescription>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
