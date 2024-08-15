import { useUserInfoStore } from "@/stores/user-info";
import { Skeleton } from "../ui/skeleton";
import { DataTable } from "./TransactionHistroy/data-table";
import { columns } from "./TransactionHistroy/columns";

const UserTransactions = () => {
  const { userTx, isLoading } = useUserInfoStore();

  return (
    <>
      {isLoading && (
        <Skeleton className="w-[100px] h-[20px] rounded-full bg-black" />
      )}
      {!isLoading && userTx.length === 0 && <p>No transaction history</p>}
      {!isLoading && userTx.length > 0 && (
        <DataTable columns={columns} data={userTx} />
      )}
    </>
  );
};

export default UserTransactions;
