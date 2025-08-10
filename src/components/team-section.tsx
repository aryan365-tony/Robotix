import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const allTeamMembers = [
  {
    name: "Aditya Gupta",
    role: "Overall Coordinator",
    bio: "Leading the club's vision and coordinating all activities.",
    image: "https://placehold.co/100x100.png",
    fallback: "AG",
    hint: "professional portrait"
  },
  {
    name: "Abhijit Kashyap",
    role: "Overall Coordinator",
    bio: "Co-leading the club and ensuring smooth operations.",
    image: "https://placehold.co/100x100.png",
    fallback: "AK",
    hint: "professional portrait"
  },
  {
    name: "Aryan Gandhi",
    role: "Programming and ML Head",
    bio: "Expert in algorithms and machine learning applications for robotics.",
    image: "https://placehold.co/100x100.png",
    fallback: "AG",
    hint: "professional portrait"
  },
  {
    name: "Pardhu Besetty",
    role: "Mechanical Modelling Head",
    bio: "Specialist in designing and fabricating mechanical systems.",
    image: "https://placehold.co/100x100.png",
    fallback: "P",
    hint: "professional portrait"
  },
  {
    name: "Soumyajit Maji",
    role: "Quadruped Lead 1",
    bio: "Leading the development of our quadruped robot project.",
    image: "https://placehold.co/100x100.png",
    fallback: "SM",
    hint: "professional portrait"
  },
  {
    name: "Ethan Bobby",
    role: "Quadruped Lead 2",
    bio: "Co-leading the development of our advanced quadruped robot.",
    image: "https://placehold.co/100x100.png",
    fallback: "EB",
    hint: "professional portrait"
  }
];

type TeamSectionProps = {
  summary?: boolean;
}

export default function TeamSection({ summary = false }: TeamSectionProps) {
  const teamMembers = summary ? allTeamMembers.slice(0, 4) : allTeamMembers;
  return (
    <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50 backdrop-blur-sm rounded-lg">
      <div className="container px-4 md:px-6">
        {!summary && (
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Meet Our Team</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The brilliant minds behind our robots. We are a diverse group of engineers, designers, and innovators.
              </p>
            </div>
          </div>
        )}
        <div className="mx-auto grid grid-cols-2 gap-4 sm:gap-8 pt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 w-full max-w-[250px] sm:max-w-none">
              <CardHeader className="items-center p-4">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.hint} />
                  <AvatarFallback>{member.fallback}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-base sm:text-lg">{member.name}</CardTitle>
                <CardDescription className="text-primary text-xs sm:text-sm">{member.role}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-xs sm:text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
