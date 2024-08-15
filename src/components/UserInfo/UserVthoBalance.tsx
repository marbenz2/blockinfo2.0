import { formatAmount, formatToLocaleString } from "@/lib/utils";
import { useUserInfoStore } from "@/stores/user-info";
import { Skeleton } from "../ui/skeleton";

const UserVthoBalance = () => {
  const { vthoBalanceUser, isLoading } = useUserInfoStore();

  return (
    <>
      {isLoading && (
        <Skeleton className="w-[100px] h-[20px] rounded-full bg-black" />
      )}
      {!isLoading && vthoBalanceUser && (
        <p className="text-sm">
          {formatToLocaleString(formatAmount(vthoBalanceUser))} VTHO
        </p>
      )}
    </>
  );
};

export default UserVthoBalance;
