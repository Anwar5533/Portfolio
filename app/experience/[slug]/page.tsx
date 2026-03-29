import { notFound } from 'next/navigation';
import ExperienceDetails from './_components/ExperienceDetails';
import { MY_EXPERIENCE } from '@/lib/data';
import { Metadata } from 'next';

export const generateStaticParams = async () => {
    return MY_EXPERIENCE.map((exp) => ({ slug: exp.slug }));
};

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;
    const exp = MY_EXPERIENCE.find((exp) => exp.slug === slug);

    return {
        title: `${exp?.title} - ${exp?.company}`,
        description: `Experience working as ${exp?.title} at ${exp?.company}`,
    } as Metadata;
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    const exp = MY_EXPERIENCE.find((exp) => exp.slug === slug);

    if (!exp) {
        return notFound();
    }

    return <ExperienceDetails exp={exp} />;
};

export default Page;
