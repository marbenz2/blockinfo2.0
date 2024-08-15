import { useEffect } from "react";
import { useBlockStatsStore } from "@/stores/block-stats";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useTransactionsBlocksStore } from "@/stores/transactions-block";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";
import { useToast } from "./ui/use-toast";
import { copyToClipboard, formatTxID } from "@/lib/utils";
import { CopyIcon, FlameIcon } from "lucide-react";

const TransactionTicker = () => {
  const { toast } = useToast();
  const { isLoading, errorMessage, blockInfo, clausesNumbers } =
    useBlockStatsStore();
  const { transactionsBlock, setTransactionsBlock } =
    useTransactionsBlocksStore();

  const handleCopyClick = (tx: string) => {
    if (transactionsBlock) {
      copyToClipboard(tx);
      toast({
        title: "Copied",
        description: "txID: " + formatTxID(tx) + " copied to clipboard",
        variant: "success",
      });
    }
  };

  useEffect(() => {
    if (blockInfo) {
      const newBlock = {
        transactions: blockInfo.transactions,
        blockNumber: blockInfo.number,
        blockTimeStamp: blockInfo.timestamp,
        blockID: blockInfo.id,
        blockGasUsed: blockInfo.gasUsed,
        clausesNumber: clausesNumbers ?? undefined,
      };
      setTransactionsBlock(newBlock);
    }
  }, [blockInfo]);

  return (
    <>
      {!isLoading &&
        !errorMessage &&
        transactionsBlock &&
        transactionsBlock.map((block) => (
          <Card key={block.blockNumber} className="w-full">
            <CardHeader>
              <CardTitle>
                #
                <a
                  href={`https://explore.vechain.org/blocks/${block.blockID}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {block.blockNumber}
                </a>
              </CardTitle>
              <CardDescription>
                {new Date(block.blockTimeStamp * 1000).toLocaleString()}
              </CardDescription>
            </CardHeader>
            {block.transactions.length === 0 && (
              <CardContent>
                <p className="text-sm text-center text-muted-foreground">
                  - Empty Block -
                </p>
              </CardContent>
            )}
            <CardContent>
              <Table>
                <TableBody>
                  {block.transactions.map((tx) => (
                    <TableRow key={tx}>
                      <TableCell className="flex items-center gap-2">
                        <CopyIcon
                          className="cursor-pointer"
                          size={12}
                          onClick={() => handleCopyClick(tx)}
                        />
                        <a
                          key={tx}
                          href={`https://explore.vechain.org/transactions/${tx}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm truncate decoration-dashed underline decoration-muted-foreground"
                          title={tx}
                        >
                          {tx}
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="justify-between gap-2 text-sm text-muted-foreground">
              <p>Total Txs: {block.transactions.length}</p>
              <p>Total Clauses: {block.clausesNumber}</p>
              <p className="flex items-center gap-1">
                <FlameIcon size={12} />
                {((block.blockGasUsed * 0.7) / 100000).toFixed(2)} VTHO
              </p>
            </CardFooter>
          </Card>
        ))}
    </>
  );
};

export default TransactionTicker;
