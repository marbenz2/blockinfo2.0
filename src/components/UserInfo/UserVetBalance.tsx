import { formatAmount, formatToLocaleString } from "@/lib/utils";
import { useUserInfoStore } from "@/stores/user-info";
import { Skeleton } from "../ui/skeleton";

const UserVetBalance = () => {
  const { vetBalanceUser, isLoading } = useUserInfoStore();

  return (
    <>
      {isLoading && (
        <Skeleton className="w-[100px] h-[20px] rounded-full bg-black" />
      )}
      {!isLoading && vetBalanceUser && (
        <p className="text-sm">
          {formatToLocaleString(formatAmount(vetBalanceUser))} VET
        </p>
      )}
    </>
  );
};

export default UserVetBalance;
