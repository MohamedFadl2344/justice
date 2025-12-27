import { CommitmentCard } from '../commitmentsection/CommitmentCard';

export const CommitmentSection = () => {
    const commitments = [
        {
            id: 1,
            title: 'خبرة قانونية متميزة',
            description: 'فريق من المحامين المتخصصين في مختلف المجالات القانونية',
        },
        {
            id: 2,
            title: 'سرية تامة',
            description: 'نحافظ على سرية معلومات عملائنا بأعلى معايير الأمان',
        },
        {
            id: 3,
            title: 'نتائج مضمونة',
            description: 'نسعى دائماً لتحقيق أفضل النتائج الممكنة لعملائنا',
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {commitments.map((commitment, index) => (
                <CommitmentCard
                    key={commitment.id}
                    title={commitment.title}
                    description={commitment.description}
                    index={index}
                />
            ))}
        </div>
    );
};
