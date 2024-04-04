const SLUG = "johny-agenda";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contactList: [
        // {
        // 	id:"",
        // 	name: "",
        // 	email: "",
        // 	phone: "",
        // 	address: "",
        // },
      ],
    },
    actions: {
      getContacts: () => {
        fetch(
          `https://playground.4geeks.com/contact/agendas/${SLUG}/contacts`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((response) => response.json())
          .then((resAsJson) => {
            console.log("resAsJson");
            console.log(resAsJson);
            // setStore(resAsJson);

            setStore({ contactList: [...resAsJson.contacts] });
          })
          .catch((error) => {
            console.error("Error creating contact:", error);
          });
      },
      createContact: (formData) => {
        const store = getStore();
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
            setStore({ contactList: [...store.contactList, resAsJson] });

            // return resAsJson.id;
          })
          .catch((error) => {
            console.error("Error creating contact:", error);
          });
      },
      deleteContact: (id) => {
        const store = getStore();

        fetch(
          `https://playground.4geeks.com/contact/agendas/${SLUG}/contacts/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((response) => response.json())
          .then((resAsJson) => {
            console.log("resAsJson");
            console.log(resAsJson);
            //setStore({ contactList: [...store.contactList, resAsJson] });

            // return resAsJson.id;
          })
          .catch((error) => {
            console.error("Error deleting contact:", error);
          });
      },

      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
     /* loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      /*changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },*/
  };
};

export default getState;