import { fetchPost } from '@/server/fetcher';
import { PageProps } from '@/types/page';

interface ArticleDetailsPageParams {
    id: string;
}
export  function generateStaticParams() {

    const articleIds = Array.from({ length: 10 }, (_, index) => index + 1);
    return articleIds.map(id => ({ id: String(id) }));
}

export default async function ArticleDetailsPage({ params: { id } }: PageProps<ArticleDetailsPageParams>) {
    const articles = await fetchPost(Number(id));

    return (
        <div>
            <h2 className="text-xl text-blue-400">{articles.title}</h2>
            <p>{articles.body}</p>
        </div>
    );
}