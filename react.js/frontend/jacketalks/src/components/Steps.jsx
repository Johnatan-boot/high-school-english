const Steps = () => {
  const steps = [
    { number: 1, text: "Escolha seu curso" },
    { number: 2, text: "Agende sua aula" },
    { number: 3, text: "Pague com segurança" },
  ];

  return (
    <section className="steps">
      <div className="step-container">
        {steps.map((step) => (
          <div className="step" key={step.number}>
            <div className="step-number">{step.number}</div>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
