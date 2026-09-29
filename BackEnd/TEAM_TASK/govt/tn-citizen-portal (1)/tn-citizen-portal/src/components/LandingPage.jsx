// Landing page: hero banner + citizen concerns + the three main action cards.

// Shows how a citizen issue travels through the system
function FlowSteps() {
  const steps = [
    { title: "Citizen raises an Issue", text: "Describe the problem you are facing" },
    { title: "Issue is linked to a Category", text: "Example: Public Health" },
    { title: "Category connects to a Department", text: "Example: Health and Family Welfare Department" },
    { title: "Department provides Services", text: "Example: Government Hospital Appointment" },
  ];

  return (
    <ol>
      {steps.map((step, index) => (
        <li key={step.title}>
          <div className="flex items-start gap-3 bg-white text-gray-800 border border-gray-300 p-3">
            <span className="shrink-0 w-7 h-7 bg-navy text-white text-sm font-bold flex items-center justify-center">
              {index + 1}
            </span>
            <div>
              <div className="font-bold text-navy text-sm">{step.title}</div>
              <div className="text-xs text-gray-600">{step.text}</div>
            </div>
          </div>
          {/* Arrow between the steps (not after the last one) */}
          {index < steps.length - 1 && (
            <div className="text-center text-white text-lg leading-tight">&#8595;</div>
          )}
        </li>
      ))}
    </ol>
  );
}

function LandingPage({ activeForm, openForm, goToPage }) {
  // Common citizen concerns
  const concerns = [
    { title: "Public Health", text: "Hospitals, appointments and health schemes" },
    { title: "Roads & Transport", text: "Road repair, bus services and traffic" },
    { title: "Water Supply", text: "Drinking water, pipelines and sanitation" },
    { title: "Education", text: "Schools, colleges and scholarships" },
    { title: "Electricity", text: "Power supply, billing and connections" },
    { title: "Municipal Services", text: "Streets, waste collection and certificates" },
  ];

  // The three mandatory action cards
  const cards = [
    {
      title: "Add Category",
      value: "category",
      text: "Create a new category such as Public Health, Education or Transport to group departments.",
      button: "Add Category",
    },
    {
      title: "Add Department",
      value: "department",
      text: "Register a government department and link it to an existing category.",
      button: "Add Department",
    },
    {
      title: "Add Service",
      value: "service",
      text: "Add a public service offered by a department, such as appointments or certificates.",
      button: "Add Service",
    },
  ];

  return (
    <div>
      {/* HERO BANNER */}
      <section className="bg-navy text-white">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Your Voice Matters</h1>
            <p className="text-gray-100 mb-6">
              Raise your concerns, connect with the right department, and access government
              services through one citizen-friendly platform.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => goToPage("issues")}
                className="bg-white text-navy font-semibold text-sm px-5 py-2 hover:bg-gray-100"
              >
                Raise an Issue
              </button>
              <button
                onClick={() => goToPage("services")}
                className="border border-white text-white font-semibold text-sm px-5 py-2 hover:bg-navydark"
              >
                View Services
              </button>
            </div>
          </div>

          <div className="border border-white/30 p-4 bg-navydark">
            <FlowSteps />
          </div>
        </div>
      </section>

      {/* CITIZEN CONCERNS */}
      <section className="max-w-6xl mx-auto px-4 pt-8">
        <h2 className="text-xl font-bold text-navy border-b-2 border-saffron pb-2 mb-5 inline-block">
          Common Citizen Concerns
        </h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {concerns.map((item) => (
            <div key={item.title} className="bg-white border border-gray-300 border-l-4 border-l-navy p-4">
              <h3 className="font-bold text-navy">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* THREE ACTION CARDS */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-xl font-bold text-navy border-b-2 border-saffron pb-2 mb-5 inline-block">
          Administration Actions
        </h2>

        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.value}
              className={
                "bg-white border p-5 flex flex-col " +
                (activeForm === card.value ? "border-navy border-2" : "border-gray-300")
              }
            >
              <h3 className="text-lg font-bold text-navy mb-2">{card.title}</h3>
              <p className="text-sm text-gray-700 mb-4 flex-1">{card.text}</p>
              <button
                onClick={() => openForm(card.value)}
                className="bg-navy hover:bg-navydark text-white text-sm font-semibold px-4 py-2 self-start"
              >
                {card.button}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
