export default function TabBar({ tabsList, activeTab, setActiveTab, selectedItems, handleAddToWeek }) {
  const disableAddToWeek = selectedItems.length === 0 || activeTab !== "All Meals";

  return (
    <div className="bg-white">
      <div className="container mx-auto w-4/5 mt-6 mb-10 h-[100px] text-black z-10 relative">
        <ul className="flex flex-row items-center font-medium h-full px-14 text-center">
          {tabsList.map((tab) => (
            <li
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              className={`mx-4 pb-2 cursor-pointer basis-1/6 ${
                activeTab === tab ? "active-tab text-blue-500 font-bold" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </li>
          ))}
          <button
            type="button"
            disabled={disableAddToWeek} 
            className={`text-white bg-[#004370] hover:bg-blue-800 font-medium rounded-sm text-sm px-5 py-2.5 ml-auto mb-2 basis-1/6 ${
              disableAddToWeek ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleAddToWeek}
          >
            Add to Week
          </button>
        </ul>
      </div>
    </div>
  );
}
