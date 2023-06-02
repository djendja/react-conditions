import PackingItem from "./packing-item/packingItem";

export default function PackingList() {
    return (
      <section>
        <h2>Djendja's Packing List</h2>
        <ul>
          <PackingItem 
            isPacked={true} 
            name="Space suit" 
          />
          <PackingItem 
            isPacked={true} 
            name="Invisible cloak" 
          />
          <PackingItem 
            isPacked={false} 
            name="Cheese" 
          />
        </ul>
      </section>
    );
  }