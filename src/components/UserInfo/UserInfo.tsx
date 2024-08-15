import { useWallet } from "@vechain/dapp-kit-react";
import { useUserInfoStore } from "@/stores/user-info";
import { useUserInfo } from "@/hooks/use-user-info";
import { useToast } from "../ui/use-toast";
import { useEffect } from "react";
import UserAddress from "./UserAddress";
import UserVetBalance from "./UserVetBalance";
import UserVthoBalance from "./UserVthoBalance";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import UserTransactions from "./UserTransactions";
import Xnode from "./Xnode";

export default function UserInfo() {
  const { account } = useWallet();
  useUserInfo();
  const { toast } = useToast();
  const { errorMessage } = useUserInfoStore();

  useEffect(() => {
    if (errorMessage) {
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    }
  }, [errorMessage]);

  if (account) return <IsUser />;
  return <NoUser />;
}

const IsUser = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          <UserAddress />
        </CardTitle>
        <CardDescription className="flex gap-2 items-center">
          <Xnode />
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <UserVetBalance />
        <UserVthoBalance />
        <UserTransactions />
      </CardContent>
    </Card>
  );
};

const NoUser = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <p className="text-sm">Please Log in for Account Details.</p>
      </CardContent>
    </Card>
  );
};
