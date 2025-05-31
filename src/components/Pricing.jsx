// src/components/Pricing.jsx
import '../mytailwind.css'
function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "0",
      features: [
        "Basic library access",
        "1 course / month",
        "Limited coach chat"
      ]
    },
    {
      name: "Pro",
      price: "12",
      features: [
        "All Free features",
        "Unlimited courses",
        "Full coach access"

      ]
    },
    {
      name: "Premium",
      price: "29",
      features: [
        "All pro features",
          "1:1 session scheduling",
          "Priority support"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[#1B638A]">{plan.name}</h3>
            <div className="mt-4">
              <span className="text-4xl font-bold">${plan.price}</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="mt-6 space-y-4">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <svg className="w-5 h-5 text-[#1B638A] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-8 w-full py-3 bg-[#1B638A] text-white rounded-lg hover:bg-[#5bc5cf] transition">
              Select {plan.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;