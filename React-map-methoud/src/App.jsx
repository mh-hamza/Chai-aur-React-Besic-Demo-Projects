import React from 'react';
import Card from './Card';
const cardData = [
  {
    src: 'https://images.unsplash.com/photo-1560790671-b76ca4de55ef?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Flower',
    description: "Flower is a simple tool to generate and manipulate files",
    id : 1
  },
  {
    src: 'https://images.unsplash.com/photo-1491918434088-6a06cd4254ef?q=80&w=1280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Flower',
    description: "Flower is a simple tool to generate and manipulate files",
    id : 2
  },
  {
    src: 'https://images.unsplash.com/photo-1560790671-b76ca4de55ef?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Flower',
    description: "Flower is a simple tool to generate and manipulate files",
    id: 3
  },
  {
    src: 'https://images.unsplash.com/photo-1491918434088-6a06cd4254ef?q=80&w=1280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Flower',
    description: "Flower is a simple tool to generate and manipulate files",
    id: 4
  },

]
function App() {
  let foodItem = ["Fruit", "vegetables", "Meat", "Fish", "Bread", "Potato"];
  return (
    <>
      <div className="container">
        <h1>Food Items</h1>
        <ul>
          {foodItem.map((items) => {
            return <li key={items}>{items}</li> ;
          })}
        </ul>
        <h1>Card Items</h1>
        <div className='card-container'>
          {
            cardData.map((items)=>{
              return (
                <Card 
                key={items.id}
                src={items.src}
                title={items.title}
                description={items.description}
                />
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;
