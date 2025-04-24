
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ConstructorCanvas } from "@/components/ConstructorCanvas";
import { ElementsPanel } from "@/components/ElementsPanel";
import { HeaderPanel } from "@/components/HeaderPanel";

const Index = () => {
  const [elements, setElements] = useState<Array<{id: string, type: string, content: string}>>([]);

  const addElement = (type: string) => {
    const newElement = {
      id: `element-${Date.now()}`,
      type,
      content: type === 'text' ? 'Текстовый блок' : ''
    };
    setElements([...elements, newElement]);
  };

  const removeElement = (id: string) => {
    setElements(elements.filter(element => element.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <HeaderPanel />
      <div className="flex flex-1 overflow-hidden">
        <ElementsPanel onAddElement={addElement} />
        <ConstructorCanvas 
          elements={elements} 
          onRemoveElement={removeElement} 
        />
      </div>
    </div>
  );
};

export default Index;
