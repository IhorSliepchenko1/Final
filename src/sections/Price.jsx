
export const Price = () => {
  return (
    <>
      <section className="price">
        <div className="price__header">
          <h2 className="price__title"></h2>
          <p className="price__desc"></p>
        </div>
        <div className="price__container">
          <div className="price__item plan">
            <h3 className="plan__title"></h3>
            <div className="plan__prices">
              <h2 className="plan__subtitle"></h2>
              <span className="plan__hour"></span>
            </div>
            <p className="plan__desc"></p>

            <ul className="plan__ul">
              <li className="plan__item">
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
