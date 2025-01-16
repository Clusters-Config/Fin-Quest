


const Facilitators = () => {
  const networkData = [
    { "name": "Bonnie Jenson", "domain": "Financial Analyst" },
    { "name": "John Doe", "domain": "Investment Banker" },
    { "name": "Jane Doe", "domain": "Risk Manager" },
    { "name": "John Smith", "domain": "Financial Software Developer" },
    { "name": "Jane Smith", "domain": "Quantitative Analyst" },
    { "name": "John Doe", "domain": "Investment Banker" }

  ];

  return (
    <>
      <div className="container mx-16 px-16 flex gap-5 flex-wrap justify-evenly">
        {networkData && networkData.map((person, index) => (
          <div key={index} className="w-full m-2 md:w-1/2 lg:w-1/4 p-4">
            <h3>{person.name}</h3>
            <p>{person.domain}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Facilitators;