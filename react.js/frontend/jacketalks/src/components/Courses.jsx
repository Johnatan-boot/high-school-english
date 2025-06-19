const Courses = () => {
  const courses = [
    {
      title: "Inglês para Iniciantes",
      description: "Comece do zero com aulas práticas.",
      price: "R$ 49,90"
    },
    {
      title: "Inglês Intermediário",
      description: "Aprenda conversação e gramática.",
      price: "R$ 69,90"
    },
    {
      title: "Inglês Avançado",
      description: "Desenvolva fluência total.",
      price: "R$ 89,90"
    }
  ];

  return (
    <section className="courses">
      {courses.map((course, index) => (
        <div className="course-card" key={index}>
          <div className="course-content">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <div className="price">{course.price}</div>
          </div>
          <button>Ver Curso</button>
        </div>
      ))}
    </section>
  );
};

export default Courses;
