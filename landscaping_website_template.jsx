import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LandscapingWebsite() {
  return (
    <div className="min-h-screen bg-green-50 text-gray-800">
      <header className="bg-green-700 text-white p-6 text-center shadow-md">
        <h1 className="text-4xl font-bold">EverGreen Landscaping</h1>
        <p className="mt-2">Transforming your outdoor spaces</p>
      </header>

      <section className="p-8 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Card className="bg-white shadow-md">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Lawn Care</h2>
            <p>Weekly mowing, fertilizing, and edging to keep your lawn healthy and beautiful.</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Landscape Design</h2>
            <p>Custom plans and plantings tailored to your property and vision.</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Irrigation Systems</h2>
            <p>Efficient watering solutions that save water and keep your plants thriving.</p>
          </CardContent>
        </Card>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 border rounded"
            />
            <textarea
              placeholder="How can we help you?"
              rows={4}
              className="p-2 border rounded"
            ></textarea>
            <Button className="bg-green-700 hover:bg-green-800 text-white">Send Message</Button>
          </form>
        </div>
      </section>

      <footer className="bg-green-700 text-white text-center p-4">
        &copy; {new Date().getFullYear()} EverGreen Landscaping. All rights reserved.
      </footer>
    </div>
  );
}
