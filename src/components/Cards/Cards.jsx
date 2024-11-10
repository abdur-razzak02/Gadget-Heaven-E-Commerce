import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Cards = () => {
  const allCards = useLoaderData();
  const [showAll, setShowAll ] = useState(false)
  const [category, setCategory] = useState([]);
  const [data, setData] = useState(allCards);

  useEffect(() => {
    fetch("Categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  // show category wise data
  const showCategoriesData = (cate) => {
    let showCategory = allCards.filter(
      (category) => category.category === cate
    );
    setData(showCategory);
    if (cate === 'All Products') {
      setData(allCards);
    }
  };

  // show all data 
  const handleShowAll = () => {
    setShowAll(true)
    document.querySelector('.showAllBtn').classList.add('hidden')
  }

  return (
    <div className="container mx-auto px-5 lg:px-0 mt-20 sm:mt-40 md:mt-52 pt-0">
      <h1 className="text-2xl sm:text-4xl font-bold text-center py-5 sm:py-7 lg:py-10">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-4 sm:gap-5">
        <div className="sm:col-span-1 w-full ">
          <Tabs className='bg-white p-5 mb-5 shadow rounded-xl'>
            <TabList className='border-none'>
              {category.map((category) => (
                <Tab
                  key={category.id}
                  onClick={() => showCategoriesData(category.category)}
                  className="hover:bg-[#9538E2] bg-gray-100 hover:text-white mt-3 px-5 py-2 w-full rounded shadow cursor-pointer"
                >
                  {category.category}
                </Tab>
              ))}
            </TabList>
          </Tabs>
        </div>
        <div className="col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {
            data.length > 0 ?
              (showAll ? data : data.slice(0,9)).map((card) => (
              <Card card={card} key={card.product_id}></Card>
            )) : <p className="text-5xl font-bold text-red-500 col-span-3">No Data found</p>
          }
          {
            data.length > 9 && <button onClick={()=> handleShowAll()} className="bg-[#9538E2] py-2 px-5 rounded w-32 h-12 text-white font-semibold showAllBtn"> Show All</button>
          }
        </div>
      </div>
    </div>
  );
};

export default Cards;
