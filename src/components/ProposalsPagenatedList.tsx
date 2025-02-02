/**
 * v0 by Vercel.
 * @see https://v0.dev/t/G5YG5bM9kDB
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from './ui/button.tsx';
import { ProposalVoteCard } from './ProposalVoteCard.tsx';
import {
  PaginationPrevious,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
  PaginationContent,
  Pagination,
} from './ui/pagination.tsx';

import { Dialog, DialogContent, DialogTrigger } from './ui/dialog.tsx';
import ProposalForm from './ProposalForm.tsx';

export type Proposal = {
  status: 'draft' | 'rfc' | 'open' | 'closed';
  id: string;
  created: string;
  updated: string;
  title: string;
  summary: string;
  description: string;
  type: 'topic' | 'project';
};

export type VoteListProps = {
  // eslint-disable-next-line react/require-default-props, react/no-unused-prop-types -- TODO
  cursor?: string;
  // eslint-disable-next-line react/require-default-props, react/no-unused-prop-types -- TODO
  limit?: number;
  proposals: Proposal[];
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export default function VoteList(props: VoteListProps) {
  return (
    <div
      key="1"
      className="flex flex-col w-full min-h-screen max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-800"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold dark:text-gray-200">
          Vote on Proposals
        </h2>
        <Dialog modal>
          <DialogTrigger asChild>
            <Button size="sm" variant="outline">
              Add Proposal
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-max min-w-min max-h-[90%] overflow-scroll p-0 mx-0 my-0">
            <ProposalForm />
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-grow flex-shrink-0 flex-col justify-between">
        <div className="space-y-4">
          {props.proposals.map((proposal) => (
            <ProposalVoteCard
              key={proposal.id}
              title={proposal.title}
              description={proposal.summary}
              created={proposal.created}
              author="John Doe"
            />
          ))}
        </div>
        <div className="flex items-center justify-between mt-6">
          <Pagination>
            <PaginationContent>
              {props.hasPreviousPage && (
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              {props.hasNextPage && (
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
