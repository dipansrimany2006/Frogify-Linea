import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

export default function Contact() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-foreground mb-8">Contact Us</h1>

      <div className="space-y-8 bg-background shadow-sm rounded-lg p-8">
        <div className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="firstName"
                className="text-sm font-medium text-muted-foreground"
              >
                First Name
              </label>
              <Input
                id="firstName"
                placeholder="Enter your first name"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-muted-foreground"
              >
                Last Name
              </label>
              <Input
                id="lastName"
                placeholder="Enter your last name"
                className="w-full"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-muted-foreground"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-muted-foreground"
            >
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Type your message here"
              className="w-full min-h-[150px]"
            />
          </div>

          <Button className="w-full md:w-auto">Send Message</Button>
        </div>

        <div className="border-t border-border pt-8 mt-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Other Ways to Reach Us
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <strong className="text-foreground">Email:</strong>{" "}
              contact@opentales.com
            </p>
            <p>
              <strong className="text-foreground">Phone:</strong> +1 (555)
              123-4567
            </p>
            <p>
              <strong className="text-foreground">Address:</strong> 123 Open
              Tales Street, Digital City, DC 12345
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
