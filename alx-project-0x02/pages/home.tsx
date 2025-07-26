import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-8">Welcome to the Home Page!</h1>
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Explore Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              title="Dynamic Components"
              content="Build highly reusable and interactive components with ease using React and TypeScript."
            />
            <Card
              title="Efficient Styling"
              content="Leverage the power of Tailwind CSS for rapid and utility-first styling."
            />
            <Card
              title="Seamless Routing"
              content="Navigate between pages smoothly with Next.js's built-in Pages Router."
            />
          </div>
        </section>
      </main>
    </>
  );
}