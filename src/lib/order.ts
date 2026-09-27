export type StoredOrder = {
  id: string;
  name: string;
  email: string;
  city: string;
  total: number;
  items: { name: string; color: string; size: string; qty: number; price: number }[];
};

const ORDER_KEY = "bananabeings.order";

export function saveOrder(order: StoredOrder) {
  sessionStorage.setItem(ORDER_KEY, JSON.stringify(order));
}

export function readOrder(): StoredOrder | null {
  try {
    const raw = sessionStorage.getItem(ORDER_KEY);
    return raw ? (JSON.parse(raw) as StoredOrder) : null;
  } catch {
    return null;
  }
}
