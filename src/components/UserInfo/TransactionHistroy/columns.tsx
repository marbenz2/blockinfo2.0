import { formatAmount, formatToLocaleString, formatTxID } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { WalletNameCell } from "./WalletNameCell";
import { InOutCell } from "./InOutCell";
import { SquareArrowOutUpRightIcon } from "lucide-react";

export const columns: ColumnDef<Connex.Thor.Filter.Row<"transfer", object>>[] =
  [
    {
      accessorKey: "meta.txID",
      header: "txID",
      cell: ({ row }) => {
        const txID = row.original.meta.txID;
        const formattedTxID = formatTxID(txID);
        return (
          <div className="text-left overflow-clip">
            <a
              href={`https://explore.vechain.org/transactions/${txID}`}
              target="_blank"
              rel="noreferrer"
              className="flex gap-2 items-center underline decoration-dashed"
              title={txID}
            >
              <SquareArrowOutUpRightIcon size="14px" />
              {formattedTxID as string}
            </a>
          </div>
        );
      },
    },
    {
      accessorKey: "meta.blockTimestamp",
      header: () => <div className="text-center">Date</div>,
      cell: ({ row }) => {
        const blockTimestamp = row.original.meta.blockTimestamp;
        const date = new Date(blockTimestamp * 1000);
        return <div className="text-center">{date.toLocaleString()}</div>;
      },
    },
    {
      accessorKey: "sender",
      header: () => <div className="text-center">In/Out</div>,
      id: "meta.txID" + "clauseIndex" + "recipient",
      cell: ({ row }) => {
        const senderId = row.original.sender;
        return <InOutCell txID={senderId} />;
      },
    },
    {
      accessorKey: "sender",
      header: () => <div className="text-center">Sender</div>,
      cell: ({ row }) => {
        const senderID = row.original.sender;
        return <WalletNameCell txID={senderID} />;
      },
    },
    {
      accessorKey: "recipient",
      header: () => <div className="text-center">Recipient</div>,
      cell: ({ row }) => {
        const recipientID = row.original.recipient;
        return <WalletNameCell txID={recipientID} />;
      },
    },
    {
      accessorKey: "amount",
      header: () => <div className="text-right">Amount</div>,
      cell: ({ row }) => {
        const amount = row.getValue("amount");
        const formatted = formatToLocaleString(formatAmount(amount as string));
        return (
          <div className="flex items-center justify-end gap-1 font-medium">
            {formatted}
            <img
              src="/VET_Token_Icon.webp"
              alt="vet-icon"
              className="w-4 h-4"
            />
          </div>
        );
      },
    },
  ];
