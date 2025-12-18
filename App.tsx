import React, { useState } from 'react';
import { FilterBar } from './components/FilterBar';
import { Table } from './components/Table';
import { Pagination } from './components/Pagination';
import { MOCK_DATA } from './constants';
import { SystemNotice } from './components/SystemNotice';
import { DataOverview } from './components/DataOverview';

const App: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="h-screen bg-[#f0f2f5] p-6 font-sans flex flex-col box-border">
      {/* Top Fixed Area */}
      <div className="flex-shrink-0">
         {/* Scrolling System Notice */}
         <SystemNotice />
        
         {/* Data Overview & Filter Toggle */}
         <DataOverview 
             isFilterVisible={isFilterOpen} 
             onToggleFilter={() => setIsFilterOpen(!isFilterOpen)} 
         />
         
         {/* Filter Section (Conditionally rendered) */}
         {isFilterOpen && (
             <FilterBar onClose={() => setIsFilterOpen(false)} />
         )}
      </div>

      {/* Main Content Area - Flexible height with scrolling */}
      <div className="flex-1 flex flex-col min-h-0 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mt-1">
        
        {/* Scrollable Table Container */}
        <div className="flex-1 overflow-auto custom-scrollbar relative">
           <Table data={MOCK_DATA} />
        </div>

        {/* Fixed Footer Area within the Table Card */}
        <div className="flex-shrink-0 border-t border-gray-100 p-4 bg-white z-20">
            {/* Summary Row */}
            <div className="flex items-center gap-4 text-xs font-bold text-gray-700 mb-2">
                <span>收款合计： ￥2,580.50</span>
                <span>订单总数（已去重）：15</span>
            </div>
            
            {/* Pagination */}
            <Pagination total={2802} pageSize={15} current={1} />
        </div>

      </div>
    </div>
  );
};

export default App;