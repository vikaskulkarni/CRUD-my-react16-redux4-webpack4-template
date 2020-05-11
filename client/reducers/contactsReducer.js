import * as contactActions from "../actions/contactActions";

const initialState = {
  initialValues: {},
  contacts: [],
  contact: {},
  message: {},
  fields: [
    {
      col1: { title: "First Name", name: "firstName", type: "text" },
      col2: { title: "Last Name", name: "lastName", type: "text" },
    },
    {
      col1: { title: "Phone", name: "phone", type: "number" },
      col2: { title: "Email", name: "email", type: "text" },
    },
  ],
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case contactActions.GET_CONTACT_SUCCESS: {
      return {
        ...state,
        contact: action.contact,
        initialValues: action.contact,
        message: {},
      };
    }
    case contactActions.GET_CONTACTS_SUCCESS: {
      return {
        ...state,
        contacts: action.contacts,
        contact: {},
        message: {},
      };
    }
    case contactActions.CREATE_CONTACT_SUCCESS: {
      const { email } = action.contact;
      return {
        ...state,
        contact: action.contact,
        message: {
          isSuccess: true,
          title: "Create Successful!",
          content: `Contact "${email}" has been created`,
        },
      };
    }
    case contactActions.UPDATE_CONTACT_SUCCESS: {
      const contact = action.contact;
      return {
        ...state,
        contacts: state.contacts.map((item) =>
          item._id === contact._id ? contact : item
        ),
        message: {
          type: "success",
          title: "Update Successful!",
          content: `Contact "${contact.email}" has been updated`,
        },
      };
    }
    case contactActions.DELETE_CONTACT_SUCCESS: {
      const { _id, email } = action.contact;
      return {
        ...state,
        contacts: state.contacts.filter((item) => item._id !== _id),
        message: {
          isSuccess: true,
          title: "Delete Successful!",
          content: `Contact "${email}" has been deleted`,
        },
      };
    }
    case contactActions.RESET_CONTACT_MSG: {
      return {
        ...state,
        message: {},
      };
    }
    default:
      return state;
  }
};

export default contactsReducer;
