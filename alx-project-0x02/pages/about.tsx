import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-8">About Us</h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          This project serves as a comprehensive introduction to building modern web applications
          with Next.js, TypeScript, and Tailwind CSS.
        </p>

        <section className="my-8 text-center">
          <h2 className="text-2xl font-semibold mb-6">Our Philosophy</h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            <p>
              We believe in creating robust, scalable, and maintainable web solutions. By
              emphasizing best practices in project structure, component design, and code quality,
              we aim to empower developers to build exceptional user experiences.
            </p>
            <p>
              Our focus is on clarity, efficiency, and reusability, ensuring that every line of
              code contributes to a high-performing and easily understandable application.
            </p>
          </div>
        </section>

        <section className="my-10 text-center">
          <h2 className="text-2xl font-semibold mb-6">Explore Our Buttons</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="small" shape="rounded-sm">
              Small Rounded
            </Button>
            <Button size="medium" shape="rounded-md">
              Medium Rounded
            </Button>
            <Button size="large" shape="rounded-full">
              Large Full Rounded
            </Button>
            <Button size="medium">Default Button</Button> {/* Example without explicit shape */}
          </div>
        </section>
      </main>
    </>
  );
}