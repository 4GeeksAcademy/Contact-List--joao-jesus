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
                    console.log(resAsJson)
                    setStore({ contactList: [...resAsJson.contacts] });
                })
                .catch((error) => {
                    console.error("Error fetching contacts:", error);
                });
            },
            createContact: (formData) => {
                fetch(`https://playground.4geeks.com/contact/agendas/${SLUG}/contacts`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                })
                .then((response) => response.json())
                .then((resAsJson) => {
                    setStore({ contactList: [...getStore().contactList, resAsJson] });
                })
                .catch((error) => {
                    console.error("Error creating contact:", error);
                });
            },

           /* editContact:() => {
                
                
            },*/

            deleteContact: (id) => {
                console.log(id)
                fetch(`https://playground.4geeks.com/contact/agendas/${SLUG}/contacts/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }).then((response) => response.json())
                .then((resAsJson) => {
                    console.log("Deleted contact:", resAsJson);
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
