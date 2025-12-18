import React from 'react';
import { OrderEntry } from '../types';
import { ArrowUpDown } from 'lucide-react';

interface TableProps {
  data: OrderEntry[];
}

export const Table: React.FC<TableProps> = ({ data }) => {
  // Helper to render sort icon
  const SortIcon = () => (
    <ArrowUpDown className="w-3 h-3 ml-1 inline-block text-gray-300 hover:text-gray-500 cursor-pointer" />
  );

  return (
    <div className="min-w-full inline-block align-middle">
        <table className="min-w-full divide-y divide-gray-200 text-xs text-gray-600">
          <thead className="bg-[#f7f8fa] sticky top-0 z-10 shadow-sm">
            <tr>
              <th className="px-3 py-3 text-left font-medium w-12 bg-[#f7f8fa]">序号</th>
              <th className="px-3 py-3 text-left font-medium bg-[#f7f8fa]">订单号 <SortIcon /></th>
              <th className="px-3 py-3 text-left font-medium bg-[#f7f8fa]">派单员</th>
              <th className="px-3 py-3 text-left font-medium bg-[#f7f8fa]">完成时间 <SortIcon /></th>
              <th className="px-3 py-3 text-left font-medium bg-[#f7f8fa]">收款记录时间 <SortIcon /></th>
              <th className="px-3 py-3 text-left font-medium bg-[#f7f8fa]">手机号 <SortIcon /></th>
              <th className="px-3 py-3 text-left font-medium bg-[#f7f8fa]">收款金额 <SortIcon /></th>
              <th className="px-3 py-3 text-left font-medium bg-[#f7f8fa]">收款方式 <SortIcon /></th>
              <th className="px-3 py-3 text-left font-medium bg-[#f7f8fa]">核销券</th>
              <th className="px-3 py-3 text-left font-medium bg-[#f7f8fa]">验券状态</th>
              <th className="px-3 py-3 text-left font-medium bg-[#f7f8fa]">门店名称</th>
              <th className="px-3 py-3 text-left font-medium bg-[#f7f8fa]">验券金额</th>
              <th className="px-3 py-3 text-left font-medium bg-[#f7f8fa]">验券时间</th>
              <th className="px-3 py-3 text-left font-medium bg-[#f7f8fa]">验券失败原因</th>
              <th className="px-3 py-3 text-left font-medium bg-[#f7f8fa]">备注</th>
              <th className="px-3 py-3 text-left font-medium bg-[#f7f8fa]">创建人</th>
              <th className="px-3 py-3 text-left font-medium bg-[#f7f8fa]">来源</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {data.length > 0 ? (
              data.map((row, index) => (
                <tr 
                  key={row.id} 
                  className={`hover:bg-[#d6e4ff] transition-colors ${index % 2 === 1 ? 'bg-[#e6f7ff]' : 'bg-white'}`}
                >
                  <td className="px-3 py-3">{index + 1}</td>
                  <td className="px-3 py-3">{row.orderNo}</td>
                  <td className="px-3 py-3">{row.dispatcher}</td>
                  <td className="px-3 py-3">{row.completionTime}</td>
                  <td className="px-3 py-3">{row.paymentRecordTime}</td>
                  <td className="px-3 py-3">{row.phone}</td>
                  <td className="px-3 py-3">{row.paymentAmount}</td>
                  <td className="px-3 py-3">{row.paymentMethod}</td>
                  <td className="px-3 py-3">{row.coupon}</td>
                  <td className="px-3 py-3">{row.couponStatus}</td>
                  <td className="px-3 py-3">{row.storeName}</td>
                  <td className="px-3 py-3">{row.couponAmount}</td>
                  <td className="px-3 py-3">{row.couponTime}</td>
                  <td className="px-3 py-3">{row.failReason}</td>
                  <td className="px-3 py-3">{row.remark}</td>
                  <td className="px-3 py-3">{row.creator}</td>
                  <td className="px-3 py-3">{row.source}</td>
                </tr>
              ))
            ) : (
                <tr>
                    <td colSpan={17} className="h-96 text-center">
                        <div className="flex flex-col items-center justify-center h-full text-gray-400">
                            <svg className="w-16 h-16 mb-4 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                            </svg>
                            <span>暂无数据</span>
                        </div>
                    </td>
                </tr>
            )}
          </tbody>
        </table>
    </div>
  );
};