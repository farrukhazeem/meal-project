import './App.css';
import Card from './components/Card';
import Header from './components/Header/Header';
import Heading from './components/Header/Heading';
import TabBar from './components/Tabs/TabBar';
import React, { useEffect, useState } from 'react';
import RecipesService from './services/recipesService';
import Modal from './components/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const tabsList = ["All Meals", "Week 1", "Week 2", "Week 3", "Week 4"];

  const [recipes, setRecipes] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(tabsList[0]);

  const [weeks, setWeeks] = useState({
    "Week 1": [],
    "Week 2": [],
    "Week 3": [],
    "Week 4": []
  });

  const fetchRecipes = async () => {
    try {
      const data = await RecipesService.getAllRecipes();
      setRecipes(data.recipes);
    } catch (err) {
      toast.error("Failed to fetch recipes!"); 
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleOnSelectItem = (cardId) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(cardId)
        ? prevSelected.filter((id) => id !== cardId)
        : [...prevSelected, cardId]
    );
  };

  const handleAddToWeek = () => {
    setIsModalOpen(true);
  };

  const handleSaveToWeek = (week) => {
    const itemsAlreadyAdded = Object.values(weeks).flat();
  
    if (selectedItems.some(item => itemsAlreadyAdded.includes(item))) {
      toast.error("Some items are already added to another week and cannot be added again.");
      setSelectedItems([]);
      setIsModalOpen(false);
      return;
    }
  
    setWeeks((prevWeeks) => ({
      ...prevWeeks,
      [week]: [...prevWeeks[week], ...selectedItems], // Preserve current items in the week
    }));
  
    toast.success(`Items successfully added to ${week}!`);
  
    setSelectedItems([]);
    setIsModalOpen(false); 
  };
  
  const handleDeleteItem = (itemId, week) => {
    const updatedWeeks = { ...weeks };
  
   
    updatedWeeks[week] = updatedWeeks[week].filter(item => item !== itemId);
  
    setWeeks(updatedWeeks);
    toast.success("Item successfully removed.");
  };
  

  const getTabContent = () => {
    if (activeTab === "All Meals") {
      return recipes;
    }
    return recipes.filter(recipie => weeks[activeTab].includes(recipie.id));
  };

  const isItemDisabled = (itemId) => {
    return Object.values(weeks).some(weekItems => weekItems.includes(itemId));
  };

  return (
    <>
      <Header />
      <div className="container mx-auto w-4/5">
        <Heading />
      </div>
      <TabBar
        tabsList={tabsList}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedItems={selectedItems}
        handleAddToWeek={handleAddToWeek}
      />
      <div className="container mx-auto w-4/5">
        {recipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
            {getTabContent().map((item) => (
         <Card
         key={item.id}
         title={item.name}
         description={item.instructions}
         imgUrl={item.image}
         mealType={item.mealType}
         cuisine={item.cuisine}
         rating={item.rating}
         isSelected={selectedItems.includes(item.id)}  
         onSelectItem={() => handleOnSelectItem(item.id)}  
         showDeleteIcon={activeTab !== "All Meals"}  
         onDeleteItem={() => handleDeleteItem(item.id, activeTab)} 
         />
       
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No items available.</p>
        )}

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleSaveToWeek}
          selectedItems={selectedItems}
          isItemDisabled={isItemDisabled}
        />
      </div>

      <ToastContainer />
    </>
  );
}
