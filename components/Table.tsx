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
    <div className="bg-white rounded-sm shadow-sm overflow-hidden border border-gray-200 min-h-[500px] flex flex-col">
      <div className="overflow-x-auto flex-1">
        <table className="min-w-full divide-y divide-gray-200 text-xs text-gray-600">
          <thead className="bg-[#f7f8fa]">
            <tr>
              <th className="px-3 py-3 text-left font-medium w-12">序号</th>
              <th className="px-3 py-3 text-left font-medium">订单号 <SortIcon /></th>
              <th className="px-3 py-3 text-left font-medium">派单员</th>
              <th className="px-3 py-3 text-left font-medium">完成时间 <SortIcon /></th>
              <th className="px-3 py-3 text-left font-medium">收款记录时间 <SortIcon /></th>
              <th className="px-3 py-3 text-left font-medium">手机号 <SortIcon /></th>
              <th className="px-3 py-3 text-left font-medium">收款金额 <SortIcon /></th>
              <th className="px-3 py-3 text-left font-medium">收款方式 <SortIcon /></th>
              <th className="px-3 py-3 text-left font-medium">核销券</th>
              <th className="px-3 py-3 text-left font-medium">验券状态</th>
              <th className="px-3 py-3 text-left font-medium">门店名称</th>
              <th className="px-3 py-3 text-left font-medium">验券金额</th>
              <th className="px-3 py-3 text-left font-medium">验券时间</th>
              <th className="px-3 py-3 text-left font-medium">验券失败原因</th>
              <th className="px-3 py-3 text-left font-medium">备注</th>
              <th className="px-3 py-3 text-left font-medium">创建人</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {data.length > 0 ? (
              data.map((row, index) => (
                <tr key={row.id} className="hover:bg-[#f2f8ff] transition-colors">
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
                </tr>
              ))
            ) : (
                <tr>
                    <td colSpan={16} className="h-96 text-center">
                        <div className="flex flex-col items-center justify-center h-full text-gray-400">
                            {/* Simple empty state icon */}
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
      <div className="p-4 border-t border-gray-100 flex items-center gap-4 text-xs font-bold text-gray-700 bg-white">
          <span>收款合计： ￥</span>
          <span>订单总数（已去重）：</span>
      </div>
    </div>
  );
};