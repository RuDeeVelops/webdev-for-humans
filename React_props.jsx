// Notes from the Scrimba course.

// React allows us to design our components in a way that they can be reused and customized with different data. This is where props come in.
// The CardsAll contains various instance of the CardsSingle. We want to be able to "customize" each CardsSingle instance with different data. This is where props come in.
// Props are a way to create and expose properties in each CardsSingle instance, which can then be used within the component. This way, we can have different data for each CardsSingle instance.
// In Layman's terms: we send properties from instances to the origin component.
// IMPORTANT CONCEPT, DESIGN FROM PROPERTIES! So we can design components first by writing properties we wanna use and then compose the component with those properties.

// CardsAll.js
function CardsAll() {
  // we write properties as custom HTML attributes
  return (
    <div className="contacts">
      <CardsSingle img="./images/mr-whiskerson.png" name="Mr. Whiskerson" phone="(212) 555-1234" email="mr.whiskaz@catnap.meow" />
      <CardsSingle img="./images/fluffykins.png" name="Fluffykins" phone="(212) 555-2345" email="fluff@me.com" />
      <CardsSingle img="./images/felix.png" name="Felix" phone="(212) 555-4567" email="thecat@hotmail.com" />
      <CardsSingle img="./images/pumpkin.png" name="Pumpkin" phone="(0800) CAT KING" email="pumpkin@scrimba.com" />
    </div>
  );
}

// How does the CardsSingle component "recieves" props?
// By simply passing a props parameter and then using it with {} interpolation (to access JS).
// The props is simply an object that contains the properties we created.

// CardsSingle.js
function CardsSingle(props) {
  return (
    <div className="contact-card">
      <img src={props.img} />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src="./images/phone-icon.png" />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src="./images/mail-icon.png" />
        <p>{props.email}</p>
      </div>
    </div>
  );
}

// We can also destructure the props object to make the code cleaner.

// CardsSingle.js
function CardsSingle({ img, name, phone, email }) {
  return (
    <div className="contact-card">
      <img src={img} />
      <h3>{name}</h3>
      <div className="info-group">
        <img src="./images/phone-icon.png" />
        <p>{phone}</p>
      </div>
      <div className="info-group">
        <img src="./images/mail-icon.png" />
        <p>{email}</p>
      </div>
    </div>
  );
}
