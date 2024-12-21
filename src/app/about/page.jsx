const About = () => {
  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
        About Open Tales
      </h1>
      <p className="text-xl text-muted-foreground text-center mb-12">
        Where Stories Come to Life
      </p>

      <div className="space-y-8 bg-background shadow-sm rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Our Story
        </h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Open Tales was born from a passion for storytelling and the belief that every person has a unique perspective to share. We created this platform to bring together writers, thinkers, and readers from all walks of life, creating a space where ideas flow freely and stories find their audience.
        </p>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Since our inception, we've been dedicated to fostering a community where creativity thrives and diverse voices are celebrated. Our platform serves as a bridge between talented writers and engaged readers, making meaningful connections through the power of words.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-background shadow-sm rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Our Mission
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            To provide a platform where storytellers can freely express their creativity, share their knowledge, and connect with readers who are passionate about discovering new perspectives and ideas.
          </p>
        </div>

        <div className="bg-background shadow-sm rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Our Vision
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            To become the most inclusive and engaging storytelling platform, where quality content meets meaningful engagement, fostering a global community of writers and readers.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-foreground mb-6">
          Join Our Community
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Whether you're a writer looking to share your stories or a reader seeking fresh perspectives, Open Tales welcomes you to be part of our growing community.
        </p>
      </div>
    </main>
  );
};

export default About;
