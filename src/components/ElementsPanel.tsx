
import { 
  Type, 
  Image, 
  Square, 
  Layout, 
  Button as ButtonIcon 
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ElementsPanelProps {
  onAddElement: (type: string) => void;
}

export const ElementsPanel = ({ onAddElement }: ElementsPanelProps) => {
  const elements = [
    { name: "Текст", icon: <Type />, type: "text" },
    { name: "Изображение", icon: <Image />, type: "image" },
    { name: "Блок", icon: <Square />, type: "block" },
    { name: "Колонки", icon: <Layout />, type: "columns" },
    { name: "Кнопка", icon: <ButtonIcon />, type: "button" },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-3 flex flex-col overflow-y-auto">
      <h2 className="font-medium text-gray-700 mb-3">Элементы</h2>
      <div className="grid grid-cols-2 gap-2">
        {elements.map((element) => (
          <Button
            key={element.type}
            variant="outline"
            className="h-24 flex flex-col justify-center items-center gap-2 p-2"
            onClick={() => onAddElement(element.type)}
          >
            {element.icon}
            <span className="text-xs">{element.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};
