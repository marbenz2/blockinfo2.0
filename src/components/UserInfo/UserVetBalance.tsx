import { formatAmount, formatToLocaleString } from "@/lib/utils";
import { useUserInfoStore } from "@/stores/user-info";
import { Skeleton } from "../ui/skeleton";

const UserVetBalance = () => {
  const { vetBalanceUser, isLoading } = useUserInfoStore();

  return (
    <>
      {isLoading && (
        <Skeleton className="w-[125px] h-[20px] rounded-full bg-secondary" />
      )}
      {!isLoading && vetBalanceUser && (
        <p className="flex items-center gap-2 text-sm">
          <img src="/VET_Token_Icon.webp" alt="vet-icon" className="w-4 h-4" />
          {formatToLocaleString(formatAmount(vetBalanceUser))}
        </p>
      )}
    </>
  );
};

export default UserVetBalance;
