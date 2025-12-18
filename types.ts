export interface OrderEntry {
  id: number;
  orderNo: string;        // 订单号
  dispatcher: string;     // 派单员
  completionTime: string; // 完成时间
  paymentRecordTime: string; // 收款记录时间
  phone: string;          // 手机号
  paymentAmount: string;  // 收款金额
  paymentMethod: string;  // 收款方式
  coupon: string;         // 核销券
  couponStatus: string;   // 验券状态
  storeName: string;      // 门店名称
  couponAmount: string;   // 验券金额
  couponTime: string;     // 验券时间
  failReason: string;     // 验券失败原因
  remark: string;         // 备注
  creator: string;        // 创建人
  source: string;         // 来源 (新增)
}

export interface PaginationState {
  currentPage: number;
  pageSize: number;
  totalItems: number;
}