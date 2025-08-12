"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/robotix@gymkhana.iith.ac.in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus("success");
        (event.target as HTMLFormElement).reset();
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. We'll get back to you soon.",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setStatus("error");
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
       setTimeout(() => setStatus("idle"), 5000);
    }
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Get In Touch</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a question, a project idea, or want to collaborate? We'd love to hear from you.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl">
          <Card className="bg-secondary/50 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 bg-secondary/80 rounded-l-lg">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>
                    Find us at our lab or drop us an email.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Our Lab</h3>
                      <p className="text-muted-foreground">IIT Hyderabad, Kandi</p>
                      <p className="text-muted-foreground">Sangareddy, Telangana 502284</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Email Us</h3>
                      <p className="text-muted-foreground break-all">robotix@gymkhana.iith.ac.in</p>
                    </div>
                  </div>
                </CardContent>
              </div>
              <div className="p-8">
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>
                    Fill out the form and we'll get back to you.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" name="message" placeholder="Your message..." required />
                    </div>
                    <input type="hidden" name="_captcha" value="false" />
                    <Button type="submit" className="w-full" disabled={status === 'submitting'}>
                      {status === 'submitting' ? 'Submitting...' : 'Submit'}
                    </Button>
                  </form>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
