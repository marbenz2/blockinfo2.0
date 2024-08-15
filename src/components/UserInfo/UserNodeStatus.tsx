import { useUserInfoStore } from "@/stores/user-info";
import { BugIcon } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

const UserNodeStatus = () => {
  const { isLoading } = useUserInfoStore();

  return (
    <>
      {isLoading && (
        <Skeleton className="w-[175px] h-[20px] rounded-full bg-secondary" />
      )}
      {!isLoading && (
        <>
          Node Status: VeThor X
          <BugIcon size={24} />
        </>
      )}
    </>
  );
};

export default UserNodeStatus;
