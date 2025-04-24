
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Image, Type, Layout, Square } from "lucide-react";

interface ElementContentProps {
  element: { id: string; type: string; content: string };
  isEditing: boolean;
}

export const ElementContent = ({ 
  element, 
  isEditing 
}: ElementContentProps) => {
  switch (element.type) {
    case "text":
      return isEditing ? (
        <Input defaultValue={element.content} />
      ) : (
        <p>{element.content}</p>
      );
    
    case "image":
      return (
        <div className="flex items-center justify-center h-40 bg-gray-50 border border-dashed border-gray-300 rounded-md">
          <div className="text-center">
            <Image className="mx-auto h-10 w-10 text-gray-400" />
            <p className="mt-2 text-sm text-gray-500">Изображение</p>
          </div>
        </div>
      );
    
    case "button":
      return isEditing ? (
        <Input defaultValue="Кнопка" className="mb-2" />
      ) : (
        <Button>Кнопка</Button>
      );
    
    case "block":
      return (
        <div className="h-24 bg-gray-50 flex items-center justify-center border border-dashed border-gray-300 rounded-md">
          <Square className="h-6 w-6 text-gray-400" />
          <span className="ml-2 text-gray-500">Блок</span>
        </div>
      );
    
    case "columns":
      return (
        <div className="grid grid-cols-2 gap-4">
          <div className="h-24 bg-gray-50 flex items-center justify-center border border-dashed border-gray-300 rounded-md">
            <span className="text-gray-500">Колонка 1</span>
          </div>
          <div className="h-24 bg-gray-50 flex items-center justify-center border border-dashed border-gray-300 rounded-md">
            <span className="text-gray-500">Колонка 2</span>
          </div>
        </div>
      );
    
    default:
      return <div>Неизвестный элемент</div>;
  }
};
