const usePayments = () => {
  const paymentsData = [
    {
      date: new Date().toLocaleDateString("en-GB"),
      amount: "108.00",
      interest: "5.1",
      total: "118.90",
      payDay: "22/04/2024",
      status: "Pending",
      actions: "pending",
    },
    {
      date: "24/04/2024",
      amount: "108.00",
      interest: "5.1",
      total: "118.90",
      payDay: "22/04/2024",
      status: "Payed",
      actions: "payed",
    },
    {
      date: "24/04/2024",
      amount: "108.00",
      interest: "5.1",
      total: "118.90",
      payDay: "22/04/2024",
      status: "Pending",
      actions: "pending",
    },
  ];
  return { paymentsData };
};

export default usePayments;
