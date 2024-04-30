// Notes from the Scrimba course.
// Let's see how props work in React and what they allow us to do
// Let's say we have a parent component called CardsAll and a child component called CardsSingle. The CardsAll contains various instance of the CardsSingle. We want to be able to "customize" each CardsSingle instance with different data. This is where props come in.
// Props are a way to create and expose properties in each CardsSingle instance, which can then be used within the component. This way, we can have different data for each CardsSingle instance.
// In Layman's terms: we send properties from instances to

// CardsAll.js
function CardsAll() {
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
// By simply passing a props parameter and then using it with {} interpolation.
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
