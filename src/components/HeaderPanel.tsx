
import { Button } from "@/components/ui/button";
import { Save, Download, Settings } from "lucide-react";

export const HeaderPanel = () => {
  return (
    <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-semibold text-primary">Конструктор</h1>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm" className="gap-1">
          <Settings size={16} />
          Настройки
        </Button>
        <Button variant="outline" size="sm" className="gap-1">
          <Download size={16} />
          Экспорт
        </Button>
        <Button size="sm" className="gap-1">
          <Save size={16} />
          Сохранить
        </Button>
      </div>
    </header>
  );
};
