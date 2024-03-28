const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contact: {
                full_name: null,
                address: null,
                phone: null,
                email: null,
                agenda_slug: "ed1_agenda"
            },
            contactList: [],
            agenda_slug: "ed1_agenda"
        },
        actions: {
            addContactList: (arr) => {
                const store = getStore();
                setStore({ contactList: [...store.contactList, arr] });
                getActions().changeColor(0, "green");
            },
            loadSomeData: () => {
                // Placeholder function for loading data asynchronously
                // fetch().then().then(data => setStore({ "foo": data.bar }))
            },
            addContact: (name, email, phone, address) => {
                setStore(prevState => ({
                    contact: {
                        ...prevState.contact,
                        full_name: name,
                        email: email,
                        phone: phone,
                        address: address
                    }
                }));
            },
            createContact: () => {
                const store = getStore();
                fetch('https://playground.4geeks.com/api/fake/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(store.contact),
                })
                .then(response => response.json())
                .then(resAsJson => {
                    console.log(resAsJson);
                    // Update store with the newly created contact data if needed
                    // setStore({ contact: resAsJson });
                    return resAsJson.id;
                })
                .catch(error => {
                    console.error('Error creating contact:', error);
                });
            },

			showContacts: (contactId) => {
				const store = getStore();
				fetch(`https://playground.4geeks.com/api/fake/${contactId}`, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					},
				})
				.then(res => res.json())
				.then(resAsJson => {
					console.log(resAsJson);
				})
				.catch(error => {
					console.log(error);
				});
			},
			deleteContacts: (contactId) => {
				const store = getStore();
				fetch(`https://playground.4geeks.com/api/fake/${contactId}`, {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json'
					},
				})
				.then(res => res.json())
				.then(resAsJson => {
					console.log(resAsJson);
					getAllContacts()
				})
				.catch(error => {
					console.log(error);
				});
			},
            changeColor: (index, color) => {
                const store = getStore();
                const demo = store.contact.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });
                setStore({ contact: demo });
            }
        }
    };
};

export default getState;

