export const data = {
  orgA: {
    leads: [
      { id: 1, name: "Ravi", phone: "9999", status: "New" },
      { id: 2, name: "Aman", phone: "8888", status: "Contacted" },
    ],
    calls: [
      {
        id: 1,
        lead: "Ravi",
        time: "10:00",
        duration: "2m",
        outcome: "Interested",
      },
    ],
  },

  orgB: {
    leads: [{ id: 3, name: "Neha", phone: "7777", status: "New" }],
    calls: [],
  },
};
