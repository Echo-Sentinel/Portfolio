function FeatureCards() {
  const cards = [
    { icon: "bi-briefcase", title: "Featured title" },
    { icon: "bi-buildings", title: "Featured title" },
    { icon: "bi-people", title: "Featured title" },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="row text-center">
          {cards.map((card, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div>
                <div
                  className="bg-primary text-white rounded-circle p-3 mb-3 mx-auto"
                  style={{ width: "50px" }}
                >
                  <i className={`bi ${card.icon}`}></i>
                </div>
                <h5 className="fw-bold">{card.title}</h5>
                <p className="text-muted">
                  Paragraph of text beneath the heading to explain the heading.
                  We'll add onto it with another sentence.
                </p>
                <a href="#" className="text-primary text-decoration-none">
                  Call to action →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureCards;
