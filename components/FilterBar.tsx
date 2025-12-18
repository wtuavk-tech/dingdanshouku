import React from 'react';
import { ChevronDown, Clock } from 'lucide-react';

interface FilterBarProps {
    onClose?: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ onClose }) => {
  return (
    <div className="bg-white p-4 rounded-lg border-b border-gray-200 relative mb-4">
      <div className="flex flex-col gap-4 text-sm text-gray-600">
        
        {/* Row 1 */}
        <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
            <label className="whitespace-nowrap w-20 text-right">订单号/手机号</label>
            <input 
                type="text" 
                placeholder="请输入内容" 
                className="border border-gray-300 rounded-md px-3 py-1.5 w-40 focus:outline-none focus:border-blue-500 placeholder-gray-300"
            />
            </div>

            <div className="flex items-center gap-2">
            <label className="whitespace-nowrap">派单员</label>
            <input 
                type="text" 
                placeholder="请输入内容" 
                className="border border-gray-300 rounded-md px-3 py-1.5 w-32 focus:outline-none focus:border-blue-500 placeholder-gray-300"
            />
            </div>

            <div className="flex items-center gap-2">
            <label className="whitespace-nowrap">核销券</label>
            <input 
                type="text" 
                placeholder="请输入内容" 
                className="border border-gray-300 rounded-md px-3 py-1.5 w-32 focus:outline-none focus:border-blue-500 placeholder-gray-300"
            />
            </div>

            <div className="flex items-center gap-2">
            <label className="whitespace-nowrap">收款记录时间</label>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-80">
                <div className="px-2 text-gray-400 border-r border-gray-100 bg-gray-50 h-8 flex items-center">
                    <Clock className="w-4 h-4" />
                </div>
                <input 
                type="text" 
                placeholder="2025-12-17 00:00:00" 
                className="px-2 py-1.5 w-full focus:outline-none placeholder-gray-300 text-center text-xs"
                />
                <span className="text-gray-400 px-1">至</span>
                <input 
                type="text" 
                placeholder="2025-12-17 23:59:59" 
                className="px-2 py-1.5 w-full focus:outline-none placeholder-gray-300 text-center text-xs"
                />
            </div>
            </div>

            <div className="flex items-center gap-2">
            <label className="whitespace-nowrap">收款方式</label>
            <div className="relative">
                <select className="appearance-none border border-gray-300 rounded-md px-3 py-1.5 w-32 bg-white focus:outline-none focus:border-blue-500 text-gray-400 pr-8">
                <option value="">请选择</option>
                <option value="wx">微信支付</option>
                <option value="alipay">支付宝</option>
                </select>
                <ChevronDown className="absolute right-2 top-2.5 w-3 h-3 text-gray-400 pointer-events-none" />
            </div>
            </div>
             <div className="flex items-center gap-2">
            <label className="whitespace-nowrap">派单类型</label>
            <div className="relative">
                <select className="appearance-none border border-gray-300 rounded-md px-3 py-1.5 w-32 bg-white focus:outline-none focus:border-blue-500 text-gray-400 pr-8">
                <option value="">请选择</option>
                </select>
                <ChevronDown className="absolute right-2 top-2.5 w-3 h-3 text-gray-400 pointer-events-none" />
            </div>
            </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap items-center gap-4">
             <div className="flex items-center gap-2">
            <label className="whitespace-nowrap w-20 text-right">验券时间</label>
             <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-64">
                <div className="px-2 text-gray-400 border-r border-gray-100 bg-gray-50 h-8 flex items-center">
                    <Clock className="w-4 h-4" />
                </div>
                <input 
                type="text" 
                placeholder="开始日期" 
                className="px-2 py-1.5 w-full focus:outline-none placeholder-gray-300 text-center text-xs"
                />
                <span className="text-gray-400 px-1">至</span>
                <input 
                type="text" 
                placeholder="结束日期" 
                className="px-2 py-1.5 w-full focus:outline-none placeholder-gray-300 text-center text-xs"
                />
            </div>
            </div>

             <div className="flex items-center gap-2">
            <label className="whitespace-nowrap">验券状态</label>
            <div className="relative">
                <select className="appearance-none border border-gray-300 rounded-md px-3 py-1.5 w-32 bg-white focus:outline-none focus:border-blue-500 text-gray-400 pr-8">
                <option value="">请选择</option>
                </select>
                <ChevronDown className="absolute right-2 top-2.5 w-3 h-3 text-gray-400 pointer-events-none" />
            </div>
            </div>

             {/* Actions */}
            <div className="flex items-center gap-2 ml-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-1.5 rounded-md text-sm transition-colors">
                搜索
            </button>
            <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-600 px-5 py-1.5 rounded-md text-sm transition-colors">
                重置
            </button>
            </div>
        </div>

      </div>
      
      {/* The "Collapse" Tab hanging from the bottom right */}
      {onClose && (
        <div className="absolute -bottom-6 right-4 z-10">
            <div 
                onClick={onClose}
                className="bg-blue-50 text-blue-500 text-xs px-4 py-0.5 rounded-b-lg cursor-pointer flex items-center shadow-sm border border-t-0 border-blue-100 hover:bg-blue-100 transition-colors"
            >
                收起
                <ChevronDown className="w-3 h-3 ml-1 transform rotate-180" />
            </div>
        </div>
      )}
    </div>
  );
};