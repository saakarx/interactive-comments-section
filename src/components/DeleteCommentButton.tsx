import { Fragment } from 'react';

import { DeleteIcon } from './icons';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog';
import { Button, buttonVariants } from './ui/button';

import { cn } from '@/utils/utils';

const DeleteCommentButton = () => {
  return (
    <Fragment>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant="destructive"
            size="link"
            className="bg-transparent text-red-soft hover:bg-transparent hover:opacity-50"
          >
            <DeleteIcon />
            Delete
          </Button>
        </AlertDialogTrigger>

        <AlertDialogContent className="w-[90%] max-w-[400px] text-blue-grayish p-8 rounded-lg">
          <AlertDialogHeader className="space-y-4">
            <AlertDialogTitle className="text-blue-dark text-2xl font-bold">
              Delete Comment
            </AlertDialogTitle>
            <AlertDialogDescription className="text-base">
              Are you sure you want to delete this comment? This will remove the
              comment and can&apos;t be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              className={cn(
                buttonVariants({
                  variant: 'secondary',
                  className:
                    'uppercase flex-1 h-12 md:text-base tracking-wide rounded-lg hover:bg-opacity-60',
                }),
              )}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className={cn(
                buttonVariants({
                  variant: 'destructive',
                  className:
                    'uppercase flex-1 h-12 md:text-base tracking-wide rounded-lg hover:bg-opacity-60',
                }),
              )}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Fragment>
  );
};

export default DeleteCommentButton;
