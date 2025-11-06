import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you soon!",
    });
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground">We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input placeholder="Your name" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="your@email.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input placeholder="How can we help?" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  placeholder="Tell us more..."
                  rows={6}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <Card className="p-6 flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      123 Fashion Street
                      <br />
                      New York, NY 10013
                      <br />
                      United States
                    </p>
                  </div>
                </Card>

                <Card className="p-6 flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </Card>

                <Card className="p-6 flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@texora.com</p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e30df2b%3A0x62ba4b06487fd2de!2sNew%20York%2C%20NY%2010013%2C%20USA!5e0!3m2!1sen!2s!4v1642684594234!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Store Hours */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Store Hours</h2>
          <div className="max-w-md mx-auto space-y-2">
            <div className="flex justify-between">
              <span>Monday - Friday</span>
              <span className="font-semibold">9:00 AM - 8:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday</span>
              <span className="font-semibold">10:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday</span>
              <span className="font-semibold">11:00 AM - 5:00 PM</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
