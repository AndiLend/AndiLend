import "./FoundingForm.css";

const FoundingForm = () => {
  return (
    <div className="container-founding">
      <form className="space-y-6 form-founding" action="#" method="POST">
        <div className="form-login-input">
          <div>
            <label htmlFor="wallet" className="text-sm font-medium text-gray-700">
              Connect your wallet
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="wallet"
                id="wallet"
                className="block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Connect your wallet"
              />
            </div>
          </div>
          <div>
            <label htmlFor="national-identity" className="text-sm font-medium text-gray-700">
              Amount to get in USDT
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="national-identity"
                id="national-identity"
                className="block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="500$"
              />
            </div>
          </div>
          <div>
            <label htmlFor="national-identity" className="text-sm font-medium text-gray-700">
              Estimated months of payment
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="national-identity"
                id="national-identity"
                className="block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="3"
              />
            </div>
          </div>
          <label htmlFor="national-identity" className="text-sm font-medium text-gray-700">
            Your Interest estimated is: 5.1%
          </label>
        </div>
        <div className="form-submit">
          <button
            type="submit"
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200"
          >
            Get Funding
          </button>
        </div>
      </form>
    </div>
  );
};

export default FoundingForm;
