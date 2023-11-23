import "./Form.scss";

export default function Form() {
  return (
    <div className="contact-form">
      <h3>Contact form</h3>
      <form
        method="POST"
        action=""
      >
        <div>
          <label>Name</label>
          <input type="text" name="name" placeholder="Name" />
        </div>

        <div>
          <label>Email</label>
          <input type="text" name="email" placeholder="Email" />
        </div>

        <div>
          <label>Message</label>
          <textarea name="message" placeholder="Message"></textarea>
        </div>

        <button type="submit">Send message</button>
      </form>
    </div>
  );
}
