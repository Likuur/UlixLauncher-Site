import React from 'react';

interface VersionInfoProps {
  version: string;
  status: "online" | "offline";
}

const VersionInfo = ({ version, status }: VersionInfoProps) => {
  return (
    <div className="text-launcher-100 flex flex-col items-center gap-2 animate-fade-in">
      <div className="text-sm">Версия: {version}</div>
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${status === "online" ? "bg-green-500" : "bg-red-500"}`} />
        <span className="text-sm">{status === "online" ? "Онлайн" : "Оффлайн"}</span>
      </div>
    </div>
  );
};

export default VersionInfo;