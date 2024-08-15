import { formatAmount, formatToLocaleString } from "@/lib/utils";
import { useUserInfoStore } from "@/stores/user-info";
import { Skeleton } from "../ui/skeleton";

const UserVthoBalance = () => {
  const { vthoBalanceUser, isLoading } = useUserInfoStore();

  return (
    <>
      {isLoading && (
        <Skeleton className="w-[125px] h-[20px] rounded-full bg-secondary" />
      )}
      {!isLoading && vthoBalanceUser && (
        <p className="flex items-center gap-2 text-sm">
          <img
            src="/VTHO_Token_Icon.webp"
            alt="vtho-icon"
            className="w-4 h-4"
          />
          {formatToLocaleString(formatAmount(vthoBalanceUser))}
        </p>
      )}
    </>
  );
};

export default UserVthoBalance;
