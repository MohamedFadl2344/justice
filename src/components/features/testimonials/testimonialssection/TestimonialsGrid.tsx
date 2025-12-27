import { TestimonialCard } from './TestimonialCard';

export const TestimonialsGrid = () => {
    const testimonials = [
        {
            id: 1,
            name: 'محمد أحمد',
            role: 'رجل أعمال',
            content: 'خدمة متميزة واحترافية عالية. ساعدوني في حل قضيتي بكل كفاءة وسرعة. أنصح بالتعامل معهم بشدة.',
            rating: 5,
        },
        {
            id: 2,
            name: 'سارة خالد',
            role: 'مستشارة تسويق',
            content: 'فريق محترف جداً ويتعامل بشفافية كاملة. حصلت على نتائج أفضل مما توقعت في قضيتي.',
            rating: 5,
        },
        {
            id: 3,
            name: 'عبدالله سعيد',
            role: 'مدير شركة',
            content: 'تجربة ممتازة من البداية للنهاية. الفريق متعاون ويقدم استشارات قانونية دقيقة ومفيدة.',
            rating: 5,
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                <TestimonialCard
                    key={testimonial.id}
                    name={testimonial.name}
                    role={testimonial.role}
                    content={testimonial.content}
                    rating={testimonial.rating}
                    avatar={testimonial.name.split(' ').map(n => n[0]).join('.')}
                    index={index}
                />
            ))}
        </div>
    );
};
