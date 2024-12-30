import { Button } from "../components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 mb-20 ml-20 mr-20">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Welcome to Frogify
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover stories, thoughts, and insights from our community of
            writers and thinkers.
          </p>
          <div className="flex gap-4">
            <Button size="lg">
              <Link href="/blogs">Read Stories</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            <Image
              src="/Project-Logo.png"
              alt="Blog Hero"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>

      {/* Featured Posts Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          Featured Posts
        </h2>
        
      </section>

      {/* Newsletter Section */}
      <section className="bg-background shadow-sm rounded-lg p-8 max-w-4xl mx-auto">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-foreground">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-muted-foreground">
            Get the latest posts and updates delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border border-border bg-background text-foreground"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
