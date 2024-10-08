import { useConnex, useWallet } from "@vechain/dapp-kit-react";
import { useEffect } from "react";
import { useToast } from "../ui/use-toast";
import { X_CONTRACT_ADDRESS } from "@/config";
import XNodeImage from "./XNodeImage";
import { Skeleton } from "../ui/skeleton";
import { useNodeInfoStore } from "@/stores/node-info";
import { useUserInfoStore } from "@/stores/user-info";
import { NftXMetadata } from "@/types/types";

const abiIsX = {
  constant: true,
  inputs: [
    {
      name: "_target",
      type: "address",
    },
  ],
  name: "isX",
  outputs: [
    {
      name: " ",
      type: "bool",
    },
  ],
  payable: false,
  stateMutability: "view",
  type: "function",
};
const abiOwnerToId = {
  constant: true,
  inputs: [{ name: "", type: "address" }],
  name: "ownerToId",
  outputs: [{ name: "tokenId", type: "uint256" }],
  payable: false,
  stateMutability: "view",
  type: "function",
};
const abiGetMetadata = {
  constant: true,
  inputs: [{ name: "_tokenId", type: "uint256" }],
  name: "getMetadata",
  outputs: [
    { name: "owner", type: "address" },
    { name: "level", type: "uint8" },
    { name: "isOnUpgrade", type: "bool" },
    { name: "isOnAuction", type: "bool" },
    { name: "lastTransferTime", type: "uint64" },
    { name: "createdAt", type: "uint64" },
    { name: "updatedAt", type: "uint64" },
  ],
  payable: false,
  stateMutability: "view",
  type: "function",
};

const Xnode = () => {
  const connex = useConnex();
  const { account } = useWallet();
  const { toast } = useToast();
  const {
    xNode,
    metadata,
    isLoading,
    errorMessage,
    setXNode,
    setMetadata,
    setIsLoading,
    setErrorMessage,
  } = useNodeInfoStore();
  const { isLoading: isLoadingUserInfo } = useUserInfoStore();

  const isXFunction = async () => {
    try {
      const {
        decoded: { 0: isX },
      } = await connex.thor
        .account(X_CONTRACT_ADDRESS)
        .method(abiIsX)
        .call(account);
      setXNode(isX);
    } catch (err) {
      if (typeof err === "string") {
        setErrorMessage(err);
      } else if (err instanceof Error) {
        setErrorMessage(err.message);
      }
    }
  };

  const tokenIdByAddress = async () => {
    try {
      const {
        decoded: { 0: tokenId },
      } = await connex.thor
        .account(X_CONTRACT_ADDRESS)
        .method(abiOwnerToId)
        .call(account);
      return tokenId;
    } catch (err) {
      if (typeof err === "string") {
        setErrorMessage(err);
      } else if (err instanceof Error) {
        setErrorMessage(err.message);
      }
    }
  };

  const metaByTokenId = async (
    tokenId: number | null
  ): Promise<NftXMetadata | null> => {
    try {
      const { decoded: metadata } = await connex.thor
        .account(X_CONTRACT_ADDRESS)
        .method(abiGetMetadata)
        .call(tokenId);
      return metadata as NftXMetadata;
    } catch (err) {
      if (typeof err === "string") {
        setErrorMessage(err);
      } else if (err instanceof Error) {
        setErrorMessage(err.message);
      }
      return null;
    }
  };

  useEffect(() => {
    if (!account || !connex) return;
    setIsLoading(true);
    const fetchData = async () => {
      try {
        await isXFunction();
        setMetadata(await metaByTokenId(await tokenIdByAddress()));
      } catch (err) {
        console.error("!");
        if (typeof err === "string") {
          setErrorMessage(err);
        } else if (err instanceof Error) {
          setErrorMessage(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [account, connex]);

  useEffect(() => {
    if (errorMessage) {
      toast({
        variant: "destructive",
        title: "Error!",
        description: errorMessage,
      });
    }
  }, [errorMessage, toast]);

  if (!xNode) {
    return null;
  }

  return (
    <>
      {(isLoading || isLoadingUserInfo) && (
        <Skeleton className="w-[125px] h-[20px] rounded-full bg-secondary" />
      )}
      {!isLoading && !isLoadingUserInfo && account && xNode && metadata && (
        <XNodeImage level={metadata.level} />
      )}
    </>
  );
};

export default Xnode;
