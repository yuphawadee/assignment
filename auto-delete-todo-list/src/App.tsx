import { useRef, useState } from "react";

function App() {
  type Item = {
    type: "Fruit" | "Vegetable";
    name: string;
  };

  const initialItems: Item[] = [
    { type: "Fruit", name: "Apple" },
    { type: "Vegetable", name: "Broccoli" },
    { type: "Vegetable", name: "Mushroom" },
    { type: "Fruit", name: "Banana" },
    { type: "Vegetable", name: "Tomato" },
    { type: "Fruit", name: "Orange" },
    { type: "Fruit", name: "Mango" },
    { type: "Fruit", name: "Pineapple" },
    { type: "Vegetable", name: "Cucumber" },
    { type: "Fruit", name: "Watermelon" },
    { type: "Vegetable", name: "Carrot" },
  ];

  const [mainList, setMainList] = useState<Item[]>(initialItems);
  const [fruitList, setFruitList] = useState<Item[]>([]);
  const [vegetableList, setVegetableList] = useState<Item[]>([]);
  const timeoutMap = useRef<Map<string, ReturnType<typeof setTimeout>>>(
    new Map()
  );
  const handleClick = (item: Item) => {
    // console.log(item.name, item.type);
    if (item.type == "Fruit") {
      setFruitList((prev) => [...prev, item]);
    } else if (item.type == "Vegetable") {
      setVegetableList((prev) => [...prev, item]);
    }
    setMainList((prev) => prev.filter((i) => i.name !== item.name));

    // ตั้งเวลาให้เด้งกลับ
    const timeoutId = setTimeout(() => {
      setMainList((prev) => [...prev, item]);
      if (item.type == "Fruit") {
        setFruitList((prev) => prev.filter((i) => i.name !== item.name));
      } else if (item.type == "Vegetable") {
        setVegetableList((prev) => prev.filter((i) => i.name !== item.name));
      }
      timeoutMap.current.delete(item.name);
    }, 5000);

    timeoutMap.current.set(item.name, timeoutId);
  };

  const returnToMainList = (item: Item) => {
    const timeoutId = timeoutMap.current.get(item.name);
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutMap.current.delete(item.name);
    }
    setMainList((prev) => [...prev, item]);
    if (item.type == "Fruit") {
      setFruitList((prev) => prev.filter((i) => i.name !== item.name));
    } else if (item.type == "Vegetable") {
      setVegetableList((prev) => prev.filter((i) => i.name !== item.name));
    }
  };

  return (
    <div className="max-w-[1100px] m-auto h-screen grid grid-cols-3 gap-5 text-center p-8">
      {/* main list */}
      <div className="flex flex-col gap-3">
        {mainList.map((item, index) => (
          <button
            onClick={() => handleClick(item)}
            key={index}
            className="border border-gray-300 gap-10 p-3"
          >
            {item.name}
          </button>
        ))}
      </div>
      {/* fruit List */}
      <div className="border border-gray-300 h-full">
        <p className="bg-gray-300 border p-3 font-semibold">Fruit</p>
        <div className="flex flex-col gap-3 p-3">
          {fruitList.map((item, index) => (
            <button
              key={index}
              onClick={() => returnToMainList(item)}
              className="border border-gray-300 gap-10 p-3"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      {/* vegetable List */}
      <div className="border border-gray-300 h-full">
        <p className="bg-gray-300 p-3 font-semibold">Vegetable</p>
        <div className="flex flex-col gap-3 p-3">
          {vegetableList.map((item, index) => (
            <button
              key={index}
              onClick={() => returnToMainList(item)}
              className="border border-gray-300 gap-10 p-3"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
