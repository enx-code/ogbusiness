const services = [
  "Cocktails made fresh at your party",
  "Mocktails, spritzes, shots, long drinks and classics",
  "Friendly bar team who serve, shake and keep the drinks moving",
];

const packages = [
  {
    name: "House Party",
    detail:
      "Compact setup for birthdays, flat parties and celebrations at home.",
    drinks: "2 bartenders, fast menu, tidy service",
  },
  {
    name: "Private Event",
    detail:
      "A polished bar station for engagements, graduations and office socials.",
    drinks: "Custom menu, garnish prep, glass service",
  },
  {
    name: "Big Night",
    detail:
      "More hands behind the bar for busy rooms, late finishes and bigger crowds.",
    drinks: "High-volume cocktails, mixers, queue control",
  },
];

const steps = [
  "Tell us the party date, location and guest count.",
  "You provide the alcohol, mixers, ice and glasses.",
  "OG arrives, sets up, serves and shakes the drinks.",
];

const Home = () => {
  const cardImage = `${import.meta.env.BASE_URL}ogbar.jpg`;

  return (
    <main className="og-site" id="top">
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(9, 13, 17, 0.72) 0%, rgba(9, 13, 17, 0.32) 32%, rgba(9, 13, 17, 0) 58%), url(${cardImage})`,
        }}
      >
        <div className="hero-content">
          <p className="eyebrow">Mobile cocktail service</p>
          <h1>OG</h1>
          <p className="tagline">You supply, We shake</p>
          <p className="hero-copy">
            Hosting a party? Bring the drinks and OG will bring the bar energy:
            cocktails, mocktails, classics and smooth service from first pour to
            last call.
          </p>
          <div className="hero-actions" aria-label="Contact actions">
            <a className="primary-button" href="tel:+447590261585">
              Call 07590261585
            </a>
            <a
              className="secondary-button"
              href="https://wa.me/447590261585"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="intro-band" id="services">
        <div className="section-heading">
          <p className="eyebrow">What OG does</p>
          <h2>Party drinks without running the bar yourself.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service}>
              <span aria-hidden="true">
                <img src={`${import.meta.env.BASE_URL}zagsIcon.svg`} alt="" />
              </span>
              <p>{service}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div>
          <p className="eyebrow">How it works</p>
          <h2>You buy the bottles. OG handles the shake, pour and serve.</h2>
        </div>
        <ol className="steps-list">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="packages-section" id="packages">
        <div className="section-heading">
          <p className="eyebrow">Event options</p>
          <h2>Choose the setup that fits your night.</h2>
        </div>
        <div className="package-grid">
          {packages.map((item) => (
            <article className="package-card" key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.detail}</p>
              <span>{item.drinks}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="booking-section" id="booking">
        <div>
          <p className="eyebrow">Book OG</p>
          <h2>Ready for your party bar team?</h2>
          <p>
            Send the date, area, guest count and the kind of drinks you want. OG
            will help shape a simple drinks list for the event.
          </p>
        </div>
        <div className="booking-actions">
          <a className="primary-button" href="tel:+447590261585">
            07590261585
          </a>
          <a
            className="secondary-button"
            href="https://wa.me/447590261585?text=Hi%20OG%2C%20I%20want%20to%20book%20cocktail%20service%20for%20a%20party."
            target="_blank"
            rel="noreferrer"
          >
            Message on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
