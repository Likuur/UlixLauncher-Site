import React from 'react';
import { Code2 } from 'lucide-react';

const OpenSourceInfo = () => {
  return (
    <div className="text-center mb-16 animate-fade-in">
      <div className="inline-flex items-center justify-center gap-2 bg-launcher-800/50 px-6 py-3 rounded-full border border-launcher-700">
        <Code2 className="w-5 h-5 text-launcher-100" />
        <span className="text-launcher-100 font-pixel">Open Source Project</span>
      </div>
      <p className="mt-4 text-launcher-200 max-w-2xl mx-auto">
        UlixLauncher - это проект с открытым исходным кодом, разрабатываемый сообществом для сообщества.
        Каждый может внести свой вклад в развитие лаунчера.
      </p>
    </div>
  );
};

export default OpenSourceInfo;