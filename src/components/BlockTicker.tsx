import { useEffect } from "react";
import { useBlockStatsStore } from "@/stores/block-stats";
import { Skeleton } from "./ui/skeleton";
import { useConnexTicker } from "@/hooks/use-connex-ticker";
import { useToast } from "@/components/ui/use-toast";
import { formatToLocaleString } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const BlockTicker = () => {
  useConnexTicker();
  const { toast } = useToast();
  const { isLoading, errorMessage, tickerHead, blockInfo, clausesNumbers } =
    useBlockStatsStore();

  useEffect(() => {
    if (errorMessage) {
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    }
  }, [errorMessage]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex gap-2 items-center">
          Block:{" "}
          {isLoading && (
            <Skeleton className="w-[75px] h-[20px] rounded-full bg-black" />
          )}
          {!isLoading && !errorMessage && tickerHead && (
            <>{formatToLocaleString(tickerHead.number)}</>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 sm:flex-row sm:justify-between text-sm">
        <div className="flex gap-2 items-center">
          Clauses:{" "}
          {isLoading && (
            <Skeleton className="w-[30px] h-[16px] rounded-full bg-black" />
          )}
          {!isLoading && !errorMessage && blockInfo && clausesNumbers && (
            <>{clausesNumbers}</>
          )}
        </div>
        <div className="flex gap-2 items-center">
          Transactions:{" "}
          {isLoading && (
            <Skeleton className="w-[30px] h-[16px] rounded-full bg-black" />
          )}
          {!isLoading &&
            !errorMessage &&
            tickerHead &&
            tickerHead.id !== "0" &&
            blockInfo && <>{blockInfo.transactions.length}</>}
        </div>
      </CardContent>
    </Card>
  );
};

export default BlockTicker;
