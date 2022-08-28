import "./ContactForm.css"
import Loader from "./Loader";
import { useForm } from "../hooks/useForm";
import Message from "./Message";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "'Name' is required";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "'Name' only words and spaces";
  }

  if (!form.email.trim()) {
    errors.email = "'Email' is required";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "'Email' not valid";
  }

  if (!form.subject.trim()) {
    errors.subject = "'Subject' is required";
  }

  if (!form.comments.trim()) {
    errors.comments = "'Comments' is required";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments =
      "'Coments' max 255 characters";
  }

  return errors;
};

let styles = {
  fontWeight: "bold",
  color: "#dc3545",
};

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);
  return (
    <div className="contact-form">
      <h2 className="h2-contact">Contact form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.name}
          required
        />
        {errors.name && <p style={styles}>{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Your email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.email}
          required
        />
        {errors.email && <p style={styles}>{errors.email}</p>}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.subject}
          required
        />
        {errors.subject && <p style={styles}>{errors.subject}</p>}
        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Comments"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.comments}
          required
        />
        {errors.comments && <p style={styles}>{errors.comments}</p>}
        <input type="submit" value="Send" />
      </form>
      {loading && <Loader/>}
      {response&&<Message msg="Message sent successfully" bgColor="#198754"/>}
    </div>
  );
};

export default ContactForm;
