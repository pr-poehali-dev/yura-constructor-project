
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2, Move, Edit } from "lucide-react";
import { ElementContent } from "@/components/ElementContent";

interface ConstructorElementProps {
  element: { id: string; type: string; content: string };
  onRemove: (id: string) => void;
}

export const ConstructorElement = ({ 
  element, 
  onRemove 
}: ConstructorElementProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative border border-gray-200 rounded-md p-4 hover:border-gray-300 transition-all"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="absolute top-2 right-2 flex space-x-1">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 bg-white border border-gray-200 shadow-sm"
            onClick={() => setIsEditing(!isEditing)}
          >
            <Edit size={14} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 bg-white border border-gray-200 shadow-sm cursor-move"
          >
            <Move size={14} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 bg-white border border-gray-200 shadow-sm hover:bg-red-50 hover:text-red-500"
            onClick={() => onRemove(element.id)}
          >
            <Trash2 size={14} />
          </Button>
        </div>
      )}
      
      <ElementContent 
        element={element} 
        isEditing={isEditing} 
      />
    </div>
  );
};
