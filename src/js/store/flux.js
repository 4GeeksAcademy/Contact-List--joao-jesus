const SLUG = "johny_agenda";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contactList: [],
    },
    actions: {
      getContacts: () => {
        fetch(`https://playground.4geeks.com/contact/agendas/${SLUG}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())

          .then((resAsJson) => {
            console.log(resAsJson);

            const updatedState = {
              ...getStore(),
              contactList: [...resAsJson.contacts],
            };
            setStore(updatedState);
          })
          .catch((error) => {
            console.error("Error fetching contacts:", error);
          });
      },
      createContact: (formData) => {
        fetch(
          `https://playground.4geeks.com/contact/agendas/${SLUG}/contacts`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        )
          .then((response) => response.json())
          .then((resAsJson) => {
            const updatedState = {
              ...getStore(),
              contactList: [...getStore().contactList, resAsJson],
            };
            setStore(updatedState);
          })
          .catch((error) => {
            console.error("Error creating contact:", error);
          });
      },

      updateContact: (id, updatedContactData) => {
        fetch(
          `https://playground.4geeks.com/contact/agendas/${SLUG}/contacts/${id}`,
          {
            method: "PUT", // Use PUT method for full updates, or PATCH for partial updates
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedContactData), // Send updated contact data in the request body
          }
        )
          .then((response) => response.json())
          .then((resAsJson) => {
            console.log("Edited contact:", resAsJson);
            return getActions().getContacts(); // Refresh contact list after editing
          })
          .then(() => {
            console.log("Contacts refreshed after editing.");
          })
          .catch((error) => {
            console.error("Error editing contact:", error);
          });
      },

      deleteContact: (id) => {
        fetch(
          `https://playground.4geeks.com/contact/agendas/${SLUG}/contacts/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((response) => {
            if (response.ok !== true) {
              throw "error on deleting";
            }
          })
          .then((resAsJson) => {
            console.log("Deleted contact:", resAsJson);
            return getActions().getContacts(); // Return the promise chain
          })
          .then(() => {
            console.log("Contacts refreshed after deletion.");
          })
          .catch((error) => {
            console.error("Error deleting contact:", error);
          });
      },

      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
    }, // Closing bracket for actions object
  };
};

export default getState;