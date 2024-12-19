import React from 'react';
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface LauncherButtonProps {
  onClick: () => void;
  isLoading?: boolean;
}

const LauncherButton = ({ onClick, isLoading = false }: LauncherButtonProps) => {
  return (
    <Button
      className="w-64 h-16 bg-launcher-500 hover:bg-launcher-400 text-white text-xl font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
      onClick={onClick}
      disabled={isLoading}
    >
      <Play className="w-6 h-6" />
      {isLoading ? "Загрузка..." : "Играть"}
    </Button>
  );
};

export default LauncherButton;