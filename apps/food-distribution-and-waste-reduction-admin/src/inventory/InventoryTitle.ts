import { Inventory as TInventory } from "../api/inventory/Inventory";

export const INVENTORY_TITLE_FIELD = "foodItem";

export const InventoryTitle = (record: TInventory): string => {
  return record.foodItem?.toString() || String(record.id);
};
