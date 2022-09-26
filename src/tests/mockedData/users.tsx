export const users: any = {
  data: [],
  gender: "",
  picture: {
    thumbnail: "",
  },
  name: {
    first: "",
    last: "",
  },
  city: "",
};
for (let i = 0; i <= 20; i++) {
  users.data.push({
    gender: "",
    picture: { thumbnail: "" },
    name: {
      first: "",
      last: "",
    },
    location: {
      city: "",
    },
  });
}

export const filteredUser: any = {
  data: [],
  gender: "male",
  picture: {
    thumbnail: "",
  },
  name: {
    first: "Patryk",
    last: "Tomczyk",
  },
  city: "New york",
};

export const filteredResults: any = [
  {
    gender: "male",
    name: {
      title: "Monsieur",
      first: "Miguel",
      last: "Caron",
    },
    location: {
      street: {
        number: 8138,
        name: "Rue de L'Abbaye",
      },
      city: "Oberlangenegg",
      state: "Zürich",
      country: "Switzerland",
      postcode: 6099,
      coordinates: {
        latitude: "-57.9565",
        longitude: "-78.4947",
      },
      timezone: {
        offset: "-10:00",
        description: "Hawaii",
      },
    },
    email: "miguel.caron@example.com",
    login: {
      uuid: "a21d8af6-c1dd-4815-9d83-9b97977da039",
      username: "orangeduck644",
      password: "sphinx",
      salt: "Xh1ZFhwe",
      md5: "0026248edd38d1b09536c1b3c831e118",
      sha1: "1de13d8f98b416a7de081bd9844ef6969d248576",
      sha256:
        "93ec76b8cadfbe8483e7c642eb37e0a7a140aed0f7d567ab3158d1ea31db1cf9",
    },
    dob: {
      date: "1982-10-10T03:32:01.573Z",
      age: 40,
    },
    registered: {
      date: "2012-11-04T13:00:56.230Z",
      age: 10,
    },
    phone: "077 486 02 66",
    cell: "079 204 36 45",
    id: {
      name: "AVS",
      value: "756.7724.8685.98",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/49.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/49.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/49.jpg",
    },
    nat: "CH",
  },
];
