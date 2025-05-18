// src/components/YourJourney.jsx
import '../mytailwind.css'

function YourJourney() {
  // Data for current ongoing progress section
  const ongoingCourses = [
    {
      title: "AI Prompts",
      progress: 30
    },
    {
      title: "Data Analytics",
      progress: 70
    },
    {
      title: "Business Requirements",
      progress: 50
    }
  ];

  // Data for pending courses section
  const pendingCourseCategories = [
    {
      category: "Communication",
      courses: ["Effective Communication"]
    },
    {
      category: "I.T",
      courses: ["IT Governance", "IT Operations - change, management"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Section 1: Current Ongoing Progress */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8">Current Ongoing Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ongoingCourses.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{course.title}</h3>
                <span className="text-2xl font-bold text-[#68DAE4]">{course.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-[#68DAE4] h-2.5 rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: List of Pending Courses */}
      <div>
        <h2 className="text-3xl font-bold mb-8">Pending Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pendingCourseCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#68DAE4] mb-4">{category.category}</h3>
              <ul className="space-y-4">
                {category.courses.map((course, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg className="w-5 h-5 text-[#68DAE4] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {course}
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full py-3 bg-[#68DAE4] text-white rounded-lg hover:bg-[#5bc5cf] font-bold transition">
                Start Learning
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourJourney;