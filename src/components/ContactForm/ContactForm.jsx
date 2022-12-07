import { Form, Formik, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';

const initialValue = { name: '', phone: '' };
const ContactSchema = object({
  name: string()
    .min(3, ({ min }) => `Name must be at least ${min} characters`)
    .max(30, ({ max }) => `Name must be at most ${max} characters`)
    .matches(
      "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .required('Name is a required'),
  phone: string()
    .matches(
      // FIXME: Виправити регулярний вираз
      '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Phone is a required'),
});

// TODO: Зробити окремий компонент для Input
export default function ContactForm({ onSubmit }) {
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Name
          <Field
            type="text"
            name="name"
            placeholder="Name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <ErrorMessage name="name" />
        </label>
        <label>
          Phone number
          <Field
            type="tel"
            name="phone"
            placeholder="Phone number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <ErrorMessage name="phone" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
