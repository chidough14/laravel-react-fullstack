import FeatureItem from '@/Components/FeatureItem';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Feature, paginatedData } from '@/types';
import { Head } from '@inertiajs/react';

export default function Index({ features }: {features: paginatedData<Feature>}) {
  console.log(features)
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      
          {/* <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <pre>
                {
                  features.data.map((feature) => (
                    <>{ feature.name }</>
                  ))
                }
              </pre>
            </div>
          </div> */}
          
        {
          features.data.map((feature) => (
            <FeatureItem feature={feature} />
          ))
        }
    </AuthenticatedLayout>
  );
}
