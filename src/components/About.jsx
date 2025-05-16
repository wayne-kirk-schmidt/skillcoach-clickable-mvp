// src/components/About.jsx
import '../mytailwind.css'
function About() {
  const cards = [
    {
      title: "Do you want to coach?",
      description: "Share your expertise and help others grow while building your coaching business."
    },
    {
      title: "Do you want to guide?",
      description: "Become a mentor and help other coaches capturing knowledge/wisdom/teachings."
    },
    {
      title: "Do you want to learn?",
      description: "Access top-quality coaching and guidance to achieve your goals."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-gray-800">About Us</h2>
      <p className="mt-6 text-xl text-gray-600 text-center max-w-3xl mx-auto">
        At Skillcoach, we are dedicated to connecting passionate coaches with eager learners, guides who want to help coaches,
        creating a community where knowledge sharing and personal growth thrive.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
            <p className="mt-4 text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;