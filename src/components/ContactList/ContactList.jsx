import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";


function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const searchField = useSelector(state => state.searchQuery.name);
  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(searchField.toLowerCase())
  );
  const contactItems = visibleContacts.map((item) => {
    return (
      <li key={item.id}>
        <Contact data={item} />
      </li>
    );
  });
  return <ul className={css.contactList}>{contactItems}</ul>;
}

export default ContactList;


