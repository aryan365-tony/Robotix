import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const allTeamMembers = [
  {
    name: "Alex Johnson",
    role: "Club President",
    bio: "Passionate about robotics and leadership. Driving the club's vision forward.",
    image: "https://placehold.co/100x100.png",
    fallback: "AJ",
    hint: "professional portrait"
  },
  {
    name: "Priya Sharma",
    role: "Head of Technology",
    bio: "Loves tackling complex hardware and software challenges. Expert in embedded systems.",
    image: "https://placehold.co/100x100.png",
    fallback: "PS",
    hint: "professional portrait"
  },
  {
    name: "Ben Carter",
    role: "Project Manager",
    bio: "Ensures projects are on track and fosters a collaborative environment.",
    image: "https://placehold.co/100x100.png",
    fallback: "BC",
    hint: "professional portrait"
  },
  {
    name: "Mei Lin",
    role: "Treasurer",
    bio: "Manages the club's finances and secures funding for our ambitious projects.",
    image: "https://placehold.co/100x100.png",
    fallback: "ML",
    hint: "professional portrait"
  },
  {
    name: "Carlos Rivera",
    role: "AI/ML Lead",
    bio: "Focuses on implementing intelligent algorithms in our robotic systems.",
    image: "https://placehold.co/100x100.png",
    fallback: "CR",
    hint: "professional portrait"
  },
  {
    name: "Sofia Rossi",
    role: "Outreach Coordinator",
    bio: "Connects the club with the community and organizes workshops.",
    image: "https://placehold.co/100x100.png",
    fallback: "SR",
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
        <div className="mx-auto grid grid-cols-1 gap-8 pt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
              <CardHeader className="items-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.hint} />
                  <AvatarFallback>{member.fallback}</AvatarFallback>
                </Avatar>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription className="text-primary">{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
