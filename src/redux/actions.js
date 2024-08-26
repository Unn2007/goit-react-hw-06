import { nanoid } from "nanoid";

export const addContact = (name,number) => {
  return {
    type: "contacts/addContacts",
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: "contacts/deleteContact",
    payload: contactId,
  };
};



export const setSearchQuery = name => {
  return {
    type: "SearchQuery/setSearchQuery",
    payload: name,
  };
};