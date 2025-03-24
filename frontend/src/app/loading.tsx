import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';

export default function Loading() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">
        <Link href={'/'}>Home | All Recipes</Link>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({
          length: 10,
        })?.map((_, i) => <Skeleton key={i} className="w-[300px] h-[300px]" />)}
      </div>
    </div>
  );
}
