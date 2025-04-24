
import { ConstructorElement } from "@/components/ConstructorElement";

interface ConstructorCanvasProps {
  elements: Array<{id: string, type: string, content: string}>;
  onRemoveElement: (id: string) => void;
}

export const ConstructorCanvas = ({ 
  elements, 
  onRemoveElement 
}: ConstructorCanvasProps) => {
  return (
    <div className="flex-1 p-8 overflow-y-auto bg-gray-100">
      <div className="bg-white border border-gray-200 rounded-lg min-h-[80vh] p-6 shadow-sm">
        {elements.length === 0 ? (
          <div className="h-full flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 p-10 rounded-md">
            Добавьте элементы из панели слева
          </div>
        ) : (
          <div className="space-y-4">
            {elements.map((element) => (
              <ConstructorElement
                key={element.id}
                element={element}
                onRemove={onRemoveElement}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
