const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contact: {
                name: "",
                phone: "",
                email: "",
                address: ""
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
                        name: name,
                        phone: phone,
                        email: email,
                        address: address
                    }
                }));
            },
            createContact: () => {
                const store = getStore();
                fetch('https://playground.4geeks.com/contact/agendas/ed1_agenda', {
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
				fetch(`https://playground.4geeks.com/agendas/${contactId}`, {
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
				fetch(`https://playground.4geeks.com/agendas/{}${contactId}`, {
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
            
        }
    };
};

export default getState;

