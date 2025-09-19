import * as RadixDialog from "@radix-ui/react-dialog";
import React, { FC, ReactNode } from "react";
import useDialogStyles from "./Dialog.styles";

type DialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  name?: string;
  description?: string;
  children: ReactNode;
};



export const Dialog: FC<DialogProps> = ({ open, onOpenChange, children }) => {
  const classes = useDialogStyles();

  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className={classes.overlay} />
        <RadixDialog.Content className={classes.content}>
            {children}
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};
