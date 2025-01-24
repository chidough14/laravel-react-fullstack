import FeatureItem from '@/Components/FeatureItem';
import FeatureUpvoteDownvote from '@/Components/FeatureUpvoteDownvote';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Feature, paginatedData } from '@/types';
import { Head } from '@inertiajs/react';

export default function Show({ feature }: { feature: Feature }) {

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Feature {feature.name}
        </h2>
      }
    >
      <Head title={'Feature' + feature.name} />

      <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 mb-4">
        <div className="p-6 text-gray-900 dark:text-gray-100 flex gap-8">
          <FeatureUpvoteDownvote feature={feature} />

          <div className="flex-1">
            <h2 className="tet-2xl mb-2">{feature.name}</h2>
            <p>{feature.description}</p>

          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
