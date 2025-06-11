import React from "react";

interface StaticInstallPromptProps {
  className?: string;
}

export function StaticInstallPrompt({ className }: StaticInstallPromptProps) {
  return (
    <div className={`fixed bottom-4 right-4 p-4 bg-blue-500 text-white rounded-lg shadow-lg z-50 max-w-sm ${className}`}>
      <div className="mb-2">
        <h3 className="text-lg font-bold">Install Maroc Guid</h3>
        <p className="text-sm">For the best experience, install our app on your device</p>
      </div>
      
      <div className="space-y-2">
        <div className="p-3 bg-white bg-opacity-10 rounded text-sm">
          <strong>On iOS:</strong> Tap the share icon and select "Add to Home Screen"
        </div>
        
        <div className="p-3 bg-white bg-opacity-10 rounded text-sm">
          <strong>On Android:</strong> Tap the menu button and select "Install App" or "Add to Home Screen"
        </div>
        
        <div className="p-3 bg-white bg-opacity-10 rounded text-sm">
          <strong>On Desktop:</strong> Click the install icon in the address bar
        </div>
      </div>
      
      <div className="mt-4 flex justify-end">
        <button 
          className="px-4 py-2 bg-white text-blue-500 font-semibold rounded hover:bg-blue-50 transition-colors"
          onClick={() => {
            // Hide instructions when clicked
            const element = document.getElementById('install-instructions');
            if (element) {
              element.style.display = 'none';
            }
          }}
        >
          Got it
        </button>
      </div>
    </div>
  );
}
